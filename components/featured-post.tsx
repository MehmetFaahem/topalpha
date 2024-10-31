import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import blogs from "@/static/blogs.json";

export default function FeaturedPost() {
  return (
    <Card className="overflow-hidden">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="relative aspect-[16/9] md:aspect-auto">
          <img
            src={blogs[0].image}
            alt={blogs[0].title}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="p-6 flex flex-col justify-center">
          <Badge className="w-fit mb-4" variant="secondary">
            Featured
          </Badge>
          <h2 className="text-2xl font-bold mb-4">{blogs[0].title}</h2>
          <Button className="w-fit" asChild>
            <Link href={`/${blogs[0].slug}`}>
              Read More
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </Card>
  );
}
