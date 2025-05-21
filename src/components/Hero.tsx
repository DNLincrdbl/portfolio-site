'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Hero() {
  return (
    <motion.section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Background effects */}
      <div className="absolute inset-0 bg-[#0f0f0f]" />
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-transparent to-blue-900/10" />
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 relative z-10 flex flex-col items-center">
        <motion.div
          variants={itemVariants}
        >
           <Image
            src="/memojis.png"
            alt="Your Memoji"
            width={200}
            height={200}
            className="rounded-full mb-8 border-4 border-[#2a2a3a] shadow-lg"
          />
        </motion.div>

        <div className="text-center">
          <motion.h1
            className="text-4xl sm:text-6xl font-bold text-white mb-6"
            variants={itemVariants}
          >
            <span className="block">Hi, I'm </span>
            <span className="gradient-text">Daniel</span>
          </motion.h1>

          <motion.p
            className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Full Stack Developer crafting beautiful and functional web experiences
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            variants={itemVariants}
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn"
            >
              View Projects
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-[#131a2a] text-white rounded-full font-medium hover:bg-[#202a3a] transition-colors border border-[#202a3a]"
            >
              Contact Me
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Decorative elements */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0f0f0f] to-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      />
    </motion.section>
  );
} 