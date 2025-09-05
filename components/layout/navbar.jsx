"use client";
import React, { useState } from "react";
import Link from "next/link";
import {
  User,
  ShoppingBag,
  Settings,
  Plus,
  Minus,
  Star,
  Package,
  Building2,
  Hammer,
  Wrench,
  Paintbrush,
  Bath,
  Sofa,
  Home,
  Building,
  ClipboardList,
  Layers,
  Truck,
  ToolCase,
  Boxes,
  CheckCircle2,
  Bed,
} from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
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
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import { GradientText } from "../io/gradient-text";
import products from "@/seed/products.json";

export default function Navbar() {
  const [cart, setCart] = useState(
    products.slice(0, 2).map((p, i) => ({
      id: p.id,
      name: p.title,
      image: p.image,
      rate: p.rate,
      qty: i + 1,
    }))
  );

  const updateQty = (id, delta) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, qty: Math.max(0, item.qty + delta) } : item
      )
    );
  };

  const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);

  return (
    <nav className="flex items-center justify-between px-16 py-2 border-b bg-gradient-to-b from-gray-200 via-white to-white">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo/logo.jpg" alt="logo" width={30} height={30} />
          <h2 className="text-2xl font-serif font-bold text-slate-600">
            <GradientText text="inşaat" neon={false} />
          </h2>
        </Link>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-4">
        <NavigationMenu>
          <NavigationMenuList className="flex items-center gap-2">
            {/* İş Havuzu */}
            <NavigationMenuItem>
              <Link href="/jobpool">
                <Button variant="ghost" className="flex items-center gap-2">
                  <ClipboardList className="h-4 w-4 text-blue-600" />
                  İş Havuzu
                </Button>
              </Link>
            </NavigationMenuItem>

            {/* Showroom */}
            <NavigationMenuItem>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="flex items-center gap-2">
                    <Building2 className="h-4 w-4 text-purple-600" />
                    Showroom
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                  <DropdownMenuItem asChild>
                    <Link
                      href="/showroom/rooms"
                      className="flex items-center gap-2"
                    >
                      <Sofa className="h-4 w-4 text-orange-600" />
                      Konfor tarzını seç (Teklif Al)
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link
                      href="/showroom/tamamlanan-projeler"
                      className="flex items-center gap-2"
                    >
                      <CheckCircle2 className="h-4 w-4 text-green-600" />
                      Tamamlanan Projeler
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link
                      href="/showroom/devam-eden-projeler"
                      className="flex items-center gap-2"
                    >
                      <Layers className="h-4 w-4 text-yellow-600" />
                      Devam Eden Projeler
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </NavigationMenuItem>

            {/* İnşaat & Tadilat */}
            <NavigationMenuItem>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="flex items-center gap-2">
                    <Hammer className="h-4 w-4 text-red-600" />
                    İnşaat & Tadilat Hesaplama
                  </Button>
                </DropdownMenuTrigger>

                <DropdownMenuContent className="w-56">
                  <DropdownMenuSub>
                    <DropdownMenuSubTrigger className="flex items-center justify-between">
                      <Building className="h-4 w-4 text-indigo-600 mr-2" />
                      Temelden İnşaat
                    </DropdownMenuSubTrigger>

                    <DropdownMenuSubContent sideOffset={5}>
                      <DropdownMenuItem asChild>
                        <Link
                          href="/new-build-construction/kitchen-renovation"
                          className="flex items-center gap-2"
                        >
                          <Wrench className="h-4 w-4 text-orange-500" />
                          Mutfak Tadilat
                        </Link>
                      </DropdownMenuItem>

                      <DropdownMenuItem asChild>
                        <Link
                          href="/new-build-construction/entrance-renovation"
                          className="flex items-center gap-2"
                        >
                          <Home className="h-4 w-4 text-blue-500" />
                          Hol-Giriş Tadilat
                        </Link>
                      </DropdownMenuItem>

                      <DropdownMenuItem asChild>
                        <Link
                          href="/new-build-construction/kids-room-renovation"
                          className="flex items-center gap-2"
                        >
                          <Boxes className="h-4 w-4 text-pink-500" />
                          Çocuk Odası Tadilat
                        </Link>
                      </DropdownMenuItem>

                      <DropdownMenuItem asChild>
                        <Link
                          href="/new-build-construction/bedroom-renovation"
                          className="flex items-center gap-2"
                        >
                          <Bed className="h-4 w-4 text-purple-500" />
                          Yatak Odası Tadilat
                        </Link>
                      </DropdownMenuItem>

                      <DropdownMenuItem asChild>
                        <Link
                          href="/new-build-construction/livingroom-renovation"
                          className="flex items-center gap-2"
                        >
                          <Sofa className="h-4 w-4 text-amber-500" />
                          Oturma Odası Tadilat
                        </Link>
                      </DropdownMenuItem>

                      <DropdownMenuItem asChild>
                        <Link
                          href="/new-build-construction/salon-renovation"
                          className="flex items-center gap-2"
                        >
                          <Home className="h-4 w-4 text-teal-500" />
                          Salon Tadilat
                        </Link>
                      </DropdownMenuItem>

                      <DropdownMenuItem asChild>
                        <Link
                          href="/new-build-construction/balcony-renovation"
                          className="flex items-center gap-2"
                        >
                          <Layers className="h-4 w-4 text-lime-500" />
                          Balkon Tadilat
                        </Link>
                      </DropdownMenuItem>

                      <DropdownMenuItem asChild>
                        <Link
                          href="/new-build-construction/toilet-renovation"
                          className="flex items-center gap-2"
                        >
                          <ToolCase className="h-4 w-4 text-red-500" />
                          Lavabo-WC Tadilat
                        </Link>
                      </DropdownMenuItem>

                      <DropdownMenuItem asChild>
                        <Link
                          href="/new-build-construction/bathroom-renovation"
                          className="flex items-center gap-2"
                        >
                          <Bath className="h-4 w-4 text-cyan-500" />
                          Banyo Tadilat (Komple/Kısmi)
                        </Link>
                      </DropdownMenuItem>

                      <DropdownMenuItem asChild>
                        <Link
                          href="/new-build-construction/complete-renovation"
                          className="flex items-center gap-2"
                        >
                          <Hammer className="h-4 w-4 text-indigo-500" />
                          Ev Tadilat (Komple Tadilat)
                        </Link>
                      </DropdownMenuItem>
                    </DropdownMenuSubContent>
                  </DropdownMenuSub>

                  <DropdownMenuItem asChild>
                    <Link
                      href="/showroom/tamamlanan-projeler"
                      className="flex items-center gap-2"
                    >
                      <Paintbrush className="h-4 w-4 text-pink-600" />
                      Dış Cephe Tadilat
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link
                      href="/showroom/devam-eden-projeler"
                      className="flex items-center gap-2"
                    >
                      <Home className="h-4 w-4 text-teal-600" />
                      İç Oda Tadilat
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </NavigationMenuItem>

            {/* Hizmetlerimiz */}
            <NavigationMenuItem>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="flex items-center gap-2">
                    <Truck className="h-4 w-4 text-amber-600" />
                    Hizmetlerimiz
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                  <DropdownMenuItem asChild>
                    <Link href="/products" className="flex items-center gap-2">
                      <Boxes className="h-4 w-4 text-purple-600" />
                      Malzemeler
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link
                      href="/showroom/tamamlanan-projeler"
                      className="flex items-center gap-2"
                    >
                      <ToolCase className="h-4 w-4 text-blue-600" />
                      Uygulama Hizmeti
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link
                      href="/showroom/devam-eden-projeler"
                      className="flex items-center gap-2"
                    >
                      <ClipboardList className="h-4 w-4 text-green-600" />
                      Kiralama Hizmeti
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      {/* Sağ ikonlar */}
      <div className="flex items-center gap-2">
        {/* Ayarlar */}
        <Link href="/user-panel">
          <Button variant="ghost" size="icon">
            <Settings className="h-5 w-5" />
          </Button>
        </Link>

        {/* Kullanıcı */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon">
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
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingBag className="h-5 w-5" />
              {totalQty > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {totalQty}
                </span>
              )}
            </Button>
          </SheetTrigger>
          <SheetContent className="flex flex-col w-full sm:max-w-md">
            <SheetHeader>
              <SheetTitle className="flex items-center gap-2">
                <ShoppingBag className="h-5 w-5 text-primary" />
                Alışveriş Sepeti
              </SheetTitle>
              <SheetDescription>
                Sepetinizdeki ürünleri görüntüleyebilir, miktarlarını
                değiştirebilir veya talep oluşturabilirsiniz.
              </SheetDescription>
            </SheetHeader>

            <div className="flex-1 px-2 py-6 overflow-y-auto">
              <div className="space-y-6">
                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between gap-4 border rounded-lg p-3 shadow-sm hover:shadow-md transition"
                  >
                    <div className="flex items-center gap-3">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 rounded-md object-cover ring-1 ring-border"
                      />
                      <div className="space-y-1">
                        <p className="font-medium flex items-center gap-1">
                          <Package className="h-4 w-4 text-muted-foreground" />
                          {item.name}
                        </p>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <Star className="h-3 w-3 text-yellow-500" />
                          {item.rate}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <Button
                        size="icon"
                        variant="outline"
                        onClick={() => updateQty(item.id, -1)}
                        disabled={item.qty === 0}
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                      <span className="w-6 text-center font-medium">
                        {item.qty}
                      </span>
                      <Button
                        size="icon"
                        variant="outline"
                        onClick={() => updateQty(item.id, 1)}
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <SheetFooter className="flex flex-col gap-2 border-t pt-4">
              <Link href={"/request"}>
                <Button className="w-full bg-orange-500 hover:bg-orange-600">
                  Hemen Teklif Al
                </Button>
              </Link>
              <SheetClose asChild>
                <Button variant="outline" className="w-full">
                  Alışverişe Devam Et
                </Button>
              </SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>

        {/* Hamburger Menu (Mobil) */}
        <div className="flex md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:max-w-xs">
              <SheetHeader>
                <SheetTitle>Menü</SheetTitle>
              </SheetHeader>
              <div className="flex flex-col mt-4 gap-2">
                <Link href="/jobpool">
                  <Button variant="ghost" className="w-full">
                    İş Havuzu
                  </Button>
                </Link>
                {/* Showroom Dropdown */}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="w-full justify-between">
                      Showroom
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-full">
                    <DropdownMenuItem asChild>
                      <Link href="/showroom/rooms">
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
                {/* İnşaat & Tadilat Dropdown */}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="w-full justify-between">
                      İnşaat & Tadilat Hesaplama
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-full">
                    <DropdownMenuItem>
                      Temelden İnşaat
                      <DropdownMenuContent>
                        <DropdownMenuItem>Mutfak Tadilat</DropdownMenuItem>
                        <DropdownMenuItem>Hol-Giriş Tadilat</DropdownMenuItem>
                        <DropdownMenuItem>Çocuk Odası Tadilat</DropdownMenuItem>
                        <DropdownMenuItem>Yatak Odası Tadilat</DropdownMenuItem>
                        <DropdownMenuItem>
                          Oturma Odası Tadilat
                        </DropdownMenuItem>
                        <DropdownMenuItem>Salon Tadilat</DropdownMenuItem>
                        <DropdownMenuItem>Balkon Tadilat</DropdownMenuItem>
                        <DropdownMenuItem>Lavabo-WC Tadilat</DropdownMenuItem>
                        <DropdownMenuItem>
                          Banyo Tadilat (Komple/Kısmi)
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          Ev Tadilat (Komple Tadilat)
                        </DropdownMenuItem>
                      </DropdownMenuContent>
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
                {/* Hizmetlerimiz Dropdown */}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="w-full justify-between">
                      Hizmetlerimiz
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-full">
                    <DropdownMenuItem asChild>
                      <Link href="/products">Malzemeler</Link>
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
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
