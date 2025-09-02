"use client";
import React, { useState } from "react";
import UserSideBar from "../userSideBar";
import { Alert } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";

export default function Notifications() {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: "default",
      message: "Profil bilgilerinizi güncellediniz.",
      read: false,
      date: "2025-08-31",
    },
    {
      id: 2,
      type: "destructive",
      message: "Şifre değiştirme işlemi tamamlanmadı.",
      read: false,
      date: "2025-08-30",
    },
    {
      id: 3,
      type: "success",
      message: "Ödeme işleminiz başarılı.",
      read: true,
      date: "2025-08-29",
    },
  ]);

  const markAsRead = (id) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, read: true } : n))
    );
  };

  return (
    <div className="flex min-h-screen bg-gray-50 ">
      <div className="w-64 border-r border-gray-200">
        <UserSideBar />
      </div>

      <div className="flex-1 p-8 space-y-4">
        <h1 className="text-2xl font-bold mb-6">Bildirimler</h1>

        {notifications.length === 0 && (
          <p className="text-gray-500">Henüz bildirim yok.</p>
        )}

        <div className="space-y-2">
          {notifications.map((notif) => (
            <Alert
              key={notif.id}
              variant={notif.type}
              className={`flex justify-between items-center ${
                notif.read ? "opacity-50" : ""
              }`}
            >
              <div>
                <p>{notif.message}</p>
                <p className="text-xs text-gray-400">{notif.date}</p>
              </div>
              {!notif.read && (
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => markAsRead(notif.id)}
                >
                  Okundu Olarak İşaretle
                </Button>
              )}
            </Alert>
          ))}
        </div>
      </div>
    </div>
  );
}
