"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { motion } from "motion/react"
import { Send, Loader2, CheckCircle2, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"

const contactSchema = z.object({
  name: z.string().min(3, "Nome deve ter pelo menos 3 caracteres"),
  email: z.string().email("E-mail inválido"),
  company: z.string().optional(),
  phone: z.string().optional(),
  service: z.string().min(1, "Selecione um serviço"),
  message: z.string().min(10, "Mensagem deve ter pelo menos 10 caracteres"),
})

type ContactFormData = z.infer<typeof contactSchema>

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
    watch,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      phone: "",
      service: "",
      message: "",
    },
  })

  const serviceValue = watch("service")

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    setErrorMessage(null)

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
          subject: `Novo contato pelo site - ${data.name}`,
          from_name: "Primex Sistemas - Site",
          name: data.name,
          email: data.email,
          company: data.company || "Não informado",
          phone: data.phone || "Não informado",
          service: data.service,
          message: data.message,
        }),
      })

      const result = await response.json()

      if (result.success) {
        setIsSuccess(true)
        reset({
          name: "",
          email: "",
          company: "",
          phone: "",
          service: "",
          message: "",
        })
        setTimeout(() => setIsSuccess(false), 8000)
      } else {
        setErrorMessage(
          result.message || "Erro ao enviar mensagem. Tente novamente."
        )
      }
    } catch (error) {
      console.error("Erro ao enviar:", error)
      setErrorMessage(
        "Erro de conexão. Verifique sua internet e tente novamente."
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSuccess) {
    return (
      <Card className="bg-primex-dark border-primex-green/40">
        <CardContent className="p-8 md:p-12 text-center">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primex-green/10 border border-primex-green/30 mb-6"
          >
            <CheckCircle2 size={40} className="text-primex-green" />
          </motion.div>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-display text-2xl font-bold text-primex-white mb-3"
          >
            Mensagem enviada!
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-primex-gray-300"
          >
            Recebemos seu contato. Nossa equipe entrará em contato em breve.
          </motion.p>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="bg-primex-dark border-primex-gray-800">
      <CardContent className="p-6 md:p-8">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div>
            <Label htmlFor="name" className="text-primex-white mb-2 block">
              Nome *
            </Label>
            <Input
              id="name"
              {...register("name")}
              placeholder="Seu nome completo"
              className="bg-primex-gray-900 border-primex-gray-700 text-primex-white placeholder:text-primex-gray-500"
            />
            {errors.name && (
              <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="email" className="text-primex-white mb-2 block">
                E-mail *
              </Label>
              <Input
                id="email"
                type="email"
                {...register("email")}
                placeholder="seu@email.com"
                className="bg-primex-gray-900 border-primex-gray-700 text-primex-white placeholder:text-primex-gray-500"
              />
              {errors.email && (
                <p className="text-red-400 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>
            <div>
              <Label htmlFor="phone" className="text-primex-white mb-2 block">
                Telefone
              </Label>
              <Input
                id="phone"
                {...register("phone")}
                placeholder="(86) 98811-7925"
                className="bg-primex-gray-900 border-primex-gray-700 text-primex-white placeholder:text-primex-gray-500"
              />
            </div>
          </div>

          <div>
            <Label htmlFor="company" className="text-primex-white mb-2 block">
              Empresa
            </Label>
            <Input
              id="company"
              {...register("company")}
              placeholder="Nome da sua empresa"
              className="bg-primex-gray-900 border-primex-gray-700 text-primex-white placeholder:text-primex-gray-500"
            />
          </div>

          <div>
            <Label htmlFor="service" className="text-primex-white mb-2 block">
              Serviço desejado *
            </Label>
            <Select
              value={serviceValue ?? ""}
              onValueChange={(v) =>
                setValue("service", v, { shouldValidate: true })
              }
            >
              <SelectTrigger className="bg-primex-gray-900 border-primex-gray-700 text-primex-white">
                <SelectValue placeholder="Selecione um serviço" />
              </SelectTrigger>
              <SelectContent className="bg-primex-gray-900 border-primex-gray-700">
                <SelectItem value="web">Desenvolvimento Web</SelectItem>
                <SelectItem value="mobile">Aplicativos Mobile</SelectItem>
                <SelectItem value="sistemas">Sistemas Sob Medida</SelectItem>
                <SelectItem value="ia">IA & Automação</SelectItem>
                <SelectItem value="suporte">Manutenção e Suporte</SelectItem>
                <SelectItem value="outro">Outro</SelectItem>
              </SelectContent>
            </Select>
            {errors.service && (
              <p className="text-red-400 text-sm mt-1">
                {errors.service.message}
              </p>
            )}
          </div>

          <div>
            <Label htmlFor="message" className="text-primex-white mb-2 block">
              Mensagem *
            </Label>
            <textarea
              id="message"
              rows={5}
              {...register("message")}
              placeholder="Conte-nos sobre o seu projeto..."
              className="flex w-full rounded-md border border-primex-gray-700 bg-primex-gray-900 px-3 py-2 text-sm text-primex-white placeholder:text-primex-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primex-green focus-visible:ring-offset-0 disabled:opacity-50 resize-none"
            />
            {errors.message && (
              <p className="text-red-400 text-sm mt-1">
                {errors.message.message}
              </p>
            )}
          </div>

          {errorMessage && (
            <div className="flex items-start gap-3 p-4 rounded-lg bg-red-500/10 border border-red-500/30">
              <AlertCircle size={20} className="text-red-400 shrink-0 mt-0.5" />
              <p className="text-red-400 text-sm">{errorMessage}</p>
            </div>
          )}

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-primex-green hover:bg-primex-green-hover text-primex-black font-semibold h-12"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Enviando...
              </>
            ) : (
              <>
                <Send className="mr-2 h-4 w-4" />
                Enviar Mensagem
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
