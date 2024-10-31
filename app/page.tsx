import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { ChevronRight, TrendingUp, Award, Clock } from 'lucide-react';
import FeaturedPost from '@/components/featured-post';
import CategoryGrid from '@/components/category-grid';

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="relative py-12 mb-12 rounded-2xl overflow-hidden bg-gradient-to-r from-primary/10 via-primary/5 to-background">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="mb-4" variant="secondary">
            <TrendingUp className="w-3 h-3 mr-1" />
            Latest Rankings
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Discover the Best of Everything
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            Expert-curated Top 10 lists to help you make informed decisions
          </p>
          <Button asChild size="lg">
            <Link href="/categories">
              Explore Categories
              <ChevronRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Featured Post */}
      <section className="mb-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Featured List</h2>
          <Badge variant="secondary">
            <Award className="w-3 h-3 mr-1" />
            Editor's Choice
          </Badge>
        </div>
        <FeaturedPost />
      </section>

      {/* Categories Grid */}
      <section className="mb-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Popular Categories</h2>
          <Badge variant="secondary">
            <Clock className="w-3 h-3 mr-1" />
            Updated Daily
          </Badge>
        </div>
        <CategoryGrid />
      </section>

      {/* Latest Posts */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Latest Top 10 Lists</h2>
          <Button variant="ghost" asChild>
            <Link href="/posts">
              View All
              <ChevronRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <Card key={i} className="group hover:shadow-lg transition-shadow">
              <Link href={`/posts/top-10-${i}`}>
                <div className="aspect-video relative overflow-hidden rounded-t-lg">
                  <img
                    src={`https://images.unsplash.com/photo-${i + 1}?q=80&w=800`}
                    alt={`Top 10 List ${i}`}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <Badge className="mb-2" variant="secondary">Category {i}</Badge>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    Top 10 Must-Have Items for {2024 + i}
                  </h3>
                  <p className="text-muted-foreground">
                    Discover the essential items that will define {2024 + i} and why you need them in your life.
                  </p>
                </div>
              </Link>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}