"use client";
import { motion } from "framer-motion";

interface RevealWrapperProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export function RevealWrapper({ children, delay = 0, className }: RevealWrapperProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0 }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
