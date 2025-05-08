"use client"

import type React from "react"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ShoppingCart, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useCart } from "@/lib/cart-context"
import { useAuth } from "@/lib/auth-context"
import { useState } from "react"

export function Navbar() {
  const pathname = usePathname()
  const { itemCount } = useCart()
  const { user } = useAuth()
  const [searchQuery, setSearchQuery] = useState("")

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      window.location.href = `/?search=${encodeURIComponent(searchQuery)}`
    }
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6 md:gap-10">
          <Link href="/" className="font-bold text-xl">
            ShopEasy
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="/" className={pathname === "/" ? "font-bold" : "text-muted-foreground"}>
              Home
            </Link>
            <Link href="/category" className={pathname.startsWith("/category") ? "font-bold" : "text-muted-foreground"}>
              Categories
            </Link>
            <Link href="/checkout" className={pathname === "/checkout" ? "font-bold" : "text-muted-foreground"}>
              Checkout
            </Link>
            {user?.role === "admin" && (
              <Link href="/admin" className={pathname === "/admin" ? "font-bold" : "text-muted-foreground"}>
                Admin
              </Link>
            )}
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <form onSubmit={handleSearch} className="hidden md:flex relative">
            <Input
              type="search"
              placeholder="Search products..."
              className="w-[200px] lg:w-[300px]"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </form>

          <Link href="/checkout">
            <Button variant="outline" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              {itemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </Button>
          </Link>

          {!user ? (
            <Link href="/admin">
              <Button variant="outline" size="icon">
                <User className="h-5 w-5" />
              </Button>
            </Link>
          ) : (
            <Link href="/admin">
              <Button variant="outline" size="sm">
                Dashboard
              </Button>
            </Link>
          )}
        </div>
      </div>
    </header>
  )
}
