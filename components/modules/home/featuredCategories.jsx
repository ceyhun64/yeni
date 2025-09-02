"use client";

import React from "react";
import {
  BrickWall,
  Paintbrush,
  PlugZap,
  Layers,
  Wrench,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const FeaturedCategories = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold tracking-tight text-gray-800 mb-10 text-center">
          Öne Çıkan Kategoriler
        </h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-6 lg:grid-cols-12">
          {/* Çimento & Kum */}
          <Card className="relative h-60 overflow-hidden rounded-3xl border md:col-span-2 md:row-span-2 lg:col-span-4 lg:h-[400px] group">
            <Image
              src="/featuredCategory/cimento.jpeg"
              alt="Çimento & Kum"
              fill
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <CardContent className="relative z-10 flex h-full flex-col justify-end p-6 bg-gradient-to-t from-black/70 via-black/30 to-transparent">
              <h2 className="text-left text-lg font-semibold text-white">
                Çimento & Kum
              </h2>
              <div className="absolute left-6 top-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-600 shadow-lg">
                  <BrickWall className="h-6 w-6 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Tuğla & Briket */}
          <Card className="relative h-60 overflow-hidden rounded-3xl border md:col-span-2 md:row-span-2 lg:col-span-4 lg:h-[400px] group">
            <Image
              src="/featuredCategory/tugla.jpg"
              alt="Tuğla & Briket"
              fill
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <CardContent className="relative z-10 flex h-full flex-col justify-end p-6 bg-gradient-to-t from-black/70 via-black/30 to-transparent">
              <h2 className="text-left text-lg font-semibold text-white">
                Tuğla & Briket
              </h2>
              <div className="absolute left-6 top-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-600 shadow-lg">
                  <BrickWall className="h-6 w-6 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Boya & Kimyasallar */}
          <Card className="relative h-60 overflow-hidden rounded-3xl border md:col-span-2 md:row-span-2 lg:col-span-4 lg:h-[400px] group">
            <Image
              src="/featuredCategory/boya.png"
              alt="Boya & Kimyasallar"
              fill
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <CardContent className="relative z-10 flex h-full flex-col justify-end p-6 bg-gradient-to-t from-black/70 via-black/30 to-transparent">
              <h2 className="text-left text-lg font-semibold text-white">
                Boya & Kimyasallar
              </h2>
              <div className="absolute left-6 top-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-pink-600 shadow-lg">
                  <Paintbrush className="h-6 w-6 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Elektrik & Tesisat */}
          <Card className="relative h-60 overflow-hidden rounded-3xl border md:col-span-2 md:h-[300px] lg:col-span-3 group">
            <Image
              src="/featuredCategory/elektrik.png"
              alt="Çimento & Kum"
              fill
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <CardContent className="relative z-10 flex h-full flex-col justify-end p-6 bg-gradient-to-t from-black/50 via-black/20 to-transparent">
              <h2 className="text-left text-lg font-semibold text-white">
                Elektrik & Tesisat
              </h2>
              <div className="absolute left-6 top-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-600 shadow-lg">
                  <PlugZap className="h-6 w-6 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Yalıtım Malzemeleri */}
          <Card className="relative h-60 overflow-hidden rounded-3xl border md:col-span-3 md:h-[300px] lg:col-span-5 group">
            <Image
              src="/featuredCategory/yalitim.jpg"
              alt="Çimento & Kum"
              fill
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <CardContent className="relative z-10 flex h-full flex-col justify-end p-6 bg-gradient-to-t from-black/50 via-black/20 to-transparent">
              <h2 className="text-left text-lg font-semibold text-white">
                Yalıtım Malzemeleri
              </h2>
              <div className="absolute left-6 top-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-600 shadow-lg">
                  <Layers className="h-6 w-6 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* El Aletleri & Makinalar */}
          <Card className="relative h-60 overflow-hidden rounded-3xl border md:col-span-2 md:h-[300px] lg:col-span-4 group">
            <Image
              src="/featuredCategory/alet3.jpg"
              alt="Çimento & Kum"
              fill
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <CardContent className="relative z-10 flex h-full flex-col justify-end p-6 bg-gradient-to-t from-black/50 via-black/20 to-transparent">
              <h2 className="text-left text-lg font-semibold text-white mb-2">
                El Aletleri & Makinalar
              </h2>
              <div className="absolute left-6 top-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-yellow-600 shadow-lg">
                  <Wrench className="h-6 w-6 text-white" />
                </div>
              </div>
              <Button
                type="button"
                className="inline-flex items-center gap-1.5 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white shadow-lg rounded-full px-4 py-2 mt-4 transition-transform hover:scale-105"
              >
                Ürünlere Göz At
                <ArrowRight className="w-4 h-4" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export { FeaturedCategories };
