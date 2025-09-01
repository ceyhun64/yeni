"use client";
import {
  Marquee,
  MarqueeContent,
  MarqueeFade,
  MarqueeItem,
} from "@/components/io/marquee";
import { Twitter, Facebook, Instagram, Linkedin, Github } from "lucide-react";

const icons = [
  { Icon: Twitter, name: "Twitter" },
  { Icon: Facebook, name: "Facebook" },
  { Icon: Instagram, name: "Instagram" },
  { Icon: Linkedin, name: "LinkedIn" },
  { Icon: Github, name: "GitHub" },
];

const SocialMedia = () => (
  <div className="flex w-full items-center justify-center bg-background cursor-pointer">
    <Marquee>
      <MarqueeFade side="left" />
      <MarqueeFade side="right" />
      <MarqueeContent>
        {icons.map(({ Icon, name }, index) => (
          <MarqueeItem
            key={index}
            className="h-16 w-64 flex items-center justify-center"
          >
            <Icon className="w-8 h-8 text-gray-700 hover:text-[#ce6530] transition-colors" />
            <span className="sr-only">{name}</span>
          </MarqueeItem>
        ))}
        {/* Aynı ikonları tekrar döndürmek için tekrar ekleyebilirsin */}
        {icons.map(({ Icon, name }, index) => (
          <MarqueeItem
            key={icons.length + index}
            className="h-40 w-64 flex items-center justify-center "
          >
            <Icon className="w-8 h-8 text-gray-700 hover:text-[#ce6530] transition-colors" />
            <span className="sr-only">{name}</span>
          </MarqueeItem>
        ))}
      </MarqueeContent>
    </Marquee>
  </div>
);

export default SocialMedia;
