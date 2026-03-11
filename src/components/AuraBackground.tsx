export default function AuraBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">

      {/* Streak 1 — tall green band, top-left */}
      <div style={{
        position: 'absolute',
        width: '300px',
        height: '900px',
        top: '-300px',
        left: '5%',
        background: 'radial-gradient(ellipse, rgba(0,255,120,0.55) 0%, rgba(0,255,120,0.15) 40%, transparent 70%)',
        filter: 'blur(50px)',
        borderRadius: '50%',
        animation: 'streak1 12s ease-in-out infinite',
        transformOrigin: 'center bottom',
      }} />

      {/* Streak 2 — wider teal sweep, center */}
      <div style={{
        position: 'absolute',
        width: '500px',
        height: '700px',
        top: '-200px',
        left: '25%',
        background: 'radial-gradient(ellipse, rgba(0,245,255,0.45) 0%, rgba(0,200,255,0.12) 45%, transparent 70%)',
        filter: 'blur(60px)',
        borderRadius: '50%',
        animation: 'streak2 16s ease-in-out infinite',
        transformOrigin: 'center bottom',
      }} />

      {/* Streak 3 — bright green spike, right of center */}
      <div style={{
        position: 'absolute',
        width: '250px',
        height: '1100px',
        top: '-400px',
        left: '50%',
        background: 'radial-gradient(ellipse, rgba(50,255,150,0.6) 0%, rgba(0,255,100,0.18) 40%, transparent 68%)',
        filter: 'blur(45px)',
        borderRadius: '50%',
        animation: 'streak3 10s ease-in-out infinite',
        transformOrigin: 'center bottom',
      }} />

      {/* Streak 4 — purple/teal mix, far right */}
      <div style={{
        position: 'absolute',
        width: '400px',
        height: '800px',
        top: '-250px',
        right: '5%',
        background: 'radial-gradient(ellipse, rgba(120,80,255,0.4) 0%, rgba(0,245,255,0.15) 50%, transparent 70%)',
        filter: 'blur(70px)',
        borderRadius: '50%',
        animation: 'streak4 14s ease-in-out infinite',
        transformOrigin: 'center bottom',
      }} />

      {/* Streak 5 — faint wide base glow, full width */}
      <div style={{
        position: 'absolute',
        width: '100%',
        height: '400px',
        top: '0',
        left: '0',
        background: 'linear-gradient(180deg, rgba(0,255,120,0.06) 0%, rgba(0,245,255,0.04) 50%, transparent 100%)',
        filter: 'blur(40px)',
        animation: 'baseGlow 20s ease-in-out infinite',
      }} />

      {/* Streak 6 — narrow bright spike, between 2 and 3 */}
      <div style={{
        position: 'absolute',
        width: '150px',
        height: '800px',
        top: '-300px',
        left: '38%',
        background: 'radial-gradient(ellipse, rgba(180,255,200,0.5) 0%, rgba(0,255,120,0.1) 50%, transparent 70%)',
        filter: 'blur(35px)',
        borderRadius: '50%',
        animation: 'streak5 9s ease-in-out infinite',
        transformOrigin: 'center bottom',
      }} />

      <style>{`
        @keyframes streak1 {
          0%   { transform: rotate(-8deg) scaleX(1); opacity: 0.9; }
          25%  { transform: rotate(4deg) scaleX(1.3); opacity: 1; }
          50%  { transform: rotate(-12deg) scaleX(0.8); opacity: 0.7; }
          75%  { transform: rotate(2deg) scaleX(1.1); opacity: 1; }
          100% { transform: rotate(-8deg) scaleX(1); opacity: 0.9; }
        }
        @keyframes streak2 {
          0%   { transform: rotate(5deg) scaleX(1) translateX(0); opacity: 0.8; }
          33%  { transform: rotate(-6deg) scaleX(1.4) translateX(-40px); opacity: 1; }
          66%  { transform: rotate(10deg) scaleX(0.9) translateX(30px); opacity: 0.75; }
          100% { transform: rotate(5deg) scaleX(1) translateX(0); opacity: 0.8; }
        }
        @keyframes streak3 {
          0%   { transform: rotate(3deg) scaleX(1); opacity: 1; }
          20%  { transform: rotate(-5deg) scaleX(0.7); opacity: 0.6; }
          50%  { transform: rotate(8deg) scaleX(1.5); opacity: 1; }
          80%  { transform: rotate(-3deg) scaleX(0.9); opacity: 0.8; }
          100% { transform: rotate(3deg) scaleX(1); opacity: 1; }
        }
        @keyframes streak4 {
          0%   { transform: rotate(-5deg) scaleX(1) translateX(0); opacity: 0.85; }
          40%  { transform: rotate(8deg) scaleX(1.3) translateX(-30px); opacity: 1; }
          70%  { transform: rotate(-10deg) scaleX(0.85) translateX(20px); opacity: 0.7; }
          100% { transform: rotate(-5deg) scaleX(1) translateX(0); opacity: 0.85; }
        }
        @keyframes streak5 {
          0%   { transform: rotate(0deg) scaleX(1); opacity: 0.7; }
          30%  { transform: rotate(6deg) scaleX(1.8); opacity: 1; }
          60%  { transform: rotate(-4deg) scaleX(0.6); opacity: 0.5; }
          100% { transform: rotate(0deg) scaleX(1); opacity: 0.7; }
        }
        @keyframes baseGlow {
          0%   { opacity: 0.6; transform: scaleX(1); }
          50%  { opacity: 1; transform: scaleX(1.05); }
          100% { opacity: 0.6; transform: scaleX(1); }
        }
      `}</style>
    </div>
  )
}
