"use client";

import React from "react";
import { motion } from "framer-motion";
import { SplitSquareHorizontal, FolderOpen, Mail, Receipt } from "lucide-react";

const problems = [
  {
    icon: <SplitSquareHorizontal className="w-6 h-6 text-blue-400" />,
    title: "Too many disconnected tools",
    desc: "Spreadsheets, chat apps, invoicing software – none of them talk to each other.",
  },
  {
    icon: <FolderOpen className="w-6 h-6 text-blue-400" />,
    title: "Context lives everywhere and nowhere",
    desc: "Files in Drive, feedback in email, tasks in yet-another-app. Context switching kills momentum.",
  },
  {
    icon: <Mail className="w-6 h-6 text-blue-400" />,
    title: "Client comms are a mess",
    desc: "Long email threads, outdated attachments, confused clients... and your brand suffers.",
  },
  {
    icon: <Receipt className="w-6 h-6 text-blue-400" />,
    title: "Manual invoicing & billing",
    desc: "Hours lost recreating invoices and chasing late payments.",
  },
];

const Problem = () => {
  return (
    <section className="relative px-6 py-20 bg-black text-white">
      {/* Problem Label */}
      <div className="absolute top-6 left-6 px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-full bg-white/10 text-gray-300">
        Problem
      </div>

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-3xl  text-left mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
          Why change
          <span className="text-blue-400"> anything?</span>
        </h2>
        <p className="mt-4 text-gray-400 text-lg">
          Because sticking with the current tool-sprawl costs more time, money, and sanity than you think.
        </p>
      </motion.div>

      {/* Problems Grid */}
      <div className="max-w-6xl mx-auto grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        {problems.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: idx * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.04, y: -4 }}
            className="flex flex-col items-start space-y-3 p-4 rounded-xl border border-transparent 
                       bg-transparent hover:bg-white/5 hover:border-white/20 
                       transition-all duration-300 ease-out shadow-sm hover:shadow-lg"
          >
            <div className="p-2 rounded-lg bg-white/5 transition-transform duration-300 group-hover:scale-110">
              {item.icon}
            </div>
            <h3 className="text-md font-semibold">{item.title}</h3>
            <p className="text-sm text-gray-400">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Problem;
