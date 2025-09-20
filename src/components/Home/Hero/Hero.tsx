import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative flex flex-col items-center justify-center text-center px-6 pt-32 pb-20 overflow-hidden min-h-[90vh]">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-30 blur-3xl"
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            backgroundSize: "200% 200%",
          }}
        />
      </div>

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl md:text-7xl font-extrabold max-w-5xl leading-tight"
      >
        The Future of{" "}
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
          Work & Payments
        </span>{" "}
        for Web3 Teams
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="mt-6 text-lg md:text-xl text-gray-300 max-w-2xl"
      >
        EscrowDesk is your decentralized WorkDesk for{" "}
        <span className="text-white font-semibold">
          Freelancers, Agencies & PMs
        </span>
        . Manage projects securely with crypto-powered escrow.
      </motion.p>

      {/* CTA Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="mt-10 flex flex-col sm:flex-row gap-4"
      >
        <motion.a
          href="https://escrow-desk-dashboard.vercel.app/"
          target="_blank"
          whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(99,102,241,0.6)" }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold shadow-lg"
        >
          Launch App
        </motion.a>
        <motion.a
          href="#learn-more"
          whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(255,255,255,0.2)" }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-3 rounded-xl bg-white/10 border border-white/20 backdrop-blur-md text-white font-medium"
        >
          Learn More
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Hero;
