import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Clock, ThumbsUp } from "lucide-react";
import blogs from "@/static/blogs.json";
import ideas from "@/static/ideas.json";
import { Metadata } from "next";

async function getPost(slug: string) {
  return (
    blogs.find((blog) => blog.slug === slug) ||
    ideas.find((idea) => idea.slug === slug)
  );
}

// Generate static params for all possible slugs
export async function generateStaticParams() {
  return [
    ...blogs.map((blog) => ({ slug: blog.slug })),
    ...ideas.map((idea) => ({ slug: idea.slug })),
  ];
}

// Generate metadata for each post
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = await getPost(params.slug);

  if (!post) {
    return {
      title: "Post Not Found",
      description: "The requested post could not be found",
    };
  }

  return {
    title: `${post.title} | Top Alpha`,
    description: post.content[0].description.slice(0, 160),
    keywords: [
      post.category,
      "top 10",
      "rankings",
      "best",
      "ideas",
      "business",
      ...post.keywords,
      ...post.title.toLowerCase().split(" "),
    ],
    openGraph: {
      title: post.title,
      description: post.content[0].description.slice(0, 160),
      images: [post.image],
      type: "article",
      publishedTime: post.publishedAt,
      authors: ["Top Alpha"],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.content[0].description.slice(0, 160),
      images: [post.image],
    },
  };
}

export default async function PostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPost(params.slug);

  if (!post) {
    return <div>Post not found</div>;
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    image: post.image,
    datePublished: post.publishedAt,
    author: {
      "@type": "Organization",
      name: "Top Alpha",
    },
    publisher: {
      "@type": "Organization",
      name: "Top Alpha",
      logo: {
        "@type": "ImageObject",
        url: "/logo.png",
      },
    },
    description: post.content[0].description,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="container mx-auto px-4 py-8">
        <article className="max-w-4xl mx-auto">
          {/* Header */}
          <header className="mb-8">
            <Badge className="mb-4" variant="secondary">
              {post.category}
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {post.title}
            </h1>
            <div className="flex items-center gap-4 text-muted-foreground">
              <time className="flex items-center" dateTime={post.publishedAt}>
                <Clock className="w-4 h-4 mr-2" />
                <span>{post.publishedAt}</span>
              </time>
              <div className="flex items-center">
                <ThumbsUp className="w-4 h-4 mr-2" />
                <span>{post.views} views</span>
              </div>
            </div>
          </header>

          {/* Featured Image */}
          <Card className="mb-8">
            <div className="aspect-video relative overflow-hidden rounded-lg">
              <img
                src={post.image}
                alt={`Featured image for ${post.title}`}
                className="object-cover w-full h-full"
                width={1200}
                height={675}
                loading="eager"
              />
            </div>
          </Card>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            {post.content.map((item, index) => (
              <section key={item.title} className="mb-8">
                <h2 className="text-2xl font-bold">
                  {index + 1}. {item.title}
                </h2>
                <p className="text-muted-foreground">{item.description}</p>
              </section>
            ))}
          </div>
        </article>
      </div>
    </>
  );
}
