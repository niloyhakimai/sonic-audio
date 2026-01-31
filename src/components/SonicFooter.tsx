"use client";
import React from "react";
import { Headphones, Twitter, Instagram, Youtube } from "lucide-react";

export function SonicFooter() {
  return (
    <footer className="bg-[#020202] border-t border-white/5 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center text-center">
        
        <div className="mb-8 p-4 bg-indigo-600/10 rounded-full text-indigo-500">
            <Headphones size={40} />
        </div>

        <h2 className="text-3xl font-bold text-white mb-6">Ready to upgrade your ears?</h2>
        
        <div className="flex gap-4 mb-12">
            <button className="px-8 py-3 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition">
                Pre-order Now
            </button>
        </div>

        <div className="w-full h-[1px] bg-white/5 mb-8"></div>

        <div className="flex justify-between w-full flex-col md:flex-row items-center gap-6 text-gray-500 text-sm">
            <p>&copy; 2026 Sonic Audio. Crafted for Audiophiles.</p>
            <div className="flex gap-6">
                <Twitter className="hover:text-white cursor-pointer transition" size={20} />
                <Instagram className="hover:text-white cursor-pointer transition" size={20} />
                <Youtube className="hover:text-white cursor-pointer transition" size={20} />
            </div>
        </div>
      </div>
    </footer>
  );
}