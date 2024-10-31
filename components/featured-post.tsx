import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function FeaturedPost() {
  return (
    <Card className="overflow-hidden">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="relative aspect-[16/9] md:aspect-auto">
          <img
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2400"
            alt="Featured post"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="p-6 flex flex-col justify-center">
          <Badge className="w-fit mb-4" variant="secondary">Featured</Badge>
          <h2 className="text-2xl font-bold mb-4">
            Top 10 Productivity Tools That Will Transform Your Workflow in 2024
          </h2>
          <p className="text-muted-foreground mb-6">
            Discover the most powerful productivity tools that are revolutionizing how we work. From AI-powered assistants to collaborative platforms, these tools are essential for modern professionals.
          </p>
          <Button className="w-fit" asChild>
            <Link href="/posts/top-10-productivity-tools-2024">
              Read More
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </Card>
  );
}