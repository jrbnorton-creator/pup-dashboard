import { useEffect, useRef } from 'react';

const COUNT = 28;
const CONNECT = 150;

interface Orb {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  a: number;
  pulse: number;
  pulseSpeed: number;
}

export default function Orbs() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const cv = canvasRef.current;
    if (!cv) return;
    const ctx = cv.getContext('2d');
    if (!ctx) return;

    let W = 0;
    let H = 0;
    let animId = 0;

    function resize() {
      W = cv!.width = window.innerWidth;
      H = cv!.height = window.innerHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    const orbs: Orb[] = [];
    for (let i = 0; i < COUNT; i++) {
      orbs.push({
        x: Math.random() * W,
        y: Math.random() * H,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        r: 2 + Math.random() * 3,
        a: 0.2 + Math.random() * 0.4,
        pulse: Math.random() * Math.PI * 2,
        pulseSpeed: 0.008 + Math.random() * 0.012,
      });
    }

    function draw() {
      ctx!.clearRect(0, 0, W, H);

      for (const o of orbs) {
        o.x += o.vx;
        o.y += o.vy;
        o.pulse += o.pulseSpeed;

        if (o.x < -20) o.x = W + 20;
        if (o.x > W + 20) o.x = -20;
        if (o.y < -20) o.y = H + 20;
        if (o.y > H + 20) o.y = -20;
      }

      for (let i = 0; i < orbs.length; i++) {
        for (let j = i + 1; j < orbs.length; j++) {
          const dx = orbs[i].x - orbs[j].x;
          const dy = orbs[i].y - orbs[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < CONNECT) {
            const fade = 1 - d / CONNECT;
            ctx!.beginPath();
            ctx!.moveTo(orbs[i].x, orbs[i].y);
            ctx!.lineTo(orbs[j].x, orbs[j].y);
            ctx!.strokeStyle = `rgba(255,255,255,${fade * 0.08})`;
            ctx!.lineWidth = 0.5;
            ctx!.stroke();
          }
        }
      }

      for (const o of orbs) {
        const glow = o.a + Math.sin(o.pulse) * 0.12;

        const g = ctx!.createRadialGradient(o.x, o.y, 0, o.x, o.y, o.r * 5);
        g.addColorStop(0, `rgba(255,255,255,${glow * 0.5})`);
        g.addColorStop(0.4, `rgba(180,200,255,${glow * 0.15})`);
        g.addColorStop(1, 'rgba(255,255,255,0)');
        ctx!.beginPath();
        ctx!.arc(o.x, o.y, o.r * 5, 0, Math.PI * 2);
        ctx!.fillStyle = g;
        ctx!.fill();

        ctx!.beginPath();
        ctx!.arc(o.x, o.y, o.r, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(255,255,255,${glow})`;
        ctx!.fill();
      }

      animId = requestAnimationFrame(draw);
    }

    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ zIndex: 2 }}
    />
  );
}
