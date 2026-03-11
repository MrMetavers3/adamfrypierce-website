export default function AuraBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Top-left cyan aura */}
      <div
        style={{
          position: 'absolute',
          width: '800px',
          height: '800px',
          top: '-200px',
          left: '-200px',
          background: 'radial-gradient(circle, rgba(0,245,255,0.35) 0%, rgba(0,245,255,0.1) 40%, transparent 70%)',
          filter: 'blur(80px)',
          animation: 'auraDrift1 18s ease-in-out infinite',
        }}
      />
      {/* Bottom-right cyan/blue aura */}
      <div
        style={{
          position: 'absolute',
          width: '900px',
          height: '700px',
          bottom: '-200px',
          right: '-200px',
          background: 'radial-gradient(circle, rgba(0,245,255,0.25) 0%, rgba(0,100,255,0.1) 40%, transparent 70%)',
          filter: 'blur(100px)',
          animation: 'auraDrift2 24s ease-in-out infinite',
        }}
      />
      {/* Center subtle aura */}
      <div
        style={{
          position: 'absolute',
          width: '600px',
          height: '600px',
          top: '30%',
          left: '30%',
          background: 'radial-gradient(circle, rgba(0,245,255,0.12) 0%, transparent 65%)',
          filter: 'blur(120px)',
          animation: 'auraDrift3 30s ease-in-out infinite',
        }}
      />

      <style>{`
        @keyframes auraDrift1 {
          0%   { transform: translate(0px, 0px) scale(1); }
          33%  { transform: translate(100px, 80px) scale(1.1); }
          66%  { transform: translate(40px, 140px) scale(0.95); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        @keyframes auraDrift2 {
          0%   { transform: translate(0px, 0px) scale(1); }
          33%  { transform: translate(-80px, -100px) scale(1.12); }
          66%  { transform: translate(-140px, -40px) scale(0.92); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        @keyframes auraDrift3 {
          0%   { transform: translate(0px, 0px) scale(1); }
          50%  { transform: translate(80px, -80px) scale(1.2); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
      `}</style>
    </div>
  )
}
