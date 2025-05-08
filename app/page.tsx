import { Suspense } from "react"
import { ProductCard } from "@/components/product-card"
import { getFeaturedProducts, searchProducts } from "@/lib/data"

export default function Home({
  searchParams,
}: {
  searchParams: { search?: string }
}) {
  const searchQuery = searchParams.search || ""
  const products = searchQuery ? searchProducts(searchQuery) : getFeaturedProducts()

  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-6">
        {searchQuery ? `Search Results: ${searchQuery}` : "Featured Products"}
      </h1>
      <Suspense fallback={<div>Loading products...</div>}>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.length > 0 ? (
            products.map((product) => <ProductCard key={product.id} product={product} />)
          ) : (
            <div className="col-span-full text-center py-12">
              <h2 className="text-xl font-medium">No products found</h2>
              <p className="text-muted-foreground mt-2">Try searching for something else or browse our categories.</p>
            </div>
          )}
        </div>
      </Suspense>
    </div>
  )
}
