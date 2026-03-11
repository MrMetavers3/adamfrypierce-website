export default function AuraBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Primary cyan aura — drifts slowly left to right */}
      <div
        className="absolute rounded-full"
        style={{
          width: '700px',
          height: '700px',
          top: '-10%',
          left: '-5%',
          background: 'radial-gradient(circle, rgba(0,245,255,0.18) 0%, rgba(0,245,255,0.04) 50%, transparent 70%)',
          filter: 'blur(60px)',
          animation: 'auraDrift1 18s ease-in-out infinite',
        }}
      />
      {/* Secondary cyan/blue aura — drifts bottom right */}
      <div
        className="absolute rounded-full"
        style={{
          width: '900px',
          height: '600px',
          bottom: '-15%',
          right: '-10%',
          background: 'radial-gradient(circle, rgba(0,245,255,0.12) 0%, rgba(0,140,255,0.06) 40%, transparent 70%)',
          filter: 'blur(80px)',
          animation: 'auraDrift2 24s ease-in-out infinite',
        }}
      />
      {/* Third subtle aura — mid screen, very faint */}
      <div
        className="absolute rounded-full"
        style={{
          width: '500px',
          height: '500px',
          top: '40%',
          left: '35%',
          background: 'radial-gradient(circle, rgba(0,245,255,0.07) 0%, transparent 65%)',
          filter: 'blur(100px)',
          animation: 'auraDrift3 30s ease-in-out infinite',
        }}
      />

      <style>{`
        @keyframes auraDrift1 {
          0%   { transform: translate(0px, 0px) scale(1); }
          33%  { transform: translate(80px, 60px) scale(1.08); }
          66%  { transform: translate(30px, 120px) scale(0.95); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        @keyframes auraDrift2 {
          0%   { transform: translate(0px, 0px) scale(1); }
          33%  { transform: translate(-60px, -80px) scale(1.1); }
          66%  { transform: translate(-120px, -30px) scale(0.92); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        @keyframes auraDrift3 {
          0%   { transform: translate(0px, 0px) scale(1); }
          50%  { transform: translate(60px, -60px) scale(1.15); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
      `}</style>
    </div>
  )
}
