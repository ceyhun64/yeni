"use client";
import React from "react";
import Link from "next/link";
import { FileText, Paperclip, Clock, Zap, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AuroraBackground } from "../io/aurora-background";

export default function Request() {
  return (
    <section className="relative py-5 px-30 rounded-2xl overflow-hidden bg-white">
        {/* Kart container */}
        <div className=" w-full rounded-2xl p-8 md:p-12 mx-4 z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Sol taraf - Resim */}
          <div className="flex justify-center md:justify-start">
            <img
              src="/banner/banner1.jpg" // buraya görsel yolunu ekle
              alt="Talep Görseli"
              className="rounded-xl shadow-lg w-full max-w-sm object-cover"
            />
          </div>

          {/* Sağ taraf - Yazılar ve form */}
          <div className="space-y-6 text-left">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100">
              Talep Nasıl Oluşturulur?
            </h2>
            <ul className="space-y-3 text-gray-600 dark:text-gray-300">
              <li className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-[#b45a56]" />
                İhtiyacınızı detaylı şekilde belirtin.
              </li>
              <li className="flex items-center gap-2">
                <Paperclip className="w-5 h-5 text-[#b45a56]" />
                Gerekli belgeleri kolayca yükleyin.
              </li>
              <li className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-[#b45a56]" />
                Talebinizin durumunu anlık olarak takip edin.
              </li>
              <li className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-[#b45a56]" />
                Hızlı geri dönüş ve çözüm alın.
              </li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
              Hemen Yeni Bir Talep Oluştur
            </h3>
            <p className="text-gray-500 dark:text-gray-300">
              Formu doldurun ve süreci başlatın.
            </p>

            <form className="flex flex-col sm:flex-row gap-4">
              <Button
                type="submit"
                className="inline-flex items-center gap-2 bg-[#2a4661] hover:bg-[#1f344e] text-white"
              >
                Talep Oluştur
                <ArrowRight className="w-5 h-5" />
              </Button>
            </form>

            <div className="text-sm text-gray-500 dark:text-gray-300 mt-2">
              Tüm taleplerinizi{" "}
              <Link
                href="/taleplerim"
                className="underline hover:text-indigo-600"
              >
                Taleplerim
              </Link>{" "}
              sayfasından görüntüleyebilirsiniz.
            </div>
          </div>
        </div>
    </section>
  );
}
