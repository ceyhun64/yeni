"use client";

import React, { useState } from "react";
import UserSideBar from "../userSideBar";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { User, MapPin, Upload } from "lucide-react";
import cities from "@/seed/cities.json";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";

import districts from "@/seed/districts.json";

export default function ProfileForm({ onSubmit }) {
  const [date, setDate] = useState();

  const [formData, setFormData] = useState({
    avatar: "",
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    birthDate: "",
    gender: "",
    city: "",
    district: "",
    address: "",
    note: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setFormData({ ...formData, avatar: url });
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sol sidebar */}
      <div className="w-64">
        <UserSideBar />
      </div>

      {/* Sağ ana içerik */}
      <div className="flex-1 p-8">
        <Card className="rounded-3xl shadow-sm p-6">
          <CardHeader className="px-0 pt-0">
            <CardTitle className="text-2xl font-bold">
              Profil Bilgileri
            </CardTitle>
            <CardDescription>
              Kişisel bilgilerinizi güncelleyebilirsiniz.
            </CardDescription>
          </CardHeader>
          <Separator />
          <CardContent className="space-y-6 px-0">
            {/* Avatar + Kişisel Bilgiler Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
              {/* Avatar */}
              <div className="flex flex-col items-center justify-center mt-12">
                <div className="relative w-24 h-24">
                  <Avatar className="w-full h-full">
                    {formData.avatar ? (
                      <AvatarImage
                        src={formData.avatar}
                        className="w-full h-full object-cover rounded-full"
                      />
                    ) : (
                      <AvatarFallback className="w-full h-full rounded-full">
                        <User className="w-12 h-12" />
                      </AvatarFallback>
                    )}
                  </Avatar>
                  <label className="absolute bottom-0 right-0 flex items-center justify-center w-8 h-8 bg-orange-500 text-white rounded-full cursor-pointer hover:bg-orange-600">
                    <Upload className="w-4 h-4" />
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={handleAvatarChange}
                    />
                  </label>
                </div>
              </div>

              {/* Kişisel Bilgiler */}
              <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="firstName">İsim</Label>
                  <Input
                    id="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="rounded-xl"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="lastName">Soyisim</Label>
                  <Input
                    id="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="rounded-xl"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="phone">Telefon</Label>
                  <Input
                    id="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="rounded-xl"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email">E-posta</Label>
                  <Input
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="rounded-xl"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="birthDate">Dogum Tarihi</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className="w-full text-left rounded-xl"
                      >
                        {date ? format(date, "PPP") : "Doğum Tarihi Seç"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                      />
                    </PopoverContent>
                  </Popover>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="gender">Cinsiyet</Label>
                  <Select
                    value={formData.gender}
                    onValueChange={(value) =>
                      setFormData({ ...formData, gender: value })
                    }
                  >
                    <SelectTrigger id="gender" className="rounded-xl w-full">
                      <SelectValue placeholder="Seçiniz" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="male">Erkek</SelectItem>
                      <SelectItem value="female">Kadın</SelectItem>
                      <SelectItem value="other">Diğer</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            <Separator />

            {/* Adres Bilgileri */}
            <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-primary" /> Adres Bilgileri
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="grid gap-2 md:col-span-2">
                <Label htmlFor="address">Adres</Label>
                <Textarea
                  id="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="rounded-xl w-full"
                  rows={3}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="city">İl</Label>
                <Select
                  value={formData.city}
                  onValueChange={(value) =>
                    setFormData({ ...formData, city: value, district: "" })
                  }
                >
                  <SelectTrigger id="city" className="rounded-xl w-full">
                    <SelectValue placeholder="Seçiniz" />
                  </SelectTrigger>
                  <SelectContent>
                    {cities.map((city) => (
                      <SelectItem key={city.sehir_id} value={city.sehir_adi}>
                        {city.sehir_adi}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="district">İlçe</Label>
                <Select
                  value={formData.district}
                  onValueChange={(value) =>
                    setFormData({ ...formData, district: value })
                  }
                  disabled={!formData.city}
                >
                  <SelectTrigger id="district" className="rounded-xl w-full">
                    <SelectValue placeholder="Seçiniz" />
                  </SelectTrigger>
                  <SelectContent>
                    {districts
                      .filter((d) => d.sehir_adi === formData.city)
                      .map((district) => (
                        <SelectItem
                          key={district.ilce_id}
                          value={district.ilce_adi}
                        >
                          {district.ilce_adi}
                        </SelectItem>
                      ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <Button
              onClick={() => onSubmit(formData)}
              className="mt-4 bg-orange-500 text-white hover:bg-orange-600"
            >
              Profili Kaydet
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
