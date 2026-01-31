"use client";
import React from "react";
import { motion } from "framer-motion";
import { Wifi, BatteryCharging, Mic2, Layers } from "lucide-react";

const features = [
  {
    title: "Spatial Audio",
    desc: "360° soundstage that tracks your head movement for theater-like immersion.",
    icon: <Layers size={30} />,
    col: "md:col-span-2",
    bg: "bg-gradient-to-br from-indigo-900/50 to-purple-900/50"
  },
  {
    title: "Active Noise Cancel",
    desc: "Silence the world. Focus on the music.",
    icon: <Mic2 size={30} />,
    col: "md:col-span-1",
    bg: "bg-neutral-900"
  },
  {
    title: "50h Playtime",
    desc: "Charge once, listen for a week. Fast charging supported.",
    icon: <BatteryCharging size={30} />,
    col: "md:col-span-1",
    bg: "bg-neutral-900"
  },
  {
    title: "Lossless Wireless",
    desc: "New proprietary codec delivers 24-bit high-res audio over Bluetooth.",
    icon: <Wifi size={30} />,
    col: "md:col-span-2",
    bg: "bg-neutral-900"
  }
];

export function SoundEngineering() {
  return (
    <section className="py-32 bg-[#050505] px-4 relative">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Engineered for <br />
                <span className="text-indigo-500">Perfection.</span>
            </h2>
            <p className="text-gray-400 max-w-xl text-lg">
                Beneath the sleek exterior lies a beast of engineering. Every component is tuned to deliver the purest sound possible.
            </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((item, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className={`${item.col} ${item.bg} p-8 rounded-3xl border border-white/5 hover:border-indigo-500/30 transition-colors duration-500 group`}
                >
                    <div className="mb-6 p-4 bg-white/5 rounded-full w-fit text-white group-hover:scale-110 group-hover:bg-indigo-600 transition-all duration-300">
                        {item.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>
                    <p className="text-gray-400 leading-relaxed group-hover:text-gray-200 transition-colors">
                        {item.desc}
                    </p>
                </motion.div>
            ))}
        </div>

      </div>
    </section>
  );
}