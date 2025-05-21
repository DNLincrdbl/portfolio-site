'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const timelineEvents = [
  {
    year: 2015,
    title: 'High School Starts',
    description: 'Beginning of my high school journey. Learning the basics, discovering interests.',
  },
  {
    year: 2019,
    title: 'Graduation / University Starts',
    description: 'Successfully graduated high school and enrolled in [Your University/Field]. Diving deeper into [Relevant subjects].',
  },
  {
    year: 2021,
    title: 'Exploring Technologies',
    description: 'Started focusing on web development outside of university, learning [e.g., HTML, CSS, JavaScript].',
  },
   {
    year: 2022,
    title: 'First Internship / Significant Project',
    description: 'Gained practical experience at [Company Name] or completed a major personal project, applying learned skills.',
  },
  {
    year: 2023,
    title: 'Deep Dive into Frameworks',
    description: 'Focused on mastering frameworks like React, Next.js, and exploring backend technologies like Node.js.',
  },
  {
    year: 2024,
    title: 'Building Portfolio / Freelancing',
    description: 'Started building a professional portfolio and potentially taking on freelance projects.',
  },
  {
    year: 2025,
    title: 'Present - Current Focus',
    description: 'Currently working on [e.g., advanced projects, specific technologies] and looking for new opportunities.',
  },
  // Add more events/years as needed, keep them roughly ordered by year
];

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const eventVariants = {
  hidden: { opacity: 0, x: -100 }, // Animate from the side
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.2, // Staggered delay for vertical items
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

export default function Timeline() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleEvent = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <motion.section
      id="timeline"
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
            My Journey
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-400 mx-auto"></div>
        </motion.div>

        <div className="relative wrap overflow-hidden p-10 h-full">
          {/* Vertical line */}
          <div className="border-2-2 absolute left-1/2 border-opacity-20 border-gray-700 h-full border" style={{ left: '50%' }}></div>

          {timelineEvents.map((event, index) => (
            <motion.div
              key={event.year}
              variants={eventVariants}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className={`mb-8 flex justify-between items-center w-full right-timeline ${
                index % 2 === 0 ? 'flex-row-reverse' : '' // Alternate sides
              }`}
            >
              <div className="order-1 w-5/12">{/* Empty div for spacing */}</div>
              {/* Event marker */}
              <div className="z-20 flex items-center order-1 bg-purple-600 shadow-xl w-10 h-10 rounded-full justify-center text-white font-bold text-sm">
                {event.year}
              </div>
              {/* Event content - Glassmorphic style */}
              <div className={`order-1 w-5/12 px-6 py-4 rounded-lg shadow-xl bg-white/[0.05] border border-white/[0.1] backdrop-blur-sm cursor-pointer ${activeIndex === index ? '' : 'hover:bg-white/[0.1]'}`} onClick={() => toggleEvent(index)}>
                <h3 className="mb-3 font-bold text-white text-xl">{event.title}</h3>
                 <AnimatePresence mode="wait">
                   {activeIndex === index && (
                     <motion.p
                       initial={{ opacity: 0, height: 0 }}
                       animate={{ opacity: 1, height: 'auto' }}
                       exit={{ opacity: 0, height: 0 }}
                       transition={{ duration: 0.3, ease: 'easeInOut' }}
                       className="text-sm leading-snug text-gray-300 text-opacity-100"
                     >
                       {event.description}
                     </motion.p>
                   )}
                 </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </motion.section>
  );
} 