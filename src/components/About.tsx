'use client';

import { motion } from 'framer-motion';

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

export default function About() {
  return (
    <motion.section
      id="about"
      className="py-20 relative overflow-hidden bg-[#0f0f0f]"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={sectionVariants}
    >
      {/* Optional: Add background effects if needed for this section specifically */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          variants={sectionVariants}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-400 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start max-w-5xl mx-auto">
          {/* Left Column - Could be image or more text */}
          <motion.div
            variants={itemVariants}
            custom={0}
            className="card p-6 bg-[#1a1a1a] border border-[#2a2a2a]"
          >
            {/* Placeholder for image or other content */}
            <div className="w-full h-48 bg-[#1a1a1a] rounded-lg flex items-center justify-center text-gray-400 text-sm">
              Your Photo / Illustration Here
            </div>
          </motion.div>

          {/* Right Column - Text Content */}
          <motion.div
            variants={itemVariants}
            custom={1}
            className="card p-6 space-y-6 bg-[#1a1a1a] border border-[#2a2a2a]"
          >
            <p className="text-lg text-gray-300">
              Hi, I'm [Your Name], a passionate Full Stack Developer with a keen eye for design and a love for creating
              seamless user experiences. With expertise in modern web technologies, I build
              applications that are not only visually appealing but also performant and scalable.
            </p>
            <p className="text-lg text-gray-300">
              My journey in web development started with a curiosity about how things work on the
              internet, which led me to dive deep into both frontend and backend technologies.
              I believe in writing clean, maintainable code and staying up-to-date with the latest
              industry trends.
            </p>
            {/* Add more paragraphs or bullet points */}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
} 