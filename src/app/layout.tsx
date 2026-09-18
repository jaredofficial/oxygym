import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/context/ThemeContext';
import { BranchModalProvider } from '@/context/BranchModalContext';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { BranchSelectorModal } from '@/components/modals/BranchSelectorModal';
import { PlanCheckoutModal } from '@/components/modals/PlanCheckoutModal';
import { ScrollToTop } from '@/components/ui/ScrollToTop';
import { InitialLoader } from '@/components/ui/InitialLoader';

export const metadata: Metadata = {
  title: 'OXY GYM - Luxury Made Affordable',
  description:
    'Experience high-performance training at Oxy Gym. Flagship branches in Chandni Chowk & Bhawanipur, with Park Street luxury flagship coming soon. Being Strong machines, powerlifting platforms & certified senior trainers.',
  keywords: 'Oxy Gym, Gym in Kolkata, Chandni Gym, Bhawanipur Gym, Park Street Gym, Fitness Club Kolkata, Bodybuilding Kolkata',
  icons: {
    icon: '/media/oxy gym logo.png',
    shortcut: '/media/oxy gym logo.png',
    apple: '/media/oxy gym logo.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-mode="dark" data-theme="core" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/media/oxy gym logo.png" />
        <link rel="shortcut icon" href="/media/oxy gym logo.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Oswald:wght@500;600;700&family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased bg-[var(--bg-primary)] text-[var(--text-primary)]">
        <ThemeProvider>
          <BranchModalProvider>
            <InitialLoader />
            <div className="flex flex-col min-h-screen">
              <Navbar />
              <main className="flex-grow">{children}</main>
              <Footer />
            </div>
            <BranchSelectorModal />
            <PlanCheckoutModal />
            <ScrollToTop />
          </BranchModalProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
