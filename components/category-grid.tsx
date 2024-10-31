"use client";

import React from "react";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { Laptop, Heart, Film, Coffee } from "lucide-react";

const categories = [
  {
    title: "Technology",
    description: "Gadgets, Apps & More",
    icon: Laptop,
    href: "/categories/technology",
    color: "bg-blue-500/10",
    posts: 42,
  },
  {
    title: "Lifestyle",
    description: "Fashion & Wellness",
    icon: Heart,
    href: "/categories/lifestyle",
    color: "bg-pink-500/10",
    posts: 38,
  },
  {
    title: "Entertainment",
    description: "Movies, Games & Shows",
    icon: Film,
    href: "/categories/entertainment",
    color: "bg-purple-500/10",
    posts: 45,
  },
  {
    title: "Food & Drink",
    description: "Recipes & Restaurants",
    icon: Coffee,
    href: "/categories/food-drink",
    color: "bg-orange-500/10",
    posts: 31,
  },
];

export default function CategoryGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {categories.map((category) => {
        const Icon = category.icon;
        return (
          <Link key={category.title} href={`/`}>
            <Card className="p-6 hover:shadow-lg transition-shadow group">
              <div
                className={`w-12 h-12 rounded-lg ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
              >
                <Icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                {category.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                {category.description}
              </p>
              <p className="text-sm font-medium">{category.posts} lists</p>
            </Card>
          </Link>
        );
      })}
    </div>
  );
}
