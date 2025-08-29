"use client";
import React, { useEffect, useRef, forwardRef } from "react";
import { gsap } from "gsap";
import { cn } from "@/lib/utils";

export const GridMotionBackground = forwardRef(
  (
    {
      className,
      items = [],
      gradientColor = "black",
      maxMoveAmount = 300,
      baseDuration = 0.8,
      gridRows = 4,
      gridCols = 7,
      rotation = -15,
      ...props
    },
    ref
  ) => {
    const gridRef = useRef(null);
    const rowRefs = useRef([]);
    const mouseXRef = useRef(0);

    const totalItems = gridRows * gridCols;
    const defaultItems = Array.from(
      { length: totalItems },
      (_, index) => `Item ${index + 1}`
    );

    const combinedItems =
      items.length > 0 ? items.slice(0, totalItems) : defaultItems;

    useEffect(() => {
      // Initial mouse pos
      mouseXRef.current =
        typeof window !== "undefined" ? window.innerWidth / 2 : 0;
      if (typeof window === "undefined") return;

      gsap.ticker.lagSmoothing(0);

      const handleMouseMove = (e) => {
        mouseXRef.current = e.clientX;
      };

      const updateMotion = () => {
        const inertiaFactors = [0.6, 0.4, 0.3, 0.2];
        rowRefs.current.forEach((row, index) => {
          if (row) {
            const direction = index % 2 === 0 ? 1 : -1;
            const moveAmount =
              ((mouseXRef.current / window.innerWidth) * maxMoveAmount -
                maxMoveAmount / 2) *
              direction;

            gsap.to(row, {
              x: moveAmount,
              duration:
                baseDuration + inertiaFactors[index % inertiaFactors.length],
              ease: "power3.out",
              overwrite: "auto",
            });
          }
        });
      };

      const removeAnimationLoop = gsap.ticker.add(updateMotion);

      window.addEventListener("mousemove", handleMouseMove);
      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
        removeAnimationLoop();
      };
    }, [maxMoveAmount, baseDuration]);

    return (
      <div
        ref={(node) => {
          gridRef.current = node;
          if (typeof ref === "function") ref(node);
          else if (ref) ref.current = node;
        }}
        className={cn("h-full w-full overflow-hidden", className)}
        {...props}
      >
        <section
          className="w-full h-screen overflow-hidden relative flex items-center justify-center"
          style={{
            background: ` ${gradientColor}`,
          }}
        >
          <div className="absolute inset-0 pointer-events-none z-[4] bg-[length:250px]"></div>
          <div
            className="gap-4 flex-none relative w-[150vw] h-[150vh] grid grid-cols-1 origin-center z-[2]"
            style={{
              gridTemplateRows: `repeat(${gridRows}, 1fr)`,
              transform: `rotate(${rotation}deg)`,
            }}
          >
            {Array.from({ length: gridRows }, (_, rowIndex) => (
              <div
                key={rowIndex}
                className="grid gap-4"
                style={{
                  willChange: "transform, filter",
                  gridTemplateColumns: `repeat(${gridCols}, 1fr)`,
                }}
                ref={(el) => {
                  if (el) rowRefs.current[rowIndex] = el;
                }}
              >
                {Array.from({ length: gridCols }, (_, itemIndex) => {
                  const content =
                    combinedItems[rowIndex * gridCols + itemIndex];
                  return (
                    <div key={itemIndex} className="relative">
                      <div className="relative w-full h-full overflow-hidden rounded-[10px] bg-[#111] flex items-center justify-center text-white text-[1.5rem] aspect-square">
                        {typeof content === "string" &&
                        content.startsWith("http") ? (
                          <div
                            className="w-full h-full bg-cover bg-center absolute top-0 left-0"
                            style={{ backgroundImage: `url(${content})` }}
                          />
                        ) : (
                          <div className="p-4 text-center z-[1] text-xs sm:text-sm md:text-base break-all">
                            {content}
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
          <div className="relative w-full h-full top-0 left-0 pointer-events-none"></div>
        </section>
      </div>
    );
  }
);

GridMotionBackground.displayName = "GridMotionBackground";
export default GridMotionBackground;
