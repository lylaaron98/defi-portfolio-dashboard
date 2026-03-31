import type { Metadata } from "next";
import "./globals.css";

// Root metadata placeholder for SEO, i18n, and theming
export const metadata: Metadata = {
  title: "DeFi Portfolio Dashboard",
  description: "Web3 trading and portfolio dashboard foundation.",
  // TODO: Add more metadata (OpenGraph, themeColor, etc.)
};

// Root layout: font setup, theme-ready, and architecture comments
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* App-wide font setup: Inter via Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-sans bg-gray-50 text-gray-900 dark:bg-gray-950 dark:text-gray-100 min-h-screen">
        {/* Theme-ready body: add theme provider for dark/light mode in the future */}
        {children}
      </body>
    </html>
  );
}
