"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

export default function Login() {
  return (
    <div>
      <Navbar />
      <div className="w-full min-h-screen flex items-center justify-center bg-white px-4">
        <div className="w-full max-w-5xl grid md:grid-cols-2  border-gray-200">
          {/* Sol taraf - Giriş */}
          <div className="p-10 flex flex-col justify-center">
            <h2 className="text-4xl font-serif font-bold mb-8">Giriş Yap</h2>
            <h3 className="text-4xl font-serif font-bold mb-8">
              (müşteri/firma)
            </h3>

            <div className="mb-4">
              <Label
                htmlFor="email"
                className="text-xs font-semibold text-gray-600 uppercase tracking-wide"
              >
                E-posta
              </Label>
              <Input
                id="email"
                type="email"
                className="mt-1 rounded-md border border-gray-200 focus:border-black focus:ring-0"
              />
            </div>

            <div className="mb-6">
              <Label
                htmlFor="password"
                className="text-xs font-semibold text-gray-600 uppercase tracking-wide"
              >
                Şifre
              </Label>
              <Input
                id="password"
                type="password"
                className="mt-1 rounded-md border border-gray-200 focus:border-black focus:ring-0"
              />
            </div>

            <Button>Giriş Yap</Button>

            <Link
              href="forget-password"
              className="mt-4 text-sm font-semibold hover:underline"
            >
              Şifrenizi mi unuttunuz?
            </Link>
          </div>

          {/* Sağ taraf - Kayıt */}
          <div className="p-10 bg-white flex flex-col justify-center border-l border-orange-500">
            <h2 className="text-4xl font-serif font-bold mb-4">
              Yeni misiniz?
            </h2>
            <p className="text-gray-600 mb-6 font-['Mozilla_Headline']">
              Bizimle hesap oluşturun ve şunları yapabilirsiniz:
            </p>
            <ul className="list-disc list-inside space-y-1 text-gray-700 mb-8 font-['Mozilla_Headline']">
              <li>Daha hızlı alışveriş yapabilirsiniz</li>
              <li>Birden fazla teslimat adresi kaydedebilirsiniz</li>
              <li>Sipariş geçmişinize erişebilirsiniz</li>
              <li>Yeni siparişleri takip edebilirsiniz</li>
              <li>İstek listenize ürün kaydedebilirsiniz</li>
            </ul>
            <Button>
              <Link href="/register">Hesap Oluştur</Link>
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
