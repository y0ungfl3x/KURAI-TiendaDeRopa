"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ShoppingBag, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useCart } from "@/contexts/cart-context";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const { totalItems } = useCart();

  return (
    <nav className="fixed top-0 w-full z-50 bg-secondary/95 backdrop-blur-sm border-b border-primary/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/isotipo.jpg"
              alt="KURAI"
              width={50}
              height={50}
              className="h-12 w-12 object-contain"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="/#productos"
              className="text-secondary-foreground hover:text-primary transition-colors text-sm uppercase tracking-wider"
            >
              Productos
            </a>
            <Link
              href="/coleccion"
              className="text-secondary-foreground hover:text-primary transition-colors text-sm uppercase tracking-wider"
            >
              Colección
            </Link>
            <a
              href="/#nosotros"
              className="text-secondary-foreground hover:text-primary transition-colors text-sm uppercase tracking-wider"
            >
              Nosotros
            </a>
            <a
              href="/#contacto"
              className="text-secondary-foreground hover:text-primary transition-colors text-sm uppercase tracking-wider"
            >
              Contacto
            </a>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              className="text-secondary-foreground hover:text-primary"
            >
              <User className="h-5 w-5" />
            </Button>
            <Link href="/carrito">
              <Button
                variant="ghost"
                size="icon"
                className="text-secondary-foreground hover:text-primary relative"
              >
                <ShoppingBag className="h-5 w-5" />
                {totalItems > 0 && (
                  <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 bg-primary text-primary-foreground text-xs">
                    {totalItems}
                  </Badge>
                )}
              </Button>
            </Link>
            <Link href="/carrito">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                Ver Carrito
              </Button>
            </Link>
          </div>

          {/* Mobile Actions */}
          <div className="flex items-center gap-2 md:hidden">
            <Link href="/carrito">
              <Button
                variant="ghost"
                size="icon"
                className="text-secondary-foreground hover:text-primary relative"
              >
                <ShoppingBag className="h-6 w-6" />
                {totalItems > 0 && (
                  <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 bg-primary text-primary-foreground text-xs">
                    {totalItems}
                  </Badge>
                )}
              </Button>
            </Link>
            <button
              className="text-secondary-foreground p-2"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-primary/20">
            <div className="flex flex-col gap-4">
              <a
                href="/#productos"
                className="text-secondary-foreground hover:text-primary transition-colors text-sm uppercase tracking-wider"
              >
                Productos
              </a>
              <Link
                href="/coleccion"
                className="text-secondary-foreground hover:text-primary transition-colors text-sm uppercase tracking-wider"
              >
                Colección
              </Link>
              <a
                href="/#nosotros"
                className="text-secondary-foreground hover:text-primary transition-colors text-sm uppercase tracking-wider"
              >
                Nosotros
              </a>
              <a
                href="/#contacto"
                className="text-secondary-foreground hover:text-primary transition-colors text-sm uppercase tracking-wider"
              >
                Contacto
              </a>
              <Link href="/carrito">
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90 w-full mt-2">
                  Ver Carrito {totalItems > 0 && `(${totalItems})`}
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
