import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Truck, HandCoins, Building2 } from "lucide-react"; // 🔥 İkonlar
import { EtheralShadow } from "../io/etheral-shadow";
import { GradientText } from "../io/gradient-text";

export default function HeroSearch() {
  return (
    <section className="relative h-[800px] flex items-center justify-center sm:px-8 lg:px-16 px-6 overflow-hidden ">
      {/* SilkBackground arka plan */}
      <div className="absolute inset-0 py-10 px-30 rounded-2xl">
        <EtheralShadow
          color="rgba(128, 128, 128, 1)"
          animation={{ scale: 100, speed: 90 }}
          noise={{ opacity: 1, scale: 1.2 }}
          sizing="fill"
        ></EtheralShadow>
        {/* Koyu overlay okunabilirlik için */}
        <div className="absolute inset-0 " />
      </div>

      {/* İçerik */}
      <div className="relative z-10 w-full max-w-5xl text-center">
        <h1 className="text-3xl sm:text-5xl font-extrabold text-black leading-tight mb-4">
          İnşaat Malzemelerinde <br />
          <GradientText
            className="text-5xl font-bold font-sans"
            text="Sonsuz Seçenek"
            neon={false}
          />
        </h1>
        <p className="text-lg sm:text-xl text-gray-900 mb-8 max-w-3xl mx-auto">
          Demirden betona, seramikten elektrik malzemelerine kadar tüm
          ihtiyaçlarınız için doğru adres. Uygun fiyat, hızlı teslimat ve geniş
          ürün yelpazesiyle projelerinize güç katın.
        </p>

        {/* Arama */}
        <div className="bg-white rounded-xl p-6 sm:p-8  mb-6">
          <form className="flex w-full overflow-hidden rounded-lg border border-[#b45a56]">
            <Input
              type="text"
              placeholder="İstediğin ürünü ara..."
              className="flex-1 px-6 py-4 text-gray-700 focus:outline-none"
            />
            <Button
              type="submit"
              className="bg-[#ce6530] hover:bg-[#b44d1d] text-black"
            >
              Ara
            </Button>
          </form>
        </div>

        {/* CTA */}
        <Link
          href="/urunler"
          className="inline-block mt-4 px-8 py-3 rounded-lg bg-[#ce6530] text-black font-semibold hover:bg-[#b44d1d] transition"
        >
          Hemen Keşfet
        </Link>

        {/* Güven unsurları */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 text-black text-sm sm:text-base">
          <div className="bg-white/50 p-4 rounded-lg flex flex-col items-center">
            <Truck className="w-8 h-8 mb-2 text-[#ce6530]" />
            <span>Hızlı Teslimat</span>
          </div>
          <div className="bg-white/50 p-4 rounded-lg flex flex-col items-center">
            <HandCoins className="w-8 h-8 mb-2 text-[#ce6530]" />
            <span>Uygun Fiyat Garantisi</span>
          </div>
          <div className="bg-white/50 p-4 rounded-lg flex flex-col items-center">
            <Building2 className="w-8 h-8 mb-2 text-[#ce6530]" />
            <span>Binlerce Ürün Çeşidi</span>
          </div>
        </div>
      </div>
    </section>
  );
}
