import { Canvas, useFrame } from "@react-three/fiber";
import { Text } from "@react-three/drei";
import { useMemo, useRef } from "react";
import * as THREE from "three";

interface FaceData {
  center: THREE.Vector3;
  quaternion: THREE.Quaternion;
  number: number;
}

function D20Mesh() {
  const groupRef = useRef<THREE.Group>(null!);

  useFrame(() => {
    groupRef.current.rotation.x += 0.01;
    groupRef.current.rotation.y += 0.01;
  });

  const faceData = useMemo<FaceData[]>(() => {
    const geo = new THREE.IcosahedronGeometry(2, 0);
    const pos = geo.attributes.position;
    const index = geo.index;
    const faces: FaceData[] = [];

    const faceCount = index ? index.count / 3 : pos.count / 3;

    for (let i = 0; i < faceCount; i++) {
      const a = index ? index.getX(i * 3) : i * 3;
      const b = index ? index.getX(i * 3 + 1) : i * 3 + 1;
      const c = index ? index.getX(i * 3 + 2) : i * 3 + 2;

      const vA = new THREE.Vector3().fromBufferAttribute(pos, a);
      const vB = new THREE.Vector3().fromBufferAttribute(pos, b);
      const vC = new THREE.Vector3().fromBufferAttribute(pos, c);

      const center = new THREE.Vector3()
        .add(vA)
        .add(vB)
        .add(vC)
        .divideScalar(3)
        .multiplyScalar(1.05);

      const edge1 = new THREE.Vector3().subVectors(vB, vA);
      const edge2 = new THREE.Vector3().subVectors(vC, vA);
      const normal = new THREE.Vector3().crossVectors(edge1, edge2).normalize();

      const quaternion = new THREE.Quaternion().setFromUnitVectors(
        new THREE.Vector3(0, 0, 1),
        normal,
      );

      faces.push({ center, quaternion, number: i + 1 });
    }

    geo.dispose();
    return faces;
  }, []);

  return (
    <group ref={groupRef}>
      <mesh>
        <icosahedronGeometry args={[2, 0]} />
        <meshStandardMaterial color="#22c55e" metalness={0.1} roughness={0} />
      </mesh>
      {faceData.map(({ center, quaternion, number }) => (
        <Text
          key={number}
          position={[center.x, center.y, center.z]}
          quaternion={quaternion}
          fontSize={0.5}
          color="white"
          anchorX="center"
          anchorY="middle"
          outlineWidth={0.02}
          outlineColor="#000000"
        >
          {number.toString()}
        </Text>
      ))}
    </group>
  );
}

export function Loading3D() {
  return (
    <Canvas style={{ height: "300px" }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} />
      <D20Mesh />
    </Canvas>
  );
}
