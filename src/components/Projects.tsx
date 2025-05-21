'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Slider from 'react-slick'; // Import Slider
import 'slick-carousel/slick/slick.css'; // Import slick carousel styles
import 'slick-carousel/slick/slick-theme.css'; // Import slick carousel theme
import { useState } from 'react'; // Import useState
import { FaGithub } from 'react-icons/fa'; // Import GitHub icon
// Import Image component if you plan to use Next/image for optimization
import Image from 'next/image';

const projects = [
  {
    title: 'Project 1',
    description: 'A modern web application built with Next.js and TypeScript.',
    image: '/images/project1.jpg', // Add image path
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'], // Add technologies
    github: 'https://github.com/yourusername/project1',
    demo: 'https://project1.com',
  },
  {
    title: 'Project 2',
    description: 'Full-stack application with real-time features.',
    image: '/images/project2.jpg', // Add image path
    technologies: ['React', 'Node.js', 'MongoDB'], // Add technologies
    github: 'https://github.com/yourusername/project2',
    demo: 'https://project2.com',
  },
  {
    title: 'Project 3',
    description: 'E-commerce platform with modern UI/UX.',
    image: '/images/project3.jpg', // Add image path
    technologies: ['Vue.js', 'Express', 'PostgreSQL'], // Add technologies
    github: 'https://github.com/yourusername/project3',
    demo: 'https://project3.com',
  },
  // Add more projects as needed, including image paths and technologies
];

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const modalVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.3, ease: 'easeOut' } },
  exit: { opacity: 0, scale: 0.8, transition: { duration: 0.2, ease: 'easeIn' } },
};

export default function Projects() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  const openModal = (project: typeof projects[0]) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      }
    ]
  };

  return (
    <motion.section
      id="projects"
      className="py-20 relative overflow-hidden bg-[#0f0f0f]"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={sectionVariants}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          variants={sectionVariants}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-400 mx-auto"></div>
        </motion.div>

        <div className="slider-container">
          <Slider {...sliderSettings}>
            {projects.map((project, index) => (
              <div key={project.title} className="px-2">
                <div
                  className="card group flex flex-col h-full cursor-pointer"
                  onClick={() => openModal(project)}
                >
                  <div className="relative w-full h-48 overflow-hidden rounded-t-xl bg-[#1a2a3a]">
                    {/* Project Image Goes Here */}
                    {/* Use Next/image for optimized images */} 
                    {/* <Image src={project.image} alt={project.title} fill className="object-cover group-hover:scale-105 transition-transform duration-300" /> */}
                    <div className="absolute inset-0 flex items-center justify-center text-gray-400 text-sm">
                       Placeholder Image
                    </div>
                  </div>
                  <div className="p-6 flex-grow flex flex-col">
                    <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                    <p className="text-gray-300 text-sm mb-4 flex-grow">{project.description}</p>
                    {/* Technologies, GitHub, Demo links will be in modal */}
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* Modal */}
        <AnimatePresence>
          {isModalOpen && selectedProject && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal} // Close modal when clicking outside
            >
              <motion.div
                className="bg-[#0f0f0f] rounded-lg p-6 max-w-lg max-h-[90vh] overflow-y-auto text-white relative"
                variants={modalVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                onClick={(e) => e.stopPropagation()} // Prevent modal from closing when clicking inside
              >
                {/* Close button */}
                <button
                  onClick={closeModal}
                  className="absolute top-3 right-3 text-gray-400 hover:text-white"
                >
                  &times;
                </button>

                <h3 className="text-2xl font-bold mb-4 gradient-text">{selectedProject.title}</h3>
                
                {/* Project Image in Modal */}
                {selectedProject.image && (
                   <div className="relative w-full h-48 overflow-hidden rounded-lg mb-4 bg-[#1a2a3a]">
                     {/* Use Next/image */} 
                     {/* <Image src={selectedProject.image} alt={selectedProject.title} fill className="object-cover" /> */}
                      <div className="absolute inset-0 flex items-center justify-center text-gray-400 text-sm">
                         Placeholder Image in Modal
                      </div>
                   </div>
                )}

                <p className="text-gray-300 mb-4">{selectedProject.description}</p>

                {/* Technologies */}
                {selectedProject.technologies && selectedProject.technologies.length > 0 && (
                  <div className="mb-4">
                    <h4 className="text-lg font-semibold mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-[#1a2a3a] text-gray-300 text-sm rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Links */}
                <div className="flex gap-4 mt-4">
                  {selectedProject.github && (
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-[#1a2a3a] text-white rounded-lg hover:bg-[#2a2a3a] transition-colors text-sm font-medium"
                    >
                       <FaGithub size={20} /> GitHub
                    </a>
                  )}
                  {selectedProject.demo && (
                     <a
                       href={selectedProject.demo}
                       target="_blank"
                       rel="noopener noreferrer"
                       className="flex-1 px-4 py-2 bg-purple-600 text-white text-center rounded-lg hover:bg-purple-500 transition-colors text-sm font-medium"
                     >
                        Live Demo
                     </a>
                  )}
                </div>

              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </motion.section>
  );
} 