import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { categories } from "@/lib/products";

export function ProductCategories() {
  return (
    <section id="productos" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl font-bold text-secondary mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Nuestra Colección
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Explora nuestra amplia gama de productos diseñados para el hombre
            moderno
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Link key={index} href="/coleccion">
                <Card className="group overflow-hidden border-border hover:border-primary transition-all duration-300 cursor-pointer hover:shadow-xl">
                  <CardContent className="p-0">
                    <div className="relative h-64 overflow-hidden bg-muted">
                      <img
                        src={category.image || "/placeholder.svg"}
                        alt={category.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/50 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="p-2 bg-primary rounded-lg">
                            <Icon className="h-5 w-5 text-primary-foreground" />
                          </div>
                          <h3 className="text-xl font-bold text-secondary-foreground">
                            {category.name}
                          </h3>
                        </div>
                        <p className="text-sm text-secondary-foreground/80">
                          {category.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
