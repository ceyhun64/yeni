"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

import {
  ChevronRight,
  Users,
  Settings,
  ClipboardList,
  UserCog,
  LogOut,
  Box,
  Layers,
  PlusSquare,
  Sliders,
  ShoppingCart,
  DollarSign,
  ListTree,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import Link from "next/link";

const adminMenuItems = [
  {
    title: "Talepler & Teklifler",
    icon: <Layers className="w-4 h-4" />,
    sub: [
      {
        url: "/admin/panel/request-offers/requests",
        label: "Gelen Taleplerim",
        icon: <Layers className="w-4 h-4" />,
      },
      {
        url: "/admin/panel/request-offers/offers",
        label: "Tekliflerim",
        icon: <PlusSquare className="w-4 h-4" />,
      },
    ],
  },
  {
    title: "Siparişler & Faturalar",
    icon: <ShoppingCart className="w-4 h-4" />,
    sub: [
      {
        url: "/admin/panel/order-invoices/orders",
        label: "Siparişlerim",
        icon: <ClipboardList className="w-4 h-4" />,
      },
      {
        url: "/admin/panel/order-invoices/invoices",
        label: "Faturalar",
        icon: <DollarSign className="w-4 h-4" />,
      },
    ],
  },
  {
    title: "Ürün Yönetimi",
    icon: <ClipboardList className="w-4 h-4" />,
    sub: [
      {
        url: "/admin/panel/products",
        label: "Ürünler",
        icon: <Box className="w-4 h-4" />,
      },
      {
        url: "/admin/panel/products/create",
        label: "Ürün Ekle",
        icon: <PlusSquare className="w-4 h-4" />,
      },
    ],
  },
  {
    title: "Kategori Yönetimi",
    icon: <ListTree className="w-4 h-4" />,
    sub: [
      {
        url: "/admin/panel/categories",
        label: "Kategoriler",
        icon: <Layers className="w-4 h-4" />,
      },

      {
        url: "/admin/panel/categories/sub",
        label: "Alt Kategoriler",
        icon: <Sliders className="w-4 h-4" />,
      },
    ],
  },
  {
    title: "Kullanıcı Yönetimi",
    icon: <Users className="w-4 h-4" />,
    sub: [
      {
        url: "/admin/panel/users",
        label: "Tüm Kullanıcılar",
        icon: <UserCog className="w-4 h-4" />,
      },
    ],
  },
  {
    title: "Ayarlar",
    icon: <Settings className="w-4 h-4" />,
    sub: [
      {
        url: "/admin/panel/settings/general",
        label: "Genel Ayarlar",
        icon: <Settings className="w-4 h-4" />,
      },
      {
        url: "/admin/panel/settings/profile",
        label: "Profil Ayarları",
        icon: <UserCog className="w-4 h-4" />,
      },
    ],
  },
];

export default function AdminSideBar() {
  const pathname = usePathname();

  // URL'e göre açık menü
  const getOpenIndex = () => {
    return adminMenuItems.findIndex((item) =>
      item.sub.some((subItem) => subItem.url === pathname)
    );
  };
  const [openIndex, setOpenIndex] = useState(getOpenIndex());

  const toggleMenu = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    // 'min-h-screen' yerine 'h-screen' ve 'sticky top-0' ekledik
    <Card className="w-64 h-screen sticky top-0 border-r shadow-none bg-white dark:bg-zinc-950 flex flex-col">
      {/* ÜST BLOK: Menü */}
      <div className="flex-1 overflow-y-auto p-4">
        <h2 className="text-lg font-semibold mb-2 text-zinc-900 dark:text-zinc-50">
          Yönetici Paneli
        </h2>
        <Separator className="mb-4 bg-zinc-200 dark:bg-zinc-800" />
        <ul className="space-y-1 ">
          {adminMenuItems.map((item, index) => (
            <li key={index}>
              <Button
                variant="ghost"
                className={cn(
                  "flex items-center justify-between w-full p-2 transition-colors duration-200",
                  "hover:bg-zinc-100 dark:hover:bg-zinc-800",
                  openIndex === index
                    ? "text-primary dark:text-primary-foreground"
                    : "text-zinc-600 dark:text-zinc-400"
                )}
                onClick={() => toggleMenu(index)}
              >
                <div className="flex items-center gap-3">
                  {item.icon}
                  <span className="text-sm font-medium">{item.title}</span>
                </div>
                <ChevronRight
                  className={cn(
                    "w-4 h-4 transition-transform duration-200",
                    openIndex === index && "rotate-90"
                  )}
                />
              </Button>
              {openIndex === index && (
                <ul className="relative mt-1 space-y-1 pl-4 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-px before:bg-zinc-200 dark:before:bg-zinc-800">
                  {item.sub.map((subItem, subIndex) => (
                    <li key={subIndex}>
                      <Link href={subItem.url}>
                        <Button
                          variant="ghost"
                          className="flex justify-start items-center gap-3 w-full text-left p-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors duration-200 text-zinc-500 dark:text-zinc-400"
                        >
                          {subItem.icon}
                          <span className="text-xs font-normal">
                            {subItem.label}
                          </span>
                        </Button>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* ALT BLOK: Admin + Çıkış */}
      <div className="border-t border-zinc-200 dark:border-zinc-800 p-4 flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarFallback>{`Fatih`.charAt(0)}</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <span className="text-sm font-medium text-zinc-900 dark:text-zinc-50">
              Fatih Çolak
            </span>
            <span className="text-xs text-zinc-500 dark:text-zinc-400">
              Yönetici
            </span>
          </div>
        </div>
        <Button variant="outline" className="w-full">
          <LogOut className="w-4 h-4 mr-2" />
          Çıkış Yap
        </Button>
      </div>
    </Card>
  );
}
