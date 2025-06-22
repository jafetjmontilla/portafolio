import Image from "next/image";
import { projects } from "@/data/experience";

export default function Home() {
  return (
    <div className="bg-gray-900 text-white min-h-screen font-sans">
      <main className="container mx-auto px-4 py-8">
        <section id="hero" className="text-center py-20">
          <h1 className="text-5xl font-bold">Jafet Montilla</h1>
          <p className="mt-4 text-xl text-gray-400 max-w-3xl mx-auto">
            Desarrollador de software apasionado, analítico y comprometido con los más altos estándares de excelencia para la generación de productos robustos, eficientes y enfocados en una experiencia de usuario óptima. Especializado en el desarrollo de soluciones end-to-end a través de React y Node.JS, entre otras tecnologías.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <a href="https://www.linkedin.com/in/jafet-montilla-940127258/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">
              LinkedIn
            </a>
            <a href="https://github.com/jafetjmontilla" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">
              GitHub
            </a>
          </div>
        </section>

        <section id="experiencia" className="py-20">
          <h2 className="text-4xl font-bold text-center mb-12">Experiencia Laboral</h2>
          <div className="space-y-16">
            {projects.map((project, index) => (
              <div key={index} className="bg-gray-800 rounded-lg p-8 transform hover:scale-105 transition-transform duration-300">
                <h3 className="text-3xl font-bold">{project.title}</h3>
                <p className="text-xl text-gray-400 mt-1">{project.company} - {project.location}</p>
                <p className="text-md text-gray-500 mt-1">{project.period}</p>
                <div className="mt-4 space-y-2">
                  {project.description.map((desc, i) => (
                    <p key={i}>{desc}</p>
                  ))}
                </div>
                <div className="mt-4">
                  <h4 className="font-semibold">Stack Tecnológico:</h4>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.stack.map((tech, i) => (
                      <span key={i} className="bg-gray-700 rounded-full px-3 py-1 text-sm">{tech}</span>
                    ))}
                  </div>
                </div>
                <div className="mt-4">
                  <a href={project.url} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">
                    Ver Proyecto
                  </a>
                </div>
                <div className="mt-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {project.screenshots.map((screenshot, i) => (
                      <div key={i} className="relative aspect-video">
                        <Image
                          src={screenshot}
                          alt={`Captura de pantalla de ${project.title} ${i + 1}`}
                          fill
                          className="object-cover rounded-lg"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
