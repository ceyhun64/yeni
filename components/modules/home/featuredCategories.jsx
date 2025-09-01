"use client";

import React from "react";
import {
  Hammer,
  BrickWall,
  Paintbrush,
  PlugZap,
  Factory,
  Droplet,
  Wrench,
  Layers,
} from "lucide-react";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const FeaturedCategories = () => {
  return (
    <section className="py-20 px-30">
      <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0 mb-4">
        Öne Çıkan Kategoriler
      </h2>
      <div className="container">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-6 lg:grid-cols-12">
          <Card className="relative h-60 overflow-hidden rounded-3xl border md:col-span-2 md:row-span-2 lg:col-span-4 lg:h-[400px]">
            <Image
              src="/featuredCategory/cimento.jpeg"
              alt="Çimento & Kum"
              fill
              className="absolute inset-0 h-full w-full object-cover"
            />
            <CardContent className="z-10 flex h-full flex-col justify-end p-6 bg-black/40">
              <h2 className="text-left text-lg font-medium text-white">
                Çimento & Kum
              </h2>
              <div className="absolute left-6 top-6 z-10">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20">
                  <BrickWall className="h-5 w-5 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Tuğla & Briket */}
          <Card className="relative h-60 overflow-hidden rounded-3xl border md:col-span-2 md:row-span-2 lg:col-span-4 lg:h-[400px]">
            <Image
              src="/featuredCategory/tugla.jpg"
              alt="Tuğla & Briket"
              fill
              className="absolute inset-0 h-full w-full object-cover"
            />
            <CardContent className="z-10 flex h-full flex-col justify-end p-6 bg-black/40">
              <h2 className="text-left text-lg font-medium text-white">
                Tuğla & Briket
              </h2>
              <div className="absolute left-6 top-6 z-10">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20">
                  <BrickWall className="h-5 w-5 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Boya & Kimyasallar */}
          <Card className="relative h-60 overflow-hidden rounded-3xl border md:col-span-2 md:row-span-2 lg:col-span-4 lg:h-[400px]">
            <Image
              src="/featuredCategory/boya.jpeg"
              alt="Boya & Kimyasallar"
              fill
              className="absolute inset-0 h-full w-full object-cover"
            />
            <CardContent className="z-10 flex h-full flex-col justify-end p-6 bg-black/40">
              <h2 className="text-left text-lg font-medium text-white">
                Boya & Kimyasallar
              </h2>
              <div className="absolute left-6 top-6 z-10">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20">
                  <BrickWall className="h-5 w-5 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Elektrik & Tesisat */}
          <Card className="relative col-span-1 h-60 rounded-3xl md:col-span-2 md:h-[300px] lg:col-span-3">
            <CardContent className="flex h-full flex-col items-center justify-center p-6">
              <PlugZap className="h-10 w-10 mb-4 text-primary" />
              <h2 className="text-lg font-medium">Elektrik & Tesisat</h2>
            </CardContent>
          </Card>

          {/* Yalıtım Malzemeleri */}
          <Card className="relative col-span-1 h-60 overflow-hidden rounded-3xl md:col-span-3 md:h-[300px] lg:col-span-5">
            <CardContent className="flex h-full flex-col items-center justify-center p-6">
              <Layers className="h-10 w-10 mb-4 text-primary" />
              <h2 className="text-lg font-medium">Yalıtım Malzemeleri</h2>
            </CardContent>
          </Card>

          {/* El Aletleri & Makinalar */}
          <Card className="bg-muted relative col-span-1 h-60 rounded-3xl md:col-span-2 md:h-[300px] lg:col-span-4">
            <CardContent className="flex h-full flex-col items-center justify-center p-6">
              <Wrench className="h-10 w-10 mb-4 text-primary" />
              <h2 className="text-lg font-medium mb-2">
                El Aletleri & Makinalar
              </h2>
              <Button>Ürünlere Göz At</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export { FeaturedCategories };
