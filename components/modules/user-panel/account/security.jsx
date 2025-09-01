"use client";
import React, { useState } from "react";
import UserSideBar from "../userSideBar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function Security() {
  const [formData, setFormData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.newPassword !== formData.confirmPassword) {
      alert("Yeni şifre ve tekrar alanı eşleşmeli!");
      return;
    }

    // Burada API çağrısı ile şifre güncelleme yapılabilir
    console.log("Şifre güncelleme formu:", formData);
  };

  return (
    <div className="flex px-30 min-h-screen bg-gray-50">
      {/* Sol sidebar */}
      <div className="w-64">
        <UserSideBar />
      </div>

      {/* Sağ taraf: Şifre güncelleme */}
      <div className="flex-1 p-8">
        <h1 className="text-2xl font-bold mb-6">Şifre Güncelle</h1>
        <Card className="p-6 space-y-4">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col space-y-1">
              <Label htmlFor="currentPassword">Mevcut Şifre</Label>
              <Input
                id="currentPassword"
                name="currentPassword"
                type="password"
                value={formData.currentPassword}
                onChange={handleChange}
                placeholder="Mevcut şifrenizi girin"
              />
            </div>

            <div className="flex flex-col space-y-1">
              <Label htmlFor="newPassword">Yeni Şifre</Label>
              <Input
                id="newPassword"
                name="newPassword"
                type="password"
                value={formData.newPassword}
                onChange={handleChange}
                placeholder="Yeni şifre"
              />
            </div>

            <div className="flex flex-col space-y-1">
              <Label htmlFor="confirmPassword">Yeni Şifre (Tekrar)</Label>
              <Input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Yeni şifreyi tekrar girin"
              />
            </div>

            <Separator className="my-4" />

            <Button type="submit" className="w-full">
              Kaydet
            </Button>
          </form>
        </Card>
      </div>
    </div>
  );
}
