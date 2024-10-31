"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { ListChecks } from "lucide-react";

export default function Header() {
  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <ListChecks className="h-6 w-6" />
            <span className="font-bold text-xl">Top Alpha</span>
          </Link>

          {/* <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Categories</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {categories.map((category) => (
                      <li key={category.title}>
                        <NavigationMenuLink asChild>
                          <Link
                            href={category.href}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">
                              {category.title}
                            </div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              {category.description}
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/about" legacyBehavior passHref>
                  <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                    About
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu> */}

          <div className="flex items-center space-x-4">
            <ModeToggle />
            <Link href="https://www.linkedin.com/in/muhammad-faahem/">
              <Button variant="default" size="sm">
                Contact Me
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

const categories = [
  {
    title: "Technology",
    description: "Latest gadgets, software, and tech innovations",
    href: "/categories/technology",
  },
  {
    title: "Lifestyle",
    description: "Fashion, wellness, and daily essentials",
    href: "/categories/lifestyle",
  },
  {
    title: "Entertainment",
    description: "Movies, TV shows, games, and more",
    href: "/categories/entertainment",
  },
  {
    title: "Food & Drink",
    description: "Recipes, restaurants, and culinary experiences",
    href: "/categories/food-drink",
  },
];
