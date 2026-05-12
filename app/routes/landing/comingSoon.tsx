import './comingSoon.css'
export function ComingSoon() {
  return (
    <div className="relative flex flex-col h-screen overflow-hidden bg-neutral-100">
      <div className="relative z-10 flex flex-col items-center justify-center h-full gap-4">
        <img src="./logoBanner.svg" alt="Logo" />
      </div>

      <h3 className="subtext absolute bottom-24 left-0 right-0 z-10 text-center opacity-50">
        Coming Soon
      </h3>
    </div>
  );
}