import type { Metadata } from "next";
import { Sora, Space_Grotesk } from "next/font/google";
import "@mantine/core/styles.css";
import "./globals.css";
import { MantineProvider } from "@mantine/core";
import { QueryProvider } from "@/lib/query/QueryProvider";
import { WalletProvider } from "@/features/wallet/components/WalletProvider";
import { appTheme } from "@/lib/theme/mantine-theme";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["500", "600", "700", "800"],
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["400", "500", "700"],
});

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
      <body
        className={`${sora.variable} ${spaceGrotesk.variable} app-body`}
        suppressHydrationWarning
      >
        <MantineProvider defaultColorScheme="dark" forceColorScheme="dark" theme={appTheme}>
          <QueryProvider>
            <WalletProvider>{children}</WalletProvider>
          </QueryProvider>
        </MantineProvider>
      </body>
    </html>
  );
}
