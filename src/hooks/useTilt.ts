import { useRef } from "react";

/**
 * Returns a ref for a `.tilt-card` element and pointer handlers that
 * rotate it in 3D based on cursor position, producing a subtle
 * card-tilt effect. Resets smoothly on pointer leave.
 */
export function useTilt<T extends HTMLElement>(strength = 10) {
  const ref = useRef<T | null>(null);

  const onMouseMove = (e: React.MouseEvent<T>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `rotateY(${x * strength}deg) rotateX(${-y * strength}deg) translateZ(0)`;
  };

  const onMouseLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "rotateY(0deg) rotateX(0deg) translateZ(0)";
  };

  return { ref, onMouseMove, onMouseLeave };
}
