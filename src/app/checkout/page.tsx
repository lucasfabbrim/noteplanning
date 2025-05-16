"use client"

import { useState } from "react"
import { ArrowLeft, CreditCard, QrCode, ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { sendGAEvent } from "@next/third-parties/google"

import Logo from '@/assets/macbook-1.png';

export default function CheckoutPage() {
  const [paymentMethod, setPaymentMethod] = useState<string | null>(null)
  const [privateNote, setPrivateNote] = useState("")

  const handlePaymentMethodSelect = (method: string) => {
    setPaymentMethod(method)
    sendGAEvent({
      event: "select_payment_method",
      payment_method: method,
      currency: "BRL",
      value: 47.90
    })
  }

  const handleContinue = () => {
    if (paymentMethod === "pix") {
      sendGAEvent({
        event: "begin_checkout",
        payment_method: "pix",
        currency: "BRL",
        value: 47.90
      })
      window.location.href = "https://www.abacatepay.com/pay/bill_SJuywsM6yxwT0NnYzMuC0ads"
    } else if (paymentMethod === "credit-card") {
      sendGAEvent({
        event: "begin_checkout",
        payment_method: "credit_card",
        currency: "BRL",
        value: 47.90
      })
      window.location.href = "https://buy.stripe.com/aFacN7fDI8zm4ljc5DcZa00"
    }
  }

  return (
    <div className="min-h-screen bg-white flex flex-col items-center p-4">
      <div className="w-full max-w-5xl mt-8">
        {/* Header with company name */}
        <div className="flex justify-between items-center mb-8">
          <Button
            variant="ghost"
            className="flex items-center text-gray-600 hover:text-black"
            onClick={() => window.history.back()}
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Voltar
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Left column - Payment options */}
          <div className="md:col-span-3 space-y-6">
            <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
              <div className="p-6 space-y-6">
                <div className="space-y-4">
                  <h2 className="text-lg font-medium text-black">Método de pagamento</h2>

                  <div className="grid gap-3">
                    <div
                      className={`relative flex items-center p-4 rounded-lg border-2 transition-all duration-200 cursor-pointer ${
                        paymentMethod === "credit-card"
                          ? "border-black bg-gray-50"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                      onClick={() => handlePaymentMethodSelect("credit-card")}
                    >
                      <div className="h-10 w-10 rounded-full bg-black flex items-center justify-center mr-4">
                        <CreditCard className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h3 className="font-medium text-black">Cartão de crédito</h3>
                        <p className="text-sm text-gray-500">Pague com seu cartão de crédito.</p>
                      </div>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 rounded-full border-2 flex items-center justify-center">
                        {paymentMethod === "credit-card" && <div className="h-3 w-3 bg-black rounded-full" />}
                      </div>
                    </div>

                    <div
                      className={`relative flex items-center p-4 rounded-lg border-2 transition-all duration-200 cursor-pointer ${
                        paymentMethod === "pix" ? "border-black bg-gray-50" : "border-gray-200 hover:border-gray-300"
                      }`}
                      onClick={() => handlePaymentMethodSelect("pix")}
                    >
                      <div className="h-10 w-10 rounded-full bg-black flex items-center justify-center mr-4">
                        <QrCode className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h3 className="font-medium text-black">Pix</h3>
                        <p className="text-sm text-gray-500">Pagamento instantâneo.</p>
                      </div>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 rounded-full border-2 flex items-center justify-center">
                        {paymentMethod === "pix" && <div className="h-3 w-3 bg-black rounded-full" />}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-100">
                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <p className="text-sm text-gray-500">Total</p>
                      <p className="text-2xl font-bold text-black">R$ 47,90</p>
                    </div>
                    <Button
                      onClick={handleContinue}
                      disabled={!paymentMethod}
                      className="bg-black hover:bg-gray-800 text-white px-8 py-2 h-12 rounded-lg transition-all flex items-center gap-2"
                    >
                      Continuar <ShoppingCart />
                    </Button>
                  </div>

                  <div className="flex items-center justify-center space-x-2 text-xs text-gray-500 pt-5">
                    <span>Pagamento seguro</span>
                    <span>•</span>
                    <span>Criptografado</span>
                    <span>•</span>
                    <span>Dados protegidos</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right column - Product details */}
          <div className="md:col-span-2">
            <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden sticky top-8">
              <div className="p-6 space-y-6">
                <div className="relative h-48 w-full rounded-lg overflow-hidden mb-4">
                  <Image 
                    src={Logo} 
                    alt="Produto" 
                    fill 
                    className="object-contain" 
                    priority
                  />
                </div>

                <div className="space-y-2">
                  <h2 className="text-xl font-bold text-black">Note Private 1.0</h2>
                  <p className="text-gray-600 text-sm">
                    Acesso completo a todos os recursos do nosso template de produtividade e organização.
                  </p>
                </div>

                  <div className="flex justify-between font-medium text-black mt-4 pt-4 border-t border-gray-100">
                    <span>Total</span>
                    <span>R$ 47,90</span>
                  </div>
                </div>
              </div>
          </div>
        </div>

        <div className="flex items-center justify-center space-x-4 text-sm text-gray-500 mt-8">
          <span>© 2025 Planning</span>
          <span>•</span>
          <span>Termos</span>
          <span>•</span>
          <span>Privacidade</span>
        </div>
      </div>
    </div>
  )
}