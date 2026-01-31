"use client";
import React from "react";
import { motion } from "framer-motion";

const images = [
    "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1484704849700-f032a568e944?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&w=2065&auto=format&fit=crop"
];

// ইমেজগুলো ৪ বার রিপিট করা হলো যাতে বড় স্ক্রিনেও স্ক্রল করার সময় গ্যাপ না দেখা যায়
const scrollImages = [...images, ...images, ...images, ...images];

export function ImmersiveGallery() {
  return (
    <section className="py-24 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-16 text-center">
        <h2 className="text-white text-sm tracking-[0.3em] uppercase text-indigo-400">Lifestyle</h2>
        <h3 className="text-4xl font-bold text-white mt-4">Music in Motion</h3>
      </div>

      {/* Slider Container */}
      <div className="flex overflow-hidden relative w-full">
        <motion.div
            className="flex gap-8"
            // --- INFINITE SCROLL LOGIC ---
            // পুরো ডিভটি বাম দিকে সরবে। -50% এ যাওয়ার পর লুপ আবার 0% থেকে শুরু হবে।
            animate={{ x: ["0%", "-50%"] }}
            transition={{
                x: {
                    repeat: Infinity, // চলতেই থাকবে
                    repeatType: "loop",
                    duration: 20, // স্পিড কন্ট্রোল: সংখ্যা বাড়ালে স্লো হবে, কমালে ফাস্ট হবে
                    ease: "linear", // সব সময় একই স্পিডে চলবে
                },
            }}
        >
            {scrollImages.map((img, i) => (
                <motion.div 
                    key={i} 
                    className="w-[300px] md:w-[400px] h-[400px] md:h-[500px] shrink-0 rounded-2xl overflow-hidden relative grayscale hover:grayscale-0 transition-all duration-700 cursor-pointer"
                    whileHover={{ scale: 1.05 }}
                >
                    <img src={img} alt="Lifestyle" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-60" />
                </motion.div>
            ))}
        </motion.div>
      </div>
    </section>
  );
}