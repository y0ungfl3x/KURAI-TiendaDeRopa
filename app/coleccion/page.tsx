"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Star, ArrowLeft } from "lucide-react";
import { useCart } from "@/contexts/cart-context";
import { allProductsByCategory, categories } from "@/lib/products";
import { useToast } from "@/hooks/use-toast";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

export default function ColeccionPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const { addItem } = useCart();
  const { toast } = useToast();

  const handleAddToCart = (product: any) => {
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
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="bg-secondary pt-24 md:pt-32 pb-12 md:pb-16">
        <div className="container mx-auto px-4">
          <Link
            href="/"
            className="inline-flex items-center text-sm md:text-base text-secondary-foreground/80 hover:text-secondary-foreground mb-4 md:mb-6 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Volver al inicio
          </Link>
          <h1
            className="text-3xl md:text-5xl lg:text-6xl font-bold text-secondary-foreground mb-3 md:mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Nuestra Colección
          </h1>
          <p className="text-base md:text-lg text-secondary-foreground/80 max-w-2xl">
            Explora todas nuestras categorías y encuentra los mejores productos
            de diferentes marcas
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 md:py-12">
        {!selectedCategory ? (
          /* Improved category grid responsiveness */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
            {categories.map((category) => (
              <Card
                key={category.name}
                className="group overflow-hidden border-border hover:border-primary transition-all duration-300 cursor-pointer hover:shadow-xl"
                onClick={() => setSelectedCategory(category.name)}
              >
                <CardContent className="p-0">
                  <div className="relative h-60 md:h-72 overflow-hidden bg-muted">
                    <Image
                      src={category.image || "/placeholder.svg"}
                      alt={category.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/50 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                      <h3 className="text-xl md:text-2xl font-bold text-secondary-foreground mb-2">
                        {category.name}
                      </h3>
                      <p className="text-xs md:text-sm text-secondary-foreground/80 mb-3 md:mb-4 line-clamp-2">
                        {category.description}
                      </p>
                      <Badge className="bg-primary text-primary-foreground text-xs md:text-sm">
                        {allProductsByCategory[category.name]?.length || 0}{" "}
                        productos
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          /* Products Grid */
          <div>
            <div className="flex items-start justify-between mb-6 md:mb-8 flex-col gap-4">
              <div className="w-full">
                <Button
                  variant="ghost"
                  onClick={() => setSelectedCategory(null)}
                  className="mb-3 md:mb-4 text-muted-foreground hover:text-foreground text-sm md:text-base px-2 md:px-4"
                >
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Volver a categorías
                </Button>
                <h2
                  className="text-2xl md:text-3xl lg:text-4xl font-bold text-secondary"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {selectedCategory}
                </h2>
                <p className="text-sm md:text-base text-muted-foreground mt-2">
                  {allProductsByCategory[selectedCategory]?.length || 0}{" "}
                  productos disponibles
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
              {allProductsByCategory[selectedCategory]?.map((product) => (
                <Card
                  key={product.id}
                  className="group overflow-hidden border-border hover:border-primary transition-all duration-300 hover:shadow-xl"
                >
                  <CardContent className="p-0">
                    <div className="relative h-48 md:h-64 overflow-hidden bg-muted">
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      {product.badge && (
                        <Badge className="absolute top-3 md:top-4 right-3 md:right-4 bg-primary text-primary-foreground text-xs">
                          {product.badge}
                        </Badge>
                      )}
                    </div>
                    <div className="p-4 md:p-6">
                      {product.brand && (
                        <div className="mb-2">
                          <p className="text-xs text-muted-foreground uppercase tracking-wide">
                            {product.brand}
                          </p>
                        </div>
                      )}
                      <h3 className="text-base md:text-lg font-semibold text-foreground mb-2 line-clamp-2">
                        {product.name}
                      </h3>
                      <p className="text-xs md:text-sm text-muted-foreground mb-3 line-clamp-2">
                        {product.description}
                      </p>

                      {product.rating && (
                        <div className="flex items-center gap-1 mb-3">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-3 w-3 md:h-4 md:w-4 ${
                                i < product.rating
                                  ? "fill-primary text-primary"
                                  : "text-muted-foreground/30"
                              }`}
                            />
                          ))}
                        </div>
                      )}

                      <div className="flex items-center justify-between gap-2">
                        <p className="text-xl md:text-2xl font-bold text-primary">
                          ${product.price.toFixed(2)}
                        </p>
                        <Button
                          onClick={() => handleAddToCart(product)}
                          size="sm"
                          className="bg-primary hover:bg-primary/90 text-primary-foreground text-xs md:text-sm"
                        >
                          <ShoppingCart className="h-3 w-3 md:h-4 md:w-4 mr-1 md:mr-2" />
                          Agregar
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
