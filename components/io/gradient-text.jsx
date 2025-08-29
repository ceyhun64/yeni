"use client";

import * as React from "react";
import { color, motion } from "framer-motion";
import { cn } from "@/lib/utils";

function GradientText({
  text,
  className,
  gradient = "linear-gradient(90deg, #ce6530 0%, #b45a56 100%)",
  neon = true,
  transition = { duration: 3, repeat: Infinity, ease: "linear" },
  ...props
}) {
  const baseStyle = {
    color: "transparent",
    backgroundImage: gradient,
  };

  return (
    <span
      data-slot="gradient-text"
      className={cn("relative inline-block", className)}
      {...props}
    >
      <motion.span
        className="m-0 text-transparent bg-clip-text bg-[length:200%_100%]"
        style={baseStyle}
        animate={{ backgroundPositionX: ["0%", "200%"] }}
        transition={transition}
      >
        {text}
      </motion.span>

      {neon && (
        <motion.span
          className="m-0 absolute top-0 left-0 text-transparent bg-clip-text blur-[8px] mix-blend-plus-lighter bg-[length:200%_100%]"
          style={baseStyle}
          animate={{ backgroundPositionX: ["0%", "200%"] }}
          transition={transition}
        >
          {text}
        </motion.span>
      )}
    </span>
  );
}

export { GradientText };
