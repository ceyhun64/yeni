"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useForm } from "react-hook-form";
import { Separator } from "@/components/ui/separator";
import { Mail, Save, UserPlus, Lock } from "lucide-react";
import Navbar from "@/components/layout/navbar";
export default function Login() {
  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  return (
    <>
      <Navbar />
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen bg-gray-50">
        {/* Sol taraf - Görsel */}
        <div className="hidden md:block relative max-h-[900px]">
          <img
            src="/register/register.jpg"
            alt="İnşaat görseli"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>
        {/* Sağ taraf - Form */}
        <div className="flex justify-center items-center p-6 md:p-12">
          <Card className="w-full max-w-lg shadow-xl border border-gray-200">
            <CardHeader className="space-y-2 text-center">
              <div className="flex justify-center items-center space-x-2">
                <UserPlus className="w-8 h-8 " />
                <CardTitle className="text-2xl font-bold tracking-tight">
                  Giriş Yap
                </CardTitle>
              </div>
              <p className="text-sm text-muted-foreground">
                Hesabınıza giriş yapın ve projelerinizi yönetin.
              </p>
            </CardHeader>
            <Separator />
            <CardContent>
              <Form {...form}>
                <form className="space-y-6 w-full">
                  {/* E-posta */}
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center gap-2">
                          <Mail className="w-4 h-4 text-gray-600" />
                          E-posta
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="ornek@mail.com"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Şifre */}
                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center gap-2">
                          <Lock className="w-4 h-4 text-gray-600" />
                          Şifre
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="password"
                            placeholder="Şifrenizi girin"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Giriş Yap Butonu */}
                  <Button
                    type="submit"
                    className="w-full flex items-center gap-2 bg-orange-500 hover:bg-orange-600"
                  >
                    <Save className="w-4 h-4" />
                    Giriş Yap
                  </Button>
                </form>
              </Form>

              {/* Kayıt Ol Linki */}
              <p className="text-center text-sm text-muted-foreground mt-6">
                Hesabınız yok mu?{" "}
                <Link
                  href="/register"
                  className="text-orange-700 hover:underline"
                >
                  Kayıt Ol
                </Link>
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}
