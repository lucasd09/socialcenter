"use client";

import { appConfig } from "@/app-config";
import { motion } from "framer-motion";
import { LogoProps } from "./types";
import { cn } from "@/lib/utils";

export const Logo = ({ onClick, className }: LogoProps) => {
  return (
    <motion.div
      className={cn("flex items-center gap-2 w-full text-xl font-bold", className)}
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <button
        type="button"
        onClick={onClick}
        className="z-10 text-primary"
      >
        {appConfig.logo}
      </button>

      <p>{appConfig.brandName}</p>
    </motion.div>
  );
};
