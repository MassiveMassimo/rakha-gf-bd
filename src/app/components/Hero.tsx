"use client";

import { AuroraBackground } from "@/components/ui/aurora-background";
import { Confetti } from "@/components/ui/confetti";
import { motion } from "framer-motion";
import { useEffect } from "react";

export default function Hero() {
  useEffect(() => {
    const end = Date.now() + 5 * 1000; // 3 seconds
    const colors = ["#a786ff", "#fd8bbc", "#eca184", "#f8deb1"];

    const frame = () => {
      if (Date.now() > end) return;

      Confetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        startVelocity: 60,
        origin: { x: 0, y: 1 },
        colors: colors,
      });
      Confetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        startVelocity: 60,
        origin: { x: 1, y: 1 },
        colors: colors,
      });

      requestAnimationFrame(frame);
    };

    frame();
  }, []);

  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col items-center justify-center gap-4 px-4"
      >
        <div className="text-center text-3xl font-bold md:text-7xl">
          Happy Birthday Mayllo!
        </div>
      </motion.div>
    </AuroraBackground>
  );
}
