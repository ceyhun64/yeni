"use client";
import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  // Scroll durumunu kontrol et
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {visible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 bg-gradient-to-b from-orange-500 to-red-500 hover:bg-orange-600 text-white p-3 rounded-full shadow-lg transition-transform hover:scale-110"
          aria-label="Sayfanın üstüne çık"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </>
  );
}
