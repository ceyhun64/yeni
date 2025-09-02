"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function ComingSoon() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-5xl font-bold mb-4 text-gray-800">Yakında!</h1>
      <p className="text-lg text-gray-600 mb-8 text-center">
        Bu sayfa üzerinde çalışmalar devam ediyor. Çok yakında sizlerle olacak.
      </p>
      <Button onClick={() => router.back()}>
        Geri Dön
      </Button>
    </div>
  );
}
