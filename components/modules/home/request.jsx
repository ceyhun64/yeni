"use client";
import React from "react";
import Link from "next/link";
import {
  Paperclip,
  Clock,
  Zap,
  ShieldCheck,
  Star,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { AuroraBackground } from "../../io/aurora-background";

export default function Request() {
  return (
    <section className="relative py-20 px-6 md:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Sol taraf - görseller */}
        <div className="grid grid-rows-2 gap-6 w-full h-full">
          {/* Üst görsel */}
          <div className="relative w-full h-full row-span-1 group rounded-2xl overflow-hidden">
            <Image
              src="/banner/banner9.jpg"
              alt="Talep Görseli"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              fill
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent"></div>
          </div>

          {/* Alt iki görsel */}
          <div className="grid grid-cols-2 gap-6 row-span-1 h-full">
            <div className="relative w-full h-full group rounded-2xl overflow-hidden">
              <Image
                src="/banner/banner8.jpg"
                alt="Talep Görseli"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                fill
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent"></div>
            </div>
            <div className="relative w-full h-full group rounded-2xl overflow-hidden">
              <Image
                src="/banner/banner12.jpg"
                alt="Talep Görseli"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                fill
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent"></div>
            </div>
          </div>
        </div>

        {/* Sağ taraf - metin ve talep akışı */}
        <AuroraBackground>
          <div className="relative z-10 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl shadow-2xl p-8 rounded-2xl space-y-6 border border-gray-200 dark:border-gray-700">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
              Talep Sürecini Kolaylaştıran Modern Sistem
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Sistemimiz standart e-ticaret deneyimlerinden farklı olarak size
              zaman kazandırır, süreçleri şeffaflaştırır ve taleplerinizi hızlı
              bir şekilde yönetmenizi sağlar.
            </p>

            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <ShieldCheck className="w-6 h-6 text-green-500" />
                <span className="font-medium">Güvenli ve şeffaf süreç</span>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-6 h-6 text-blue-500" />
                <span className="font-medium">Talebinizi anlık takip edin</span>
              </li>
              <li className="flex items-center gap-3">
                <Zap className="w-6 h-6 text-yellow-500" />
                <span className="font-medium">Hızlı geri dönüş ve çözüm</span>
              </li>
              <li className="flex items-center gap-3">
                <Star className="w-6 h-6 text-purple-500" />
                <span className="font-medium">Müşteri memnuniyeti odaklı</span>
              </li>
              <li className="flex items-center gap-3">
                <Paperclip className="w-6 h-6 text-pink-500" />
                <span className="font-medium">
                  Belgelerinizi kolayca yükleyin
                </span>
              </li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
              Yeni bir talep oluşturmak için sepetine ürün ekle
            </h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              Formu doldurun ve sistemimiz talebinizi güvenli bir şekilde
              başlatsın.
            </p>

            <div className="text-sm text-gray-500 dark:text-gray-400">
              Tüm taleplerinizi{" "}
              <Link
                href="/taleplerim"
                className="underline font-medium hover:text-orange-600"
              >
                Taleplerim
              </Link>{" "}
              sayfasından görüntüleyebilirsiniz.
            </div>

            <div className="mt-6">
              <Link href="/products">
                <Button
                  type="button"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white shadow-lg rounded-full px-6 py-2 transition-transform hover:scale-105"
                >
                  Ürün Ekle
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </AuroraBackground>
      </div>
    </section>
  );
}
