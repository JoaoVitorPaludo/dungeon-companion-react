import { z } from 'zod'

const envSchema = z.object({
  NODE_ENV: z
    .enum(['development', 'production', 'test'])
    .default('development'),
})

const rawEnv = {
  NODE_ENV: import.meta.env.MODE,
}

export const env = envSchema.parse(rawEnv)
