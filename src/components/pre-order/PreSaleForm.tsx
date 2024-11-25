"use client";

import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";
import { AlertCircle } from "lucide-react";

interface FieldErrorMessageProps {
  fieldName: string;
  errors: any;
}

const functionalityOptions = [
  { id: "finances", label: "Finanças" },
  { id: "routine", label: "Rotina" },
  { id: "books", label: "Livros" },
  { id: "studies", label: "Estudos" },
  { id: "projects", label: "Projetos" },
  { id: "workout", label: "Treino" },
  { id: "accounts", label: "Contas" },
];

const FieldErrorMessage = ({ fieldName, errors }: FieldErrorMessageProps) => {
  const error = errors?.[fieldName];

  if (!error) return null;

  return (
    <div className="flex items-center text-rose-600 mt-2">
      <AlertCircle size={16} className="mr-1" />
      {error.message}
    </div>
  );
};

const formSchema = z.object({
  fullName: z
    .string()
    .min(2, {
      message: "Nome e sobrenome devem ter pelo menos 2 caracteres.",
    })
    .refine((value) => value.trim().includes(" "), {
      message: "Por favor, insira nome e sobrenome.",
    }),
  phone: z.string().regex(/^\+55 $$\d{2}$$ \d{5}-\d{4}$/, {
    message: "Telefone deve estar no formato +55 (XX) XXXXX-XXXX",
  }),
  email: z.string().email({
    message: "Por favor, insira um endereço de e-mail válido.",
  }),
  functionalities: z.array(z.string()).refine((value) => value.length > 0, {
    message: "Selecione pelo menos uma funcionalidade.",
  }),
});

export function PreSaleForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      phone: "+55 ",
      email: "",
      functionalities: [],
    },
    mode: "onChange",
  });

  const formatPhoneNumber = (value: string) => {
    const digits = value.replace(/\D/g, "").substring(2);
    const areaCode = digits.slice(0, 2);
    const part1 = digits.slice(2, 7);
    const part2 = digits.slice(7, 11);
    let formatted = "+55 ";
    if (areaCode) formatted += `(${areaCode}) `;
    if (part1) formatted += part1;
    if (part2) formatted += `-${part2}`;
    return formatted;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhoneNumber(e.target.value);
    form.setValue("phone", formatted, { shouldValidate: true });
  };

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    // Simula uma chamada de API
    setTimeout(() => {
      console.log(values);
      setIsSubmitting(false);
      form.reset();
    }, 2000);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 border-t border-zinc-900 pt-10 pb-4"
      >
        {/* Nome e Sobrenome */}
        <FormField
          control={form.control}
          name="fullName"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-bold">Nome e Sobrenome</FormLabel>
              <FormControl>
                <Input
                  placeholder="Informe seu nome completo."
                  {...field}
                  className={cn(
                    "transition-colors duration-200 h-11 border-zinc-900 text-zinc-300/90",
                    form.formState.errors.fullName &&
                      "border-rose-600 focus-visible:ring-rose-600",
                  )}
                />
              </FormControl>
              <FieldErrorMessage
                fieldName="fullName"
                errors={form.formState.errors}
              />
            </FormItem>
          )}
        />

        {/* Telefone */}
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-bold">Número de Telefone</FormLabel>
              <FormControl>
                <Input
                  placeholder="Informe seu número de telefone."
                  {...field}
                  value={field.value}
                  onChange={handlePhoneChange}
                  className={cn(
                    "transition-colors duration-200 border-zinc-900 h-10 text-zinc-300/90",
                    form.formState.errors.phone &&
                      "border-rose-600 focus-visible:ring-rose-600",
                  )}
                />
              </FormControl>
              <FieldErrorMessage
                fieldName="phone"
                errors={form.formState.errors}
              />
            </FormItem>
          )}
        />

        {/* Email */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-bold">E-mail</FormLabel>
              <FormControl>
                <Input
                  placeholder="Informe seu e-mail de contato."
                  {...field}
                  className={cn(
                    "transition-colors duration-200 border-zinc-900 h-10 text-zinc-300/90",
                    form.formState.errors.email &&
                      "border-rose-600 focus-visible:ring-rose-600",
                  )}
                />
              </FormControl>
              <FieldErrorMessage
                fieldName="email"
                errors={form.formState.errors}
              />
            </FormItem>
          )}
        />

        {/* Funcionalidades */}
        <FormField
          control={form.control}
          name="functionalities"
          render={() => (
            <FormItem>
              <div className="mb-4">
                <FormLabel className="text-lg font-semibold">
                  Quais funcionalidades você mais utilizará?
                </FormLabel>
                <FormDescription>
                  Selecione as opções que melhor se adequam às suas
                  necessidades.
                </FormDescription>
              </div>
              {functionalityOptions.map((option) => (
                <FormField
                  key={option.id}
                  control={form.control}
                  name="functionalities"
                  render={({ field }) => {
                    return (
                      <FormItem
                        key={option.id}
                        className="flex flex-row items-start space-x-3 space-y-0 pb-0.5 "
                      >
                        <FormControl>
                          <Checkbox
                            checked={field.value?.includes(option.id)}
                            onCheckedChange={(checked) => {
                              return checked
                                ? field.onChange([...field.value, option.id])
                                : field.onChange(
                                    field.value?.filter(
                                      (value) => value !== option.id,
                                    ),
                                  );
                            }}
                          />
                        </FormControl>
                        <FormLabel className="font-normal">
                          {option.label}
                        </FormLabel>
                      </FormItem>
                    );
                  }}
                />
              ))}
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Botão de envio */}
        <Button
          type="submit"
          disabled={
            isSubmitting || Object.keys(form.formState.errors).length > 0
          }
          className={cn(
            "w-full transition-colors duration-200 h-12 text-base bg-white text-black",
            (isSubmitting || Object.keys(form.formState.errors).length > 0) &&
              "bg-white/60 text-black cursor-not-allowed",
          )}
        >
          {isSubmitting ? "Confirmando..." : "Confirmar"}
        </Button>
      </form>
    </Form>
  );
}
