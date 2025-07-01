export default function Header() {
  return (
    <section className="min-h-[80vh] flex flex-col md:flex-row justify-center items-center px-4 bg-primary text-light">
      {/* Left side: Text */}
      <div className="md:w-1/2 text-center md:text-left md:pl-12">
        <h3 className="text-5xl font-medium mb-4">Hello, I’m Yati Wai Tun</h3>
        <h1 className="text-5xl font-bold mb-4">Software Developer</h1>
        <p className="text-lg max-w-xl mx-auto md:mx-0 text-accent">
          A passionate full-stack developer building modern web experiences
          using Next.js, Tailwind CSS, and more.
        </p>
        <a
          href="#projects"
          className="inline-block bg-[#0e312f] text-dark px-6 py-3 rounded-full text-lg hover:bg-[#080808] hover:text-white transition mt-4"
        >
          Projects
        </a>

        <a
          href="#projects"
          className="inline-block ml-3 bg-[#0e312f] text-dark px-6 py-3 rounded-full text-lg hover:bg-[#080808] hover:text-white transition mt-4"
        >
          Download Resume
        </a> 
      </div>

      {/* Right side: Photo */}
      <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
        <img
          src="/img/myPhoto.png"
          alt="Yati Wai Tun"
          className="max-w-xs md:max-w-md rounded-lg shadow-lg"
        />
      </div>
    </section>
  );
}
