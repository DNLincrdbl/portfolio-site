'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Technologies', href: '#technologies' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      className="fixed w-full top-0 z-50 bg-[#0f0f0f]/80 backdrop-blur-sm transition-all duration-300 border-b border-[#202a3a] text-gray-300"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="text-white text-2xl font-bold gradient-text">
              Your Name
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {links.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    pathname === link.href
                      ? 'text-purple-400 bg-[#131a2a]'
                      : ''
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-[#131a2a] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <motion.div
        className="md:hidden"
        id="mobile-menu"
        initial={false}
        animate={isOpen ? "open" : "closed"}
        variants={{
          open: { opacity: 1, height: "auto", transition: { duration: 0.3 } },
          closed: { opacity: 0, height: 0, transition: { duration: 0.3 } },
        }}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-[#202a3a] bg-[#0f0f0f]">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </motion.div>
    </motion.nav>
  );
} 