/** @format */
"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const text =
    "Layanan ini dihentikan sementara jika pembayaran tidak segera diselesaikan.";
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const interval = setInterval(() => {
        setDisplayedText(text.substring(0, index + 1));
        setIndex((prevIndex) => prevIndex + 1);
      }, 100); // Kecepatan mengetik

      return () => clearInterval(interval);
    }
  }, [index, text]);

  return (
    <div className="min-h-screen flex items-center lg:justify-start justify-center font-[family-name:var(--font-geist-sans)] bg-mine bg-cover bg-center">
      <div className="flex flex-col gap-y-2 items-center justify-center backdrop-blur-sm md:w-[50rem] px-4">
        <motion.h1
          className="lg:text-4xl text-3xl font-bold text-yellow-500 uppercase"
          animate={{ opacity: [1, 0, 1] }}
          transition={{
            duration: 1,
            repeat: Infinity,
            repeatType: "loop",
          }}
        >
          Peringatan!
        </motion.h1>
        <motion.p
          className="lg:text-2xl text-xl font-bold text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {displayedText}
        </motion.p>
      </div>
    </div>
  );
}
