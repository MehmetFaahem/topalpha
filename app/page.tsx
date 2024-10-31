import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { ChevronRight, TrendingUp, Award, Clock } from "lucide-react";
import FeaturedPost from "@/components/featured-post";
import CategoryGrid from "@/components/category-grid";
import blogs from "@/static/blogs.json";
import ideas from "@/static/ideas.json";
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
            Top 10 AI Tools That Will Transform Your Workflow in 2025
          </p>
          <Button asChild size="lg">
            <Link href="/top-10-ai-tools-2025">
              Explore It
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
            Editor&apos;s Choice
          </Badge>
        </div>
        <FeaturedPost />
      </section>

      {/* Latest Posts */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Latest Top 10 Lists</h2>
          {/* <Button variant="ghost" asChild>
            <Link href="/posts">
              View All
              <ChevronRight className="ml-2 h-4 w-4" />
            </Link>
          </Button> */}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-shadow"
            >
              <Link href={`/${blog.slug}`}>
                <div className="aspect-video relative overflow-hidden rounded-t-lg">
                  <img
                    src={blog.image}
                    alt={`Top 10 List ${index}`}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <Badge className="mb-2" variant="secondary">
                    {blog.category}
                  </Badge>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {blog.title}
                  </h3>
                </div>
              </Link>
            </Card>
          ))}
        </div>
      </section>

      {/* Business Ideas */}
      <section>
        <div className="flex items-center justify-between my-6">
          <h2 className="text-2xl font-bold text-blue-800">Business Ideas</h2>
          {/* <Button variant="ghost" asChild>
            <Link href="/posts">
              View All
              <ChevronRight className="ml-2 h-4 w-4" />
            </Link>
          </Button> */}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ideas.map((idea, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-shadow"
            >
              <Link href={`/${idea.slug}`}>
                <div className="aspect-video relative overflow-hidden rounded-t-lg">
                  <img
                    src={idea.image}
                    alt={`Business Idea ${index}`}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <Badge className="mb-2" variant="secondary">
                    {idea.category}
                  </Badge>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {idea.title}
                  </h3>
                </div>
              </Link>
            </Card>
          ))}
        </div>
      </section>

      {/* Categories Grid */}
      {/* <section className="my-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Popular Categories</h2>
          <Badge variant="secondary">
            <Clock className="w-3 h-3 mr-1" />
            Updated Daily
          </Badge>
        </div>
        <CategoryGrid />
      </section> */}
    </div>
  );
}
