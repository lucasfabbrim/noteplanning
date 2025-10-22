"use client";

import { useState } from "react";
import { AlertCircle, ArrowRight, ChevronDown, QrCode, ShieldCheck } from "lucide-react";
import Image from "next/image";
import { sendGAEvent } from "@next/third-parties/google";

import Product from "@/assets/macbook-1.png";
import Icon from "../icon.jpg";
import ProductOrderBump from "@/assets/note-finances.png";

import { analytics } from "@/lib/analytics";
import { Card } from "@/components/ui/card";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import ButtonCheckout from "@/components/button-checkout";

export default function CheckoutPage() {
  const [paymentMethod, setPaymentMethod] = useState<string | null>(null);
  const [privateNote, setPrivateNote] = useState("");

  const handlePaymentMethodSelect = (method: string) => {
    setPaymentMethod(method);
    sendGAEvent({
      event: "select_payment_method",
      payment_method: method,
      currency: "BRL",
      value: 47.9,
    });
  };

  const handleContinue = () => {
    if (paymentMethod === "pix") {
      analytics.rastrearEventoAmplitude("Checkout - Pix");
      window.location.href =
        "https://www.abacatepay.com/pay/bill_SJuywsM6yxwT0NnYzMuC0ads";
    } else if (paymentMethod === "credit-card") {
      analytics.rastrearEventoAmplitude("Checkout - Cartão de Crédito");
      window.location.href = "https://buy.stripe.com/aFacN7fDI8zm4ljc5DcZa00";
    }
  };

  return (
    <div className="min-h-screen bg-[#EFEFEF] flex flex-col items-center">
      <div className="w-full max-w-5xl">
        <div id="header" className="justify-center text-center items-center h-auto pt-4 flex flex-col gap-2">
          <div id="header-noteplanning" className="flex space-x-2">
              <Image 
                src={Icon} 
                alt="icon-noteplanning"
                width={24}
                height={20}
                quality={100}
                className="rounded-[5px]"
              />
              <h4 className="tracking-tighter font-medium text-xl text-zinc-600">noteplanning</h4>
          </div>
          <div id="header-payment-security" className="p-2 px-20 bg-[#FFFFFF] rounded-[10px] mx-4 my-4 flex items-center justify-center gap-2">
            <ShieldCheck className="size-5 text-zinc-700"/>
            <h2 className="text-base text-zinc-600 tracking-wide">COMPRA SEGURA</h2>
          </div>
          <div id="header-products" className="pb-2 flex flex-row items-center space-x-4 pt-1">
              <Image 
                src={Product} 
                alt="product-noteplanning"
                width={100}
                height={20}
                quality={100}
                className="rounded-[5px]"
              />
              <h2>Note Private (Template)</h2>
          </div>
          <div id="header-details" className="items-center justify-center space-y-3 pt-2">
            <div className="p-2 bg-[#D1EFE0] h-7 rounded-[7px] flex flex-row justify-between items-center text-center">
              <h2 className="px-2 text-sm text-zinc-700">Detalhe da Compra</h2>
              <ChevronDown className="size-5 text-zinc-700" strokeWidth={1.0}/>
            </div>
          </div>
          <div
            id="header-prices"
            className="flex flex-col w-full pb-4 px-5"
          >
            <div className="bg-green-200 h-[1px] w-full"/>
            <div className="flex w-full justify-between items-center pt-1">
              <h2 className="font-normal text-base">TOTAL</h2>
              <h2 className="font-bold text-zinc-800">R$97,90</h2>
            </div>
          </div>
        </div>
        <Card id="content" className="rounded-t-[20px] bg-[#FFFFFF] flex flex-col shadow-zinc-200">
          <div id="content-header" className="flex flex-col my-6 items-center">
             <h1 className="font-semibold text-zinc-900">OS SEUS DADOS</h1>
          </div>
          <div id="content-inputs" className="px-4 pb-10">
            <form>
              <FieldGroup>
                <Field>
                  <FieldLabel htmlFor="email" className="text-zinc-600">Nome e sobrenome *</FieldLabel>
                  <Input
                    id="email"
                    type="email"
                    placeholder="m@example.com"
                    required
                  />
                </Field>
                <Field>
                  <FieldLabel htmlFor="email">E-mail *</FieldLabel>
                  <Input
                    id="email"
                    type="email"
                    placeholder="m@example.com"
                    required
                  />
                </Field>
                <Field>
                  <FieldLabel htmlFor="email">Telefone *</FieldLabel>
                  <Input
                    id="email"
                    type="email"
                    placeholder="m@example.com"
                    required
                  />
                </Field>
                <Field>
                  <FieldLabel htmlFor="email">CPF / CNPJ *</FieldLabel>
                  <Input
                    id="email"
                    type="email"
                    placeholder="m@example.com"
                    required
                  />
                </Field>
              </FieldGroup>
            </form>
          </div>
          <div id="content-method-payment" className="flex flex-col pb-10 px-5 space-y-5">
            <h1 className="font-semibold text-zinc-800 items-center text-center">MÉTODO DE PAGAMENTO</h1>
            <div className="p-4 bg-green-500 text-white rounded-[7px] h-20 w-44 flex flex-col space-y-2">
              <QrCode className="size-5"/>
              <h2 className="text-sm font-medium">PIX</h2>
            </div>
            <div className="flex flex-col no-underline">
              <h4 className="text-green-500 flex flex-row items-center gap-2 text-xs">
                <AlertCircle className="size-4"/>
                ATENÇÃO A ESTES DETALHES
              </h4>
              <div className="pt-3 px-1 text-xs text-zinc-500/90 flex flex-col space-y-1.5">
                <span>- Somente à vista;</span>
                <span>- O(s) produto(s) será(ão) liberado(s) somente após recebermos a confirmação de pagamento;</span>
                <span>- Fique atento(a) à data de vencimento. Após a expiração, será necessário refazer seu pedido.</span>
              </div>
            </div>
          </div>
        </Card>
      </div>
      <div id="orderbumb" className="relative flex flex-col px-4 pb-10">
        <svg 
          className="absolute -top-2 left-0 w-full z-20" 
          width="100%" 
          height="17" 
          viewBox="0 0 642 17" 
          xmlns="http://www.w3.org/2000/svg" 
          preserveAspectRatio="none"
        >
          <path 
            d="M0 2.4326e-10L10.7167 5.38333C17.4596 8.77055 25.407 8.77055 32.15 5.38333C38.893 1.99612 46.8404 1.99612 53.5833 5.38333C60.3263 8.77055 68.2737 8.77055 75.0167 5.38333C81.7596 1.99612 89.707 1.99612 96.45 5.38333C103.193 8.77055 111.14 8.77055 117.883 5.38333C124.626 1.99612 132.574 1.99612 139.317 5.38333C146.06 8.77055 154.007 8.77055 160.75 5.38333C167.493 1.99612 175.44 1.99612 182.183 5.38333C188.926 8.77055 196.874 8.77055 203.617 5.38333C210.36 1.99612 218.307 1.99612 225.05 5.38333C231.793 8.77055 239.74 8.77055 246.483 5.38333C253.226 1.99612 261.174 1.99612 267.917 5.38333C274.66 8.77055 282.607 8.77055 289.35 5.38333C296.093 1.99612 304.04 1.99612 310.783 5.38333C317.526 8.77055 325.474 8.77055 332.217 5.38333C338.96 1.99612 346.907 1.99612 353.65 5.38333C360.393 8.77055 368.34 8.77055 375.083 5.38333C381.826 1.99612 389.774 1.99612 396.517 5.38333C403.26 8.77055 411.207 8.77055 417.95 5.38333C424.693 1.99612 432.64 1.99612 439.383 5.38333C446.126 8.77055 454.074 8.77055 460.817 5.38333C467.56 1.99612 475.507 1.99612 482.25 5.38333C488.993 8.77055 496.94 8.77055 503.683 5.38333C510.426 1.99612 518.374 1.99612 525.117 5.38334C531.86 8.77055 539.807 8.77054 546.55 5.38333C553.293 1.99613 561.24 1.99612 567.983 5.38333C574.726 8.77055 582.674 8.77055 589.417 5.38333C596.16 1.99612 604.107 1.99612 610.85 5.38332C617.593 8.77054 625.54 8.77054 632.283 5.38332L643 0V17H0V2.4326e-10Z" 
            fill="#EFEFEF"
          />
        </svg>
        <div id="orderbump-header" className="flex flex-col items-center text-center justify-center space-y-2 mt-4">
          <h1 className="text-zinc-900 font-semibold">Essa oferta não irá aparecer em nenhum outro lugar!</h1>
          <h4 className="text-zinc-900">Aproveite e compre outros produtos com desconto.</h4>
        </div>
        <div id="orderbump-products" className="flex flex-col items-center text-center justify-center space-y-2 pt-4">
          <Card className="bg-white p-2 px-4 py-4 items-start text-start justify-start">
            <h1 className="text-zinc-900 font-medium">(50% OFF) Organize sua vida financeira em um só lugar!</h1>
            <div className="py-2 flex flex-row items-center gap-4">
              <Checkbox className="border-green-600 border-2 size-5"/>
              <div id="header-products" className="pb-2 flex flex-row items-center space-x-4 pt-3">
                <Image 
                  src={ProductOrderBump} 
                  alt="order-bump-noteplanning"
                  width={100}
                  height={20}
                  quality={100}
                  className="rounded-[5px]"
                />
                <div className="flex flex-col space-y-1">
                  <h2 className="text-zinc-700">Note Finances (Template)</h2>
                  <h2 className="font-semibold">R$ 19,99</h2>
                </div>
              </div>
            </div>
          </Card>
        </div>
        <svg 
          className="absolute bottom-0 left-0 w-full z-20" 
          width="100%" 
          height="17" 
          viewBox="0 0 642 17" 
          preserveAspectRatio="none"
        >
          <path 
            d="M0 2.4326e-10L10.7167 5.38333C17.4596 8.77055 25.407 8.77055 32.15 5.38333C38.893 1.99612 46.8404 1.99612 53.5833 5.38333C60.3263 8.77055 68.2737 8.77055 75.0167 5.38333C81.7596 1.99612 89.707 1.99612 96.45 5.38333C103.193 8.77055 111.14 8.77055 117.883 5.38333C124.626 1.99612 132.574 1.99612 139.317 5.38333C146.06 8.77055 154.007 8.77055 160.75 5.38333C167.493 1.99612 175.44 1.99612 182.183 5.38333C188.926 8.77055 196.874 8.77055 203.617 5.38333C210.36 1.99612 218.307 1.99612 225.05 5.38333C231.793 8.77055 239.74 8.77055 246.483 5.38333C253.226 1.99612 261.174 1.99612 267.917 5.38333C274.66 8.77055 282.607 8.77055 289.35 5.38333C296.093 1.99612 304.04 1.99612 310.783 5.38333C317.526 8.77055 325.474 8.77055 332.217 5.38333C338.96 1.99612 346.907 1.99612 353.65 5.38333C360.393 8.77055 368.34 8.77055 375.083 5.38333C381.826 1.99612 389.774 1.99612 396.517 5.38333C403.26 8.77055 411.207 8.77055 417.95 5.38333C424.693 1.99612 432.64 1.99612 439.383 5.38333C446.126 8.77055 454.074 8.77055 460.817 5.38333C467.56 1.99612 475.507 1.99612 482.25 5.38333C488.993 8.77055 496.94 8.77055 503.683 5.38333C510.426 1.99612 518.374 1.99612 525.117 5.38334C531.86 8.77055 539.807 8.77054 546.55 5.38333C553.293 1.99613 561.24 1.99612 567.983 5.38333C574.726 8.77055 582.674 8.77055 589.417 5.38333C596.16 1.99612 604.107 1.99612 610.85 5.38332C617.593 8.77054 625.54 8.77054 632.283 5.38332L643 0V17H0V2.4326e-10Z" 
            fill="#EFEFEF"
          />
        </svg>
      </div>
      
      <div id="button-pay" className="relative flex flex-col justify-center items-center text-center pb-8 bg-white w-full space-y-12">
      <svg 
          className="absolute -top-2 left-0 w-full z-20" 
          width="100%" 
          height="17" 
          viewBox="0 0 642 17" 
          preserveAspectRatio="none"
        >
          <path 
            d="M0 2.4326e-10L10.7167 5.38333C17.4596 8.77055 25.407 8.77055 32.15 5.38333C38.893 1.99612 46.8404 1.99612 53.5833 5.38333C60.3263 8.77055 68.2737 8.77055 75.0167 5.38333C81.7596 1.99612 89.707 1.99612 96.45 5.38333C103.193 8.77055 111.14 8.77055 117.883 5.38333C124.626 1.99612 132.574 1.99612 139.317 5.38333C146.06 8.77055 154.007 8.77055 160.75 5.38333C167.493 1.99612 175.44 1.99612 182.183 5.38333C188.926 8.77055 196.874 8.77055 203.617 5.38333C210.36 1.99612 218.307 1.99612 225.05 5.38333C231.793 8.77055 239.74 8.77055 246.483 5.38333C253.226 1.99612 261.174 1.99612 267.917 5.38333C274.66 8.77055 282.607 8.77055 289.35 5.38333C296.093 1.99612 304.04 1.99612 310.783 5.38333C317.526 8.77055 325.474 8.77055 332.217 5.38333C338.96 1.99612 346.907 1.99612 353.65 5.38333C360.393 8.77055 368.34 8.77055 375.083 5.38333C381.826 1.99612 389.774 1.99612 396.517 5.38333C403.26 8.77055 411.207 8.77055 417.95 5.38333C424.693 1.99612 432.64 1.99612 439.383 5.38333C446.126 8.77055 454.074 8.77055 460.817 5.38333C467.56 1.99612 475.507 1.99612 482.25 5.38333C488.993 8.77055 496.94 8.77055 503.683 5.38333C510.426 1.99612 518.374 1.99612 525.117 5.38334C531.86 8.77055 539.807 8.77054 546.55 5.38333C553.293 1.99613 561.24 1.99612 567.983 5.38333C574.726 8.77055 582.674 8.77055 589.417 5.38333C596.16 1.99612 604.107 1.99612 610.85 5.38332C617.593 8.77054 625.54 8.77054 632.283 5.38332L643 0V17H0V2.4326e-10Z" 
            fill="white"
          />
        </svg>
        <ButtonCheckout />
        <Button className="bg-zinc-200 text-zinc-600 h-9 w-auto flex flex-row gap-2 items-center">
          Fale com um especialista
          <ArrowRight className="size-2 text-zinc-500"/>
        </Button>
      </div>
      <div id="footer" className="py-10 p-10">
        <div id="header-noteplanning" className="flex space-x-2">
            <Image 
              src={Icon} 
              alt="icon-noteplanning"
              width={24}
              height={20}
              quality={100}
              className="rounded-[5px]"
            />
            <h4 className="tracking-tighter font-medium text-xl text-zinc-600">noteplanning</h4>
        </div>
      </div>
    </div>
  );
}
