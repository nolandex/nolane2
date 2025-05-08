export type Product = {
  id: string
  name: string
  description: string
  price: number
  category: string
  image: string
  featured: boolean
  stock: number
}

export type Category = {
  id: string
  name: string
}

export const categories: Category[] = [
  { id: "electronics", name: "Electronics" },
  { id: "clothing", name: "Clothing" },
  { id: "books", name: "Books" },
]

export const products: Product[] = [
  {
    id: "1",
    name: "Wireless Headphones",
    description: "Premium wireless headphones with noise cancellation",
    price: 199.99,
    category: "electronics",
    image: "/placeholder.svg?height=300&width=300",
    featured: true,
    stock: 15,
  },
  {
    id: "2",
    name: "Smartphone",
    description: "Latest model with high-resolution camera and fast processor",
    price: 899.99,
    category: "electronics",
    image: "/placeholder.svg?height=300&width=300",
    featured: true,
    stock: 10,
  },
  {
    id: "3",
    name: "Laptop",
    description: "Powerful laptop for work and gaming",
    price: 1299.99,
    category: "electronics",
    image: "/placeholder.svg?height=300&width=300",
    featured: true,
    stock: 8,
  },
  {
    id: "4",
    name: "T-Shirt",
    description: "Comfortable cotton t-shirt",
    price: 19.99,
    category: "clothing",
    image: "/placeholder.svg?height=300&width=300",
    featured: false,
    stock: 50,
  },
  {
    id: "5",
    name: "Jeans",
    description: "Classic blue jeans with perfect fit",
    price: 49.99,
    category: "clothing",
    image: "/placeholder.svg?height=300&width=300",
    featured: true,
    stock: 30,
  },
  {
    id: "6",
    name: "Hoodie",
    description: "Warm hoodie for cold days",
    price: 39.99,
    category: "clothing",
    image: "/placeholder.svg?height=300&width=300",
    featured: false,
    stock: 25,
  },
  {
    id: "7",
    name: "Novel",
    description: "Bestselling fiction novel",
    price: 14.99,
    category: "books",
    image: "/placeholder.svg?height=300&width=300",
    featured: true,
    stock: 20,
  },
  {
    id: "8",
    name: "Cookbook",
    description: "Collection of delicious recipes",
    price: 24.99,
    category: "books",
    image: "/placeholder.svg?height=300&width=300",
    featured: false,
    stock: 15,
  },
  {
    id: "9",
    name: "Self-Help Book",
    description: "Guide to personal development",
    price: 18.99,
    category: "books",
    image: "/placeholder.svg?height=300&width=300",
    featured: false,
    stock: 12,
  },
  {
    id: "10",
    name: "Smart Watch",
    description: "Track your fitness and stay connected",
    price: 249.99,
    category: "electronics",
    image: "/placeholder.svg?height=300&width=300",
    featured: true,
    stock: 18,
  },
]

// Helper functions to work with the mock database
export function getProductById(id: string): Product | undefined {
  return products.find((product) => product.id === id)
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter((product) => product.category === category)
}

export function getFeaturedProducts(): Product[] {
  return products.filter((product) => product.featured)
}

export function searchProducts(query: string): Product[] {
  const lowercaseQuery = query.toLowerCase()
  return products.filter(
    (product) =>
      product.name.toLowerCase().includes(lowercaseQuery) || product.description.toLowerCase().includes(lowercaseQuery),
  )
}
