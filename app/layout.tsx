import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'Top 10 Everything - Curated Lists of the Best',
    template: '%s | Top 10 Everything'
  },
  description: 'Discover carefully curated Top 10 lists covering technology, lifestyle, entertainment, and more. Expert insights and detailed reviews to help you make informed decisions.',
  keywords: ['top 10 lists', 'best products', 'rankings', 'curated lists', 'expert reviews'],
  authors: [{ name: 'Your Name' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://yourdomain.com',
    siteName: 'Top 10 Everything',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1432821596592-e2c18b78144f?q=80&w=1200&h=630&fit=crop',
        width: 1200,
        height: 630,
        alt: 'Top 10 Everything'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Top 10 Everything - Curated Lists of the Best',
    description: 'Discover carefully curated Top 10 lists covering technology, lifestyle, entertainment, and more.',
    images: ['https://images.unsplash.com/photo-1432821596592-e2c18b78144f?q=80&w=1200&h=630&fit=crop']
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}