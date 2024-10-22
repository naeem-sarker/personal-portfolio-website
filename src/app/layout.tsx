import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

export const metadata: Metadata = {
  title: "Personal Portfolio Website",
  description: "Personal Portfolio Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="layout">
          <div className="top">
            <Navbar />
          </div>

          <div className="menu">{children}</div>

          <div className="footer">
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
