"use client";
import React, { useState } from "react";
import UserSideBar from "../userSideBar";
import { Alert } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { CheckCircle2, AlertTriangle, Info, XCircle } from "lucide-react";

export default function Notifications() {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: "info",
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

  const getIcon = (type) => {
    switch (type) {
      case "success":
        return <CheckCircle2 className="text-green-500 w-6 h-6" />;
      case "destructive":
        return <XCircle className="text-red-500 w-6 h-6" />;
      case "info":
      default:
        return <Info className="text-blue-500 w-6 h-6" />;
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <div className="w-64 border-r border-gray-200 bg-white">
        <UserSideBar />
      </div>

      <div className="flex-1 p-8">
        <h1 className="text-3xl font-bold mb-6">Bildirimler</h1>

        {notifications.length === 0 && (
          <p className="text-gray-500">Henüz bildirim yok.</p>
        )}

        <div className="space-y-4">
          {notifications.map((notif) => (
            <div
              key={notif.id}
              className={`flex items-start justify-between p-4 bg-white rounded-xl shadow hover:shadow-lg transition ${
                notif.read ? "opacity-50" : ""
              }`}
            >
              <div className="flex items-center space-x-4">
                <div>{getIcon(notif.type)}</div>
                <div>
                  <p className="font-medium text-gray-800">{notif.message}</p>
                  <p className="text-xs text-gray-400">{notif.date}</p>
                  <p className="text-xs mt-1">
                    Durum:{" "}
                    <span
                      className={`font-semibold ${
                        notif.read ? "text-gray-500" : "text-blue-600"
                      }`}
                    >
                      {notif.read ? "Okundu" : "Yeni"}
                    </span>
                  </p>
                </div>
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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
