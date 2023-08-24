import "./globals.css";
import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import Header from "@/components/Header";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Password Manager App",
  description: "Manage and generate passwords",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${poppins.variable} font-sans overflow-x-hidden    bg-neutral-100 dark:bg-slate-900  `}
        >
          <Header />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
