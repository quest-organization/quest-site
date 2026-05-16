import { Nav } from "~/components/nav/nav";

export default function Sponsors() {
  return (
    <div className="relative flex flex-col h-screen overflow-hidden bg-neutral-100">
      <header className="relative z-10 flex flex-col items-center pt-6 gap-4">
        <Nav />
        <h1 className="text-3xl text-center text-black pt-8" style={{ fontFamily: "'Inria Serif', serif" }}>Sponsors</h1>
      </header>
      <div className="relative z-10 flex flex-col items-center justify-center h-full gap-4">
        
      </div>
    </div>
  );
}