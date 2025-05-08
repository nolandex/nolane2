"use client"

import Image from "next/image"
import Link from "next/link"
import type { Product } from "@/lib/data"
import { Button } from "@/components/ui/button"
import { useCart } from "@/lib/cart-context"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { ShoppingCart } from "lucide-react"

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart()

  return (
    <Card className="overflow-hidden">
      <CardContent className="p-4">
        <Link href={`/product/${product.id}`}>
          <div className="aspect-square relative overflow-hidden rounded-md mb-3">
            <Image
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              fill
              className="object-cover transition-transform hover:scale-105"
            />
          </div>
          <h3 className="font-medium text-lg">{product.name}</h3>
          <p className="text-sm text-muted-foreground line-clamp-2 mb-2">{product.description}</p>
          <p className="font-bold">${product.price.toFixed(2)}</p>
        </Link>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button onClick={() => addItem(product)} className="w-full">
          <ShoppingCart className="mr-2 h-4 w-4" />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  )
}
