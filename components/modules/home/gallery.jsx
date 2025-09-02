"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Card } from "@/components/ui/card";

export default function Gallery() {
  const [carouselApi, setCarouselApi] = useState();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const data = [
    {
      id: "cement",
      title: "Portland Çimento",
      description:
        "Yapılarınız için yüksek dayanıklılık ve kaliteli performans sunan premium Portland çimento.",
      href: "/urunler/cimento",
      image: "/products/cimento.png",
    },
    {
      id: "tiles",
      title: "Seramik ve Fayans",
      description:
        "Modern ve dayanıklı seramik ve fayans seçeneklerimiz ile mekanlarınızı güzelleştirin.",
      href: "/urunler/seramik-fayans",
      image: "/products/seramik.jpg",
    },
    {
      id: "paint",
      title: "İnşaat Boyaları",
      description:
        "Dış ve iç mekanlar için uzun ömürlü, çevre dostu boyalar ile mekanlarınızı renklendirin.",
      href: "/urunler/boya",
      image: "/products/boya.png",
    },
    {
      id: "tools",
      title: "El Aletleri",
      description:
        "Profesyonel işçilik için dayanıklı ve ergonomik el aletleri koleksiyonumuz.",
      href: "/urunler/el-aletleri",
      image: "/products/alet.jpg",
    },
    {
      id: "insulation",
      title: "Isı ve Ses Yalıtımı",
      description:
        "Binalarınız için enerji tasarruflu ve etkili yalıtım çözümleri.",
      href: "/urunler/yalitim",
      image: "/products/ısı.jpg",
    },
  ];

  useEffect(() => {
    if (!carouselApi) return;

    const updateSelection = () => {
      setCanScrollPrev(carouselApi.canScrollPrev());
      setCanScrollNext(carouselApi.canScrollNext());
      setCurrentSlide(carouselApi.selectedScrollSnap());
    };

    updateSelection();
    carouselApi.on("select", updateSelection);
    return () => {
      carouselApi.off("select", updateSelection);
    };
  }, [carouselApi]);

  return (
    <section className="py-12 px-30 ">
   
        <div className="container mx-auto">
          <div className="mb-10 flex flex-col md:flex-row items-end justify-between gap-4">
            <div className="flex flex-col gap-2">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-800">
                Öne Çıkan İnşaat Ürünleri
              </h2>
              <p className="max-w-lg text-gray-600">
                En kaliteli inşaat malzemelerini uygun fiyatlarla sunuyoruz.
                Beton, fayans, boya ve el aletleri gibi ürünlerimizle
                projelerinizi kusursuz tamamlayın.
              </p>
            </div>
            <div className="hidden md:flex gap-2">
              <Button
                size="icon"
                variant="ghost"
                onClick={() => carouselApi?.scrollPrev()}
                disabled={!canScrollPrev}
                className="text-orange-600 hover:bg-orange-100"
              >
                <ArrowLeft className="size-5" />
              </Button>
              <Button
                size="icon"
                variant="ghost"
                onClick={() => carouselApi?.scrollNext()}
                disabled={!canScrollNext}
                className="text-orange-600 hover:bg-orange-100"
              >
                <ArrowRight className="size-5" />
              </Button>
            </div>
          </div>

          <Carousel setApi={setCarouselApi}>
            <CarouselContent className="ml-0">
              {data.map((dat) => (
                <CarouselItem
                  key={dat.id}
                  className="max-w-[320px] pl-[20px] lg:max-w-[360px]"
                >
                  <a
                    href={dat.href}
                    className="group rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
                  >
                    <div className="relative h-full min-h-[27rem] max-w-full rounded-xl overflow-hidden">
                      <img
                        src={dat.image}
                        alt={dat.title}
                        className="absolute h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/20 mix-blend-multiply" />
                      <div className="absolute inset-x-0 bottom-0 flex flex-col items-start p-6 text-white">
                        <h3 className="mb-1 text-xl font-semibold">
                          {dat.title}
                        </h3>
                        <p className="mb-4 text-sm line-clamp-2">
                          {dat.description}
                        </p>
                        <div className="flex items-center text-sm font-medium text-orange-500">
                          İncele
                          <ArrowRight className="ml-2 size-5 transition-transform group-hover:translate-x-1" />
                        </div>
                      </div>
                    </div>
                  </a>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          <div className="mt-6 flex justify-center gap-2">
            {data.map((_, index) => (
              <button
                key={index}
                className={`h-2 w-2 rounded-full transition-colors ${
                  currentSlide === index ? "bg-orange-500" : "bg-orange-300"
                }`}
                onClick={() => carouselApi?.scrollTo(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
    </section>
  );
}
