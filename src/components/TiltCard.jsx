import { useRef } from "react";

export function TiltCard({ children, className = "", intensity = 12 }) {
  const ref = useRef(null);

  const handleMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `perspective(1000px) rotateY(${x * intensity}deg) rotateX(${-y * intensity}deg) scale(1.02)`;
    el.style.setProperty("--mx", `${(x + 0.5) * 100}%`);
    el.style.setProperty("--my", `${(y + 0.5) * 100}%`);
  };

  const handleLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "perspective(1000px) rotateY(0) rotateX(0) scale(1)";
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={`tilt-card relative overflow-hidden ${className}`}
      style={{
        background:
          "radial-gradient(600px circle at var(--mx, 50%) var(--my, 50%), oklch(0.82 0.2 165 / 0.15), transparent 40%), var(--card)",
      }}
    >
      <div className="tilt-inner h-full">{children}</div>
    </div>
  );
}
