"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";
import { ArrowRight, AlertCircle } from "lucide-react";

const funcionalidades = [
  { id: "financas", label: "Finanças" },
  { id: "rotina", label: "Rotina" },
  { id: "livros", label: "Livros" },
  { id: "estudos", label: "Estudos" },
  { id: "projetos", label: "Projetos" },
  { id: "treinos", label: "Treinos" },
  { id: "contas", label: "Contas" },
] as const;

const formSchema = z.object({
  email: z.string().email({ message: "Informe um e-mail válido, por favor." }),
  fullName: z
    .string()
    .min(1, { message: "Informe um nome válido, por favor." }),
  phone: z.string().regex(/^\(\d{2}\) \d{5}-\d{4}$/, {
    message: "Informe um número telefone válido, por favor.",
  }),
  funcionalidades: z.array(z.string()).refine((value) => value.length > 0, {
    message: "Selecione pelo menos uma funcionalidade.",
  }),
});

export default function PreVendaForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      fullName: "",
      phone: "",
      funcionalidades: [],
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    // Aqui você pode adicionar a lógica para enviar os dados para o servidor
  }

  return (
    <div className="max-w-md mx-auto mt-8 border-t border-t-zinc-900 pt-8">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          {/* Nome e Sobrenome */}
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-zinc-300 font-semibold text-sm">
                  Nome e Sobrenome
                </FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input
                      placeholder="John Doe"
                      {...field}
                      className={cn(
                        "bg-black border-zinc-900 text-zinc-400 placeholder-zinc-600",
                        form.formState.errors.fullName && "border-red-500",
                      )}
                    />
                    {form.formState.errors.fullName && (
                      <AlertCircle
                        size={16}
                        className="absolute top-1/2 right-3 -translate-y-1/2 text-red-500"
                      />
                    )}
                  </div>
                </FormControl>
                <FormMessage className="text-red-500 flex items-center gap-1">
                  {form.formState.errors.fullName && (
                    <AlertCircle size={12} className="text-red-500" />
                  )}
                  {form.formState.errors.fullName?.message}
                </FormMessage>
              </FormItem>
            )}
          />

          {/* E-mail */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-zinc-300 font-semibold text-sm">
                  E-mail
                </FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input
                      placeholder="seu@email.com"
                      {...field}
                      className={cn(
                        "bg-black border-zinc-900 text-zinc-400 placeholder-zinc-600",
                        form.formState.errors.email && "border-red-500",
                      )}
                    />
                    {form.formState.errors.email && (
                      <AlertCircle
                        size={16}
                        className="absolute top-1/2 right-3 -translate-y-1/2 text-red-500"
                      />
                    )}
                  </div>
                </FormControl>
                <FormMessage className="text-red-500 flex items-center gap-1">
                  {form.formState.errors.email && (
                    <AlertCircle size={12} className="text-red-500" />
                  )}
                  {form.formState.errors.email?.message}
                </FormMessage>
              </FormItem>
            )}
          />

          {/* Número de Telefone */}
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-zinc-300 font-semibold text-sm">
                  Número de telefone
                </FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input
                      placeholder="(00) 00000-0000"
                      {...field}
                      className={cn(
                        "bg-black border-zinc-900 text-zinc-400 placeholder-zinc-600",
                        form.formState.errors.phone && "border-red-500",
                      )}
                      onChange={(e) => {
                        let value = e.target.value.replace(/\D/g, "");
                        if (value.length > 0) {
                          if (value.length <= 2) {
                            value = `(${value}`;
                          } else if (value.length <= 7) {
                            value = value.replace(
                              /^(\d{2})(\d{0,5})/,
                              "($1) $2",
                            );
                          } else {
                            value = value.replace(
                              /^(\d{2})(\d{5})(\d{0,4})/,
                              "($1) $2-$3",
                            );
                          }
                        }
                        field.onChange(value);
                      }}
                    />
                    {form.formState.errors.phone && (
                      <AlertCircle
                        size={16}
                        className="absolute top-1/2 right-3 -translate-y-1/2 text-red-500"
                      />
                    )}
                  </div>
                </FormControl>
                <FormMessage className="text-red-500 flex items-center gap-1">
                  {form.formState.errors.phone && (
                    <AlertCircle size={12} className="text-red-500" />
                  )}
                  {form.formState.errors.phone?.message}
                </FormMessage>
              </FormItem>
            )}
          />

          {/* Funcionalidades */}
          <FormField
            control={form.control}
            name="funcionalidades"
            render={() => (
              <FormItem>
                <div className="mb-4">
                  <FormLabel className="text-base text-zinc-300 font-semibold">
                    Funcionalidades que mais utilizará?
                  </FormLabel>
                  <FormDescription className="text-zinc-600">
                    Selecione as funcionalidades que você mais utilizará.
                  </FormDescription>
                </div>
                {funcionalidades.map((item) => (
                  <FormField
                    key={item.id}
                    control={form.control}
                    name="funcionalidades"
                    render={({ field }) => (
                      <FormItem
                        key={item.id}
                        className="flex flex-row items-start space-x-3 space-y-0 "
                      >
                        <FormControl>
                          <Checkbox
                            checked={field.value?.includes(item.id)}
                            onCheckedChange={(checked) => {
                              return checked
                                ? field.onChange([...field.value, item.id])
                                : field.onChange(
                                    field.value?.filter(
                                      (value) => value !== item.id,
                                    ),
                                  );
                            }}
                            className="border-zinc-900 data-[state=checked]:bg-zinc-900 data-[state=checked]:text-white"
                          />
                        </FormControl>
                        <FormLabel className="font-normal text-zinc-200">
                          {item.label}
                        </FormLabel>
                      </FormItem>
                    )}
                  />
                ))}
                <FormMessage className="text-red-500 flex items-center gap-1">
                  {form.formState.errors.funcionalidades && (
                    <AlertCircle size={12} className="text-red-500" />
                  )}
                  {form.formState.errors.funcionalidades?.message}
                </FormMessage>
              </FormItem>
            )}
          />

          {/* Botão de Envio */}
          <Button
            type="submit"
            className="bg-white/5 border-zinc-900 border text-white text-base hover:opacity-70 transition-all w-full h-12 rounded-full flex items-center gap-4 "
          >
            Confirmar
            <ArrowRight size={12} />
          </Button>
        </form>
      </Form>
    </div>
  );
}
