# Patterns

Soluções concretas e recorrentes adotadas pelo time.
Sempre que for criar algo novo, verifique aqui antes de inventar uma solução.

---

## 1. Estrutura de Feature

Toda feature deve seguir esta estrutura de arquivos co-localizados:

```
src/modules/my-feature/
├── index.ts                      # re-exporta tudo que é público
├── my-feature.tsx                # componente de renderização
├── use-my-feature.ts             # lógica, estado e efeitos
├── my-feature.types.ts           # interfaces e tipos
├── my-feature.styles.ts          # styled-components
└── my-feature.schema.ts          # Zod schema (apenas se tiver form)
```

Controllers ficam **fora** do módulo, em pasta própria:

```
src/controllers/my-feature/
└── my-feature.controller.ts
```

### `index.ts` — só exporta o que é público

```ts
export { MyFeature } from "./my-feature";
export type { MyFeatureProps } from "./my-feature.types";
```

### `my-feature.types.ts`

```ts
export interface MyFeatureProps {
  id: string;
  onSuccess: () => void;
}

export interface MyFeatureItem {
  id: string;
  name: string;
  createdAt: string;
}
```

### `my-feature.tsx` — só renderização, sem lógica

```tsx
import { useMyFeature } from "./use-my-feature";
import { MyFeatureContainer } from "./my-feature.styles";
import type { MyFeatureProps } from "./my-feature.types";

export function MyFeature() {
  const { items, isLoading } = useMyFeature();

  if (isLoading) return <span>Carregando...</span>;

  return (
    <MyFeatureContainer>
      {items.map((item) => (
        <p key={item.id}>{item.name}</p>
      ))}
    </MyFeatureContainer>
  );
}
```

---

## 2. Padrão de Hook (`use-*.ts`)

O hook é responsável por toda a lógica: estado, queries, mutations e handlers.
Ordem obrigatória: hooks primeiro → estado derivado → return.

```ts
// src/modules/my-feature/use-my-feature.ts
import { useMyFeatureQuery } from "@/controllers/my-feature/my-feature.controller";

export function useMyFeature() {
  // 1. hooks
  const { data, isLoading } = useMyFeatureQuery(id);

  // 2. estado derivado (inline, nunca useEffect)
  const items = data?.items ?? [];
  const isEmpty = items.length === 0;

  // 3. handlers
  const handleSubmit = useCallback(() => {
    onSuccess();
  }, [onSuccess]);

  // 4. return
  return { items, isEmpty, isLoading, handleSubmit };
}
```

---

## 3. Padrão de Controller + React Query

Controllers ficam em `src/controllers/feature/feature.controller.ts`.
Responsabilidade exclusiva: chamadas de API com axios.

### Convenção de nomenclatura

O nome da função deve iniciar pelo método HTTP usado:

| Método axios                | Prefixo da função |
| --------------------------- | ----------------- |
| `api.get()`                 | `get`             |
| `api.post()`                | `create`          |
| `api.put()` / `api.patch()` | `update`          |
| `api.delete()`              | `delete`          |

### `src/controllers/my-feature/my-feature.controller.ts`

```ts
import { api } from "../../service/api";
import type { MyFeatureItem } from "@/modules/my-feature/my-feature.types";

// GET
export const getMyFeatureItems = async (
  id: string,
): Promise<MyFeatureItem[]> => {
  const response = await api.get(`/my-feature/${id}/items`);
  return response.data;
};

// POST
export const createMyFeatureItem = async (
  payload: Pick<MyFeatureItem, "name">,
): Promise<MyFeatureItem> => {
  const response = await api.post("/my-feature/items", payload);
  return response.data;
};

// PUT
export const updateMyFeatureItem = async (
  id: string,
  payload: Partial<MyFeatureItem>,
): Promise<MyFeatureItem> => {
  const response = await api.put(`/my-feature/items/${id}`, payload);
  return response.data;
};

// DELETE
export const deleteMyFeatureItem = async (id: string): Promise<void> => {
  await api.delete(`/my-feature/items/${id}`);
};
```

```ts
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  getMyFeatureItems,
  createMyFeatureItem,
} from "./my-feature.controller";

const MY_FEATURE_KEY = (id: string) => ["my-feature", id] as const;

export function useMyFeatureQuery(id: string) {
  return useQuery({
    queryKey: MY_FEATURE_KEY(id),
    queryFn: () => getMyFeatureItems(id),
  });
}

export function useCreateMyFeatureItem(id: string) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createMyFeatureItem,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: MY_FEATURE_KEY(id) });
    },
  });
}
```

---

## 4. Padrão de Form (Zod + React Hook Form)

### `my-feature.schema.ts`

```ts
import { z } from "zod";

export const MyFeatureSchema = z.object({
  name: z.string().min(1, "Nome é obrigatório").max(100),
  email: z.string().email("E-mail inválido"),
});

export type MyFeatureFormData = z.infer<typeof MyFeatureSchema>;
```

### Hook do form em `use-my-feature-form.ts`

```ts
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { MyFeatureSchema, type MyFeatureFormData } from "./my-feature.schema";
import { useCreateMyFeatureItem } from "@/controllers/my-feature/my-feature.controller";

export function useMyFeatureForm(id: string) {
  const { mutateAsync, isPending } = useCreateMyFeatureItem(id);

  const methods = useForm<MyFeatureFormData>({
    resolver: zodResolver(MyFeatureSchema),
    defaultValues: { name: "", email: "" },
  });

  async function handleSubmit(data: MyFeatureFormData) {
    try {
      await mutateAsync(data);
      methods.reset();
    } catch {
      // erros tratados pelo ErrorBoundary ou notificação
    }
  }

  return { methods, handleSubmit, isPending };
}
```

### Componente do form

```tsx
export function MyFeatureForm({ id }: { id: string }) {
  const { methods, handleSubmit, isPending } = useMyFeatureForm(id);
  const {
    register,
    formState: { errors },
  } = methods;

  return (
    <form onSubmit={methods.handleSubmit(handleSubmit)} noValidate>
      <Input {...register("name")} label="Nome" error={errors.name?.message} />
      <Input
        {...register("email")}
        type="email"
        label="E-mail"
        error={errors.email?.message}
      />
      <Button type="submit" disabled={isPending}>
        {isPending ? "Salvando..." : "Salvar"}
      </Button>
    </form>
  );
}
```

---

## 5. Padrão de Estado Global (Zustand)

Stores Zustand ficam em `src/store/`. Uma store por domínio.

```ts
// src/store/use-auth-store.ts
import { create } from "zustand";

interface AuthState {
  token: string | null;
  setToken: (token: string) => void;
  clearToken: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  token: null,
  setToken: (token) => set({ token }),
  clearToken: () => set({ token: null }),
}));
```

> Nunca misture server state (React Query) com client state (Zustand).
> Zustand é para estado de UI e sessão — não para cache de API.

---

## 6. Padrão de Rotas (React Router v6)

As rotas ficam em `src/app/routes/` com dois arquivos:

```
src/app/routes/
├── routes.tsx             # componente de roteamento
└── routes.constants.ts    # paths e array de rotas
```

### `routes.constants.ts` — paths e definição das rotas

```ts
import { Dashboard } from "@/modules/dashboard";
import { Home } from "@/modules/home";

export const ROOT_PATH = "/dashboard";
export const HOME_PATH = "/home";
export const DASHBOARD_PATH = "/dashboard";

export const PUBLIC_ROUTES = [
  {
    path: ROOT_PATH,
    key: "dashboard",
    element: Dashboard,
  },
  {
    path: HOME_PATH,
    key: "home",
    element: Home,
  },
];
```

### `routes.tsx` — componente de roteamento

```tsx
import {
  BrowserRouter,
  Routes as RoutesComponent,
  Route,
  Navigate,
} from "react-router-dom";
import { PageGuard } from "@/components/layout/page-guards/page-guards";
import { PUBLIC_ROUTES, ROOT_PATH } from "./routes.constants";

export function Routes() {
  return (
    <BrowserRouter>
      <RoutesComponent>
        <Route element={<PageGuard />}>
          {PUBLIC_ROUTES.map((route) => (
            <Route
              key={route.key}
              path={route.path}
              element={<route.element />}
            />
          ))}
        </Route>
        <Route path="*" element={<Navigate to={ROOT_PATH} replace />} />
      </RoutesComponent>
    </BrowserRouter>
  );
}
```

---

## 7. Padrão de PageGuard + ErrorBoundary

O `PageGuard` fica em `src/components/layout/page-guards/page-guards.tsx`.
É o ponto central para proteger rotas e aplicar o `ErrorBoundary` globalmente.

```tsx
// src/components/layout/page-guards/page-guards.tsx
import { Outlet } from "react-router-dom";
import { ErrorBoundary } from "@/components/error-boundary";

export function PageGuard() {
  // Adicione aqui lógica de autenticação, permissão, etc.
  // Exemplo: const { token } = useAuthStore(); if (!token) return <Navigate to="/login" />;

  return (
    <ErrorBoundary>
      <Outlet />
    </ErrorBoundary>
  );
}
```

### `error-boundary.tsx`

```tsx
// src/components/error-boundary/error-boundary.tsx
import { Component } from "react";
import type { ReactNode } from "react";

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  message: string;
}

export class ErrorBoundary extends Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  state: ErrorBoundaryState = { hasError: false, message: "" };

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, message: error.message };
  }

  componentDidCatch(error: Error) {
    // substituir por seu logger (ex: Sentry)
    console.error("[ErrorBoundary]", error);
  }

  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback ?? (
          <p role="alert">Algo deu errado. Tente novamente.</p>
        )
      );
    }
    return this.props.children;
  }
}
```

> O `ErrorBoundary` é aplicado uma vez no `PageGuard`, cobrindo automaticamente todas as rotas filhas. Não é necessário envolver cada página individualmente.
