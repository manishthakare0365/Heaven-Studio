import type { Metadata } from "next";
import { Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

const cormorant = Cormorant_Garamond({
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-cormorant",
});

export const metadata: Metadata = {
  title: "Heaven Studio | Where Every Frame Tells a Story",
  description:
    "Premium photography studio in Noida specialising in maternity, newborn, kids, wedding, pre-wedding, corporate and product photography.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cormorant.variable}>
      <body>
        <Nav />
        {children}
        <Footer />
        <FloatingButtons />
      </body>
    </html>
  );
}
