// Aurora streams DOWN from the top, anchored to the hero section (not fixed).
// Rooted at top:0, transformOrigin: top — tips hang and sway below.
// Three depths: deep backdrop, mid rays, bright surface flares.

const curtains = [
  { left: '-5%',  w: 500, h: 700, c1: 'rgba(0,255,100,0.22)',  blur: 90,  dur: 24, delay: 0,   rot: -3, skew: 2  },
  { left: '22%',  w: 550, h: 650, c1: 'rgba(0,245,255,0.18)',  blur: 100, dur: 28, delay: 2,   rot: 4,  skew: -3 },
  { left: '52%',  w: 480, h: 720, c1: 'rgba(0,255,140,0.2)',   blur: 95,  dur: 22, delay: 1,   rot: -2, skew: 1  },
  { left: '76%',  w: 420, h: 680, c1: 'rgba(80,60,255,0.22)',  blur: 110, dur: 30, delay: 3,   rot: 5,  skew: -2 },
]

const rays = [
  { left: '1%',   w: 110, h: 850,  c1: 'rgba(0,255,110,0.6)',   blur: 26, dur: 11, delay: 0,   rot: -6, skew: 3  },
  { left: '9%',   w: 70,  h: 1000, c1: 'rgba(60,255,150,0.68)', blur: 16, dur: 9,  delay: 1.1, rot: 2,  skew: -4 },
  { left: '17%',  w: 140, h: 750,  c1: 'rgba(0,245,255,0.5)',   blur: 36, dur: 13, delay: 0.4, rot: 5,  skew: 2  },
  { left: '25%',  w: 80,  h: 1100, c1: 'rgba(40,255,130,0.74)', blur: 20, dur: 8,  delay: 2.0, rot: -3, skew: -2 },
  { left: '33%',  w: 130, h: 880,  c1: 'rgba(0,255,180,0.55)',  blur: 30, dur: 14, delay: 0.7, rot: 8,  skew: 5  },
  { left: '41%',  w: 90,  h: 1200, c1: 'rgba(80,255,160,0.7)',  blur: 18, dur: 10, delay: 3.2, rot: -1, skew: -3 },
  { left: '49%',  w: 160, h: 800,  c1: 'rgba(0,230,255,0.52)',  blur: 34, dur: 12, delay: 1.5, rot: 4,  skew: 4  },
  { left: '57%',  w: 85,  h: 1050, c1: 'rgba(50,255,140,0.65)', blur: 22, dur: 9,  delay: 0.5, rot: -6, skew: -1 },
  { left: '65%',  w: 120, h: 930,  c1: 'rgba(100,80,255,0.48)', blur: 40, dur: 15, delay: 2.6, rot: 3,  skew: 3  },
  { left: '73%',  w: 75,  h: 1100, c1: 'rgba(0,255,120,0.62)',  blur: 17, dur: 11, delay: 0.9, rot: -5, skew: -5 },
  { left: '81%',  w: 140, h: 860,  c1: 'rgba(60,100,255,0.44)', blur: 44, dur: 16, delay: 3.7, rot: 7,  skew: 2  },
  { left: '90%',  w: 90,  h: 1000, c1: 'rgba(0,255,100,0.6)',   blur: 23, dur: 10, delay: 0.8, rot: -3, skew: -3 },
]

const flares = [
  { left: '6%',   w: 38,  h: 550,  c1: 'rgba(180,255,210,0.88)', blur: 10, dur: 4.5, delay: 0,   rot: -5 },
  { left: '23%',  w: 30,  h: 680,  c1: 'rgba(140,255,180,0.92)', blur: 9,  dur: 3.2, delay: 1.4, rot: 3  },
  { left: '43%',  w: 46,  h: 480,  c1: 'rgba(220,255,230,0.82)', blur: 12, dur: 5.1, delay: 0.6, rot: -2 },
  { left: '61%',  w: 34,  h: 620,  c1: 'rgba(120,255,200,0.88)', blur: 10, dur: 3.8, delay: 2.1, rot: 6  },
  { left: '78%',  w: 40,  h: 520,  c1: 'rgba(160,200,255,0.84)', blur: 11, dur: 4.2, delay: 0.3, rot: -4 },
]

function buildKeyframes(i: number, rot: number, skew: number, type: 'curtain' | 'ray' | 'flare') {
  if (type === 'flare') {
    return `@keyframes flare${i} {
      0%   { transform: rotate(${rot}deg) scaleY(0.2) scaleX(0.9); opacity: 0; }
      12%  { transform: rotate(${rot+2}deg) scaleY(0.9) scaleX(1); opacity: 1; }
      40%  { transform: rotate(${rot-3}deg) scaleY(1.15) scaleX(0.75); opacity: 0.85; }
      72%  { transform: rotate(${rot+1}deg) scaleY(0.85) scaleX(1.1); opacity: 0.65; }
      88%  { transform: rotate(${rot}deg) scaleY(1.05) scaleX(0.9); opacity: 0.4; }
      100% { transform: rotate(${rot}deg) scaleY(0.2) scaleX(0.9); opacity: 0; }
    }`
  }
  if (type === 'curtain') {
    return `@keyframes curtain${i} {
      0%   { transform: rotate(${rot}deg) skewX(${skew}deg) scaleX(1) translateX(0px); opacity: 0.65; }
      25%  { transform: rotate(${rot+3}deg) skewX(${skew+5}deg) scaleX(1.12) translateX(${18+i*7}px); opacity: 0.85; }
      50%  { transform: rotate(${rot-4}deg) skewX(${skew-5}deg) scaleX(0.88) translateX(${-14-i*5}px); opacity: 0.6; }
      75%  { transform: rotate(${rot+2}deg) skewX(${skew+2}deg) scaleX(1.06) translateX(${9+i*3}px); opacity: 0.75; }
      100% { transform: rotate(${rot}deg) skewX(${skew}deg) scaleX(1) translateX(0px); opacity: 0.65; }
    }`
  }
  const tx = 14 + (i % 5) * 9
  return `@keyframes ray${i} {
    0%   { transform: rotate(${rot}deg) skewX(${skew}deg) scaleX(1) translateX(0px); opacity: ${0.68+(i%3)*0.1}; }
    20%  { transform: rotate(${rot+5+(i%3)}deg) skewX(${skew+7}deg) scaleX(${0.6+(i%4)*0.1}) translateX(${tx}px); opacity: ${0.88+(i%2)*0.1}; }
    45%  { transform: rotate(${rot-5}deg) skewX(${skew-5}deg) scaleX(${1.22+(i%3)*0.1}) translateX(${-tx*0.8}px); opacity: ${0.52+(i%3)*0.1}; }
    65%  { transform: rotate(${rot+3}deg) skewX(${skew+6}deg) scaleX(${0.78+(i%2)*0.14}) translateX(${tx*0.5}px); opacity: ${0.82+(i%2)*0.06}; }
    85%  { transform: rotate(${rot-2}deg) skewX(${skew-2}deg) scaleX(${1.08+(i%4)*0.05}) translateX(${-tx*0.3}px); opacity: ${0.68+(i%3)*0.08}; }
    100% { transform: rotate(${rot}deg) skewX(${skew}deg) scaleX(1) translateX(0px); opacity: ${0.68+(i%3)*0.1}; }
  }`
}

export default function AuraBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">

      {/* Curtains — deep, wide, slow backdrop */}
      {curtains.map((s, i) => (
        <div key={`c${i}`} style={{
          position: 'absolute',
          width: `${s.w}px`,
          height: `${s.h}px`,
          top: 0,
          left: s.left,
          background: `radial-gradient(ellipse at 50% 0%, ${s.c1} 0%, transparent 72%)`,
          filter: `blur(${s.blur}px)`,
          borderRadius: '50%',
          transformOrigin: 'center top',
          animation: `curtain${i} ${s.dur}s ease-in-out infinite`,
          animationDelay: `${s.delay}s`,
        }} />
      ))}

      {/* Rays — main curtain, streams down with lateral wave */}
      {rays.map((s, i) => (
        <div key={`r${i}`} style={{
          position: 'absolute',
          width: `${s.w}px`,
          height: `${s.h}px`,
          top: 0,
          left: s.left,
          background: `radial-gradient(ellipse at 50% 0%, ${s.c1} 0%, ${s.c1.replace(/[\d.]+\)$/, '0.07)')} 50%, transparent 72%)`,
          filter: `blur(${s.blur}px)`,
          borderRadius: '50% 50% 40% 40%',
          transformOrigin: 'center top',
          animation: `ray${i} ${s.dur}s ease-in-out infinite`,
          animationDelay: `${s.delay}s`,
        }} />
      ))}

      {/* Flares — fast bright surface shoots */}
      {flares.map((s, i) => (
        <div key={`f${i}`} style={{
          position: 'absolute',
          width: `${s.w}px`,
          height: `${s.h}px`,
          top: 0,
          left: s.left,
          background: `radial-gradient(ellipse at 50% 0%, ${s.c1} 0%, transparent 78%)`,
          filter: `blur(${s.blur}px)`,
          borderRadius: '50%',
          transformOrigin: 'center top',
          animation: `flare${i} ${s.dur}s ease-in-out infinite`,
          animationDelay: `${s.delay}s`,
        }} />
      ))}

      {/* Top edge glow — the source band */}
      <div style={{
        position: 'absolute',
        width: '100%',
        height: '80px',
        top: 0,
        left: 0,
        background: 'linear-gradient(180deg, rgba(0,255,120,0.25) 0%, rgba(0,245,255,0.15) 50%, transparent 100%)',
        filter: 'blur(15px)',
        animation: 'horizonPulse 8s ease-in-out infinite',
      }} />

      {/* Fade to black at the bottom of the hero */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        height: '40%',
        background: 'linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.7) 60%, #000 100%)',
        pointerEvents: 'none',
      }} />

      <style>{`
        ${curtains.map((s, i) => buildKeyframes(i, s.rot, s.skew, 'curtain')).join('')}
        ${rays.map((s, i) => buildKeyframes(i, s.rot, s.skew, 'ray')).join('')}
        ${flares.map((s, i) => buildKeyframes(i, s.rot, 0, 'flare')).join('')}
        @keyframes horizonPulse {
          0%,100% { opacity: 0.8; }
          50%     { opacity: 1; }
        }
      `}</style>
    </div>
  )
}
