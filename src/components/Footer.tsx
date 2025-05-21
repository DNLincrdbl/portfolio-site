'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

const socialLinks = [
  { name: 'GitHub', href: 'https://github.com/yourusername', icon: FaGithub },
  { name: 'LinkedIn', href: 'https://linkedin.com/in/yourprofile', icon: FaLinkedin },
  { name: 'Twitter', href: 'https://twitter.com/yourusername', icon: FaTwitter },
  // Add more social links as needed
];

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

export default function Footer() {
  return (
    <motion.footer
      id="contact"
      className="py-12 relative overflow-hidden border-t border-[#202a3a] bg-[#0f0f0f]"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={sectionVariants}
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center text-gray-400">
        <motion.div
          className="text-center mb-8"
          variants={sectionVariants}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Contact Me
          </h2>
          <p className="text-gray-300 text-lg mb-6">
            Find me on my social networks or send me an email.
          </p>
        </motion.div>

        <motion.div className="flex justify-center space-x-6 mb-6" variants={sectionVariants}>
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label={link.name}
            >
              <link.icon size={24} />
            </a>
          ))}
        </motion.div>

        <motion.a
          href="mailto:your.email@example.com"
          className="text-gray-400 hover:text-white transition-colors text-lg"
          variants={sectionVariants}
        >
          your.email@example.com
        </motion.a>

        <motion.p className="mt-8 text-gray-500 text-sm" variants={sectionVariants}>
          &copy; {new Date().getFullYear()} Your Name. All rights reserved.
        </motion.p>
      </div>
    </motion.footer>
  );
} 