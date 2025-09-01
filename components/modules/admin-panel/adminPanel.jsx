import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, ShoppingCart, CreditCard, Activity ,LayoutDashboard} from "lucide-react";
import AdminSideBar from "./adminSideBar";

export default function AdminPanel() {
  const stats = [
    {
      icon: Users,
      title: "Toplam Kullanıcı",
      value: "1,245",
      desc: "Sisteme kayıtlı kullanıcılar",
    },
    {
      icon: ShoppingCart,
      title: "Aktif Siparişler",
      value: "87",
      desc: "Devam eden siparişler",
    },
    {
      icon: CreditCard,
      title: "Bugünkü Ödemeler",
      value: "₺12.430",
      desc: "Tamamlanan ödemeler",
    },
    {
      icon: Activity,
      title: "Sistem Logları",
      value: "152",
      desc: "Son 24 saatte kayıt",
    },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sol Menü */}
      <div className="w-64">
        <AdminSideBar />
      </div>

      {/* Sağ Dashboard */}
      <div className="flex-1 p-10 space-y-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-800 flex items-center gap-2">
            <LayoutDashboard className="w-8 h-8 text-primary" />
            Yönetici Paneli
          </h1>{" "}
          <p className="text-gray-600 max-w-2xl">
            Yönetici olarak kullanıcıları yönetebilir, siparişleri takip
            edebilir, ödeme durumlarını inceleyebilir ve sistem aktivitelerini
            kontrol edebilirsiniz.
          </p>
        </div>

        {/* İstatistik Kartları */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <Card
              key={i}
              className="hover:shadow-lg transition-shadow border border-gray-200"
            >
              <CardHeader className="flex flex-col items-center">
                <stat.icon className="w-10 h-10 text-gray-700 mb-2" />
                <CardTitle className="text-lg text-gray-800">
                  {stat.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                <p className="text-gray-500 text-sm">{stat.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
