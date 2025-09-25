import { Inter } from "next/font/google";
import { Footer } from "@/components/footer/Footer";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body style={{ height: "100vh", margin: 0 }}>
        <div style={{ flex: 1, overflow: "auto" }}>{children}</div>

        <Footer />
      </body>
    </html>
  );
}
