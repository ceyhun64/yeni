"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

import {
  ChevronRight,
  Users,
  ClipboardList,
  UserCog,
  LogOut,
  Box,
  PlusSquare,
  ListTree,
  Inbox,
  FileText,
  Store,
  LayoutGrid,
  Hammer,
  Utensils,
  DoorOpen,
  Baby,
  Bed,
  Sofa,
  Lamp,
  Sun,
  Toilet,
  ShowerHead,
  Home,
  Package,
  FolderTree,
  IndentIncrease,
  CalendarDays,
  CalendarCheck,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import Link from "next/link";

const adminMenuItems = [
  {
    title: "Talepler & Teklifler",
    icon: <ClipboardList className="w-4 h-4 text-indigo-500" />,
    sub: [
      {
        url: "/admin/panel/request-offers/requests",
        label: "Gelen Taleplerim",
        icon: <Inbox className="w-4 h-4 text-indigo-500" />,
      },
      {
        url: "/admin/panel/request-offers/offers",
        label: "Tekliflerim",
        icon: <FileText className="w-4 h-4 text-indigo-500" />,
      },
    ],
  },
  {
    title: "Showroom",
    icon: <Store className="w-4 h-4 text-pink-500" />,
    sub: [
      {
        url: "/admin/panel/categories",
        label: "Odalar",
        icon: <LayoutGrid className="w-4 h-4 text-pink-500" />,
      },
    ],
  },
  {
    title: "İç Oda Tadilat",
    icon: <Hammer className="w-4 h-4 text-orange-500" />,
    sub: [
      {
        url: "/admin/panel/room-renavations/kitchen",
        label: "Mutfak",
        icon: <Utensils className="w-4 h-4 text-orange-500" />,
      },
      {
        url: "/admin/panel/room-renavations/kitchen",
        label: "Hol/Giriş",
        icon: <DoorOpen className="w-4 h-4 text-orange-500" />,
      },
      {
        url: "/admin/panel/room-renavations/kitchen",
        label: "Çocuk Odası",
        icon: <Baby className="w-4 h-4 text-orange-500" />,
      },
      {
        url: "/admin/panel/room-renavations/kitchen",
        label: "Yatak Odası",
        icon: <Bed className="w-4 h-4 text-orange-500" />,
      },
      {
        url: "/admin/panel/room-renavations/kitchen",
        label: "Oturma Odası",
        icon: <Sofa className="w-4 h-4 text-orange-500" />,
      },
      {
        url: "/admin/panel/room-renavations/kitchen",
        label: "Salon",
        icon: <Lamp className="w-4 h-4 text-orange-500" />,
      },
      {
        url: "/admin/panel/room-renavations/kitchen",
        label: "Balkon",
        icon: <Sun className="w-4 h-4 text-orange-500" />,
      },
      {
        url: "/admin/panel/room-renavations/kitchen",
        label: "Lavabo/WC",
        icon: <Toilet className="w-4 h-4 text-orange-500" />,
      },
      {
        url: "/admin/panel/room-renavations/kitchen",
        label: "Banyo",
        icon: <ShowerHead className="w-4 h-4 text-orange-500" />,
      },
      {
        url: "/admin/panel/room-renavations/kitchen",
        label: "Ev Tadilat (Komple Tadilat)",
        icon: <Home className="w-4 h-4 text-orange-500" />,
      },
    ],
  },
  {
    title: "Ürünler",
    icon: <Package className="w-4 h-4 text-green-500" />,
    sub: [
      {
        url: "/admin/panel/products",
        label: "Ürünler",
        icon: <Box className="w-4 h-4 text-green-500" />,
      },
      {
        url: "/admin/panel/products/create",
        label: "Ürün Ekle",
        icon: <PlusSquare className="w-4 h-4 text-green-500" />,
      },
    ],
  },
  {
    title: "Kategoriler",
    icon: <ListTree className="w-4 h-4 text-purple-500" />,
    sub: [
      {
        url: "/admin/panel/categories",
        label: "Kategoriler",
        icon: <FolderTree className="w-4 h-4 text-purple-500" />,
      },
      {
        url: "/admin/panel/categories/sub",
        label: "Alt Kategoriler",
        icon: <IndentIncrease className="w-4 h-4 text-purple-500" />,
      },
    ],
  },
  {
    title: "Kullanıcılar",
    icon: <Users className="w-4 h-4 text-blue-500" />,
    sub: [
      {
        url: "/admin/panel/users",
        label: "Tüm Kullanıcılar",
        icon: <UserCog className="w-4 h-4 text-blue-500" />,
      },
    ],
  },
  {
    title: "Rezervasyonlar",
    icon: <CalendarDays className="w-4 h-4 text-red-500" />,
    sub: [
      {
        url: "/admin/panel/users",
        label: "Tüm Rezervasyonlar",
        icon: <CalendarCheck className="w-4 h-4 text-red-500" />,
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
