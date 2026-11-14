"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { motion } from "motion/react"
import { Send, Loader2, CheckCircle2 } from "lucide-react"
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
import Link from "next/link"
import { whatsappLink } from "@/data/site"

const contactSchema = z.object({
  name: z.string().min(3, "Nome deve ter pelo menos 3 caracteres"),
  email: z.string().email("E-mail inválido"),
  company: z.string().optional(),
  phone: z.string().optional(),
  service: z.string().min(1, "Selecione um serviço"),
  message: z.string().min(10, "Mensagem deve ter pelo menos 10 caracteres"),
  consent: z.boolean().refine((v) => v === true, {
    message: "É necessário concordar para enviar a mensagem",
  }),
})

type ContactFormData = z.infer<typeof contactSchema>

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
    watch,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  const serviceValue = watch("service")

  const serviceLabels: Record<string, string> = {
    web: "Desenvolvimento Web",
    mobile: "Aplicativos Mobile",
    sistemas: "Sistemas Sob Medida",
    ia: "IA & Automação",
    outro: "Outro / Consultoria",
  }

  // Sem backend de e-mail: a mensagem é montada e aberta no WhatsApp da Primex.
  const onSubmit = (data: ContactFormData) => {
    setIsSubmitting(true)
    const text = [
      "Olá! Vim pelo formulário do site da Primex Sistemas.",
      `Nome: ${data.name}`,
      `E-mail: ${data.email}`,
      data.phone ? `Telefone: ${data.phone}` : null,
      data.company ? `Empresa: ${data.company}` : null,
      `Serviço: ${serviceLabels[data.service] ?? data.service}`,
      "",
      data.message,
    ]
      .filter((line) => line !== null)
      .join("\n")
    window.open(whatsappLink(text), "_blank", "noopener,noreferrer")
    setIsSubmitting(false)
    setIsSuccess(true)
    reset()
    setTimeout(() => setIsSuccess(false), 8000)
  }

  return (
    <Card className="bg-primex-dark border-primex-gray-800 shadow-2xl">
      <CardContent className="p-6 md:p-8">
        {isSuccess ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-12 space-y-4"
          >
            <div className="w-16 h-16 bg-primex-green/10 text-primex-green rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="font-display text-2xl text-primex-white font-bold">
              Quase lá!
            </h3>
            <p className="text-primex-gray-300 max-w-md mx-auto">
              Abrimos o WhatsApp com a sua mensagem pronta. É só tocar em enviar. Se preferir, escreva para o nosso e-mail.
            </p>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <Label htmlFor="name" className="text-primex-gray-300 mb-2 block">
                Nome completo *
              </Label>
              <Input
                id="name"
                placeholder="Seu nome"
                {...register("name")}
                className="bg-primex-gray-900 border-primex-gray-700 text-primex-white placeholder:text-primex-gray-500 focus-visible:ring-primex-green"
              />
              {errors.name && (
                <p className="text-red-400 text-xs mt-1.5">{errors.name.message}</p>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="email" className="text-primex-gray-300 mb-2 block">
                  E-mail corporativo *
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="seu.email@empresa.com"
                  {...register("email")}
                  className="bg-primex-gray-900 border-primex-gray-700 text-primex-white placeholder:text-primex-gray-500 focus-visible:ring-primex-green"
                />
                {errors.email && (
                  <p className="text-red-400 text-xs mt-1.5">{errors.email.message}</p>
                )}
              </div>

              <div>
                <Label htmlFor="phone" className="text-primex-gray-300 mb-2 block">
                  Telefone / WhatsApp
                </Label>
                <Input
                  id="phone"
                  placeholder="(86) 99999-9999"
                  {...register("phone")}
                  className="bg-primex-gray-900 border-primex-gray-700 text-primex-white placeholder:text-primex-gray-500 focus-visible:ring-primex-green"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="company" className="text-primex-gray-300 mb-2 block">
                Empresa
              </Label>
              <Input
                id="company"
                placeholder="Nome da sua empresa"
                {...register("company")}
                className="bg-primex-gray-900 border-primex-gray-700 text-primex-white placeholder:text-primex-gray-500 focus-visible:ring-primex-green"
              />
            </div>

            <div>
              <Label htmlFor="service" className="text-primex-gray-300 mb-2 block">
                Serviço de interesse *
              </Label>
              <Select
                value={serviceValue}
                onValueChange={(v) => setValue("service", v, { shouldValidate: true })}
              >
                <SelectTrigger className="bg-primex-gray-900 border-primex-gray-700 text-primex-white focus:ring-primex-green">
                  <SelectValue placeholder="Selecione um serviço..." />
                </SelectTrigger>
                <SelectContent className="bg-primex-dark border-primex-gray-800 text-primex-white">
                  <SelectItem value="web">Desenvolvimento Web</SelectItem>
                  <SelectItem value="mobile">Aplicativos Mobile</SelectItem>
                  <SelectItem value="sistemas">Sistemas Sob Medida</SelectItem>
                  <SelectItem value="ia">IA & Automação</SelectItem>
                  <SelectItem value="outro">Outro / Consultoria</SelectItem>
                </SelectContent>
              </Select>
              {errors.service && (
                <p className="text-red-400 text-xs mt-1.5">{errors.service.message}</p>
              )}
            </div>

            <div>
              <Label htmlFor="message" className="text-primex-gray-300 mb-2 block">
                Mensagem / Detalhes do Projeto *
              </Label>
              <textarea
                id="message"
                rows={5}
                placeholder="Descreva seu projeto ou necessidade..."
                {...register("message")}
                className="flex w-full rounded-md border border-primex-gray-700 bg-primex-gray-900 px-3 py-2 text-sm text-primex-white placeholder:text-primex-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primex-green focus-visible:ring-offset-2 ring-offset-primex-black disabled:cursor-not-allowed disabled:opacity-50"
              />
              {errors.message && (
                <p className="text-red-400 text-xs mt-1.5">{errors.message.message}</p>
              )}
            </div>

            <div>
              <label className="flex items-start gap-3 text-sm text-primex-gray-300 cursor-pointer">
                <input
                  type="checkbox"
                  {...register("consent")}
                  className="mt-1 h-4 w-4 accent-[#00C853]"
                />
                <span>
                  Concordo em compartilhar estes dados para receber retorno sobre o meu contato,
                  conforme a{" "}
                  <Link href="/privacidade" className="text-primex-green hover:underline">
                    Política de Privacidade
                  </Link>
                  . *
                </span>
              </label>
              {errors.consent && (
                <p className="text-red-400 text-xs mt-1.5">{errors.consent.message}</p>
              )}
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-primex-green hover:bg-primex-green-hover text-primex-black font-semibold h-11 text-base transition-all"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Abrindo WhatsApp...
                </>
              ) : (
                <>
                  <Send className="mr-2 h-5 w-5" />
                  Enviar pelo WhatsApp
                </>
              )}
            </Button>
          </form>
        )}
      </CardContent>
    </Card>
  )
}
