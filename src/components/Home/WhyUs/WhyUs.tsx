"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  LayoutDashboard,
  Brain,
  Coins,
  FileLock,
} from "lucide-react";

const features = [
  {
    icon: <LayoutDashboard className="w-8 h-8 text-blue-400" />,
    title: "Clean Dashboard",
    desc: "A unified workspace that simplifies project and contract management.",
    className: "md:col-span-2 md:row-span-2",
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-green-400" />,
    title: "Safe & Authentic",
    desc: "Escrow protection and verified contracts ensure full authenticity.",
    className: "md:col-span-3 md:row-span-1",
  },
  {
    icon: <FileLock className="w-8 h-8 text-pink-400" />,
    title: "Secure File Storage",
    desc: "Encrypted and decentralized storage to keep files safe and accessible.",
    className: "md:col-span-2 md:row-span-3",
  },
  {
    icon: <Brain className="w-8 h-8 text-purple-400" />,
    title: "AI Smart Contracts",
    desc: "Smooth contract drafting, fraud checks, and priority listings powered by AI.",
    className: "md:col-span-3 md:row-span-1",
  },
  {
    icon: <Coins className="w-8 h-8 text-yellow-400" />,
    title: "Amount Staking",
    desc: "Stake project amounts to prove commitment and build trust.",
    className: "md:col-span-5 md:row-span-1",
  },
];

const cardVariants = {
  rest: { scale: 1, y: 0 },
  hover: {
    scale: 1.03,
    y: -6,
    boxShadow: "0px 8px 25px rgba(0,0,0,0.3)",
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

const WhyUs = () => {
  return (
    <section className="relative px-6 py-20">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
          Why choose <span className="text-blue-400">EscrowDesk?</span>
        </h2>
        <p className="mt-4 text-gray-400 text-lg">
          Bringing trust, security, and seamless workflows to freelancers,
          agencies, and project managers in Web3.
        </p>
      </motion.div>

      {/* Bento Grid */}
      <div
        className="
          max-w-6xl mx-auto 
          grid grid-cols-1 sm:grid-cols-2 md:grid-cols-7 
          auto-rows-[180px] gap-6
        "
      >
        {features.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            viewport={{ once: true }}
            whileHover="hover"
            whileTap={{ scale: 0.98 }}
            className={`p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-lg flex flex-col justify-between ${item.className}`}
          >
            <div className="p-3 rounded-xl bg-white/10 w-fit">{item.icon}</div>
            <div>
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-gray-400">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WhyUs;
