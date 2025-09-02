"use client";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import {
  ChevronRight,
  User,
  Lock,
  Bell,
  FileCheck,
  ClipboardList,
  PlusCircle,
  List,
  Package,
  CreditCard,
  History,
  Undo2,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import Link from "next/link";

const menuItems = [
  {
    title: "Hesap Yönetimi",
    icon: <User className="w-4 h-4" />,
    sub: [
      {
        url: "/user-panel/account/profile-information",
        label: "Profil Bilgileri",
        icon: <User className="w-4 h-4" />,
      },
      {
        url: "/user-panel/account/security",
        label: "Güvenlik",
        icon: <Lock className="w-4 h-4" />,
      },
      {
        url: "/user-panel/account/notifications",
        label: "Bildirimler",
        icon: <Bell className="w-4 h-4" />,
      },
    ],
  },
  {
    title: "Talep Yönetimi",
    icon: <ClipboardList className="w-4 h-4" />,
    sub: [
      {
        url: "/request",
        label: "Yeni Talep Oluştur",
        icon: <PlusCircle className="w-4 h-4" />,
      },
      {
        url: "/user-panel/request/my-requests",
        label: "Taleplerim",
        icon: <List className="w-4 h-4" />,
      },
    ],
  },
  {
    title: "Teklif & Siparişler",
    icon: <FileCheck className="w-4 h-4" />,
    sub: [
      {
        url: "/user-panel/offer/my-offers",
        label: "Tekliflerim",
        icon: <FileCheck className="w-4 h-4" />,
      },
      {
        url: "/user-panel/offer/my-orders",
        label: "Siparişlerim",
        icon: <Package className="w-4 h-4" />,
      },
    ],
  },
  {
    title: "Ödeme Yönetimi",
    icon: <CreditCard className="w-4 h-4" />,
    sub: [
      {
        url: "/user-panel/payment/payment-history",
        label: "Geçmiş Ödemelerim",
        icon: <History className="w-4 h-4" />,
      },
      {
        url: "/user-panel/payment/return",
        label: "İade / İptal Talepleri",
        icon: <Undo2 className="w-4 h-4" />,
      },
    ],
  },
];

export default function UserSideBar() {
  const pathname = usePathname();

  const getOpenIndex = () => {
    return menuItems.findIndex((item) =>
      item.sub.some((subItem) => subItem.url === pathname)
    );
  };

  const [openIndex, setOpenIndex] = useState(getOpenIndex());

  useEffect(() => {
    setOpenIndex(getOpenIndex());
  }, [pathname]);

  const toggleMenu = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Card className="w-64 h-screen sticky top-0 border-r shadow-none bg-white dark:bg-zinc-950 flex flex-col justify-between">
      <div className="flex-1 overflow-y-auto p-4">
        <h2 className="text-lg font-semibold mb-2 text-zinc-900 dark:text-zinc-50">
          Kullanıcı Paneli
        </h2>
        <Separator className="mb-4 bg-zinc-200 dark:bg-zinc-800" />
        <ul className="space-y-1">
          {menuItems.map((item, index) => (
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

      <div className="border-t border-zinc-200 dark:border-zinc-800 p-4 flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarFallback>{`Ceyhun Türkmen`.charAt(0)}</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <span className="text-sm font-medium text-zinc-900 dark:text-zinc-50">
              Ceyhun Türkmen
            </span>
            <span className="text-xs text-zinc-500 dark:text-zinc-400">
              Kullanıcı
            </span>
          </div>
        </div>

        <Button variant="outline" className="w-full">
          Çıkış Yap
        </Button>
      </div>
    </Card>
  );
}
