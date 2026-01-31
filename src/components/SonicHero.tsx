"use client";
import React from "react";
import { motion } from "framer-motion";
import { Play, ChevronRight, Headphones } from "lucide-react";
import { AudioVisualizer } from "./AudioVisualizer";

export function SonicHero() {
  return (
    <section className="relative w-full h-screen bg-[#050505] overflow-hidden flex items-center">
      
      {/* 1. Left Content */}
      <div className="max-w-7xl mx-auto px-4 w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
        
        <div className="order-2 md:order-1">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <div className="flex items-center gap-2 text-indigo-500 font-mono text-sm tracking-[0.2em] mb-6">
                    <div className="w-8 h-[1px] bg-indigo-500"></div>
                    SONIC SERIES X
                </div>

                <h1 className="text-5xl md:text-8xl font-bold text-white mb-6 leading-tight">
                    Feel Every <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500">
                        Frequency.
                    </span>
                </h1>

                <p className="text-gray-400 text-lg max-w-md mb-10 leading-relaxed">
                    Experience studio-grade audio with our new Active Noise Cancellation technology. Immerse yourself in pure sound.
                </p>

                <div className="flex flex-wrap gap-6">
                    <button className="px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-indigo-50 transition-colors flex items-center gap-2">
                        Buy Now - $299 <ChevronRight size={18} />
                    </button>
                    <button className="px-8 py-4 border border-white/20 text-white font-bold rounded-full hover:bg-white/10 transition-colors flex items-center gap-2 backdrop-blur-sm">
                        <Play size={18} fill="currentColor" /> Watch Film
                    </button>
                </div>
            </motion.div>

            {/* Specs */}
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
                className="mt-16 flex gap-12 border-t border-white/10 pt-8"
            >
                <div>
                    <h3 className="text-2xl font-bold text-white">40h</h3>
                    <p className="text-xs text-gray-500 uppercase tracking-wider">Battery Life</p>
                </div>
                <div>
                    <h3 className="text-2xl font-bold text-white">0.1s</h3>
                    <p className="text-xs text-gray-500 uppercase tracking-wider">Latency</p>
                </div>
            </motion.div>
        </div>

        {/* Right Side is for the 3D Visualizer (Absolute positioned in component) */}
        <div className="order-1 md:order-2 h-[400px] md:h-full relative flex items-center justify-center">
            {/* Placeholder Headphones Image floating over the 3D Ball */}
            <motion.img 
                src="https://pngimg.com/d/headphones_PNG7645.png" // High Quality Headphone PNG
                alt="Headphones"
                initial={{ y: 20, rotate: -5 }}
                animate={{ y: -20, rotate: 5 }}
                transition={{ duration: 4, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
                className="relative z-20 w-full max-w-[500px] drop-shadow-[0_20px_50px_rgba(79,70,229,0.3)]"
            />
        </div>

      </div>

      {/* 2. 3D Background Component */}
      <AudioVisualizer />

    </section>
  );
}