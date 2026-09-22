import type { Metadata } from "next"
import { Mail, Phone, MapPin, Clock, Shield } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { ContactForm } from "@/components/contato/ContactForm"

export const metadata: Metadata = {
  title: "Contato — Primex Sistemas",
  description: "Entre em contato com a Primex Sistemas. Estamos prontos para ajudar.",
}

const contactInfo = [
  { icon: Mail, label: "E-mail", value: "pedrofsneto33@gmail.com" },
  { icon: Phone, label: "Telefone", value: "+55 (86) 98811-7925" },
  { icon: MapPin, label: "Localização", value: "Teresina, PI - Brasil" },
  { icon: Clock, label: "Horário", value: "Seg-Sex, 9h às 18h" },
  { icon: Shield, label: "CNPJ", value: "55.536.885/0001-30" },
]

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-32 bg-primex-black text-center overflow-hidden border-b border-primex-gray-800">
        <div className="container mx-auto px-6 relative z-10 max-w-4xl">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full border border-primex-green/30 bg-primex-green/5 text-primex-green text-sm font-medium">
            FALE CONOSCO
          </span>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-primex-white mb-6 tracking-tight">
            Vamos <span className="text-primex-green">Conversar</span>
          </h1>
          <p className="text-lg md:text-xl text-primex-gray-300 max-w-2xl mx-auto leading-relaxed">
            Tem um projeto em mente ou precisa de uma solução robusta? Nossa equipe está pronta para atender você.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-primex-black">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Formulário (2 colunas) */}
            <div className="lg:col-span-2">
              <ContactForm />
            </div>

            {/* Informações e Mapa (1 coluna) */}
            <div className="space-y-6">
              {/* Card de Informações */}
              <Card className="bg-primex-dark border-primex-gray-800">
                <CardContent className="p-6 space-y-6">
                  <h3 className="font-display text-xl text-primex-white font-semibold">
                    Informações de Contato
                  </h3>
                  <div className="space-y-4">
                    {contactInfo.map((item, index) => {
                      const Icon = item.icon
                      return (
                        <div key={index} className="flex items-start gap-4">
                          <div className="w-10 h-10 rounded-xl bg-primex-green/10 flex items-center justify-center text-primex-green shrink-0">
                            <Icon className="w-5 h-5" />
                          </div>
                          <div>
                            <p className="text-xs text-primex-gray-400 font-medium">
                              {item.label}
                            </p>
                            <p className="text-sm text-primex-white font-semibold mt-0.5">
                              {item.value}
                            </p>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </CardContent>
              </Card>

              {/* Card de Mapa Placeholder */}
              <Card className="bg-primex-dark border-primex-gray-800 overflow-hidden">
                <CardContent className="p-0">
                  <div className="h-64 bg-gradient-to-br from-primex-green/10 via-primex-dark to-primex-black flex flex-col items-center justify-center text-center p-6 border border-primex-gray-800">
                    <div className="w-14 h-14 rounded-2xl bg-primex-green/10 flex items-center justify-center text-primex-green mb-3">
                      <MapPin className="w-7 h-7" />
                    </div>
                    <h4 className="font-display text-primex-white font-semibold text-lg">
                      Teresina, PI
                    </h4>
                    <p className="text-primex-gray-400 text-xs mt-1">
                      Atendimento presencial e remoto para todo o Brasil.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
