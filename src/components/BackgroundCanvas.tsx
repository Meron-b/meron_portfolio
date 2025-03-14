"use client";

import { useEffect, useRef } from "react";

export default function BackgroundCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Make canvas size match the container size with device pixel ratio
    const resize = () => {
      const container = canvas.parentElement;
      if (!container) return;

      const { width, height } = container.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.scale(dpr, dpr);
    };

    window.addEventListener("resize", resize);
    resize();

    // Create gradient animation
    let gradientOffset = 0;
    const animate = () => {
      const container = canvas.parentElement;
      if (!container) return;

      const { width, height } = container.getBoundingClientRect();

      // Create gradient
      gradientOffset += 0.001;
      if (gradientOffset > 1) gradientOffset = 0;

      const gradient = ctx.createLinearGradient(0, 0, width, height);
      gradient.addColorStop(0, "#243332");
      gradient.addColorStop(0.25 + Math.sin(gradientOffset) * 0.05, "#2a473d");
      gradient.addColorStop(0.5 + Math.sin(gradientOffset * 2) * 0.05, "#325a44");
      gradient.addColorStop(0.8 + Math.cos(gradientOffset) * 0.05, "#2a473d");
      gradient.addColorStop(1, "#243332");

      // Draw gradient
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      requestAnimationFrame(animate);
    };

    const animationFrame = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="relative w-full h-full">
        <canvas
          ref={canvasRef}
          className="w-full h-full"
          aria-hidden="true"
        />
      </div>
    </div>
  );
}
