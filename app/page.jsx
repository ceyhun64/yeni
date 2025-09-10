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
  Hammer,
} from "lucide-react";
import Navbar from "@/components/layout/navbar";
import Link from "next/link";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <div className="min-h-screen bg-[#F0F2F5] flex flex-col items-center py-6">
        {/* Ana İçerik */}
        <main className="w-full text-center">
          {/* Başlık */}
          <h1 className="text-4xl font-bold text-[#333] mb-3">Hoş Geldiniz</h1>
          <p className="text-base text-gray-600 mb-6 max-w-3xl mx-auto">
            İnşaat ve tadilat projeleriniz için ihtiyacınız olan tüm hizmetleri
            tek platformda bulun. Peşinatsız işe başlama, HAKEDİŞ sisteminde
            ödeme ve iş planı, profesyonel ekibimiz, kaliteli hizmet ve
            zamanında teslim iş anlayışıyla TÜM TÜRKİYE'DE YANINIZDAYIZ. Her
            proje bir şantiye, her şantiye bir proje stratejisiyle emeğinize ve
            işinize saygı duyarak temelimizi attık.
          </p>

          <h2
            style={{ fontFamily: '"Dancing Script", cursive' }}
            className="text-3xl text-[#007EA7] mb-8 font-extrabold"
          >
            "Temelden Zirveye..."
          </h2>

          {/* Kart Hiyerarşisi */}
          <div className="flex flex-col items-center space-y-3">
            {/* Üst Kart */}
            <Link href="/jobpool" className="w-full max-w-sm">
              <Card className="bg-[#006494] text-white shadow-lg hover:scale-105 transition-transform duration-200 cursor-pointer">
                <CardHeader className="flex flex-col items-center text-center p-2">
                  <LayoutDashboard className="h-5 w-5 mb-1" />
                  <CardTitle className="text-base">İş Havuzu</CardTitle>
                  <CardDescription className="text-[#B2D6E7] text-xs">
                    Aktif projeler
                  </CardDescription>
                </CardHeader>
              </Card>
            </Link>

            {/* Orta Kartlar */}
            <div className="grid md:grid-cols-2 gap-3 w-full max-w-3xl">
              <Link href="/maliyet-hesaplama">
                <Card className="bg-[#007EA7] text-white shadow-lg hover:scale-105 transition-transform duration-200 cursor-pointer">
                  <CardHeader className="flex flex-col items-center text-center p-2">
                    <Calculator className="h-5 w-5 mb-1" />
                    <CardTitle className="text-base">
                      Maliyet Hesaplama
                    </CardTitle>
                    <CardDescription className="text-[#B2D6E7] text-xs">
                      Proje, inşaat ve tadilat
                    </CardDescription>
                  </CardHeader>
                </Card>
              </Link>

              <Link href="/showroom/rooms">
                <Card className="bg-[#007EA7] text-white shadow-lg hover:scale-105 transition-transform duration-200 cursor-pointer">
                  <CardHeader className="flex flex-col items-center text-center p-2">
                    <Sparkles className="h-5 w-5 mb-1" />
                    <CardTitle className="text-base">Showroom</CardTitle>
                    <CardDescription className="text-[#B2D6E7] text-xs">
                      Oda kombinleri, devam eden projeler, tamamlanmış projeler
                    </CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            </div>

            {/* Alt Kartlar */}
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-3 w-full max-w-6xl px-4">
              <Link href="/proje-mimari">
                <Card className="bg-[#0089A8] text-white shadow-lg hover:scale-105 transition-transform duration-200 cursor-pointer">
                  <CardHeader className="flex flex-col items-center text-center p-2">
                    <Building className="h-5 w-5 mb-1" />
                    <CardTitle className="text-base">Proje</CardTitle>
                    <CardDescription className="text-[#B2D6E7] text-xs">
                      Mimari ve 3D görselleştirme
                    </CardDescription>
                  </CardHeader>
                </Card>
              </Link>

              <Link href="/kiralama">
                <Card className="bg-[#0089A8] text-white shadow-lg hover:scale-105 transition-transform duration-200 cursor-pointer">
                  <CardHeader className="flex flex-col items-center text-center p-2">
                    <Hammer className="h-5 w-5 mb-1" />
                    <CardTitle className="text-base">Kiralama</CardTitle>
                    <CardDescription className="text-[#B2D6E7] text-xs">
                      İş makinası ve ekipman
                    </CardDescription>
                  </CardHeader>
                </Card>
              </Link>

              <Link href="/hizmet">
                <Card className="bg-[#0089A8] text-white shadow-lg hover:scale-105 transition-transform duration-200 cursor-pointer">
                  <CardHeader className="flex flex-col items-center text-center p-2">
                    <Wrench className="h-5 w-5 mb-1" />
                    <CardTitle className="text-base">Hizmet</CardTitle>
                    <CardDescription className="text-[#B2D6E7] text-xs">
                      Taşeron, usta ve uygulama ekibi
                    </CardDescription>
                  </CardHeader>
                </Card>
              </Link>

              <Link href="/products">
                <Card className="bg-[#0089A8] text-white shadow-lg hover:scale-105 transition-transform duration-200 cursor-pointer">
                  <CardHeader className="flex flex-col items-center text-center p-2">
                    <Package className="h-5 w-5 mb-1" />
                    <CardTitle className="text-base">Ürün Tedariği</CardTitle>
                    <CardDescription className="text-[#B2D6E7] text-xs">
                      Yapı ürün ve malzemeleri
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
