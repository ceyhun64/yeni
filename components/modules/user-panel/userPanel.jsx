import React from "react";
import UserSideBar from "./userSideBar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, HandCoins, ShoppingCart, RefreshCw } from "lucide-react";

export default function UserPanel() {
  const features = [
    {
      icon: FileText,
      title: "Talep Oluştur",
      desc: "İhtiyacınızı sisteme girerek admin'den teklif alın.",
    },
    {
      icon: HandCoins,
      title: "Teklifleri Görüntüle",
      desc: "Admin tarafından hazırlanan teklifleri inceleyin.",
    },
    {
      icon: ShoppingCart,
      title: "Sipariş Ver",
      desc: "Beğendiğiniz teklifi kabul ederek siparişinizi oluşturun.",
    },
    {
      icon: RefreshCw,
      title: "Takip Et",
      desc: "Sipariş ve ödeme durumunuzu kolayca takip edin.",
    },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50 px-30">
      {/* Sol Menü */}
      <div className="w-64">
        <UserSideBar />
      </div>

      {/* Sağ Ana Sayfa */}
      <div className="flex-1 p-10 space-y-8">
        <h1 className="text-3xl font-bold text-gray-800">Hoşgeldiniz 👋</h1>
        <p className="text-gray-600 max-w-xl">
          Bu panel üzerinden taleplerinizi oluşturabilir, teklifler alabilir,
          siparişlerinizi yönetebilir ve geçmiş işlemlerinizi
          görüntüleyebilirsiniz.
        </p>

        {/* Grid Kartlar */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <Card
              key={i}
              className="hover:shadow-lg transition-shadow border border-gray-200"
            >
              <CardHeader className="flex flex-col items-center">
                <feature.icon className="w-10 h-10 text-gray-700 mb-2" />
                <CardTitle className="text-lg text-gray-800">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500 text-sm text-center">
                  {feature.desc}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
