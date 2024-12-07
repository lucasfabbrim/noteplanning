"use client";

import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Confetti from "react-confetti";

import Logo from "@/assets/icon.png";
import { AlertCircle } from "lucide-react";

export default function ThankYouPayment() {
  const [windowDimensions, setWindowDimensions] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const updateDimensions = () => {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);

    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  return (
    <div className="min-h-screen bg-zinc-200/60 flex items-center justify-center p-4">
      <Confetti
        width={windowDimensions.width}
        height={windowDimensions.height}
        opacity={100}
        recycle={false}
        numberOfPieces={600}
      />
      <Card className="bg-white w-full max-w-md border-0 shadow-xl shadow-black/15">
        <CardContent className="flex flex-col items-center space-y-6 pt-6 pb-10">
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
            <div className=" pt-4 px-2 flex items-center gap-2 text-center justify-center">
              <AlertCircle size={12} className="text-rose-600" />
              <span className="text-rose-600 text-xs">
                Se o login não chegar, verifique a caixa de spam.
              </span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
