"use client";

import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import {
  Calendar as CalendarIcon,
  MapPin,
  Briefcase,
} from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export default function MakeAnOffer({ selectedRequest, isOpen, onClose }) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-xl w-full p-6 rounded-2xl shadow-xl">
        <DialogHeader className="pb-2">
          <DialogTitle className="text-lg font-semibold flex items-center gap-2">
            Teklif Ver - {selectedRequest?.firmaKod}
          </DialogTitle>
        </DialogHeader>

        <form className="flex flex-col gap-3">
          {/* Talep Türü */}
          <div className="flex flex-col">
            <Label className="text-sm font-medium mb-1">Talep Türü</Label>
            <Select>
              <SelectTrigger className="h-10 w-full">
                <SelectValue placeholder="Seçiniz" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="malzeme">Malzeme</SelectItem>
                <SelectItem value="hizmet">Hizmet</SelectItem>
                <SelectItem value="kiralama">Kiralama</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Firma ve Proje */}
          <div className="flex flex-col gap-2">
            <div className="relative flex items-center">
              <Briefcase className="absolute left-3 w-5 h-5 text-gray-400" />
              <Input className="pl-10 h-10" placeholder="Alıcı Firma Adı" />
            </div>
            <Input placeholder="Proje Adı" className="h-10" />
            <Input placeholder="Proje Numarası" className="h-10" />
          </div>

          {/* Teslim Adresi */}
          <div className="relative flex items-center">
            <MapPin className="absolute left-3 w-5 h-5 text-gray-400" />
            <Input className="pl-10 h-10" placeholder="Ürün Teslim Adresi" />
          </div>

          {/* Tarihler */}
          <div className="flex gap-3">
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className="flex-1 h-10 justify-start gap-2"
                >
                  <CalendarIcon className="w-4 h-4" />
                  Talep Tarihi
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar />
              </PopoverContent>
            </Popover>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className="flex-1 h-10 justify-start gap-2"
                >
                  <CalendarIcon className="w-4 h-4" />
                  Teslim Tarihi
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar />
              </PopoverContent>
            </Popover>
          </div>

          {/* Nakliye Durumu */}
          <div className="flex flex-col">
            <Label className="text-sm font-medium mb-1">Nakliye Durumu</Label>
            <Select>
              <SelectTrigger className="h-10 w-full">
                <SelectValue placeholder="Seçiniz" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="dahil">DAHİL</SelectItem>
                <SelectItem value="haric">HARİÇ</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Ödeme Şekli */}
          <div className="flex flex-col">
            <Label className="text-sm font-medium mb-1">Ödeme Şekli</Label>
            <Select>
              <SelectTrigger className="h-10 w-full">
                <SelectValue placeholder="Seçiniz" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="kart">KART</SelectItem>
                <SelectItem value="havale">HAVALE</SelectItem>
                <SelectItem value="cek">ÇEK</SelectItem>
                <SelectItem value="cari">CARİ</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <DialogFooter className="flex justify-end gap-2 mt-4">
            <Button variant="outline" onClick={onClose} className="h-10">
              İptal
            </Button>
            <Button type="submit" className="h-10">
              Gönder
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
