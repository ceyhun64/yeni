import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  LayoutDashboard,
  Calculator,
  Building,
  Wrench,
  Package,
  Sparkles,
} from "lucide-react";
import Navbar from "@/components/layout/navbar";
import Link from "next/link";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <div className="min-h-screen bg-[#F0F2F5] flex flex-col items-center py-8 ">
        {/* Ana İçerik */}
        <main className="w-full  text-center">
          <h1 className="text-4xl font-bold text-[#333] mb-4">Hoş Geldiniz</h1>
          <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
            İnşaat ve tadilat projeleriniz için ihtiyacınız olan tüm hizmetleri
            tek platformda bulun. Profesyonel ekibimiz ve kaliteli hizmet
            anlayışımızla yanınızdayız.
          </p>

          {/* Kart Hiyerarşisi */}
          <div className="flex flex-col items-center space-y-4">
            {/* Üst Kart */}
            <Link href="/jobpool" className="w-full max-w-sm">
              <Card className="bg-[#006494] text-white shadow-lg hover:scale-105 transition-transform duration-200 cursor-pointer">
                <CardHeader className="flex flex-col items-center text-center p-2">
                  <LayoutDashboard className="h-6 w-6 mb-1" />
                  <CardTitle className="text-base">İş Havuzu</CardTitle>
                  <CardDescription className="text-[#B2D6E7] text-sm">
                    Aktif projeler
                  </CardDescription>
                </CardHeader>
              </Card>
            </Link>

            {/* Orta Kartlar */}
            <div className="grid md:grid-cols-2 gap-4 w-full max-w-4xl">
              <Link href="/maliyet-hesaplama">
                <Card className="bg-[#007EA7] text-white shadow-lg hover:scale-105 transition-transform duration-200 cursor-pointer">
                  <CardHeader className="flex flex-col items-center text-center p-2">
                    <Calculator className="h-6 w-6 mb-1" />
                    <CardTitle className="text-base">
                      Maliyet Hesaplama
                    </CardTitle>
                    <CardDescription className="text-[#B2D6E7] text-sm">
                      Proje maliyetleri
                    </CardDescription>
                  </CardHeader>
                </Card>
              </Link>

              <Link href="/showroom/rooms">
                <Card className="bg-[#007EA7] text-white shadow-lg hover:scale-105 transition-transform duration-200 cursor-pointer">
                  <CardHeader className="flex flex-col items-center text-center p-2">
                    <Sparkles className="h-6 w-6 mb-1" />
                    <CardTitle className="text-base">Showroom</CardTitle>
                    <CardDescription className="text-[#B2D6E7] text-sm">
                      Ürün galerisi
                    </CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            </div>

            {/* Alt Kartlar */}
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-8xl px-10">
              <Link href="/proje-mimari">
                <Card className="bg-[#0089A8] text-white shadow-lg hover:scale-105 transition-transform duration-200 cursor-pointer">
                  <CardHeader className="flex flex-col items-center text-center p-2">
                    <Building className="h-6 w-6 mb-1" />
                    <CardTitle className="text-base">Proje</CardTitle>
                    <CardDescription className="text-[#B2D6E7] text-sm">
                      Mimari
                    </CardDescription>
                  </CardHeader>
                </Card>
              </Link>

              <Link href="/new-build-construction/kitchen-renovation">
                <Card className="bg-[#0089A8] text-white shadow-lg hover:scale-105 transition-transform duration-200 cursor-pointer">
                  <CardHeader className="flex flex-col items-center text-center p-2">
                    <Wrench className="h-6 w-6 mb-1" />
                    <CardTitle className="text-base">
                      İnşaat & Tadilat
                    </CardTitle>
                    <CardDescription className="text-[#B2D6E7] text-sm">
                      Yapı işleri
                    </CardDescription>
                  </CardHeader>
                </Card>
              </Link>

              <Link href="/services/application-service/housing-manufacturing">
                <Card className="bg-[#0089A8] text-white shadow-lg hover:scale-105 transition-transform duration-200 cursor-pointer">
                  <CardHeader className="flex flex-col items-center text-center p-2">
                    <LayoutDashboard className="h-6 w-6 mb-1" />
                    <CardTitle className="text-base">Hizmet</CardTitle>
                    <CardDescription className="text-[#B2D6E7] text-sm">
                      Teknik
                    </CardDescription>
                  </CardHeader>
                </Card>
              </Link>

              <Link href="/products">
                <Card className="bg-[#0089A8] text-white shadow-lg hover:scale-105 transition-transform duration-200 cursor-pointer">
                  <CardHeader className="flex flex-col items-center text-center p-2">
                    <Package className="h-6 w-6 mb-1" />
                    <CardTitle className="text-base">Ürün Tedariği</CardTitle>
                    <CardDescription className="text-[#B2D6E7] text-sm">
                      Malzeme
                    </CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
