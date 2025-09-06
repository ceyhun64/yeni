"use client";
import React, { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {
  Bed,
  Bath,
  Ruler,
  Sparkles,
  Heart,
  Filter,
  Plus,
  Search,
  Hammer,
} from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import ROOMS from "../../../seed/rooms.json";

const STYLES = [
  { value: "all", label: "Tümü" },
  { value: "modern", label: "Modern" },
  { value: "scandinavian", label: "İskandinav" },
  { value: "industrial", label: "Endüstriyel" },
  { value: "bohemian", label: "Bohem" },
  { value: "japanese", label: "Japon / Wabi-Sabi" },
  { value: "kids", label: "Çocuk" },
  { value: "mediterranean", label: "Akdeniz" },
  { value: "classic", label: "Klasik" },
];

export default function Rooms() {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [style, setStyle] = useState("all");
  const [onlyFavorites, setOnlyFavorites] = useState(false);
  const [favorites, setFavorites] = useState([]);

  const list = useMemo(() => {
    let data = [...ROOMS];
    if (style !== "all") data = data.filter((r) => r.style === style);
    if (query.trim()) {
      const q = query.toLowerCase();
      data = data.filter(
        (r) =>
          r.title.toLowerCase().includes(q) ||
          r.desc.toLowerCase().includes(q) ||
          r.tags.some((t) => t.toLowerCase().includes(q))
      );
    }
    if (onlyFavorites) data = data.filter((r) => favorites.includes(r.id));
    return data;
  }, [query, style, onlyFavorites, favorites]);

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
            <h1 className="flex items-center gap-2 text-2xl md:text-4xl font-bold tracking-tight text-gray-900">
             Ev Tadilat (Komple Tadilat)
              <Hammer className="h-8 w-8 text-gray-600"  />
            </h1>
            <p className="text-muted-foreground mt-2 max-w-2xl">
              Beğendiğiniz tasarım için hızlıca{" "}
              <span className="font-medium">teklif</span> alın. Filtreleyin,
              favorileyin ve detaylara göz atın.
            </p>
          </div>

          {/* Arama & Filtreler */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 md:gap-3 w-full md:w-auto">
            <div className="relative col-span-2">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Ara: salon, mutfak, modern..."
                className="pl-9"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </div>

            <Select value={style} onValueChange={setStyle}>
              <SelectTrigger className="border rounded-md px-3 py-2">
                <SelectValue placeholder="Select a style" />
              </SelectTrigger>
              <SelectContent>
                {STYLES.map((s) => (
                  <SelectItem key={s.value} value={s.value}>
                    {s.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
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
          {list.map((room, idx) => (
            <motion.div
              key={room.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.03 * idx }}
            >
              <Card className="overflow-hidden rounded-2xl border-muted shadow-sm hover:shadow-md transition-shadow">
                <div className="relative aspect-[16/10] overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={room.img}
                    alt={room.title}
                    className="h-full w-full object-cover hover:scale-[1.02] transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute left-3 top-3 flex gap-2">
                    <Badge variant="secondary" className="backdrop-blur-md/30">
                      <Sparkles className="mr-1 h-3.5 w-3.5" /> {room.style}
                    </Badge>
                  </div>

                  <button
                    onClick={() => toggleFav(room.id)}
                    className="absolute right-3 top-3 inline-flex items-center justify-center rounded-full bg-background/70 backdrop-blur p-2 hover:bg-background"
                    aria-label="Favoriye ekle"
                  >
                    <Heart
                      className={`h-5 w-5 ${
                        favorites.includes(room.id) ? "fill-current" : ""
                      }`}
                    />
                  </button>
                </div>

                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">{room.title}</CardTitle>
                  <CardDescription>{room.desc}</CardDescription>
                </CardHeader>

                <CardContent className="pt-0">
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    {room.tags.map((t) => (
                      <Badge key={t} variant="outline" className="rounded-full">
                        {t}
                      </Badge>
                    ))}
                  </div>

                  <div className="grid grid-cols-3 gap-3 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Ruler className="h-4 w-4" />
                      <span>{room.sizeM2} m²</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Bed className="h-4 w-4" />
                      <span>{room.beds}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Bath className="h-4 w-4" />
                      <span>{room.baths}</span>
                    </div>
                  </div>
                </CardContent>

                <CardFooter className="flex items-center justify-between">
                  <Button
                    className="gap-2"
                    onClick={() =>
                      router.push(
                        `/new-build-construction/complete-renovation/${room.id}/get-an-offer`
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
                        `/new-build-construction/complete-renovation/${room.id}/get-an-offer`
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
