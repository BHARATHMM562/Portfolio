import { JetBrains_Mono, Inter } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
  fallback: ["monospace"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  fallback: ["system-ui", "sans-serif"],
});

export const metadata: Metadata = {
  title: "Bharath MM | Software Engineer",
  description: "Personal portfolio of Bharath MM — Software Engineer, Full Stack Developer, AI Builder.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${jetbrainsMono.variable} ${inter.variable}`}>
      <body className="bg-background text-white antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
