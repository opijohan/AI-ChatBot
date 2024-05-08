import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Religion AI - Something something something",
  description:
    "Something something something something something something something",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="antialiased">
      <body className={inter.className}>
        <main className="flex min-h-screen flex-col">
          <div className="flex flex-1 justify-center w-full">
            <div className="flex w-full max-w-[1280px] h-full">{children}</div>
          </div>
        </main>
      </body>
    </html>
  );
}
