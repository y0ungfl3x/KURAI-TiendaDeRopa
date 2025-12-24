import Image from "next/image";
import {
  Facebook,
  Instagram,
  Twitter,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer id="contacto" className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-8 md:mb-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Image
              src="/logo.png"
              alt="KURAI ONLY MEN"
              width={160}
              height={60}
              className="h-10 md:h-12 w-auto mb-4 md:mb-6"
            />
            <p className="text-sm md:text-base text-secondary-foreground/80 mb-4 md:mb-6 leading-relaxed">
              Estilo masculino redefinido. Calidad premium en cada prenda.
            </p>
            <div className="flex gap-3 md:gap-4">
              <a
                href="https://www.instagram.com/kurai_ve/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-primary/10 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Instagram className="h-4 w-4 md:h-5 md:w-5" />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-primary/10 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Facebook className="h-4 w-4 md:h-5 md:w-5" />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-primary/10 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <svg
                  role="img"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 md:h-5 md:w-5 fill-current"
                >
                  <title>X</title>
                  <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base md:text-lg font-bold text-primary mb-3 md:mb-4">
              Enlaces Rápidos
            </h3>
            <ul className="space-y-2 md:space-y-3">
              <li>
                <a
                  href="#productos"
                  className="text-sm md:text-base text-secondary-foreground/80 hover:text-primary transition-colors"
                >
                  Productos
                </a>
              </li>
              <li>
                <a
                  href="#coleccion"
                  className="text-sm md:text-base text-secondary-foreground/80 hover:text-primary transition-colors"
                >
                  Colección
                </a>
              </li>
              <li>
                <a
                  href="#nosotros"
                  className="text-sm md:text-base text-secondary-foreground/80 hover:text-primary transition-colors"
                >
                  Sobre Nosotros
                </a>
              </li>
              <li>
                <a
                  href="#contacto"
                  className="text-sm md:text-base text-secondary-foreground/80 hover:text-primary transition-colors"
                >
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-base md:text-lg font-bold text-primary mb-3 md:mb-4">
              Servicio al Cliente
            </h3>
            <ul className="space-y-2 md:space-y-3">
              <li>
                <a
                  href="#"
                  className="text-sm md:text-base text-secondary-foreground/80 hover:text-primary transition-colors"
                >
                  Envíos y Devoluciones
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm md:text-base text-secondary-foreground/80 hover:text-primary transition-colors"
                >
                  Guía de Tallas
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm md:text-base text-secondary-foreground/80 hover:text-primary transition-colors"
                >
                  Preguntas Frecuentes
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm md:text-base text-secondary-foreground/80 hover:text-primary transition-colors"
                >
                  Términos y Condiciones
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="text-base md:text-lg font-bold text-primary mb-3 md:mb-4">
              Contacto
            </h3>
            <ul className="space-y-3 md:space-y-4">
              <li className="flex items-start gap-2 md:gap-3">
                <MapPin className="h-4 w-4 md:h-5 md:w-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm md:text-base text-secondary-foreground/80">
                  Calle Principal #123, Ciudad
                </span>
              </li>
              <li className="flex items-center gap-2 md:gap-3">
                <Phone className="h-4 w-4 md:h-5 md:w-5 text-primary flex-shrink-0" />
                <span className="text-sm md:text-base text-secondary-foreground/80">
                  +58 414 530 6780
                </span>
              </li>
              <li className="flex items-center gap-2 md:gap-3">
                <Mail className="h-4 w-4 md:h-5 md:w-5 text-primary flex-shrink-0" />
                <span className="text-sm md:text-base text-secondary-foreground/80">
                  info@kurai.com
                </span>
              </li>
              <li>
                <Button
                  asChild
                  className="w-full bg-[#25D366] hover:bg-[#20BD5A] text-white mt-2 text-sm md:text-base"
                >
                  <a
                    href="https://wa.me/1234567890"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="md:w-5 md:h-5"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                    Contáctanos por WhatsApp
                  </a>
                </Button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary/20 pt-6 md:pt-8 text-center">
          <p className="text-secondary-foreground/60 text-xs md:text-sm">
            © 2025 KURAI ONLY MEN. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
