import AIAssistant from "@/components/ai/AIAssistant";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/ThemeProvider";
import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NEXA - Smart Global, Warmly Local",
  description: "Your AI-powered travel companion for seamless Indonesian journeys.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${outfit.variable} antialiased`}
      >
        <ThemeProvider>
          <Navbar />
          {children}
          <AIAssistant />
        </ThemeProvider>
      </body>
    </html>
  );
}
