"use client";
import { Marquee, MarqueeContent, MarqueeItem } from "@/components/io/marquee";
import { Twitter, Facebook, Instagram, Linkedin, Github } from "lucide-react";

const icons = [
  { Icon: Twitter, name: "X" },
  { Icon: Facebook, name: "Facebook" },
  { Icon: Instagram, name: "Instagram" },
  { Icon: Linkedin, name: "LinkedIn" },
  { Icon: Github, name: "GitHub" },
];

const SocialMedia = () => (
  <div className="flex w-full flex-col items-center bg-gradient-to-r from-gray-100 via-orange-50 to-gray-100 py-12 px-4 sm:px-10 lg:px-20 xl:px-30 cursor-pointer">
    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-orange-800 mb-6 sm:mb-8 text-center">
      Sosyal Medyada Bizi Takip Edin
    </h2>
    <p className="text-xs sm:text-sm md:text-base text-gray-600 mb-6 sm:mb-8 text-center max-w-md">
      Bizi takip ederek en güncel ürünlerimizden, kampanyalardan ve özel
      fırsatlardan ilk siz haberdar olursunuz.
    </p>
    <Marquee>
      <MarqueeContent>
        {icons.concat(icons).map(({ Icon, name }, index) => (
          <MarqueeItem
            key={index}
            className="h-20 w-28 sm:h-24 sm:w-32 md:h-28 md:w-36 flex flex-col items-center justify-center gap-2"
          >
            <Icon className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 text-orange-700 hover:text-orange-800 transition-colors duration-300" />
            <span className="text-xs sm:text-sm md:text-base text-orange-800">
              {name}
            </span>
          </MarqueeItem>
        ))}
      </MarqueeContent>
    </Marquee>
  </div>
);

export default SocialMedia;
