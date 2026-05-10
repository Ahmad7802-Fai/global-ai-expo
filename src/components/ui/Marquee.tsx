"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

type Props = {
  children: ReactNode;
  duration?: number;
};

export default function Marquee({
  children,
  duration = 30,
}: Props) {
  return (
    <div className="overflow-hidden">

      <motion.div
        animate={{
          x: ["0%", "-50%"],
        }}

        transition={{
          duration,
          repeat: Infinity,
          ease: "linear",
        }}

        className="
          flex
          w-max
          gap-6
        "
      >

        {children}
        {children}

      </motion.div>

    </div>
  );
}