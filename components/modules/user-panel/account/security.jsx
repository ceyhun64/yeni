"use client";

import React, { useState } from "react";
import UserSideBar from "../userSideBar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Eye, EyeOff } from "lucide-react";

export default function Security() {
  const [formData, setFormData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState({
    current: false,
    new: false,
    confirm: false,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const toggleShow = (field) => {
    setShowPassword({ ...showPassword, [field]: !showPassword[field] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.newPassword !== formData.confirmPassword) {
      alert("Yeni şifre ve tekrar alanı eşleşmeli!");
      return;
    }

    console.log("Şifre güncelleme formu:", formData);
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sol sidebar */}
      <div className="w-64">
        <UserSideBar />
      </div>

      {/* Sağ içerik */}
      <div className="flex-1 p-8">
        <Card className="rounded-3xl shadow-md max-w-xl mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">Şifre Güncelle</CardTitle>
            <CardDescription>
              Hesabınızın güvenliği için şifrenizi buradan değiştirebilirsiniz.
            </CardDescription>
          </CardHeader>
          <Separator className="my-4" />
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              {/** Mevcut Şifre */}
              <div className="relative flex flex-col">
                <Label className={"mb-2"} htmlFor="currentPassword">Mevcut Şifre</Label>
                <Input
                  id="currentPassword"
                  name="currentPassword"
                  type={showPassword.current ? "text" : "password"}
                  value={formData.currentPassword}
                  onChange={handleChange}
                  placeholder="Mevcut şifrenizi girin"
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  onClick={() => toggleShow("current")}
                  className="absolute right-2 top-5.5 p-1 text-gray-400 hover:text-gray-600"
                >
                  {showPassword.current ? (
                    <EyeOff size={16} />
                  ) : (
                    <Eye size={16} />
                  )}
                </Button>
              </div>

              {/** Yeni Şifre */}
              <div className="relative flex flex-col">
                <Label  className={"mb-2"} htmlFor="newPassword">Yeni Şifre</Label>
                <Input
                  id="newPassword"
                  name="newPassword"
                  type={showPassword.new ? "text" : "password"}
                  value={formData.newPassword}
                  onChange={handleChange}
                  placeholder="Yeni şifre"
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  onClick={() => toggleShow("new")}
                  className="absolute right-2 top-5.5 p-1 text-gray-400 hover:text-gray-600"
                >
                  {showPassword.new ? <EyeOff size={16} /> : <Eye size={16} />}
                </Button>
              </div>

              {/** Yeni Şifre (Tekrar) */}
              <div className="relative flex flex-col">
                <Label  className={"mb-2"} htmlFor="confirmPassword">Yeni Şifre (Tekrar)</Label>
                <Input
                  id="confirmPassword"
                  name="confirmPassword"
                  type={showPassword.confirm ? "text" : "password"}
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Yeni şifreyi tekrar girin"
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  onClick={() => toggleShow("confirm")}
                  className="absolute right-2 top-5.5 p-1 text-gray-400 hover:text-gray-600"
                >
                  {showPassword.confirm ? (
                    <EyeOff size={16} />
                  ) : (
                    <Eye size={16} />
                  )}
                </Button>
              </div>

              <Separator className="my-4" />

              <Button
                type="submit"
                className=" bg-orange-500 hover:bg-orange-600 text-white"
              >
                Kaydet
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
