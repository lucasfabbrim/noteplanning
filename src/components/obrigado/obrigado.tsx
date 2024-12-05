"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

import Logo from "@/assets/icon.png";

export default function ThankYouPayment() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <Card className="w-full max-w-md border-0 shadow-xl shadow-white/10">
        <CardContent className="flex flex-col items-center space-y-6 pt-6">
          {/* Logo */}
          <div className="w-16 h-16 flex items-center">
            <Image
              src={Logo}
              alt="Logo"
              width={50}
              height={64}
              priority
              className="text-[#2DD4BF]"
            />
          </div>
          {/* Thank you message */}
          <div className="space-y-2 text-center">
            <h1 className="text-xl font-semibold text-gray-900">
              OBRIGADO PELA COMPRA!
            </h1>
            <p className="text-sm text-gray-600">
              Para baixar o template, acesse seu e-mail, verifique as
              informações de login para a nossa área de membros. Dentro do único
              curso disponível, você encontrará um documento com o passo a passo
              para realizar o download!
            </p>
          </div>
          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 w-full pt-4">
            <Button
              variant="outline"
              onClick={() =>
                window.open("https://instagram.com/noteplanning", "_blank")
              }
              className="w-full sm:w-1/2 text-white bg-rose-600 hover:bg-rose-600/90 hover:text-white/90"
            >
              ← INSTAGRAM
            </Button>
            <Button
              className="w-full sm:w-1/2 bg-green-500 hover:bg-green-500/90"
              onClick={() => window.open("https://wa.me/19994980028", "_blank")}
            >
              WHATSAPP →
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
