"use client";
import React from "react";
import { Instagram, Facebook, Twitter, Linkedin } from "lucide-react";
import { GradientText } from "../io/gradient-text";
import { Separator } from "@/components/ui/separator";

const defaultSections = [
  {
    title: "Ürünler",
    links: [
      { name: "Çimento", href: "#" },
      { name: "Tuğla ve Bloklar", href: "#" },
      { name: "Yalıtım Malzemeleri", href: "#" },
      { name: "Boya ve Kaplamalar", href: "#" },
    ],
  },
  {
    title: "Hizmetler",
    links: [
      { name: "Sipariş Takibi", href: "#" },
      { name: "Danışmanlık", href: "#" },
      { name: "Projeye Özel Çözümler", href: "#" },
      { name: "Teslimat Bilgileri", href: "#" },
    ],
  },
  {
    title: "İletişim",
    links: [
      { name: "Bize Ulaşın", href: "/contact" },
      { name: "Bayilik Başvurusu", href: "#" },
      { name: "Sık Sorulan Sorular", href: "#" },
      { name: "Destek", href: "#" },
    ],
  },
];

const defaultSocialLinks = [
  { icon: <Instagram className="w-5 h-5" />, href: "#", label: "Instagram" },
  { icon: <Facebook className="w-5 h-5" />, href: "#", label: "Facebook" },
  { icon: <Linkedin className="w-5 h-5" />, href: "#", label: "LinkedIn" },
];

const defaultLegalLinks = [
  { name: "Kullanım Koşulları", href: "#" },
  { name: "Gizlilik Politikası", href: "#" },
];

export default function Footer({
  logo = {
    url: "https://www.firmaniz.com",
    src: "/logo/logo.jpg",
    alt: "Firma Logo",
    title: "İnşaat Malzemeleri",
  },
  sections = defaultSections,
  description = "İnşaat projeleriniz için kaliteli ve güvenilir malzemeler sunuyoruz. Tüm ihtiyaçlarınıza tek bir çatı altında çözüm üretiyoruz.",
  socialLinks = defaultSocialLinks,
  copyright = "© 2025 inşaat. Tüm hakları saklıdır.",
  legalLinks = defaultLegalLinks,
}) {
  return (
    <section className="border-t py-10 px-5 sm:px-10 md:px-20 bg-gradient-to-t from-gray-200 via-white to-white">
      <div className="container mx-auto">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          {/* Sol taraf */}
          <div className="flex flex-col gap-6 w-full lg:w-1/3">
            <div className="flex items-center gap-2">
              <a href={logo.url}>
                <img
                  src={logo.src}
                  alt={logo.alt}
                  title={logo.title}
                  className="h-10"
                />
              </a>
              <h2 className="text-xl font-semibold">
                <GradientText
                  className="text-2xl font-bold font-sans"
                  text="İnşaat"
                />
              </h2>
            </div>
            <p className="text-muted-foreground max-w-full text-sm">
              {description}
            </p>
            <ul className="flex flex-wrap gap-4 mt-2 text-muted-foreground">
              {socialLinks.map((social, idx) => (
                <li key={idx} className="hover:text-primary font-medium">
                  <a href={social.href} aria-label={social.label}>
                    {social.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Sağ taraf */}
          <div className="grid w-full gap-6 sm:grid-cols-2 md:grid-cols-3 lg:w-2/3 lg:gap-20">
            {sections.map((section, sectionIdx) => (
              <div key={sectionIdx}>
                <h3 className="mb-4 font-bold">{section.title}</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {section.links.map((link, linkIdx) => (
                    <li
                      key={linkIdx}
                      className="hover:text-primary font-medium"
                    >
                      <a href={link.href}>{link.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-4 py-8 text-xs font-medium text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p className="order-2 md:order-1 text-center md:text-left">
            {copyright}
          </p>
          <ul className="order-1 flex flex-wrap gap-2 justify-center md:order-2 md:flex-row">
            {legalLinks.map((link, idx) => (
              <li key={idx} className="hover:text-primary">
                <a href={link.href}>{link.name}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Alt çizgi */}
        <div className="border-t border-gray-400 mt-6"></div>

        {/* Yeni alt kısım */}
        <div className="mt-6 pt-4 text-center text-sm text-gray-700">
          Developed by{" "}
          <a
            href="https://wa.me/905541496377"
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-700 font-semibold hover:underline"
          >
            .jhunDev
          </a>
        </div>
      </div>
    </section>
  );
}
