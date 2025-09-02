import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Truck, HandCoins, Building2 } from "lucide-react";
import { EtheralShadow } from "../../io/etheral-shadow";
import { GradientText } from "../../io/gradient-text";

export default function HeroSearch() {
  return (
    <section className="relative h-[800px] flex items-center justify-center sm:px-8 lg:px-16 px-6 overflow-hidden">
      {/* Arka plan */}
      <div className="absolute inset-0 py-10 px-30 rounded-2xl">
        <EtheralShadow
          color="rgba(128, 128, 128, 1)"
          animation={{ scale: 100, speed: 90 }}
          noise={{ opacity: 1, scale: 1.2 }}
          sizing="fill"
        />
        <div className="absolute inset-0" />
      </div>

      {/* İçerik */}
      <div className="relative z-10 w-full max-w-5xl text-center">
        <h1 className="text-3xl sm:text-5xl font-extrabold text-black leading-tight mb-4 font-sans">
          TEMELDEN, ZİRVEYE <br />
          <GradientText
            className="text-5xl "
            text="İNŞAAT ; PROJE, HİZMET VE TEDARİK AĞI"
            neon={false}
          />
        </h1>
        <p className="text-lg sm:text-xl text-gray-900 mb-8 max-w-3xl mx-auto">
          Demirden betona, seramikten elektrik malzemelerine kadar tüm
          ihtiyaçlarınız için doğru adres. Uygun fiyat, hızlı teslimat ve geniş
          ürün yelpazesiyle projelerinize güç katın.
        </p>

        {/* Arama */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 mb-6 shadow-lg">
          <form className="flex w-full overflow-hidden rounded-full border border-orange-400 focus-within:ring-2 focus-within:ring-orange-500 transition">
            <Input
              type="text"
              placeholder="İstediğin ürünü bul..."
              className="flex-1 px-6 py-4 text-gray-700 border-0 focus:outline-none"
            />
            <Button
              type="submit"
              className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-6 rounded-none"
            >
              Ara
            </Button>
          </form>
        </div>

        {/* CTA */}
        <Link
          href="/products"
          className="inline-block mt-4 px-8 py-3 rounded-full bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold hover:from-orange-600 hover:to-red-600 transition-transform hover:scale-105 shadow-lg"
        >
          Hemen Keşfet
        </Link>

        {/* Güven unsurları */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 text-black text-sm sm:text-base">
          <div className="bg-white/70 p-6 rounded-2xl flex flex-col items-center shadow-md hover:shadow-xl transition">
            <Truck className="w-8 h-8 mb-2 text-orange-500" />
            <span className="font-medium">Hızlı Teslimat</span>
          </div>
          <div className="bg-white/70 p-6 rounded-2xl flex flex-col items-center shadow-md hover:shadow-xl transition">
            <HandCoins className="w-8 h-8 mb-2 text-orange-500" />
            <span className="font-medium">Uygun Fiyat Garantisi</span>
          </div>
          <div className="bg-white/70 p-6 rounded-2xl flex flex-col items-center shadow-md hover:shadow-xl transition">
            <Building2 className="w-8 h-8 mb-2 text-orange-500" />
            <span className="font-medium">Binlerce Ürün Çeşidi</span>
          </div>
        </div>
      </div>
    </section>
  );
}
