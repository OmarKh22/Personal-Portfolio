import { Outfit, Ovo } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  weight: ["400", "500" , "600", "700"],
});

const ovo = Ovo({
  variable: "--font-ovo",
  weight: ["400"],
});

export const metadata = {
  title: "Portfolio - Omar Khaled",
  description: "Frontend Developer Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${outfit.variable} ${ovo.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
