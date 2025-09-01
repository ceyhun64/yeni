"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

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
      image:
        "/products/cimento.png",
    },
    {
      id: "tiles",
      title: "Seramik ve Fayans",
      description:
        "Modern ve dayanıklı seramik ve fayans seçeneklerimiz ile mekanlarınızı güzelleştirin.",
      href: "/urunler/seramik-fayans",
      image:
        "/products/seramik.jpg",
    },
    {
      id: "paint",
      title: "İnşaat Boyaları",
      description:
        "Dış ve iç mekanlar için uzun ömürlü, çevre dostu boyalar ile mekanlarınızı renklendirin.",
      href: "/urunler/boya",
      image:
        "/products/boya.png",
    },
    {
      id: "tools",
      title: "El Aletleri",
      description:
        "Profesyonel işçilik için dayanıklı ve ergonomik el aletleri koleksiyonumuz.",
      href: "/urunler/el-aletleri",
      image:
        "/products/alet.jpg",
    },
    {
      id: "insulation",
      title: "Isı ve Ses Yalıtımı",
      description:
        "Binalarınız için enerji tasarruflu ve etkili yalıtım çözümleri.",
      href: "/urunler/yalitim",
      image:
        "/products/ısı.jpg",
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
    <section className="py-10 px-30">
      <div className="container">
        <div className="mb-8 flex items-end justify-between md:mb-14 lg:mb-16">
          <div className="flex flex-col gap-4">
            <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0 mb-4">
              Öne Çıkan İnşaat Ürünleri
            </h2>
            <p className="max-w-lg text-muted-foreground">
              En kaliteli inşaat malzemelerini uygun fiyatlarla sunuyoruz.
              Beton, fayans, boya ve el aletleri gibi ürünlerimizle
              projelerinizi kusursuz tamamlayın.
            </p>
          </div>
          <div className="hidden shrink-0 gap-2 md:flex">
            <Button
              size="icon"
              variant="ghost"
              onClick={() => carouselApi?.scrollPrev()}
              disabled={!canScrollPrev}
              className="disabled:pointer-events-auto"
            >
              <ArrowLeft className="size-5" />
            </Button>
            <Button
              size="icon"
              variant="ghost"
              onClick={() => carouselApi?.scrollNext()}
              disabled={!canScrollNext}
              className="disabled:pointer-events-auto"
            >
              <ArrowRight className="size-5" />
            </Button>
          </div>
        </div>
      </div>

      <div className="w-full">
        <Carousel
          setApi={setCarouselApi}
          opts={{
            breakpoints: {
              "(max-width: 768px)": {
                dragFree: true,
              },
            },
          }}
        >
          <CarouselContent className="ml-0 2xl:mr-[max(0rem,calc(50vw-700px))] 2xl:ml-[max(8rem,calc(50vw-700px))]">
            {data.map((dat) => (
              <CarouselItem
                key={dat.id}
                className="max-w-[320px] pl-[20px] lg:max-w-[360px]"
              >
                <a href={dat.href} className="group rounded-xl">
                  <div className="group relative h-full min-h-[27rem] max-w-full overflow-hidden rounded-xl md:aspect-5/4 lg:aspect-16/9">
                    <img
                      src={dat.image}
                      alt={dat.title}
                      className="absolute h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 h-full bg-[linear-gradient(transparent_20%,var(--primary)_100%)] mix-blend-multiply" />
                    <div className="absolute inset-x-0 bottom-0 flex flex-col items-start p-6 text-primary-foreground md:p-8">
                      <div className="mb-2 pt-4 text-xl font-semibold md:mb-3 md:pt-4 lg:pt-4">
                        {dat.title}
                      </div>
                      <div className="mb-8 line-clamp-2 md:mb-12 lg:mb-9">
                        {dat.description}
                      </div>
                      <div className="flex items-center text-sm">
                        İncele{" "}
                        <ArrowRight className="ml-2 size-5 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>
                </a>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        <div className="mt-8 flex justify-center gap-2">
          {data.map((_, index) => (
            <button
              key={index}
              className={`h-2 w-2 rounded-full transition-colors ${
                currentSlide === index ? "bg-primary" : "bg-primary/20"
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
