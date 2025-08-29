"use client";
import React from "react";
import { Instagram, Facebook, Twitter, Linkedin } from "lucide-react";
import { GradientText } from "../io/gradient-text";

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
    src: "/logo/logo.jpeg",
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
    <section className="border-t py-10 px-30">
      <div className="container mx-auto">
        <div className="flex w-full flex-col justify-between gap-10 lg:flex-row lg:items-start lg:text-left">
          {/* Sol taraf */}
          <div className="flex w-full flex-col justify-between gap-6 lg:items-start">
            <div className="flex items-center gap-2 lg:justify-start">
              <a href={logo.url}>
                <img
                  src={logo.src}
                  alt={logo.alt}
                  title={logo.title}
                  className="h-8"
                />
              </a>
              <h2 className="text-xl font-semibold">
                <GradientText
                  className="text-2xl font-bold font-sans"
                  text="İnşaat"
                />
              </h2>
            </div>
            <p className="text-muted-foreground max-w-[70%] text-sm">
              {description}
            </p>
            <ul className="flex items-center space-x-6 text-muted-foreground">
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
          <div className="grid w-full gap-6 md:grid-cols-3 lg:gap-20">
            {sections.map((section, sectionIdx) => (
              <div key={sectionIdx}>
                <h3 className="mb-4 font-bold">{section.title}</h3>
                <ul className="space-y-3 text-sm text-muted-foreground">
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

        <div className="mt-8 flex flex-col gap-4 border-t py-8 text-xs font-medium text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p className="order-2 lg:order-1">{copyright}</p>
          <ul className="order-1 flex flex-col gap-2 md:order-2 md:flex-row">
            {legalLinks.map((link, idx) => (
              <li key={idx} className="hover:text-primary">
                <a href={link.href}>{link.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
