"use client";

import { useCart } from "@/contexts/cart-context";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Minus, Plus, Trash2, ShoppingBag, MessageCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function CarritoPage() {
  const {
    items,
    updateQuantity,
    updateSize,
    removeItem,
    totalPrice,
    clearCart,
  } = useCart();
  useCart();

  const handleWhatsAppCheckout = () => {
    if (items.length === 0) return;

    let message = "¡Hola! Me gustaría hacer el siguiente pedido en KURAI:\n\n";

    items.forEach((item) => {
      message += `• *${item.name}*\n`;
      message += `   Cantidad: ${item.quantity}\n`;
      message += `   Talla: ${item.size || "M"}\n`;
      if (item.color) message += `   Color: ${item.color}\n`;
      message += `   Precio: $${(item.price * item.quantity).toFixed(2)}\n\n`;
    });

    message += `*Total a Pagar: $${totalPrice.toFixed(2)}*\n\n`;
    message += "Quedo atento para coordinar el pago y la entrega. ¡Gracias!";

    const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-24 md:pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="mb-8 md:mb-12">
              <h1
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary mb-3 md:mb-4"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Tu Carrito
              </h1>
              <p className="text-sm md:text-base text-muted-foreground">
                {items.length === 0
                  ? "Tu carrito está vacío"
                  : `Tienes ${items.length} producto${
                      items.length > 1 ? "s" : ""
                    } en tu carrito`}
              </p>
            </div>

            {items.length === 0 ? (
              <Card className="border-border">
                <CardContent className="py-12 md:py-16 text-center px-4">
                  <ShoppingBag className="h-16 md:h-24 w-16 md:w-24 mx-auto mb-4 md:mb-6 text-muted-foreground/50" />
                  <h2 className="text-xl md:text-2xl font-bold text-foreground mb-3 md:mb-4">
                    Tu carrito está vacío
                  </h2>
                  <p className="text-sm md:text-base text-muted-foreground mb-6 md:mb-8">
                    Agrega algunos productos para comenzar tu compra
                  </p>
                  <Link href="/">
                    <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                      Ver Productos
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
                <div className="lg:col-span-2 space-y-4">
                  {items.map((item) => (
                    <Card
                      key={item.id}
                      className="border-border overflow-hidden"
                    >
                      <CardContent className="p-4 md:p-6">
                        <div className="flex gap-4">
                          <div className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 bg-muted rounded-lg overflow-hidden flex-shrink-0">
                            <Image
                              src={item.image || "/placeholder.svg"}
                              alt={item.name}
                              fill
                              className="object-cover"
                            />
                          </div>

                          <div className="flex-1 flex flex-col justify-between min-w-0">
                            <div>
                              <h3 className="text-base md:text-lg font-bold text-foreground mb-1 line-clamp-2">
                                {item.name}
                              </h3>
                              <p className="text-lg md:text-xl font-bold text-primary">
                                ${item.price.toFixed(2)}
                              </p>
                            </div>

                            <div className="mt-2">
                              <Select
                                value={item.size || "M"}
                                onValueChange={(value) =>
                                  updateSize(item.id, value)
                                }
                              >
                                <SelectTrigger className="w-[100px] h-8 text-xs">
                                  <SelectValue placeholder="Talla" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="S">Talla S</SelectItem>
                                  <SelectItem value="M">Talla M</SelectItem>
                                  <SelectItem value="L">Talla L</SelectItem>
                                  <SelectItem value="XL">Talla XL</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>

                            <div className="flex items-center justify-between mt-3 md:mt-4 gap-2">
                              <div className="flex items-center gap-1 md:gap-2">
                                <Button
                                  variant="outline"
                                  size="icon"
                                  className="h-8 w-8 bg-transparent"
                                  onClick={() =>
                                    updateQuantity(item.id, item.quantity - 1)
                                  }
                                >
                                  <Minus className="h-4 w-4" />
                                </Button>
                                <span className="w-10 md:w-12 text-center font-semibold text-sm md:text-base">
                                  {item.quantity}
                                </span>
                                <Button
                                  variant="outline"
                                  size="icon"
                                  className="h-8 w-8 bg-transparent"
                                  onClick={() =>
                                    updateQuantity(item.id, item.quantity + 1)
                                  }
                                >
                                  <Plus className="h-4 w-4" />
                                </Button>
                              </div>

                              <Button
                                variant="ghost"
                                size="icon"
                                className="text-destructive hover:text-destructive hover:bg-destructive/10 h-8 w-8"
                                onClick={() => removeItem(item.id)}
                              >
                                <Trash2 className="h-4 w-4 md:h-5 md:w-5" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <div className="lg:col-span-1">
                  <Card className="border-border lg:sticky lg:top-24">
                    <CardContent className="p-4 md:p-6">
                      <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4 md:mb-6">
                        Resumen del Pedido
                      </h2>

                      <div className="space-y-3 mb-6 p-4 bg-muted/30 rounded-lg">
                        <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-2">
                          Productos:
                        </p>
                        {items.map((item) => (
                          <div
                            key={item.id}
                            className="flex flex-col text-sm mb-2 border-b border-border/50 pb-2 last:border-0 last:pb-0"
                          >
                            <div className="flex justify-between">
                              <span className="text-foreground/90 flex-1 line-clamp-1 font-medium">
                                {item.name}
                              </span>
                              <span className="text-foreground/90 font-semibold ml-2">
                                x {item.quantity}
                              </span>
                            </div>
                            <div className="text-xs text-muted-foreground mt-1">
                              Talla: {item.size || "M"}
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="space-y-3 md:space-y-4 mb-6">
                        <div className="flex justify-between text-sm md:text-base text-muted-foreground">
                          <span>Subtotal</span>
                          <span>${totalPrice.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between text-sm md:text-base text-muted-foreground">
                          <span>Envío</span>
                          <span>A calcular</span>
                        </div>
                        <div className="border-t border-border pt-3 md:pt-4">
                          <div className="flex justify-between text-lg md:text-xl font-bold text-foreground">
                            <span>Total</span>
                            <span className="text-primary">
                              ${totalPrice.toFixed(2)}
                            </span>
                          </div>
                        </div>
                      </div>

                      <Button
                        className="w-full bg-[#25D366] hover:bg-[#20BA5A] text-white mb-3 text-sm md:text-base"
                        size="lg"
                        onClick={handleWhatsAppCheckout}
                      >
                        <MessageCircle className="h-4 w-4 md:h-5 md:w-5 mr-2" />
                        Comprar por WhatsApp
                      </Button>

                      <Button
                        variant="outline"
                        className="w-full bg-transparent text-sm md:text-base"
                        onClick={clearCart}
                      >
                        Vaciar Carrito
                      </Button>

                      <div className="mt-4 md:mt-6 pt-4 md:pt-6 border-t border-border">
                        <p className="text-xs md:text-sm text-muted-foreground text-center">
                          Al hacer clic en "Comprar por WhatsApp", serás
                          redirigido a WhatsApp para confirmar tu pedido
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
