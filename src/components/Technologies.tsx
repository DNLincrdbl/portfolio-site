'use client';

import { motion } from 'framer-motion';
// Import necessary icons. Choose based on the actual technologies you want to list.
import { FaReact, FaNodeJs, FaGitAlt, FaDocker } from 'react-icons/fa';
import { SiTypescript, SiNextdotjs, SiTailwindcss, SiAmazon, SiPython, SiJavascript, SiHtml5, SiCss3, SiSass } from 'react-icons/si';

const technologies = [
  { name: 'React', icon: FaReact },
  { name: 'Next.js', icon: SiNextdotjs },
  { name: 'TypeScript', icon: SiTypescript },
  { name: 'JavaScript', icon: SiJavascript },
  { name: 'Node.js', icon: FaNodeJs },
  { name: 'HTML5', icon: SiHtml5 },
  { name: 'CSS3', icon: SiCss3 },
  { name: 'Sass', icon: SiSass },
  { name: 'Tailwind CSS', icon: SiTailwindcss },
  { name: 'Python', icon: SiPython },
  { name: 'Git', icon: FaGitAlt },
  { name: 'Docker', icon: FaDocker },
  { name: 'AWS', icon: SiAmazon },
  // Add more technologies as needed
];

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.05,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

export default function Technologies() {
  return (
    <motion.section
      id="technologies"
      className="py-20 relative overflow-hidden bg-[#0f0f0f]"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={sectionVariants}
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          variants={itemVariants}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Technologies
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-400 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 text-center">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              variants={itemVariants}
              custom={index}
              className="flex flex-col items-center p-4 bg-[#131a2a] rounded-lg border border-[#202a3a] shadow-lg"
            >
              {/* Use a wrapper div for gradient text on icon */}
              <div className="gradient-text mb-2">
                 <tech.icon size={40} />
              </div>
              <span className="text-sm font-medium text-gray-300">{tech.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
} 