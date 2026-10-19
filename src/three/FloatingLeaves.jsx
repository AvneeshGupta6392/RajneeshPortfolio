import { useMemo } from "react";
import { Float } from "@react-three/drei";
import * as THREE from "three";
export default function FloatingLeaves({ count = 16 }) {
  const geo = useMemo(() => {
    const s = new THREE.Shape(); s.moveTo(0, -1);
    s.bezierCurveTo(0.9, -0.5, 0.8, 0.5, 0, 1); s.bezierCurveTo(-0.8, 0.5, -0.9, -0.5, 0, -1);
    return new THREE.ExtrudeGeometry(s, { depth: 0.04, bevelEnabled: true, bevelSize: 0.03, bevelThickness: 0.03, curveSegments: 16 });
  }, []);
  const leaves = useMemo(() => Array.from({ length: count }, (_, i) => {
    const a = (i / count) * Math.PI * 2, r = 2.3 + (i % 3) * 0.5;
    return { p: [Math.cos(a) * r, Math.sin(i * 1.7) * 1.6, Math.sin(a) * r * 0.6 - 0.5], rot: [i, i * 0.7, i * 1.3], s: 0.22 + (i % 4) * 0.07, gold: i % 5 === 0 };
  }), [count]);
  return leaves.map((l, i) => (
    <Float key={i} speed={1 + (i % 5) * 0.3} rotationIntensity={1.3} floatIntensity={1.5}>
      <mesh geometry={geo} position={l.p} rotation={l.rot} scale={l.s}>
        <meshStandardMaterial color={l.gold ? "#D4B36A" : "#527C53"} metalness={l.gold ? 0.9 : 0.15} roughness={l.gold ? 0.25 : 0.5} side={THREE.DoubleSide} />
      </mesh>
    </Float>
  ));
}
