"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail } from "lucide-react"

export function Newsletter() {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter subscription
    console.log("Subscribing:", email)
    setEmail("")
  }

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-6">
            <Mail className="h-8 w-8 text-primary" />
          </div>
          <h2
            className="text-4xl md:text-5xl font-bold text-secondary mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Únete a Nuestra Comunidad
          </h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Recibe ofertas exclusivas, nuevos lanzamientos y contenido especial directamente en tu correo
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <Input
              type="email"
              placeholder="Tu correo electrónico"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 h-12 border-border focus:border-primary"
            />
            <Button
              type="submit"
              size="lg"
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90 h-12 px-8"
            >
              Suscribirse
            </Button>
          </form>
          <p className="text-sm text-muted-foreground mt-4">No compartimos tu información. Cancela cuando quieras.</p>
        </div>
      </div>
    </section>
  )
}
