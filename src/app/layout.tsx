import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/ui/navbar";

export const metadata: Metadata = {
  title: "Plantventory",
  description: "Inventory for plants",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
