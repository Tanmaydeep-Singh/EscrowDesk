"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

const TrustedBy = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email submitted:", email);
    setEmail("");
  };

  return (
    <section className="relative px-6 py-20 bg-black text-white">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto text-center space-y-6"
      >
        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
          <span className="text-blue-400">20+</span> users have already
          registered 🚀
        </h2>
        <p className="text-gray-400 text-lg">
          Be the first to access exclusive features and shape the future of{" "}
          <span className="text-blue-400">EscrowDesk</span>.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="px-4 py-3 w-full sm:w-80 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.2 }}
            type="submit"
            className="px-6 py-3 rounded-xl bg-blue-500 hover:bg-blue-600 text-white font-semibold shadow-lg transition-colors"
          >
            Join Beta
          </motion.button>
        </form>

        {/* Social Proof Text */}
        <p className="text-sm text-gray-500 mt-4">
          No spam. Only early access invites and product updates.
        </p>
      </motion.div>
    </section>
  );
};

export default TrustedBy;
