// app/about/page.jsx
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Users, Target, Award, Home, Hammer } from "lucide-react";
import Navbar from "@/components/layout/navbar";

export default function About() {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-[#F9FAFB] py-12 px-6">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Başlık */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold text-gray-800">Hakkımızda</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              İnşaat Tadilat, profesyonel inşaat ve tadilat çözümleri sunan bir
              platformdur. Misyonumuz, müşterilerimize güvenilir, kaliteli ve
              sürdürülebilir hizmetler sağlamaktır.
            </p>
          </div>

          <Separator />

          {/* Misyon & Vizyon */}
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="shadow-lg">
              <CardHeader>
                <Target className="h-8 w-8 text-blue-600 mb-2" />
                <CardTitle>Misyonumuz</CardTitle>
                <CardDescription>
                  Müşterilerimizin ihtiyaçlarını en doğru şekilde analiz ederek
                  kaliteli, ekonomik ve sürdürülebilir projeler sunmak.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="shadow-lg">
              <CardHeader>
                <Award className="h-8 w-8 text-green-600 mb-2" />
                <CardTitle>Vizyonumuz</CardTitle>
                <CardDescription>
                  Türkiye’nin en güvenilir ve yenilikçi inşaat & tadilat
                  platformu olmak, sektörde kaliteyi ve güveni temsil etmek.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>

          {/* Yaptığımız İşler */}
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-3xl font-semibold text-gray-800">
                Yaptığımız İşler
              </h2>
              <p className="text-gray-600">
                Müşterilerimize sunduğumuz başlıca hizmetler ve tamamladığımız
                projeler:
              </p>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
              {[
                {
                  title: "Ev Tadilatı",
                  description: "Modern ve fonksiyonel ev tadilat projeleri.",
                  icon: Home,
                },
                {
                  title: "Ofis Düzenlemeleri",
                  description: "İş yerleri için ergonomik ve şık çözümler.",
                  icon: Hammer,
                },
                {
                  title: "Bina İnşaatı",
                  description:
                    "Konut ve ticari binaların anahtar teslim inşaatı.",
                  icon: Home,
                },
                {
                  title: "Mutfak & Banyo Yenileme",
                  description:
                    "Fonksiyonel ve estetik mutfak & banyo projeleri.",
                  icon: Hammer,
                },
                {
                  title: "Dekorasyon",
                  description:
                    "İç mekan dekorasyonu ve modern tasarım çözümleri.",
                  icon: Home,
                },
                {
                  title: "Proje Yönetimi",
                  description: "Projelerin baştan sona profesyonel yönetimi.",
                  icon: Hammer,
                },
              ].map((project, i) => (
                <Card
                  key={i}
                  className="text-center shadow-md hover:shadow-lg transition"
                >
                  <CardHeader>
                    <project.icon className="h-10 w-10 text-indigo-500 mx-auto mb-2" />
                    <CardTitle className="text-lg">{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
