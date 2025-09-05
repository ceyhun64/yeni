"use client";

import React from "react";
import UserSideBar from "./userSideBar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  FileText,
  HandCoins,
  ShoppingCart,
  RefreshCw,
  BarChart2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export default function UserPanel() {
  const features = [
    {
      icon: FileText,
      title: "Talep Oluştur",
      desc: "İhtiyacınızı sisteme girerek admin'den teklif alın.",
      color: "from-blue-400 to-blue-600 text-white",
    },
    {
      icon: HandCoins,
      title: "Teklifleri Görüntüle",
      desc: "Admin tarafından hazırlanan teklifleri inceleyin.",
      color: "from-green-400 to-green-600 text-white",
    },
    {
      icon: ShoppingCart,
      title: "Sipariş Ver",
      desc: "Beğendiğiniz teklifi kabul ederek siparişinizi oluşturun.",
      color: "from-yellow-400 to-yellow-600 text-white",
    },
    {
      icon: RefreshCw,
      title: "Takip Et",
      desc: "Sipariş ve ödeme durumunuzu kolayca takip edin.",
      color: "from-purple-400 to-purple-600 text-white",
    },
  ];

  const stats = [
    {
      title: "Toplam Talepler",
      value: 24,
      icon: FileText,
      color: "bg-gradient-to-tr from-blue-100 to-blue-200 text-blue-800",
    },
    {
      title: "Aktif Teklifler",
      value: 8,
      icon: HandCoins,
      color: "bg-gradient-to-tr from-green-100 to-green-200 text-green-800",
    },
    {
      title: "Siparişler",
      value: 12,
      icon: ShoppingCart,
      color: "bg-gradient-to-tr from-yellow-100 to-yellow-200 text-yellow-800",
    },
    {
      title: "Ödemeler",
      value: 5,
      icon: RefreshCw,
      color: "bg-gradient-to-tr from-purple-100 to-purple-200 text-purple-800",
    },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-zinc-950">
      {/* Sol Menü */}
      <div className="w-64">
        <UserSideBar />
      </div>

      {/* Sağ Ana Sayfa */}
      <div className="flex-1 p-10 space-y-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-50">
              Hoşgeldiniz, Ceyhun 👋
            </h1>
            <p className="text-gray-600 dark:text-gray-400 max-w-xl mt-1">
              Taleplerinizi oluşturabilir, teklifler alabilir, siparişlerinizi
              yönetebilir ve geçmiş işlemlerinizi görüntüleyebilirsiniz.
            </p>
          </div>
          <Avatar className="w-12 h-12">
            <AvatarFallback>C</AvatarFallback>
          </Avatar>
        </div>

        {/* Dashboard Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <Card
              key={i}
              className="p-5 hover:shadow-xl transition-all border border-gray-200 dark:border-zinc-800 rounded-xl"
            >
              <div className="flex items-center gap-4">
                <div
                  className={`p-4 rounded-lg ${stat.color} flex items-center justify-center`}
                >
                  <stat.icon className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {stat.title}
                  </p>
                  <p className="text-2xl font-bold text-gray-800 dark:text-gray-50">
                    {stat.value}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Quick Actions */}
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-50">
          Hızlı İşlemler
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <Card
              key={i}
              className="p-6 border border-gray-200 dark:border-zinc-800 rounded-xl hover:shadow-2xl transition-all transform hover:-translate-y-1"
            >
              <CardHeader className="flex flex-col items-center justify-center">
                <div
                  className={`p-4 rounded-full mb-4 bg-gradient-to-tr ${feature.color} flex items-center justify-center`}
                >
                  <feature.icon className="w-8 h-8" />
                </div>
                <CardTitle className="text-lg text-gray-800 dark:text-gray-50 text-center">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500 dark:text-gray-400 text-sm text-center">
                  {feature.desc}
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  className="mt-4 w-full hover:bg-gradient-to-r hover:from-orange-400 hover:to-orange-400 hover:text-white transition-all"
                >
                  Başla
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Analytics Section */}
        <div className="mt-10">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-50 mb-4">
            Analytics
          </h2>
          <Card className="p-6 border border-gray-200 dark:border-zinc-800 rounded-xl hover:shadow-lg transition-shadow">
            <div className="flex flex-col items-center justify-center gap-4">
              <BarChart2 className="w-10 h-10 text-gray-700 dark:text-gray-300" />
              <p className="text-gray-700 dark:text-gray-300 text-center">
                Grafikler ve raporlar burada gösterilebilir.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
