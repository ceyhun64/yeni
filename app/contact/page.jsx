// app/contact/page.tsx

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin } from "lucide-react";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

export default function ContactPage() {
  return (
    <div>
      <Navbar />
      <div className="flex justify-center items-center min-h-screen bg-white text-black p-4 md:p-10">
        <div className="max-w-6xl w-full mx-auto">
          {/* Başlık Bölümü */}
          <div className="mb-10">
            <p className="text-sm font-semibold text-gray-500 mb-2">
              <span className="flex items-center">
                <span className="h-4 w-4 border rounded-full mr-2"></span> Bize
                Ulaşın
              </span>
            </p>
            <h2 className="text-4xl font-serif font-bold mb-4">
              Bizimle İletişime Geçin
            </h2>

            <p className="text-lg text-gray-600">
              Size yardımcı olmak için buradayız — her türlü soru veya geri
              bildiriminiz için bize ulaşabilirsiniz.
            </p>
          </div>

          {/* İletişim Formu ve Bilgileri Bölümü */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
            {/* Form Alanı */}
            <div className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Ad Soyad</Label>
                <Input id="name" placeholder="" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">E-posta</Label>
                <Input id="email" type="email" placeholder="" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Mesajınız</Label>
                <Textarea
                  id="message"
                  placeholder="Mesajınızı yazın..."
                  rows={8}
                />
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="terms" />
                <Label
                  htmlFor="terms"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  <span className="underline">Şartları</span> kabul ediyorum
                </Label>
              </div>
              <Button className="w-full bg-black text-white hover:bg-gray-800">
                Gönder
              </Button>
            </div>

            {/* İletişim Bilgileri Alanı */}
            <div className="space-y-12 text-gray-700">
              {/* E-posta Bilgisi */}
              <div>
                <div className="flex items-center text-black mb-2">
                  <Mail className="h-5 w-5 mr-2" />
                  <h3 className="text-lg font-semibold">E-posta</h3>
                </div>
                <p className="text-sm">
                  Sorularınız veya yardıma ihtiyacınız mı var? Bize e-posta
                  gönderin, 24 saat içinde yanıt verelim.
                </p>
                <a
                  href="mailto:hello@relative.io"
                  className="text-black hover:underline mt-2 inline-block"
                >
                  hello@relative.io
                </a>
              </div>

              {/* Telefon Bilgisi */}
              <div>
                <div className="flex items-center text-black mb-2">
                  <Phone className="h-5 w-5 mr-2" />
                  <h3 className="text-lg font-semibold">Telefon</h3>
                </div>
                <p className="text-sm">
                  Sohbet etmeyi mi tercih ediyorsunuz? Pazartesi–Cuma,
                  09:00–17:00 arasında bizi arayabilirsiniz.
                </p>
                <p className="text-black font-semibold mt-2">
                  +90 (312) 123-4567
                </p>
              </div>

              {/* Adres Bilgisi */}
              <div>
                <div className="flex items-center text-black mb-2">
                  <MapPin className="h-5 w-5 mr-2" />
                  <h3 className="text-lg font-semibold">Ofis</h3>
                </div>
                <p className="text-sm">
                  Bizi ofisimizde ziyaret edin: İnşaat Mah. Malzeme Cad. No:123,
                  Ankara
                </p>
                <a
                  href="#"
                  className="flex items-center text-black font-semibold hover:underline mt-2"
                >
                  Yol Tarifi Al
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
