'use client';

import Image from "next/image";
import { projects } from "@/data/experience";
import { useState } from 'react';
import ImageModal from "@/app/components/ImageModal";
import TechnologiesModal from "@/app/components/TechnologiesModal";

export default function Home() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');
  const [techModalIsOpen, setTechModalIsOpen] = useState(false);

  const openModal = (imageUrl: string) => {
    setSelectedImage(imageUrl);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedImage('');
  };

  const openTechModal = () => setTechModalIsOpen(true);
  const closeTechModal = () => setTechModalIsOpen(false);

  return (
    <div className="bg-gray-900 text-white min-h-screen font-sans">
      <main className="max-w-screen-lg mx-auto px-4 py-8">
        <section id="hero" className="flex flex-col md:flex-row items-center justify-center py-20">
          <div className="md:w-1/4 flex justify-center mb-8 md:mb-0">
            <Image
              src="/fotoperfil.jpeg"
              alt="Foto de perfil de Jafet Montilla"
              width={150}
              height={150}
              className="rounded-full"
            />
          </div>
          <div className="md:w-3/4 md:pl-8 text-center md:text-left">
            <h1 className="text-4xl font-bold">Jafet Montilla</h1>
            <p className="mt-4 text-lg text-gray-400">
              Desarrollador de software apasionado, analítico y comprometido con los más altos estándares de excelencia para la generación de productos robustos, eficientes y enfocados en una experiencia de usuario óptima. Especializado en el desarrollo de soluciones end-to-end a través de React y Node.JS, entre otras tecnologías.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row sm:items-center gap-x-6 gap-y-2 text-base text-gray-300 justify-center md:justify-start">
              <a href="mailto:jafetmontilla@gmail.com" className="flex items-center hover:text-white">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                jafetmontilla@gmail.com
              </a>
              <a href="tel:+584246158537" className="flex items-center hover:text-white">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.518.759a11.024 11.024 0 006.138 6.138l.759-1.518a1 1 0 011.06-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path></svg>
                +58 424-6158537
              </a>
            </div>
            <div className="mt-8 flex justify-center md:justify-start gap-4">
              <a href="https://www.linkedin.com/in/jafet-montilla-940127258/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">
                LinkedIn
              </a>
              <a href="https://github.com/jafetjmontilla" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">
                GitHub
              </a>
              <button onClick={openTechModal} className="text-blue-400 hover:text-blue-300">
                Tecnologías Utilizadas
              </button>
            </div>
          </div>
        </section>

        <section id="experiencia" className="pt-0 pb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Experiencia Laboral</h2>
          <div className="grid grid-cols-1 md:grid-cols-1 gap-16">
            {projects.map((project, index) => (
              <div key={index} className="bg-gray-800 rounded-lg p-8 flex flex-col">
                <div className="flex-none">
                  <h3 className="text-2xl font-bold">{project.title}</h3>
                  <p className="text-lg text-gray-400 mt-1">{project.company} - {project.location}</p>
                  <p className="text-md text-gray-500 mt-1">{project.period}</p>
                  <div className="mt-4 space-y-2">
                    {project.description.map((desc, i) => (
                      <p key={i} className={/^\d+\./.test(desc) ? 'pl-4' : ''}>{desc}</p>
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
                    <h4 className="font-semibold">Enlaces:</h4>
                    <div className="flex flex-wrap gap-x-4 gap-y-2 mt-2">
                      {project.urls && project.urls.map((url, i) => (
                        <a key={i} href={url.link} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">
                          {url.label}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="mt-6 flex-grow">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 h-full">
                    {project.screenshots.map((screenshot, i) => (
                      <div key={i} className="relative aspect-video cursor-pointer" onClick={() => openModal(screenshot)}>
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

      <ImageModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        imageUrl={selectedImage}
      />
      <TechnologiesModal
        isOpen={techModalIsOpen}
        onRequestClose={closeTechModal}
      />
    </div>
  );
}
