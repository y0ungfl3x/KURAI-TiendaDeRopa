import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-secondary overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-secondary via-secondary to-secondary/95" />

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23F5B027' fillOpacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="absolute top-1/4 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10 py-20">
        <div className="max-w-5xl mx-auto text-center">
          <div className="mb-4 flex justify-center animate-in fade-in duration-1000">
            <Image
              src="/images/logo-removebg-preview.png"
              alt="KURAI ONLY MEN"
              width={900}
              height={267}
              priority
              className="h-64 md:h-80 lg:h-96 w-auto drop-shadow-2xl"
            />
          </div>

          <h1 className="text-2xl md:text-3xl lg:text-4xl text-secondary-foreground/90 mb-6 max-w-3xl mx-auto leading-relaxed font-light animate-in slide-in-from-bottom duration-700 delay-100">
            Estilo auténtico para el hombre moderno
          </h1>

          <p className="text-base md:text-lg text-secondary-foreground/70 mb-10 max-w-2xl mx-auto leading-relaxed animate-in slide-in-from-bottom duration-700 delay-200">
            Descubre prendas diseñadas con calidad premium, cortes
            contemporáneos y la comodidad que mereces. Cada pieza cuenta tu
            historia.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-in slide-in-from-bottom duration-700 delay-300">
            <Link href="/coleccion">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 text-base px-10 py-7 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 font-medium"
              >
                Explorar Colección
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/coleccion">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-primary/30 text-secondary-foreground hover:bg-primary/10 hover:border-primary/50 text-base px-10 py-7 backdrop-blur-sm transition-all duration-300 bg-transparent"
              >
                Ver Catálogo Completo
              </Button>
            </Link>
          </div>

          <div className="mt-16 flex flex-wrap justify-center gap-8 text-sm text-secondary-foreground/60 animate-in fade-in duration-1000 delay-500">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full" />
              <span>Envíos a nivel nacional</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full" />
              <span>Calidad garantizada</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full" />
              <span>Atención personalizada</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/60 rounded-full flex items-start justify-center p-2 backdrop-blur-sm">
          <div className="w-1 h-3 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}
