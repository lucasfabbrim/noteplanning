import { useState, useEffect } from "react";
import { X, AlertCircle, Check } from "lucide-react";
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
  fullName: z.string().min(3, "Nome deve ter pelo menos 3 caracteres"),
  email: z.string().email("Email inválido"),
  phone: z.string().min(8, "Telefone deve ter pelo menos 8 dígitos"),
  countryCode: z.string(),
  preferences: z
    .array(z.string())
    .min(1, "Selecione pelo menos uma preferência"),
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
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4 z-50"
          onClick={onClose}
        >
          <motion.div
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="bg-white rounded-lg p-6 w-full max-w-md relative shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X size={24} />
            </button>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Inscreva-se
            </h2>
            <Progress value={step === 1 ? 50 : 100} className="mb-6" />
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
                        <Label htmlFor="fullName" className="text-gray-700">
                          Nome Completo
                        </Label>
                        <Input
                          id="fullName"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleChange}
                          className={`mt-1 ${
                            touched.fullName && errors.fullName
                              ? "border-red-500"
                              : ""
                          }`}
                          required
                        />
                        {touched.fullName && errors.fullName && (
                          <p className="text-red-500 text-sm mt-1 flex items-center">
                            <AlertCircle size={16} className="mr-1" />
                            {errors.fullName}
                          </p>
                        )}
                      </div>
                      <div>
                        <Label htmlFor="email" className="text-gray-700">
                          Email
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          className={`mt-1 ${
                            touched.email && errors.email
                              ? "border-red-500"
                              : ""
                          }`}
                          required
                        />
                        {touched.email && errors.email && (
                          <p className="text-red-500 text-sm mt-1 flex items-center">
                            <AlertCircle size={16} className="mr-1" />
                            {errors.email}
                          </p>
                        )}
                      </div>
                      <div>
                        <Label htmlFor="phone" className="text-gray-700">
                          Telefone
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
                            <SelectTrigger className="w-[100px]">
                              <SelectValue placeholder="Código" />
                            </SelectTrigger>
                            <SelectContent>
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
                            className={`flex-1 ml-2 ${
                              touched.phone && errors.phone
                                ? "border-red-500"
                                : ""
                            }`}
                            required
                          />
                        </div>
                        {touched.phone && errors.phone && (
                          <p className="text-red-500 text-sm mt-1 flex items-center">
                            <AlertCircle size={16} className="mr-1" />
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
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                  >
                    <div className="space-y-4">
                      <Label className="text-gray-700">
                        O que é mais útil para você?
                      </Label>
                      {preferences.map((preference) => (
                        <div
                          key={preference.id}
                          className="flex items-center space-x-2"
                        >
                          <Checkbox
                            id={preference.id}
                            checked={formData.preferences.includes(
                              preference.id,
                            )}
                            onCheckedChange={() =>
                              handlePreferenceChange(preference.id)
                            }
                          />
                          <label
                            htmlFor={preference.id}
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-700"
                          >
                            {preference.label}
                          </label>
                        </div>
                      ))}
                      {touched.preferences && errors.preferences && (
                        <p className="text-red-500 text-sm mt-1 flex items-center">
                          <AlertCircle size={16} className="mr-1" />
                          {errors.preferences}
                        </p>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
              <div className="flex justify-between pt-4">
                {step === 2 && (
                  <Button type="button" onClick={prevStep} variant="outline">
                    Voltar
                  </Button>
                )}
                {step === 1 ? (
                  <Button type="button" onClick={nextStep} className="ml-auto">
                    Prosseguir
                  </Button>
                ) : (
                  <Button type="submit" className="ml-auto">
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
