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
import { Calendar as CalendarIcon, MapPin, ClipboardCheck } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { motion } from "framer-motion";

export default function GetAnOfferForm({ selectedRequest, isOpen, onClose }) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-xl w-full p-6 rounded-3xl shadow-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-200">
        <DialogHeader className="pb-2">
          <DialogTitle className="text-2xl font-extrabold text-gray-800 flex items-center gap-3">
            <ClipboardCheck className="w-6 h-6 text-blue-500" />
            Teklif Al - {selectedRequest}
          </DialogTitle>
        </DialogHeader>

        <form className="flex flex-col gap-4">
          {/* Talep Türü */}
          <div className="flex flex-col">
            <Label className="text-sm font-semibold mb-1">Talep Türü</Label>
            <Select>
              <SelectTrigger className="h-12 w-full rounded-xl border border-gray-300 shadow-inner hover:shadow-lg focus:ring-2 focus:ring-blue-400 transition">
                <SelectValue placeholder="Seçiniz" />
              </SelectTrigger>
              <SelectContent className="rounded-xl shadow-lg border border-gray-200">
                <SelectItem value="malzeme">Malzeme</SelectItem>
                <SelectItem value="hizmet">Hizmet</SelectItem>
                <SelectItem value="kiralama">Kiralama</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Proje */}
          <Input
            placeholder="Proje Adı"
            className="h-12 rounded-xl border border-gray-300 shadow-inner focus:ring-2 focus:ring-blue-400 transition"
          />
          <Input
            placeholder="Proje Numarası"
            className="h-12 rounded-xl border border-gray-300 shadow-inner focus:ring-2 focus:ring-blue-400 transition"
          />

          {/* Teslim Adresi */}
          <div className="relative flex items-center">
            <MapPin className="absolute left-3 w-5 h-5 text-gray-400" />
            <Input
              className="pl-10 h-12 rounded-xl border border-gray-300 shadow-inner focus:ring-2 focus:ring-blue-400 transition"
              placeholder="Ürün Teslim Adresi"
            />
          </div>

          {/* Tarihler */}
          <div className="flex gap-3">
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className="flex-1 h-12 justify-start gap-2 rounded-xl border border-gray-300 shadow-inner hover:shadow-lg transition"
                >
                  <CalendarIcon className="w-4 h-4" /> Talep Tarihi
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0 rounded-xl shadow-lg border border-gray-200">
                <Calendar />
              </PopoverContent>
            </Popover>

            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className="flex-1 h-12 justify-start gap-2 rounded-xl border border-gray-300 shadow-inner hover:shadow-lg transition"
                >
                  <CalendarIcon className="w-4 h-4" /> Teslim Tarihi
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0 rounded-xl shadow-lg border border-gray-200">
                <Calendar />
              </PopoverContent>
            </Popover>
          </div>

          {/* Nakliye Durumu */}
          <div className="flex flex-col">
            <Label className="text-sm font-semibold mb-1">Nakliye Durumu</Label>
            <Select>
              <SelectTrigger className="h-12 w-full rounded-xl border border-gray-300 shadow-inner focus:ring-2 focus:ring-blue-400 transition">
                <SelectValue placeholder="Seçiniz" />
              </SelectTrigger>
              <SelectContent className="rounded-xl shadow-lg border border-gray-200">
                <SelectItem value="dahil">DAHİL</SelectItem>
                <SelectItem value="haric">HARİÇ</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Ödeme Şekli */}
          <div className="flex flex-col">
            <Label className="text-sm font-semibold mb-1">Ödeme Şekli</Label>
            <Select>
              <SelectTrigger className="h-12 w-full rounded-xl border border-gray-300 shadow-inner focus:ring-2 focus:ring-blue-400 transition">
                <SelectValue placeholder="Seçiniz" />
              </SelectTrigger>
              <SelectContent className="rounded-xl shadow-lg border border-gray-200">
                <SelectItem value="kart">KART</SelectItem>
                <SelectItem value="havale">HAVALE</SelectItem>
                <SelectItem value="cek">ÇEK</SelectItem>
                <SelectItem value="cari">CARİ</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <DialogFooter className="flex justify-end gap-3 mt-4">
            <Button
              variant="outline"
              onClick={onClose}
              className="h-12 rounded-xl hover:bg-gray-100 transition"
            >
              İptal
            </Button>
            <motion.button
              type="submit"
              className="h-12 px-8 rounded-xl bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 font-bold shadow-2xl hover:scale-105 "
            >
              Teklif Gönder
            </motion.button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
