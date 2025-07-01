export default function Projects() {
  const projects = [
    {
      image: "/img/2ward.png",
      title: "Learning Center And Agency Services (2024)",
      description:
        "A full-stack platform featuring student registration, learning progress tracking, interview management, and real-time chat using WebSocket. Built with Next.js 13, Node.js, TypeScript, MongoDB, and integrated multilingual support (Myanmar, English, Japanese).",
      link: "https://towards21services.com/",
      stack: [
        "Node.js",
        "Express.js",
        "TypeScript",
        "WebSocket",
        "MongoDB",
        "Next.js 13",
        "React Query",
        "Zustand",
        "React Hook Form",
        "Zod",
        "Figma",
        "i18n",
      ],
    },
    {
      image: "/img/Tower.png",
      title: "ERP Systems (2024)",
      description:
        "A comprehensive ERP solution integrating Point of Sale (POS), Inventory Management, and Accounting modules. Designed to streamline business operations, it offers real-time inventory tracking and seamless transaction processing for efficient and accurate decision-making.",
      stack: [
        "TypeScript",
        "Node.js",
        "Express.js",
        "PostgreSQL",
        "Sequelize",
        "Sequelize-CLI",
        "Inversify",
        "Zod",
        "Swagger",
        "Next.js 14",
        "Zustand",
        "Shadcn/UI",
        "NextUI",
      ],
    },
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-white text-[#3B0100]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-10 text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map(({ image, title, description, link, stack }) => (
            <div
              key={title}
              className="bg-white border border-gray-200 rounded-xl shadow-md overflow-hidden"
            >
              {image && (
                <img
                  src={image}
                  alt={title}
                  className="w-full h-48 object-cover"
                />
              )}
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">{title}</h3>
                <p className="text-gray-700 mb-4">{description}</p>
                {link && (
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-[#D7B15C] font-medium hover:underline"
                  >
                    View Project
                  </a>
                )}
                {stack && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {stack.map((tech) => (
                      <span
                        key={tech}
                        className="text-sm bg-[#D7B15C] text-[#3B0100] px-3 py-1 rounded-full font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
