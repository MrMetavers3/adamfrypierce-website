// Aurora physics:
// - All streaks are rooted at a horizon band (~28vh from top)
// - transformOrigin: bottom — tips wave, base stays anchored
// - Three streak types: slow curtains, fast pulses, shooting flares
// - Lateral wave propagation via translateX
// - Variable heights create depth (short wispy vs tall shooting)

const BASE_TOP = 28 // vh — where aurora horizon sits

const curtains = [
  // Slow, wide, sweeping — the backdrop
  { left: '-2%',  w: 380, h: 520, c1: 'rgba(0,255,100,0.35)',  blur: 70, dur: 22, delay: 0,   rot: -4,  skew: 2  },
  { left: '20%',  w: 450, h: 480, c1: 'rgba(0,245,255,0.28)',  blur: 80, dur: 26, delay: 3,   rot: 3,   skew: -3 },
  { left: '50%',  w: 420, h: 510, c1: 'rgba(0,255,140,0.32)',  blur: 75, dur: 24, delay: 1.5, rot: -2,  skew: 1  },
  { left: '75%',  w: 360, h: 490, c1: 'rgba(80,60,255,0.3)',   blur: 85, dur: 28, delay: 4,   rot: 5,   skew: -2 },
]

const rays = [
  // Medium speed rays — the main visible curtain
  { left: '3%',   w: 120, h: 680, c1: 'rgba(0,255,110,0.65)',  blur: 28, dur: 11, delay: 0,    rot: -7,  skew: 3  },
  { left: '12%',  w: 80,  h: 820, c1: 'rgba(60,255,150,0.72)', blur: 18, dur: 9,  delay: 1.2,  rot: 2,   skew: -4 },
  { left: '21%',  w: 160, h: 600, c1: 'rgba(0,245,255,0.55)',  blur: 38, dur: 13, delay: 0.4,  rot: 5,   skew: 2  },
  { left: '30%',  w: 90,  h: 900, c1: 'rgba(40,255,130,0.78)', blur: 22, dur: 8,  delay: 2.1,  rot: -3,  skew: -2 },
  { left: '39%',  w: 140, h: 720, c1: 'rgba(0,255,180,0.6)',   blur: 32, dur: 14, delay: 0.8,  rot: 8,   skew: 5  },
  { left: '47%',  w: 100, h: 1000,c1: 'rgba(80,255,160,0.75)', blur: 20, dur: 10, delay: 3.3,  rot: -1,  skew: -3 },
  { left: '55%',  w: 170, h: 650, c1: 'rgba(0,230,255,0.58)',  blur: 35, dur: 12, delay: 1.6,  rot: 4,   skew: 4  },
  { left: '63%',  w: 95,  h: 880, c1: 'rgba(50,255,140,0.7)',  blur: 24, dur: 9,  delay: 0.5,  rot: -6,  skew: -1 },
  { left: '71%',  w: 130, h: 760, c1: 'rgba(100,80,255,0.52)', blur: 42, dur: 15, delay: 2.7,  rot: 3,   skew: 3  },
  { left: '80%',  w: 85,  h: 920, c1: 'rgba(0,255,120,0.68)',  blur: 19, dur: 11, delay: 1,    rot: -5,  skew: -5 },
  { left: '88%',  w: 150, h: 700, c1: 'rgba(60,100,255,0.48)', blur: 45, dur: 16, delay: 3.8,  rot: 7,   skew: 2  },
  { left: '95%',  w: 100, h: 840, c1: 'rgba(0,255,100,0.65)',  blur: 25, dur: 10, delay: 0.9,  rot: -3,  skew: -3 },
]

const flares = [
  // Fast, narrow, bright — the shooting flares
  { left: '8%',   w: 40,  h: 400, c1: 'rgba(180,255,210,0.9)', blur: 12, dur: 4,  delay: 0,   rot: -5 },
  { left: '26%',  w: 35,  h: 500, c1: 'rgba(140,255,180,0.95)',blur: 10, dur: 3,  delay: 1.5, rot: 3  },
  { left: '44%',  w: 50,  h: 350, c1: 'rgba(255,255,220,0.85)',blur: 14, dur: 5,  delay: 0.7, rot: -2 },
  { left: '62%',  w: 38,  h: 460, c1: 'rgba(120,255,200,0.9)', blur: 11, dur: 3.5,delay: 2.2, rot: 6  },
  { left: '79%',  w: 45,  h: 420, c1: 'rgba(160,200,255,0.88)',blur: 13, dur: 4.5,delay: 0.3, rot: -4 },
]

function buildKeyframes(i: number, rot: number, skew: number, type: 'curtain' | 'ray' | 'flare') {
  if (type === 'flare') {
    return `
      @keyframes flare${i} {
        0%   { transform: rotate(${rot}deg) scaleY(0.3) scaleX(0.8); opacity: 0; }
        15%  { transform: rotate(${rot + 2}deg) scaleY(1) scaleX(1); opacity: 1; }
        40%  { transform: rotate(${rot - 3}deg) scaleY(1.2) scaleX(0.7); opacity: 0.9; }
        70%  { transform: rotate(${rot + 1}deg) scaleY(0.8) scaleX(1.1); opacity: 0.7; }
        85%  { transform: rotate(${rot}deg) scaleY(1.1) scaleX(0.9); opacity: 0.5; }
        100% { transform: rotate(${rot}deg) scaleY(0.3) scaleX(0.8); opacity: 0; }
      }`
  }
  if (type === 'curtain') {
    return `
      @keyframes curtain${i} {
        0%   { transform: rotate(${rot}deg) skewX(${skew}deg) scaleX(1) translateX(0px); opacity: 0.7; }
        25%  { transform: rotate(${rot + 3}deg) skewX(${skew + 4}deg) scaleX(1.15) translateX(${20 + i * 8}px); opacity: 0.9; }
        50%  { transform: rotate(${rot - 4}deg) skewX(${skew - 5}deg) scaleX(0.85) translateX(${-15 - i * 6}px); opacity: 0.65; }
        75%  { transform: rotate(${rot + 2}deg) skewX(${skew + 2}deg) scaleX(1.08) translateX(${10 + i * 4}px); opacity: 0.8; }
        100% { transform: rotate(${rot}deg) skewX(${skew}deg) scaleX(1) translateX(0px); opacity: 0.7; }
      }`
  }
  // ray — lateral wave propagation + rotation + skew
  const tx = 15 + (i % 5) * 10
  return `
    @keyframes ray${i} {
      0%   { transform: rotate(${rot}deg) skewX(${skew}deg) scaleX(1) translateX(0px); opacity: ${0.7 + (i % 3) * 0.1}; }
      20%  { transform: rotate(${rot + 6 + (i % 3)}deg) skewX(${skew + 6}deg) scaleX(${0.65 + (i % 4) * 0.1}) translateX(${tx}px); opacity: ${0.9 + (i % 2) * 0.1}; }
      45%  { transform: rotate(${rot - 5}deg) skewX(${skew - 4}deg) scaleX(${1.25 + (i % 3) * 0.1}) translateX(${-tx * 0.8}px); opacity: ${0.55 + (i % 3) * 0.1}; }
      65%  { transform: rotate(${rot + 3}deg) skewX(${skew + 7}deg) scaleX(${0.8 + (i % 2) * 0.15}) translateX(${tx * 0.5}px); opacity: ${0.85 + (i % 2) * 0.05}; }
      85%  { transform: rotate(${rot - 2}deg) skewX(${skew - 2}deg) scaleX(${1.1 + (i % 4) * 0.05}) translateX(${-tx * 0.3}px); opacity: ${0.7 + (i % 3) * 0.08}; }
      100% { transform: rotate(${rot}deg) skewX(${skew}deg) scaleX(1) translateX(0px); opacity: ${0.7 + (i % 3) * 0.1}; }
    }`
}

export default function AuraBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">

      {/* Curtains — slow wide backdrop */}
      {curtains.map((s, i) => (
        <div key={`c${i}`} style={{
          position: 'absolute',
          width: `${s.w}px`,
          height: `${s.h}px`,
          top: `calc(${BASE_TOP}vh - ${s.h}px)`,
          left: s.left,
          background: `radial-gradient(ellipse at 50% 100%, ${s.c1} 0%, transparent 75%)`,
          filter: `blur(${s.blur}px)`,
          borderRadius: '50%',
          transformOrigin: 'center bottom',
          animation: `curtain${i} ${s.dur}s ease-in-out infinite`,
          animationDelay: `${s.delay}s`,
        }} />
      ))}

      {/* Rays — the main visible curtain bands */}
      {rays.map((s, i) => (
        <div key={`r${i}`} style={{
          position: 'absolute',
          width: `${s.w}px`,
          height: `${s.h}px`,
          top: `calc(${BASE_TOP}vh - ${s.h}px)`,
          left: s.left,
          background: `radial-gradient(ellipse at 50% 100%, ${s.c1} 0%, ${s.c1.replace(/[\d.]+\)$/, '0.08)')} 55%, transparent 75%)`,
          filter: `blur(${s.blur}px)`,
          borderRadius: '40% 40% 50% 50%',
          transformOrigin: 'center bottom',
          animation: `ray${i} ${s.dur}s ease-in-out infinite`,
          animationDelay: `${s.delay}s`,
        }} />
      ))}

      {/* Flares — fast narrow bright shoots */}
      {flares.map((s, i) => (
        <div key={`f${i}`} style={{
          position: 'absolute',
          width: `${s.w}px`,
          height: `${s.h}px`,
          top: `calc(${BASE_TOP}vh - ${s.h}px)`,
          left: s.left,
          background: `radial-gradient(ellipse at 50% 100%, ${s.c1} 0%, transparent 80%)`,
          filter: `blur(${s.blur}px)`,
          borderRadius: '50%',
          transformOrigin: 'center bottom',
          animation: `flare${i} ${s.dur}s ease-in-out infinite`,
          animationDelay: `${s.delay}s`,
        }} />
      ))}

      {/* Horizon base band — the glowing root line */}
      <div style={{
        position: 'absolute',
        width: '100%',
        height: '120px',
        top: `calc(${BASE_TOP}vh - 60px)`,
        left: 0,
        background: 'linear-gradient(180deg, transparent 0%, rgba(0,255,120,0.12) 40%, rgba(0,245,255,0.18) 60%, rgba(0,255,100,0.1) 80%, transparent 100%)',
        filter: 'blur(20px)',
        animation: 'horizonPulse 8s ease-in-out infinite',
      }} />

      <style>{`
        ${curtains.map((s, i) => buildKeyframes(i, s.rot, s.skew, 'curtain')).join('')}
        ${rays.map((s, i) => buildKeyframes(i, s.rot, s.skew, 'ray')).join('')}
        ${flares.map((s, i) => buildKeyframes(i, s.rot, 0, 'flare')).join('')}
        @keyframes horizonPulse {
          0%,100% { opacity: 0.7; transform: scaleX(1); }
          50%     { opacity: 1;   transform: scaleX(1.02); }
        }
      `}</style>
    </div>
  )
}
