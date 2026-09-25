import { Bricolage_Grotesque, Geist } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CursorDot from "@/components/ui/CursorDot";
import Spotlight from "@/components/ui/Spotlight";
import { site } from "@/data/site";
import "./globals.css";

// Body text
const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  display: "swap",
});

// Headings
const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  weight: "600", // the only weight used for headings
  display: "swap",
});

const title = `${site.name} | ${site.primaryTitle} & ${site.secondaryTitle}`;
const description =
  "Muhammad Jumshaid is a Software and Frontend Developer with 2+ years of experience building fast, responsive web apps with React and Next.js.";

// The Open Graph / Twitter image comes from app/opengraph-image.js and
// app/twitter-image.js, and the favicon from app/icon.js (file conventions).
export const metadata = {
  metadataBase: new URL(site.siteUrl),
  title: { default: title, template: `%s | ${site.name}` },
  description,
  alternates: { canonical: "/" },
  authors: [{ name: site.name, url: site.siteUrl }],
  creator: site.name,
  openGraph: {
    title,
    description,
    url: "/",
    siteName: site.name,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: { index: true, follow: true },
};

// Dark is the default; a saved choice from ThemeToggle wins.
const themeScript = `try{if(localStorage.getItem("theme")==="light")document.documentElement.dataset.theme="light"}catch(e){}`;

export const viewport = {
  themeColor: "#0b0d10",
  colorScheme: "dark light",
};

export default function RootLayout({ children }) {
  return (
    // suppressHydrationWarning: the theme script below sets data-theme before React loads.
    <html lang="en" suppressHydrationWarning className={`${geist.variable} ${bricolage.variable} antialiased`}>
      <head>
        {/* Applies the saved theme before first paint, so there is no flash. */}
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="flex min-h-screen flex-col">
        <a
          href="#main"
          className="sr-only rounded-md bg-accent text-small font-medium text-on-accent focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:px-4 focus:py-3"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main" tabIndex={-1} className="flex-1 focus:outline-none">
          {children}
        </main>
        <Footer />
        <CursorDot />
        <Spotlight />
      </body>
    </html>
  );
}
