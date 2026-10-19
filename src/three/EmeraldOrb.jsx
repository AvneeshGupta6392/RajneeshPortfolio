import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import FloatingLeaves from "./FloatingLeaves.jsx";
const gold = <meshStandardMaterial color="#D4B36A" metalness={1} roughness={0.18} />;
export default function EmeraldOrb({ light, leaves }) {
  const g = useRef(), a = useRef(), b = useRef(), c = useRef();
  useFrame(({ pointer }, dt) => {
    g.current.rotation.y = THREE.MathUtils.lerp(g.current.rotation.y, pointer.x * 0.5, 0.05);
    g.current.rotation.x = THREE.MathUtils.lerp(g.current.rotation.x, -pointer.y * 0.3, 0.05);
    a.current.rotation.z += dt * 0.3; b.current.rotation.x += dt * 0.25; c.current.rotation.y += dt * 0.2;
  });
  return (
    <group ref={g}>
      <mesh><sphereGeometry args={[1.35, light ? 32 : 64, light ? 32 : 64]} />
        <meshPhysicalMaterial color="#0B4434" roughness={0.08} clearcoat={1} transmission={light ? 0 : 0.55} thickness={1.2} ior={1.5} /></mesh>
      <mesh><sphereGeometry args={[0.42, 24, 24]} /><meshStandardMaterial color="#E8D8AA" emissive="#D4B36A" emissiveIntensity={0.5} metalness={1} roughness={0.2} /></mesh>
      <mesh ref={a} rotation={[1.2, 0, 0]}><torusGeometry args={[1.9, 0.025, 12, 128]} />{gold}</mesh>
      <mesh ref={b} rotation={[0, 0.6, 1]}><torusGeometry args={[2.2, 0.018, 12, 128]} />{gold}</mesh>
      <mesh ref={c} rotation={[0.4, 0, 0.3]}><torusGeometry args={[2.55, 0.012, 12, 128]} />{gold}</mesh>
      <FloatingLeaves count={leaves} />
    </group>
  );
}
