import { Github, Twitter } from 'lucide-react';
import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="py-6 mt-10">
      {/* Brand Name */}
      <motion.div
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mb-4 md:mb-0 font-semibold text-gray-800">
        <h1

          className="mt-8 md:mb-10 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-blue-400 to-purple-500">
            ESCROWDESK
          </span>
        </h1>        </motion.div>

      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between text-sm text-gray-600">


        {/* Rights Text */}
        <div className="mb-4 md:mb-0 text-center">
          &copy; {new Date().getFullYear()} All rights reserved.
        </div>

        {/* Social Icons */}
        <div className="flex space-x-4">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <Github className="w-5 h-5 hover:text-black transition" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <Twitter className="w-5 h-5 hover:text-blue-500 transition" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <Twitter className="w-5 h-5 hover:text-blue-500 transition" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
