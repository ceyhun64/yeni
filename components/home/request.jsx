"use client";
import React from "react";
import Link from "next/link";
import {
  FileText,
  Paperclip,
  Clock,
  Zap,
  ShieldCheck,
  Star,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { AuroraBackground } from "../io/aurora-background";

export default function Request() {
  return (
    <section className="relative py-4 px-6 md:px-20  rounded-3xl overflow-hidden">
      <div className="w-full rounded-3xl p-8 md:p-12 mx-auto z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Sol taraf - 1 üstte, 2 altta görsel */}
        <div className="grid grid-rows-2 gap-4 w-full h-full">
          {/* Üst görsel */}
          <div className="relative w-full h-full row-span-1">
            <Image
              src="/banner/banner2.jpg"
              alt="Talep Görseli"
              className="rounded-2xl shadow-xl object-cover transition-transform duration-500 hover:scale-105"
              fill
            />
          </div>

          {/* Alt iki görsel */}
          <div className="grid grid-cols-2 gap-4 row-span-1 h-full">
            <div className="relative w-full h-full">
              <Image
                src="/banner/banner2.jpg"
                alt="Talep Görseli"
                className="rounded-2xl shadow-xl object-cover transition-transform duration-500 hover:scale-105"
                fill
              />
            </div>
            <div className="relative w-full h-full">
              <Image
                src="/banner/banner2.jpg"
                alt="Talep Görseli"
                className="rounded-2xl shadow-xl object-cover transition-transform duration-500 hover:scale-105"
                fill
              />
            </div>
          </div>
        </div>

        {/* Sağ taraf - Metin ve talep akışı */}
        <AuroraBackground>
          <div className="space-y-6 text-left shadow-lg p-8 rounded-2xl z-10">
            <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
              Talep Sürecini Kolaylaştıran Modern Sistem
            </h2>
            <p className="leading-7 [&:not(:first-child)]:mt-6">
              Sistemimiz standart e-ticaret deneyimlerinden farklı olarak size
              zaman kazandırır, süreçleri şeffaflaştırır ve taleplerinizi hızlı
              bir şekilde yönetmenizi sağlar.
            </p>

            <ul className="space-y-3 text-gray-700 dark:text-gray-300">
              <li className="flex items-center gap-3">
                <ShieldCheck className="w-6 h-6 text-green-500" />
                <span className="text-base font-medium">
                  Güvenli ve şeffaf süreç
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-6 h-6 text-blue-500" />
                <span className="text-base font-medium">
                  Talebinizi anlık takip edin
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Zap className="w-6 h-6 text-yellow-500" />
                <span className="text-base font-medium">
                  Hızlı geri dönüş ve çözüm
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Star className="w-6 h-6 text-purple-500" />
                <span className="text-base font-medium">
                  Müşteri memnuniyeti odaklı
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Paperclip className="w-6 h-6 text-pink-500" />
                <span className="text-base font-medium">
                  Belgelerinizi kolayca yükleyin
                </span>
              </li>
            </ul>

            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
              Yeni bir talep oluşturmak için sepetine ürün ekle
            </h3>
            <p className="text-muted-foreground text-sm">
              Formu doldurun ve sistemimiz talebinizi güvenli bir şekilde
              başlatsın.
            </p>
            <div className="text-sm text-gray-500 dark:text-gray-300 mt-4">
              Tüm taleplerinizi{" "}
              <Link
                href="/taleplerim"
                className="underline font-medium hover:text-indigo-600"
              >
                Taleplerim
              </Link>{" "}
              sayfasından görüntüleyebilirsiniz.
            </div>

            <form className="flex flex-col sm:flex-row gap-4 mt-2">
              <Link href="/talep">
                <Button
                  type="submit"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-blue-500 hover:from-indigo-700 hover:to-blue-600 text-white shadow-lg"
                >
                  Ürün Ekle
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
            </form>
          </div>
        </AuroraBackground>
      </div>
    </section>
  );
}
