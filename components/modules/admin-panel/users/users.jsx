"use client";
import React, { useState } from "react";
import users from "@/seed/users.json";
import AdminSideBar from "../adminSideBar";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Users } from "lucide-react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
} from "@/components/ui/pagination";
export default function UsersPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 15;

  // Pagination hesaplama
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);
  const totalPages = Math.ceil(users.length / usersPerPage);

  return (
    <div className="flex min-h-screen">
      {/* Sol Sidebar */}
      <div className="w-64 border-r">
        <AdminSideBar />
      </div>

      {/* Sağ İçerik */}
      <div className="flex-1 p-8">
        <h1 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <Users className="w-6 h-6 text-primary" />
          Kullanıcılar
        </h1>

        <Table>
          <TableCaption>Tüm sistem kullanıcıları listesi</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Ad Soyad</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Rol</TableHead>
              <TableHead>Durum</TableHead>
              <TableHead>Son Giriş</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {currentUsers.map((user) => (
              <TableRow key={user.id}>
                <TableCell className="font-medium">{user.id}</TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>
                  <Badge
                    variant={
                      user.role === "admin"
                        ? "destructive"
                        : user.role === "moderator"
                        ? "secondary"
                        : "outline"
                    }
                  >
                    {user.role === "admin"
                      ? "Yönetici"
                      : user.role === "moderator"
                      ? "Moderatör"
                      : "Kullanıcı"}
                  </Badge>
                </TableCell>
                <TableCell>
                  <Badge
                    variant={
                      user.status === "active"
                        ? "default"
                        : user.status === "pending"
                        ? "secondary"
                        : "destructive"
                    }
                  >
                    {user.status === "active"
                      ? "Aktif"
                      : user.status === "pending"
                      ? "Beklemede"
                      : "Askıya Alındı"}
                  </Badge>
                </TableCell>
                <TableCell>
                  {user.lastLogin ? (
                    new Date(user.lastLogin).toLocaleString("tr-TR")
                  ) : (
                    <span className="text-gray-400 italic">
                      Henüz giriş yok
                    </span>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        {/* Shadcn/ui Pagination */}
        <div className="flex justify-end mt-4">
          <Pagination>
            <PaginationPrevious
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            />

            <PaginationContent>
              {Array.from({ length: totalPages }, (_, i) => (
                <PaginationItem key={i}>
                  <PaginationLink
                    isActive={currentPage === i + 1}
                    onClick={() => setCurrentPage(i + 1)}
                  >
                    {i + 1}
                  </PaginationLink>
                </PaginationItem>
              ))}
            </PaginationContent>

            <PaginationNext
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
            />
          </Pagination>
        </div>
      </div>
    </div>
  );
}
