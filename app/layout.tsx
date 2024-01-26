import type { Metadata } from "next";
import { Lilita_One, Inter } from "next/font/google";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const lilita_one = Lilita_One({ weight: "400", subsets: ["latin"], variable: "--font-lilita-one" });

export const revalidate = 3600; // Revalidate all data every hour

export const metadata: Metadata = {
  title: "Kantodex - Pokedex for the Kanto region (Gen 1)",
  description: "Here you will find all the information about the Kanto region Pokemon (Gen 1).",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={lilita_one.variable}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
