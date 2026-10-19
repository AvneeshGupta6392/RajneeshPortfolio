import { Canvas } from "@react-three/fiber";
import { Environment, Lightformer, Sparkles } from "@react-three/drei";
import EmeraldOrb from "./EmeraldOrb.jsx";
let glOk;
const hasGL = () => {
  if (glOk !== undefined) return glOk;
  try { const c = document.createElement("canvas"); const g = c.getContext("webgl2") || c.getContext("webgl"); glOk = !!g; g?.getExtension("WEBGL_lose_context")?.loseContext(); } catch { glOk = false; }
  return glOk;
};
export default function BotanicalScene({ compact = false }) {
  const mobile = window.matchMedia("(max-width:768px)").matches;
  const still = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!hasGL()) return <div className="gl-fallback" aria-hidden="true" />;
  return (
    <Canvas aria-hidden="true" camera={{ position: [0, 0, compact ? 8 : 7], fov: 45 }} dpr={mobile ? 1 : [1, 1.75]} frameloop={still ? "demand" : "always"}>
      <ambientLight intensity={0.4} color="#B8C7A5" />
      <directionalLight position={[4, 5, 5]} intensity={2.2} color="#F5F0E5" />
      <pointLight position={[-4, -2, 3]} intensity={30} color="#D4B36A" />
      <Environment resolution={128}>
        <Lightformer form="rect" intensity={3} position={[0, 5, -5]} scale={[10, 3, 1]} color="#F5F0E5" />
        <Lightformer form="rect" intensity={2} position={[-5, 0, 2]} scale={[2, 8, 1]} color="#D4B36A" />
      </Environment>
      <EmeraldOrb light={mobile} leaves={mobile || compact ? 8 : 16} />
      <Sparkles count={mobile ? 25 : 70} scale={[9, 6, 5]} size={3} speed={0.4} color="#E8D8AA" />
    </Canvas>
  );
}
