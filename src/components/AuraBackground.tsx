const streaks = [
  // [left%, width, height, color1, color2, blur, duration, delay, initRotate]
  { left: '2%',  w: 180, h: 1000, c1: 'rgba(0,255,100,0.7)',   c2: 'rgba(0,255,80,0.15)',  blur: 30, dur: 11, delay: 0,    rot: -6  },
  { left: '10%', w: 280, h: 800,  c1: 'rgba(0,245,255,0.5)',   c2: 'rgba(0,220,255,0.1)',  blur: 40, dur: 15, delay: 1.5,  rot: 3   },
  { left: '18%', w: 140, h: 1100, c1: 'rgba(60,255,140,0.75)', c2: 'rgba(0,255,100,0.12)', blur: 25, dur: 9,  delay: 0.5,  rot: -3  },
  { left: '28%', w: 320, h: 750,  c1: 'rgba(0,255,180,0.45)',  c2: 'rgba(0,245,255,0.08)', blur: 55, dur: 18, delay: 2,    rot: 7   },
  { left: '38%', w: 120, h: 1200, c1: 'rgba(80,255,160,0.8)',  c2: 'rgba(0,255,120,0.1)',  blur: 20, dur: 8,  delay: 0.8,  rot: 1   },
  { left: '47%', w: 250, h: 900,  c1: 'rgba(0,230,255,0.55)',  c2: 'rgba(0,200,255,0.08)', blur: 45, dur: 13, delay: 3,    rot: -8  },
  { left: '57%', w: 160, h: 1050, c1: 'rgba(40,255,130,0.65)', c2: 'rgba(0,255,100,0.12)', blur: 28, dur: 10, delay: 1,    rot: 4   },
  { left: '66%', w: 350, h: 700,  c1: 'rgba(100,60,255,0.45)', c2: 'rgba(0,245,255,0.1)',  blur: 65, dur: 20, delay: 2.5,  rot: -5  },
  { left: '76%', w: 180, h: 950,  c1: 'rgba(0,255,150,0.6)',   c2: 'rgba(0,245,255,0.1)',  blur: 32, dur: 12, delay: 0.3,  rot: 6   },
  { left: '86%', w: 200, h: 850,  c1: 'rgba(80,100,255,0.5)',  c2: 'rgba(0,245,255,0.12)', blur: 50, dur: 16, delay: 1.8,  rot: -4  },
  { left: '93%', w: 130, h: 1000, c1: 'rgba(0,255,120,0.7)',   c2: 'rgba(0,255,80,0.1)',   blur: 22, dur: 9,  delay: 0.7,  rot: 2   },
]

export default function AuraBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {streaks.map((s, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            width: `${s.w}px`,
            height: `${s.h}px`,
            top: `-${s.h * 0.55}px`,
            left: s.left,
            background: `radial-gradient(ellipse at 50% 30%, ${s.c1} 0%, ${s.c2} 45%, transparent 72%)`,
            filter: `blur(${s.blur}px)`,
            borderRadius: '50%',
            transformOrigin: 'center top',
            transform: `rotate(${s.rot}deg)`,
            animation: `wave${i} ${s.dur}s ease-in-out infinite`,
            animationDelay: `${s.delay}s`,
          }}
        />
      ))}

      {/* Horizon glow — anchors the whole scene */}
      <div style={{
        position: 'absolute',
        width: '100%',
        height: '300px',
        top: '0',
        left: '0',
        background: 'linear-gradient(180deg, rgba(0,255,100,0.08) 0%, rgba(0,245,255,0.05) 40%, transparent 100%)',
        filter: 'blur(30px)',
      }} />

      <style>{`
        ${streaks.map((s, i) => `
          @keyframes wave${i} {
            0%   { transform: rotate(${s.rot}deg) scaleX(1); opacity: ${0.75 + (i % 3) * 0.08}; }
            25%  { transform: rotate(${s.rot + 8 + (i % 4)}deg) scaleX(${0.7 + (i % 3) * 0.15}); opacity: ${0.9 + (i % 2) * 0.1}; }
            50%  { transform: rotate(${s.rot - 6 - (i % 3)}deg) scaleX(${1.2 + (i % 4) * 0.1}); opacity: ${0.6 + (i % 3) * 0.1}; }
            75%  { transform: rotate(${s.rot + 4}deg) scaleX(${0.85 + (i % 2) * 0.2}); opacity: ${0.85 + (i % 3) * 0.05}; }
            100% { transform: rotate(${s.rot}deg) scaleX(1); opacity: ${0.75 + (i % 3) * 0.08}; }
          }
        `).join('')}
      `}</style>
    </div>
  )
}
