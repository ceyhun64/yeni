"use client";
import React, { useMemo, useState } from "react";
import Image from "next/image"; // <-- Next.js Image
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {
  Home,
  Ruler,
  Building2,
  Heart,
  Sparkles,
  Plus,
  Search,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

import PROJECTS from "../../../seed/projects.json"; // yeni seed dosyası

export default function Projects() {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [onlyFavorites, setOnlyFavorites] = useState(false);
  const [favorites, setFavorites] = useState([]);

  const list = useMemo(() => {
    let data = [...PROJECTS];
    if (query.trim()) {
      const q = query.toLowerCase();
      data = data.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.desc.toLowerCase().includes(q) ||
          p.type.toLowerCase().includes(q)
      );
    }
    if (onlyFavorites) data = data.filter((p) => favorites.includes(p.id));
    return data;
  }, [query, onlyFavorites, favorites]);

  const toggleFav = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        {/* Başlık */}
        <motion.header
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <h1 className="flex items-center gap-2 text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
              İnşaat Projeleri
            </h1>
            <p className="text-muted-foreground mt-2 max-w-2xl">
              Farklı tipte ev ve konut projelerini inceleyin. Detaylara bakın,
              favorileyin ve hızlıca <span className="font-medium">teklif</span>{" "}
              alın.
            </p>
          </div>

          {/* Arama */}
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Ara: villa, müstakil, dubleks..."
              className="pl-9"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
        </motion.header>

        <div className="flex items-center gap-3 mt-5">
          <Switch
            id="fav-switch"
            checked={onlyFavorites}
            onCheckedChange={setOnlyFavorites}
          />
          <Label htmlFor="fav-switch" className="text-sm text-muted-foreground">
            Sadece favoriler
          </Label>
        </div>

        <Separator className="my-6" />

        {/* Kartlar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {list.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.03 * idx }}
            >
              <Card className="overflow-hidden rounded-2xl border-muted shadow-sm hover:shadow-md transition-shadow">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={project.img}
                    alt={project.title}
                    fill
                    className="object-cover hover:scale-[1.02] transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <button
                    onClick={() => toggleFav(project.id)}
                    className="absolute right-3 top-3 inline-flex items-center justify-center rounded-full bg-background/70 backdrop-blur p-2 hover:bg-background"
                    aria-label="Favoriye ekle"
                  >
                    <Heart
                      className={`h-5 w-5 ${
                        favorites.includes(project.id) ? "fill-current" : ""
                      }`}
                    />
                  </button>
                </div>

                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">{project.title}</CardTitle>
                  <CardDescription>{project.desc}</CardDescription>
                </CardHeader>

                <CardContent className="pt-0">
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <Badge variant="secondary">{project.type}</Badge>
                  </div>

                  <div className="grid grid-cols-3 gap-3 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Ruler className="h-4 w-4" />
                      <span>{project.sizeM2} m²</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Building2 className="h-4 w-4" />
                      <span>{project.floors} Kat</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Home className="h-4 w-4" />
                      <span>{project.rooms} Oda</span>
                    </div>
                  </div>
                </CardContent>

                <CardFooter className="flex items-center justify-between">
                  <Button
                    className="gap-2"
                    onClick={() =>
                      router.push(
                        `/new-build-construction/${project.id}/get-an-offer`
                      )
                    }
                  >
                    <Sparkles className="h-4 w-4" /> Teklif Al
                  </Button>
                  <Button
                    variant="ghost"
                    className="gap-2"
                    onClick={() =>
                      router.push(
                        `/new-build-construction/${project.id}/get-an-offer`
                      )
                    }
                  >
                    <Plus className="h-4 w-4" /> Detaylar
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
