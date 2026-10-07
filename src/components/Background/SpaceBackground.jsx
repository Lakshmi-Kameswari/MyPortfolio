import React, { useEffect, useRef } from 'react';
import './SpaceBackground.css';

export default function SpaceBackground() {
  const canvasRef = useRef(null);
  const cursorRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let isTabVisible = true;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    // Generate stars
    const starCount = Math.min(Math.floor((width * height) / 12000), 120);
    const stars = Array.from({ length: starCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 1.6 + 0.4,
      baseAlpha: Math.random() * 0.5 + 0.25,
      twinkleSpeed: Math.random() * 0.02 + 0.006,
      twinklePhase: Math.random() * Math.PI * 2,
      speedX: (Math.random() - 0.5) * 0.12,
      speedY: (Math.random() - 0.5) * 0.12,
      color: Math.random() > 0.65 ? '#ff78b4' : Math.random() > 0.35 ? '#bf9aff' : '#f8f4f7'
    }));

    // Occasional shooting comet
    let comet = null;
    let nextCometTime = Date.now() + 4000;

    const spawnComet = () => {
      const startX = Math.random() * (width * 0.7);
      const startY = Math.random() * (height * 0.35);
      const length = Math.random() * 120 + 90;
      const speed = Math.random() * 6 + 7;
      const angle = (Math.PI / 180) * (30 + Math.random() * 20); // Downward right angle

      comet = {
        x: startX,
        y: startY,
        length,
        speed,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        alpha: 1,
        life: 0,
        maxLife: 45
      };
      nextCometTime = Date.now() + Math.random() * 9000 + 7000;
    };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e) => {
      // Gentle normalized cursor drift (-1 to 1)
      cursorRef.current.targetX = (e.clientX / width - 0.5) * 35;
      cursorRef.current.targetY = (e.clientY / height - 0.5) * 35;
    };

    const handleVisibilityChange = () => {
      isTabVisible = !document.hidden;
    };

    window.addEventListener('resize', handleResize, { passive: true });
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('visibilitychange', handleVisibilityChange);

    const render = () => {
      if (!isTabVisible) {
        animationFrameId = requestAnimationFrame(render);
        return;
      }

      ctx.clearRect(0, 0, width, height);

      // Smooth cursor parallax interpolation
      cursorRef.current.x += (cursorRef.current.targetX - cursorRef.current.x) * 0.05;
      cursorRef.current.y += (cursorRef.current.targetY - cursorRef.current.y) * 0.05;
      const offsetX = cursorRef.current.x;
      const offsetY = cursorRef.current.y;

      // Draw and update stars
      for (let i = 0; i < stars.length; i++) {
        const star = stars[i];
        star.twinklePhase += star.twinkleSpeed;
        const currentAlpha = Math.max(0.1, star.baseAlpha + Math.sin(star.twinklePhase) * 0.25);

        star.x += star.speedX;
        star.y += star.speedY;

        if (star.x < 0) star.x = width;
        if (star.x > width) star.x = 0;
        if (star.y < 0) star.y = height;
        if (star.y > height) star.y = 0;

        const posX = star.x + offsetX * (star.size * 0.4);
        const posY = star.y + offsetY * (star.size * 0.4);

        ctx.fillStyle = star.color;
        ctx.globalAlpha = currentAlpha;
        ctx.beginPath();
        ctx.arc(posX, posY, star.size, 0, Math.PI * 2);
        ctx.fill();
      }

      // Check and draw comet
      const now = Date.now();
      if (!comet && now > nextCometTime) {
        spawnComet();
      }

      if (comet) {
        comet.x += comet.vx;
        comet.y += comet.vy;
        comet.life++;
        const fadeProgress = comet.life / comet.maxLife;
        comet.alpha = Math.max(0, 1 - fadeProgress);

        if (comet.alpha <= 0 || comet.life >= comet.maxLife) {
          comet = null;
        } else {
          ctx.save();
          ctx.globalAlpha = comet.alpha;
          const tailX = comet.x - (comet.vx / comet.speed) * comet.length;
          const tailY = comet.y - (comet.vy / comet.speed) * comet.length;

          const gradient = ctx.createLinearGradient(tailX, tailY, comet.x, comet.y);
          gradient.addColorStop(0, 'rgba(255, 120, 180, 0)');
          gradient.addColorStop(0.7, 'rgba(217, 92, 154, 0.4)');
          gradient.addColorStop(1, 'rgba(255, 255, 255, 0.95)');

          ctx.strokeStyle = gradient;
          ctx.lineWidth = 1.8;
          ctx.beginPath();
          ctx.moveTo(tailX, tailY);
          ctx.lineTo(comet.x, comet.y);
          ctx.stroke();

          // Comet head glow
          ctx.fillStyle = '#ffffff';
          ctx.shadowColor = '#ff78b4';
          ctx.shadowBlur = 8;
          ctx.beginPath();
          ctx.arc(comet.x, comet.y, 1.4, 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();
        }
      }

      ctx.globalAlpha = 1;
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  return (
    <div className="space-background-container" aria-hidden="true">
      <canvas ref={canvasRef} className="cosmic-canvas" />
      <div className="nebula-glow nebula-1 animate-cloud-drift-1" />
      <div className="nebula-glow nebula-2 animate-cloud-drift-2" />
      <div className="nebula-glow nebula-3" />
    </div>
  );
}
