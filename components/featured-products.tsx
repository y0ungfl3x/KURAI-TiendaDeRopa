"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, ShoppingCart } from "lucide-react";
import { useCart } from "@/contexts/cart-context";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

const featuredProducts = [
  {
    id: "franela-premium-oversize",
    name: "Franela Premium Oversize",
    price: 35.0,
    image: "/oversized-premium-tshirt-black.jpg",
    badge: "Más Vendido",
    rating: 5,
  },
  {
    id: "jeans-slim-fit-oscuro",
    name: "Jeans Slim Fit Oscuro",
    price: 65.0,
    image: "/dark-slim-fit-jeans-mens.jpg",
    badge: "Nuevo",
    rating: 5,
  },
  {
    id: "short-deportivo-pro",
    name: "Short Deportivo Pro",
    price: 28.0,
    image: "/athletic-shorts-performance-mens.jpg",
    badge: "Oferta",
    rating: 4,
  },
];

export function FeaturedProducts() {
  const { addItem } = useCart();
  const { toast } = useToast();
  const [addedItems, setAddedItems] = useState<Set<string>>(new Set());

  const handleAddToCart = (product: (typeof featuredProducts)[0]) => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
    });

    toast({
      title: "¡Producto agregado!",
      description: `${product.name} se ha añadido a tu carrito.`,
      duration: 3000,
    });

    setAddedItems((prev) => new Set(prev).add(product.id));
    setTimeout(() => {
      setAddedItems((prev) => {
        const newSet = new Set(prev);
        newSet.delete(product.id);
        return newSet;
      });
    }, 2000);
  };

  return (
    <section id="coleccion" className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl font-bold text-primary mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Productos Destacados
          </h2>
          <p className="text-lg text-secondary-foreground/80 max-w-2xl mx-auto leading-relaxed">
            Los favoritos de nuestros clientes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {featuredProducts.map((product, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-primary/20 hover:border-primary transition-all duration-300 bg-card"
            >
              <CardContent className="p-0">
                <div className="relative h-96 overflow-hidden bg-muted">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                    {product.badge}
                  </Badge>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-1 mb-2">
                    {Array.from({ length: product.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-primary text-primary"
                      />
                    ))}
                  </div>
                  <h3 className="text-xl font-bold text-card-foreground mb-2">
                    {product.name}
                  </h3>
                  <p className="text-2xl font-bold text-primary mb-4">
                    ${product.price.toFixed(2)}
                  </p>
                  <Button
                    className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90"
                    onClick={() => handleAddToCart(product)}
                  >
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    {addedItems.has(product.id)
                      ? "¡Agregado!"
                      : "Agregar al Carrito"}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button
            size="lg"
            variant="outline"
            className="border-primary text-secondary-foreground hover:bg-primary/10 bg-transparent"
          >
            Ver Todos los Productos
          </Button>
        </div>
      </div>
    </section>
  );
}
