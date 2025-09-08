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
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useForm } from "react-hook-form";
import { Separator } from "@/components/ui/separator";
import {
  User,
  Building2,
  Phone,
  Mail,
  MapPin,
  Save,
  UserPlus,
  Factory,
} from "lucide-react";
import Navbar from "@/components/layout/navbar";

export default function Register() {
  const form = useForm({
    defaultValues: {
      musteriTuru: "bireysel",
      adSoyad: "",
      firmaUnvani: "",
      telefon: "",
      email: "",
      adres: "",
      projeAdi: "",
      odemeSekli: "",
    },
  });

  const musteriTuru = form.watch("musteriTuru");

  return (
    <>
      <Navbar />
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen bg-gray-50">
        {/* Sol taraf - Görsel */}
        <div className="hidden md:block relative max-h-[900px]">
          <img
            src="/register/register2.jpg"
            alt="İnşaat görseli"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>

        {/* Sağ taraf - Form */}
        <div className="flex justify-center p-6 md:p-12">
          <Card className="w-full max-w-lg shadow-xl border border-gray-200">
            <CardHeader className="space-y-2 text-center">
              <div className="flex justify-center items-center space-x-2">
                <UserPlus className="w-8 h-8 " />
                <CardTitle className="text-2xl font-bold tracking-tight">
                  Kayıt Ol
                </CardTitle>
              </div>
              <p className="text-sm text-muted-foreground">
                Hesabınızı oluşturun ve projelerinizi yönetin.
              </p>
            </CardHeader>
            <Separator />
            <CardContent>
              <Form {...form}>
                <form className="space-y-6 w-full">
                  {/* Müşteri Türü Seçimi */}
                  <FormField
                    control={form.control}
                    name="musteriTuru"
                    render={({ field }) => (
                      <FormItem className="space-y-3">
                        <FormLabel className="font-medium flex items-center gap-2">
                          <Factory className="w-4 h-4 text-gray-600" />
                          Müşteri Türü
                        </FormLabel>
                        <FormControl>
                          <RadioGroup
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                            className="flex flex-col space-y-2"
                          >
                            <FormItem className="flex items-center space-x-3">
                              <FormControl>
                                <RadioGroupItem value="bireysel" />
                              </FormControl>
                              <FormLabel className="font-normal">
                                Bireysel
                              </FormLabel>
                            </FormItem>
                            <FormItem className="flex items-center space-x-3">
                              <FormControl>
                                <RadioGroupItem value="kurumsal" />
                              </FormControl>
                              <FormLabel className="font-normal">
                                Kurumsal
                              </FormLabel>
                            </FormItem>
                          </RadioGroup>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Ad Soyad / Firma Ünvanı */}
                  <FormField
                    control={form.control}
                    name={
                      musteriTuru === "bireysel" ? "adSoyad" : "firmaUnvani"
                    }
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center gap-2">
                          {musteriTuru === "bireysel" ? (
                            <User className="w-4 h-4 text-gray-600" />
                          ) : (
                            <Building2 className="w-4 h-4 text-gray-600" />
                          )}
                          {musteriTuru === "bireysel"
                            ? "Ad Soyad"
                            : "Firma Ünvanı"}
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder={
                              musteriTuru === "bireysel"
                                ? "Adınızı ve Soyadınızı girin"
                                : "Firma adını girin"
                            }
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Kurumsal müşterilere özel kategori */}
                  {musteriTuru === "kurumsal" && (
                    <FormField
                      control={form.control}
                      name="kategori"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="flex items-center gap-2">
                            <Factory className="w-4 h-4 text-gray-600" />
                            Kategori
                          </FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Kategori Seçiniz" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="tedarikci">
                                Tedarikçi ve Malzemeci
                              </SelectItem>
                              <SelectItem value="hizmet">
                                Hizmet ve Uygulamacı
                              </SelectItem>
                              <SelectItem value="kiralama">Kiralama</SelectItem>
                              <SelectItem value="proje">
                                Proje ve Yönetimi
                              </SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  )}

                  {/* Telefon */}
                  <FormField
                    control={form.control}
                    name="telefon"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center gap-2">
                          <Phone className="w-4 h-4 text-gray-600" />
                          Telefon
                        </FormLabel>
                        <FormControl>
                          <Input placeholder="Telefon numarası" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

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

                  {/* Adres */}
                  <FormField
                    control={form.control}
                    name="adres"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-gray-600" />
                          Adres
                        </FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Tam adresinizi girin"
                            className="resize-none"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Kaydet Butonu */}
                  <Button
                    type="submit"
                    className="w-full flex items-center gap-2 bg-orange-500 hover:bg-orange-600"
                  >
                    <Save className="w-4 h-4" />
                    Kayıt Ol
                  </Button>
                </form>
              </Form>

              {/* Giriş Yap Linki */}
              <p className="text-center text-sm text-muted-foreground mt-6">
                Hesabın var mı?{" "}
                <Link href="/login" className="text-orange-700 hover:underline">
                  Giriş Yap
                </Link>
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}
