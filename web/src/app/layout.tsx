import type { Metadata } from "next";
import "@mantine/core/styles.css";
import "./globals.css";
import { MantineProvider } from "@mantine/core";
import { QueryProvider } from "@/lib/query/QueryProvider";
import { WalletProvider } from "@/features/wallet/components/WalletProvider";
import { appTheme } from "@/lib/theme/mantine-theme";

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
        {/* App-wide font setup for the trading dashboard theme */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Sora:wght@500;600;700;800&family=Space+Grotesk:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="app-body" suppressHydrationWarning>
        <MantineProvider defaultColorScheme="dark" forceColorScheme="dark" theme={appTheme}>
          <QueryProvider>
            <WalletProvider>{children}</WalletProvider>
          </QueryProvider>
        </MantineProvider>
      </body>
    </html>
  );
}
