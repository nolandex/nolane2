import { Suspense } from "react"
import Link from "next/link"
import { ProductCard } from "@/components/product-card"
import { categories, getProductsByCategory, products as allProducts } from "@/lib/data"
import { Button } from "@/components/ui/button"

export default function CategoryPage({
  searchParams,
}: {
  searchParams: { category?: string }
}) {
  const selectedCategory = searchParams.category || ""
  const products = selectedCategory ? getProductsByCategory(selectedCategory) : allProducts

  const categoryName = selectedCategory
    ? categories.find((c) => c.id === selectedCategory)?.name || "All Products"
    : "All Products"

  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-6">Shop by Category</h1>

      <div className="flex flex-col md:flex-row gap-8">
        <aside className="w-full md:w-64 shrink-0">
          <div className="sticky top-24 space-y-4">
            <h2 className="font-medium text-lg">Categories</h2>
            <div className="flex flex-col space-y-2">
              <Link href="/category">
                <Button variant={!selectedCategory ? "default" : "ghost"} className="justify-start w-full">
                  All Products
                </Button>
              </Link>
              {categories.map((category) => (
                <Link key={category.id} href={`/category?category=${category.id}`}>
                  <Button
                    variant={selectedCategory === category.id ? "default" : "ghost"}
                    className="justify-start w-full"
                  >
                    {category.name}
                  </Button>
                </Link>
              ))}
            </div>
          </div>
        </aside>

        <div className="flex-1">
          <h2 className="text-2xl font-bold mb-6">{categoryName}</h2>
          <Suspense fallback={<div>Loading products...</div>}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.length > 0 ? (
                products.map((product) => <ProductCard key={product.id} product={product} />)
              ) : (
                <div className="col-span-full text-center py-12">
                  <h2 className="text-xl font-medium">No products found</h2>
                  <p className="text-muted-foreground mt-2">Try selecting a different category.</p>
                </div>
              )}
            </div>
          </Suspense>
        </div>
      </div>
    </div>
  )
}
