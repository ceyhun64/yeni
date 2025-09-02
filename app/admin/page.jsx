"use client";

import { useState } from "react";
import { useRouter } from "next/navigation"; // yönlendirme için
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Mail, Lock, AlertCircle } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter(); // router tanımlandı

  const handleLogin = (e) => {
    e.preventDefault();

    if (email === "admin@site.com" && password === "1234") {
      setError("");
      router.push("/admin/panel"); // yönlendirme
    } else {
      setError("E-posta veya şifre hatalı!");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br ">
      <Card className="w-[350px] p-6 shadow-md rounded-2xl">
        <CardHeader className="flex flex-col items-center space-y-4">
          <Image src="/logo/logo.jpg" alt="Logo" width={80} height={80} />
          <CardTitle className="text-2xl font-bold tracking-tight">
            Yönetici Girişi
          </CardTitle>
          <Separator />
          <CardDescription className="sr-only">
            Login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email">Email</Label>
                <div className="flex items-center border rounded-lg px-2">
                  <Mail className="w-5 h-5 text-gray-400" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="border-0 focus-visible:ring-0"
                  />
                </div>
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="password">Şifre</Label>
                <div className="flex items-center border rounded-lg px-2">
                  <Lock className="w-5 h-5 text-gray-400" />
                  <Input
                    id="password"
                    type="password"
                    placeholder="Şifre"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="border-0 focus-visible:ring-0"
                  />
                </div>
              </div>
            </div>

            {error && (
              <div className="flex items-center gap-2 text-red-500 text-sm">
                <AlertCircle className="w-4 h-4" />
                <span>{error}</span>
              </div>
            )}

            <Button type="submit" className="w-full">
              Giriş Yap
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
