"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Subscribe = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    alert(`Teşekkürler! ${email} aboneliğiniz alındı.`);
    setEmail("");
  };

  return (
    <section className="flex w-full justify-center items-center bg-gradient-to-r from-orange-100 to-white  py-20">
      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Soldaki yazı */}
        <div className="text-left ">
          <h2 className="text-3xl font-semibold text-orange-700 mb-3">
            Bültenimize Abone Olun
          </h2>
          <p className="text-gray-600 text-base">
            En güncel kampanya ve fırsatlardan ilk siz haberdar olun.
          </p>
        </div>

        {/* Sağdaki form */}
        <div className="flex justify-end items-end">
          <form
            onSubmit={handleSubscribe}
            className="flex flex-col sm:flex-row gap-3 w-full max-w-md"
          >
            <Input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="E-posta adresiniz"
              className="flex-1 rounded-full border border-orange-600 text-black px-5 py-3 
             focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 
             hover:border-orange-600 transition"
            />

            <Button
              type="submit"
              className="bg-orange-600 hover:bg-orange-700 text-white rounded-full px-6 py-3 transition-transform hover:scale-105"
            >
              Abone Ol
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
