"use client";

export function Navbar() {
  return (
    <nav className="w-full bg-[#0e312f] shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-5xl font-bold text-white">Yati Wai Tun</h1>
        <div className="space-x-6 text-white text-sm font-medium">
          <a href="#about" className="hover:text-[#3B0100]">
            About
          </a>
          <a href="#projects" className="hover:text-[#3B0100]">
            Projects
          </a>
          <a href="#contact" className="hover:text-[#3B0100]">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
