import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Layout from "@/src/components/Layout";
import { Providers } from "@/src/providers";
import { ThemeProvider } from "@/src/context/theme"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Yugilist',
  description: 'Your Yugioh Collection app'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" >
      <Providers>
        <body className={inter.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Layout>
              {children}
            </Layout>
          </ThemeProvider>
        </body>
      </Providers>
    </html>
  );
}
