import { Hero } from "@/components/hero";
import { Navigation } from "@/components/navigation";
import { ProductCategories } from "@/components/product-categories";
import { FeaturedProducts } from "@/components/featured-products";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <ProductCategories />
      <FeaturedProducts />
      <Footer />
    </main>
  );
}
