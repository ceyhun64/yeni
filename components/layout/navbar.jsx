"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Search, User, ShoppingBag, X, ArrowRight } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import { GradientText } from "@/components/io/gradient-text";


export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-30 py-2 border-b ">
      {/* Logo */}
      <div className="text-xl text-bold text-serif ">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo/logo.jpeg" alt="logo" width={30} height={30} />
          <GradientText
            className="text-2xl font-bold font-sans"
            text="inşaat"
          />
        </Link>
      </div>

      {/* Navigasyon Menüsü */}
      <NavigationMenu>
        <NavigationMenuList>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost">Showroom</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuItem asChild>
                <Link href="/showroom/teklifal">
                  Konfor tarzını seç (Teklif Al)
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/showroom/tamamlanan-projeler">
                  Tamamlanan Projeler
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/showroom/devam-eden-projeler">
                  Devam Eden Projeler
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <NavigationMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost">İnşaat & Tadilat Hesaplama</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuItem asChild>
                  <Link href="/showroom/teklifal">Temelden İnşaat</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/showroom/tamamlanan-projeler">
                    Dış Cephe Tadilat
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/showroom/devam-eden-projeler">
                    İç Oda Tadilat
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost">Hizmetlerimiz</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuItem asChild>
                  <Link href="/showroom/teklifal">Malzemeler</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/showroom/tamamlanan-projeler">
                    Uygulama Hizmeti
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/showroom/devam-eden-projeler">
                    Kiralama Hizmeti
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      {/* İkonlar */}
      <div className="flex gap-3">
        {/* Kullanıcı */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" aria-label="Kullanıcı">
              <User className="h-5 w-5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="center">
            <DropdownMenuItem asChild>
              <Link href="/login">Giriş Yap</Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/register">Kayıt Ol</Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Sepet */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost">
              <ShoppingBag className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Alışveriş Sepeti</SheetTitle>
              <SheetDescription>
                Sepetinizdeki ürünleri görüntüleyebilir, miktarlarını
                değiştirebilir veya ödeme yapabilirsiniz.
              </SheetDescription>
            </SheetHeader>

            <div className="flex-1 px-4 py-6 overflow-y-auto">
              <div className="space-y-6">
                {/* Ürün 1 */}
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <img
                      src="/products/product1.jpg"
                      alt="Ürün 1"
                      className="w-16 h-16 rounded-md object-cover"
                    />
                    <div>
                      <p className="font-medium">Ürün Adı 1</p>
                      <p className="text-sm text-muted-foreground">₺199.90</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button size="sm" variant="outline">
                      -
                    </Button>
                    <span>1</span>
                    <Button size="sm" variant="outline">
                      +
                    </Button>
                  </div>
                </div>

                {/* Ürün 2 */}
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <img
                      src="/products/product2.jpg"
                      alt="Ürün 2"
                      className="w-16 h-16 rounded-md object-cover"
                    />
                    <div>
                      <p className="font-medium">Ürün Adı 2</p>
                      <p className="text-sm text-muted-foreground">₺89.90</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button size="sm" variant="outline">
                      -
                    </Button>
                    <span>2</span>
                    <Button size="sm" variant="outline">
                      +
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            <SheetFooter className="flex flex-col gap-2 border-t pt-4">
              <div className="flex justify-between text-lg font-bold">
                <span>Toplam:</span>
                <span>₺379.70</span>
              </div>
              <Button className="w-full">Ödeme Yap</Button>
              <SheetClose asChild>
                <Button variant="outline" className="w-full">
                  Alışverişe Devam Et
                </Button>
              </SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
