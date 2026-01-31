"use client";
import React from "react";
import { Headphones, ShoppingCart } from "lucide-react";

export function Navbar() {
  return (
    <nav className="fixed top-0 w-full p-6 z-50 flex justify-between items-center backdrop-blur-sm bg-black/20 border-b border-white/5">
      <div className="flex items-center gap-2 text-xl font-bold text-white tracking-widest">
        <Headphones className="text-indigo-500" /> SONIC
      </div>

      <div className="hidden md:flex gap-8 text-sm font-medium text-gray-400">
        <a href="#" className="hover:text-white transition">PRODUCTS</a>
        <a href="#" className="hover:text-white transition">TECHNOLOGY</a>
        <a href="#" className="hover:text-white transition">SUPPORT</a>
      </div>

      <button className="relative p-2 text-white hover:text-indigo-400 transition">
        <ShoppingCart />
        <span className="absolute top-0 right-0 w-2 h-2 bg-indigo-500 rounded-full"></span>
      </button>
    </nav>
  );
}