export default function BackgroundCircles() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Top right circle */}
      <div className="absolute top-0 right-0 w-96 h-96 border-2 border-primary/15 rounded-full" style={{ transform: 'translate(50%, -25%)' }}></div>

      {/* Upper left large circle */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] border-2 border-primary/10 rounded-full" style={{ transform: 'translateX(-40%)' }}></div>

      {/* Middle right circle */}
      <div className="absolute top-1/2 right-0 w-80 h-80 border-2 border-primary/15 rounded-full" style={{ transform: 'translate(40%, -50%)' }}></div>

      {/* Bottom left circle */}
      <div className="absolute bottom-1/4 left-1/4 w-72 h-72 border-2 border-primary/20 rounded-full" style={{ transform: 'translateY(25%)' }}></div>

      {/* Bottom right large circle */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] border-2 border-primary/10 rounded-full" style={{ transform: 'translate(50%, 50%)' }}></div>
    </div>
  );
}
