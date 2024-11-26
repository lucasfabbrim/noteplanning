import { useState, useEffect } from "react";
import { X, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";
import { motion, AnimatePresence } from "framer-motion";
import { z } from "zod";

interface ModalFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const preferences = [
  { id: "productivity", label: "Produtividade" },
  { id: "organization", label: "Organização" },
  { id: "timeManagement", label: "Gestão de Tempo" },
  { id: "goalSetting", label: "Definição de Metas" },
];

const formSchema = z.object({
  fullName: z.string().min(3, "Informe um nome válido, por favor."),
  email: z.string().email("Informe um e-mail válido, por favor."),
  phone: z.string().min(8, "Informe um número telefone válido, por favor."),
  countryCode: z.string(),
  preferences: z
    .array(z.string())
    .min(1, "Selecione pelo menos uma preferência."),
});

type FormData = z.infer<typeof formSchema>;

export function ModalForm({ isOpen, onClose }: ModalFormProps) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    countryCode: "+55",
    preferences: [],
  });
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>(
    {},
  );
  const [touched, setTouched] = useState<
    Partial<Record<keyof FormData, boolean>>
  >({});

  const validateField = (field: keyof FormData, value: unknown) => {
    try {
      const fieldSchema = formSchema.shape[field];
      fieldSchema.parse(value);
      setErrors((prev) => ({ ...prev, [field]: undefined }));
      return true;
    } catch (error) {
      if (error instanceof z.ZodError) {
        setErrors((prev) => ({ ...prev, [field]: error.errors[0].message }));
      }
      return false;
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setTouched((prev) => ({ ...prev, [name]: true }));
    validateField(name as keyof FormData, value);
  };

  const handlePreferenceChange = (preferenceId: string) => {
    const newPreferences = formData.preferences.includes(preferenceId)
      ? formData.preferences.filter((id) => id !== preferenceId)
      : [...formData.preferences, preferenceId];
    setFormData((prev) => ({ ...prev, preferences: newPreferences }));
    setTouched((prev) => ({ ...prev, preferences: true }));
    validateField("preferences", newPreferences);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const isValid = Object.keys(formSchema.shape).every((key) =>
      validateField(key as keyof FormData, formData[key as keyof FormData]),
    );
    if (isValid) {
      console.log("Form submitted:", formData);
      const whatsappNumber = "19993356780";
      const message = encodeURIComponent(
        `Olá! Gostaria de saber mais sobre o Note Private.`,
      );
      window.location.href = `https://wa.me/${whatsappNumber}?text=${message}`;
    } else {
      setTouched(
        Object.keys(formSchema.shape).reduce(
          (acc, key) => ({ ...acc, [key]: true }),
          {},
        ),
      );
    }
  };

  const nextStep = () => {
    const currentStepFields =
      step === 1 ? ["fullName", "email", "phone"] : ["preferences"];
    const isStepValid = currentStepFields.every((field) =>
      validateField(field as keyof FormData, formData[field as keyof FormData]),
    );
    if (isStepValid) {
      setStep((prev) => Math.min(prev + 1, 2));
    } else {
      currentStepFields.forEach((field) =>
        setTouched((prev) => ({ ...prev, [field]: true })),
      );
    }
  };

  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const modalVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", damping: 25, stiffness: 500 },
    },
    exit: { opacity: 0, y: 50, transition: { duration: 0.2 } },
  };

  const contentVariants = {
    hidden: { x: 20, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.3 } },
    exit: { x: -20, opacity: 0, transition: { duration: 0.3 } },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4 z-50 backdrop-blur-md"
          onClick={onClose}
        >
          <motion.div
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="bg-neutral-900 rounded-[10px] p-8 w-full max-w-md relative shadow-xl "
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-zinc-300 hover:text-zinc-300/85 transition-colors"
            >
              <X size={24} />
            </button>
            <p className="text-white text-base mb-2 pt-10">Passo {step} de 2</p>
            <Progress
              value={step === 1 ? 50 : 100}
              className="mb-6 h-3 border-none "
            />
            <form onSubmit={handleSubmit} className="space-y-6">
              <AnimatePresence mode="wait">
                {step === 1 && (
                  <motion.div
                    key="step1"
                    variants={contentVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                  >
                    <div className="space-y-4">
                      <div>
                        <Label
                          htmlFor="fullName"
                          className="text-zinc-100 font-bold"
                        >
                          Nome Completo
                        </Label>
                        <Input
                          id="fullName"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleChange}
                          className={`mt-1 border border-zinc-800 text-zinc-300 font-medium${
                            touched.fullName && errors.fullName
                              ? "border-rose-500"
                              : ""
                          }`}
                          required
                        />
                        {touched.fullName && errors.fullName && (
                          <p className="text-rose-600 font-medium text-xs mt-2 flex items-center">
                            <AlertCircle size={12} className="mr-1" />
                            {errors.fullName}
                          </p>
                        )}
                      </div>
                      <div>
                        <Label
                          htmlFor="email"
                          className="text-zinc-100 font-bold"
                        >
                          E-mail
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          className={`mt-1 border border-zinc-800 text-zinc-300 font-medium${
                            touched.email && errors.email
                              ? "border-rose-600"
                              : ""
                          }`}
                          required
                        />
                        {touched.email && errors.email && (
                          <p className="text-rose-600 font-medium text-xs mt-2 flex items-center">
                            <AlertCircle size={12} className="mr-1" />
                            {errors.email}
                          </p>
                        )}
                      </div>
                      <div>
                        <Label
                          htmlFor="phone"
                          className="text-zinc-100 font-bold"
                        >
                          Número de Telefone
                        </Label>
                        <div className="flex mt-1">
                          <Select
                            value={formData.countryCode}
                            onValueChange={(value) =>
                              setFormData((prev) => ({
                                ...prev,
                                countryCode: value,
                              }))
                            }
                          >
                            <SelectTrigger className="w-[100px] border-zinc-800 text-zinc-300">
                              <SelectValue placeholder="Código" />
                            </SelectTrigger>
                            <SelectContent className="bg-zinc-900 border-none text-zinc-300">
                              <SelectItem value="+55">+55 BR</SelectItem>
                              <SelectItem value="+1">+1 US</SelectItem>
                              <SelectItem value="+44">+44 UK</SelectItem>
                            </SelectContent>
                          </Select>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleChange}
                            className={`flex-1 ml-2 border-zinc-800 text-zinc-300 ${
                              touched.phone && errors.phone
                                ? "border-rose-600"
                                : ""
                            }`}
                            required
                          />
                        </div>
                        {touched.phone && errors.phone && (
                          <p className="text-rose-600 font-medium text-xs mt-2 flex items-center">
                            <AlertCircle size={12} className="mr-1" />
                            {errors.phone}
                          </p>
                        )}
                      </div>
                    </div>
                  </motion.div>
                )}
                {step === 2 && (
                  <motion.div
                    key="step2"
                    variants={contentVariants}
                    className="py-4"
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                  >
                    <div className="space-y-4">
                      <Label className="text-base text-zinc-100 font-semibold ">
                        Quais funcionalidades você mais utilizará?
                      </Label>
                      <Label className="text-zinc-400 pb-10">
                        Selecione as opções que melhor se adequam às suas
                        necessidades.
                      </Label>
                      {preferences.map((preference) => (
                        <div
                          key={preference.id}
                          className="flex items-center space-x-2 "
                        >
                          <Checkbox
                            id={preference.id}
                            className="bg-zinc-800 border-none text-white"
                            checked={formData.preferences.includes(
                              preference.id,
                            )}
                            onCheckedChange={() =>
                              handlePreferenceChange(preference.id)
                            }
                          />
                          <label
                            htmlFor={preference.id}
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-zinc-100"
                          >
                            {preference.label}
                          </label>
                        </div>
                      ))}
                      {touched.preferences && errors.preferences && (
                        <p className="text-rose-500 font-medium text-xs mt-2 flex items-center">
                          <AlertCircle size={12} className="mr-1" />
                          {errors.preferences}
                        </p>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
              <div className="flex justify-between pt-4">
                {step === 2 && (
                  <Button
                    type="button"
                    onClick={prevStep}
                    variant="outline"
                    className="bg-red-600 border-none text-white hover:bg-red-600/90 hover:text-white/80"
                  >
                    Voltar
                  </Button>
                )}
                {step === 1 ? (
                  <Button
                    type="button"
                    onClick={nextStep}
                    className="ml-auto bg-white text-black border-none hover:bg-white/90 hover:text-black/80"
                  >
                    Prosseguir
                  </Button>
                ) : (
                  <Button
                    type="submit"
                    className="ml-auto bg-white text-black border-none hover:bg-white/90 hover:text-black/80"
                  >
                    Concluir
                  </Button>
                )}
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
