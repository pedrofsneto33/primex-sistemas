"use client"

import { useState } from "react"
import Image from "next/image"

import { team } from "@/data/team"
import { motion } from "motion/react"
import { Card, CardContent } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Briefcase, Mail, User, Camera } from "lucide-react"
import type { LucideIcon } from "lucide-react"
import type { TeamMember } from "@/types"

const socialIconMap: Record<string, LucideIcon> = {
  linkedin: Briefcase,
  email: Mail,
  github: User,
  twitter: User,
  dribbble: User,
  instagram: Camera,
}

function TeamMemberCard({
  member,
  index,
  openMemberId,
  setOpenMemberId,
  imageErrors,
  setImageErrors,
}: {
  member: TeamMember
  index: number
  openMemberId: string | null
  setOpenMemberId: (id: string | null) => void
  imageErrors: Record<string, boolean>
  setImageErrors: React.Dispatch<React.SetStateAction<Record<string, boolean>>>
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="h-full"
    >
      <Card className="h-full bg-primex-dark border-primex-gray-800 hover:border-primex-green transition-all duration-300 group">
        <CardContent className="p-6 flex flex-col items-center text-center h-full">
          <div className="w-24 h-24 rounded-full bg-primex-green/10 flex items-center justify-center text-primex-green mb-6 group-hover:scale-105 transition-transform border border-primex-green/20 overflow-hidden">
            {member.image && !imageErrors[member.id] ? (
              <Dialog
                open={openMemberId === member.id}
                onOpenChange={(open) =>
                  setOpenMemberId(open ? member.id : null)
                }
              >
                <DialogTrigger asChild>
                  <button
                    type="button"
                    className="rounded-full cursor-pointer overflow-hidden focus:outline-none focus:ring-2 focus:ring-primex-green focus:ring-offset-2 focus:ring-offset-primex-black transition-transform hover:scale-105"
                    aria-label={`Ver foto de ${member.name}`}
                  >
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={96}
                      height={96}
                      className="rounded-full object-cover w-24 h-24"
                      onError={() =>
                        setImageErrors((prev) => ({
                          ...prev,
                          [member.id]: true,
                        }))
                      }
                    />
                  </button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl bg-primex-dark border-primex-gray-800 p-2 sm:p-4">
                  <div className="flex flex-col items-center gap-4">
                    <div className="relative w-full aspect-square max-h-[70vh] rounded-lg overflow-hidden bg-primex-black flex items-center justify-center">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        sizes="(max-width: 768px) 100vw, 600px"
                        className="object-contain"
                      />
                    </div>
                    <div className="text-center pb-2">
                      <p className="font-display text-lg font-bold text-primex-white">
                        {member.name}
                      </p>
                      <p className="text-primex-green text-sm">{member.role}</p>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            ) : (
              <User className="w-10 h-10" />
            )}
          </div>
          <h3 className="font-display text-lg text-primex-white font-semibold mb-1">
            {member.name}
          </h3>
          <p className="text-primex-green text-sm font-medium mb-3">
            {member.role}
          </p>
          {member.bio && (
            <p className="text-primex-gray-300 text-xs line-clamp-2 mb-6">
              {member.bio}
            </p>
          )}

          {member.social && (
            <div className="flex justify-center gap-3 mt-auto pt-4 border-t border-primex-gray-800 w-full">
              {Object.entries(member.social).map(([platform, url]) => {
                const Icon = socialIconMap[platform] || User
                return (
                  <a
                    key={platform}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full bg-primex-gray-900 flex items-center justify-center text-primex-gray-300 hover:bg-primex-green hover:text-primex-black transition-colors"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                )
              })}
            </div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  )
}

export function TeamSection() {
  const [openMemberId, setOpenMemberId] = useState<string | null>(null)
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({})

  return (
    <section className="py-20 px-6 bg-primex-black border-t border-primex-gray-800">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primex-white mb-4">
            NOSSA EQUIPE
          </h2>
          <p className="text-primex-gray-300">
            Mentes brilhantes dedicadas a entregar excelência em cada projeto.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, index) => (
            <TeamMemberCard
              key={member.id}
              member={member}
              index={index}
              openMemberId={openMemberId}
              setOpenMemberId={setOpenMemberId}
              imageErrors={imageErrors}
              setImageErrors={setImageErrors}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
