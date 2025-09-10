"use client";
import React, { useState } from "react";
import AdminSideBar from "../adminSideBar";
import initialRooms from "@/seed/rooms.json";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogFooter,
  AlertDialogAction,
  AlertDialogCancel,
} from "@/components/ui/alert-dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";

export default function Kitchen() {
  const [rooms, setRooms] = useState(initialRooms);
  const [open, setOpen] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [deleteRoomId, setDeleteRoomId] = useState(null);

  const [formData, setFormData] = useState({
    id: null,
    title: "",
    style: "",
    tags: "",
    img: "",
    gallery: "",
    sizeM2: "",
    beds: "",
    baths: "",
    desc: "",
  });

  const handleOpen = (room = null) => {
    if (room) {
      setSelectedRoom(room);
      setFormData({
        ...room,
        tags: room.tags.join(", "),
        gallery: room.gallery?.join(", ") ?? "",
      });
    } else {
      setSelectedRoom(null);
      setFormData({
        id: null,
        title: "",
        style: "",
        tags: "",
        img: "",
        gallery: "",
        sizeM2: "",
        beds: "",
        baths: "",
        desc: "",
      });
    }
    setOpen(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    if (selectedRoom) {
      setRooms((prev) =>
        prev.map((r) =>
          r.id === selectedRoom.id
            ? {
                ...formData,
                id: selectedRoom.id,
                tags: formData.tags.split(",").map((t) => t.trim()),
                gallery: formData.gallery.split(",").map((g) => g.trim()),
              }
            : r
        )
      );
    } else {
      const newRoom = {
        ...formData,
        id: rooms.length + 1,
        tags: formData.tags.split(",").map((t) => t.trim()),
        gallery: formData.gallery.split(",").map((g) => g.trim()),
      };
      setRooms((prev) => [...prev, newRoom]);
    }
    setOpen(false);
  };

  const handleDelete = (id) => {
    setRooms((prev) => prev.filter((r) => r.id !== id));
    setDeleteRoomId(null);
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64">
        <AdminSideBar />
      </div>

      {/* İçerik */}
      <div className="flex-1 p-8 space-y-6">
        <Card className="shadow-sm border border-gray-200">
          <CardHeader className="flex items-center justify-between">
            <CardTitle className="text-lg ">Mutfak</CardTitle>

            {/* Butonlar: Sağda Yeni Ekle, hemen solunda Toplu Ekle */}
            <div className="flex items-center gap-2">
              {/* Toplu Excel Ekle */}
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline">Excel ile Toplu Ekle</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md">
                  <DialogHeader>
                    <DialogTitle>Oda Toplu Ekleme</DialogTitle>
                  </DialogHeader>
                  <form
                    className="space-y-4"
                    onSubmit={(e) => {
                      e.preventDefault();
                      const fileInput = e.target.file.files[0];
                      if (!fileInput) return;

                      const reader = new FileReader();
                      reader.onload = (evt) => {
                        try {
                          const data = JSON.parse(evt.target.result);
                          setRooms((prev) => [
                            ...prev,
                            ...data.map((r, i) => ({
                              ...r,
                              id: prev.length + i + 1,
                            })),
                          ]);
                        } catch (err) {
                          alert("Geçersiz dosya formatı!");
                        }
                      };
                      reader.readAsText(fileInput);
                      setExcelOpen(false);
                    }}
                  >
                    <input
                      type="file"
                      name="file"
                      accept=".json"
                      className="border rounded p-2 w-full"
                    />
                    <DialogFooter>
                      <Button
                        variant="outline"
                        onClick={() => setExcelOpen(false)}
                      >
                        Vazgeç
                      </Button>
                      <Button type="submit">Ekle</Button>
                    </DialogFooter>
                  </form>
                </DialogContent>
              </Dialog>

              {/* Yeni Ekle */}
              <Button onClick={() => handleOpen()}>+ Yeni Ekle</Button>
            </div>
          </CardHeader>
          <Separator />

          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-20">Görsel</TableHead>
                  <TableHead>Başlık</TableHead>
                  <TableHead>Stil</TableHead>
                  <TableHead>Etiketler</TableHead>
                  <TableHead className="text-center">m²</TableHead>
                  <TableHead className="text-center">Yatak</TableHead>
                  <TableHead className="text-center">Banyo</TableHead>
                  <TableHead className="text-right">İşlemler</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {rooms.map((room) => (
                  <TableRow key={room.id} className="hover:bg-gray-50">
                    <TableCell>
                      <img
                        src={room.img}
                        alt={room.title}
                        className="w-16 h-16 rounded-md object-cover"
                      />
                    </TableCell>
                    <TableCell className="font-medium">{room.title}</TableCell>
                    <TableCell className="capitalize">{room.style}</TableCell>
                    <TableCell>
                      <div className="flex flex-wrap gap-1">
                        {room.tags.map((tag, i) => (
                          <span
                            key={i}
                            className="px-2 py-0.5 text-xs rounded-full bg-gray-100 text-gray-700"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </TableCell>
                    <TableCell className="text-center">{room.sizeM2}</TableCell>
                    <TableCell className="text-center">{room.beds}</TableCell>
                    <TableCell className="text-center">{room.baths}</TableCell>
                    <TableCell className="text-right space-x-2">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleOpen(room)}
                      >
                        İncele
                      </Button>

                      {/* AlertDialog */}
                      <AlertDialog>
                        <AlertDialogTrigger asChild>
                          <Button size="sm" variant="destructive">
                            Sil
                          </Button>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                          <AlertDialogHeader>
                            <AlertDialogTitle>
                              Bu oda silinsin mi?
                            </AlertDialogTitle>
                          </AlertDialogHeader>
                          <AlertDialogFooter>
                            <AlertDialogCancel>İptal</AlertDialogCancel>
                            <AlertDialogAction
                              className="bg-red-600 hover:bg-red-500"
                              onClick={() => handleDelete(room.id)}
                            >
                              Sil
                            </AlertDialogAction>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>

      {/* Modal */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle>
              {selectedRoom ? "Odayı Güncelle" : "Yeni Oda Ekle"}
            </DialogTitle>
          </DialogHeader>

          <form className="space-y-4">
            <Input
              placeholder="Başlık"
              name="title"
              value={formData.title}
              onChange={handleChange}
            />
            <Input
              placeholder="Stil"
              name="style"
              value={formData.style}
              onChange={handleChange}
            />
            <Input
              placeholder="Etiketler (virgülle ayır)"
              name="tags"
              value={formData.tags}
              onChange={handleChange}
            />
            <Input
              placeholder="Kapak Görseli URL"
              name="img"
              value={formData.img}
              onChange={handleChange}
            />
            <Input
              placeholder="Galeri Görselleri (virgülle ayır)"
              name="gallery"
              value={formData.gallery}
              onChange={handleChange}
            />
            <Input
              placeholder="m²"
              type="number"
              name="sizeM2"
              value={formData.sizeM2}
              onChange={handleChange}
            />
            <Input
              placeholder="Yatak Sayısı"
              type="number"
              name="beds"
              value={formData.beds}
              onChange={handleChange}
            />
            <Input
              placeholder="Banyo Sayısı"
              type="number"
              name="baths"
              value={formData.baths}
              onChange={handleChange}
            />
            <Textarea
              placeholder="Açıklama"
              name="desc"
              value={formData.desc}
              onChange={handleChange}
            />
          </form>

          <DialogFooter>
            <Button variant="outline" onClick={() => setOpen(false)}>
              Vazgeç
            </Button>
            <Button onClick={handleSave}>
              {selectedRoom ? "Güncelle" : "Kaydet"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
