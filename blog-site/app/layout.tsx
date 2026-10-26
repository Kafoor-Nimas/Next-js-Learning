import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Next Blog",
  description: "A minimal blog app build with the Next.js App Router",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <div className="min-h-dvh bg-zing-200 text-black">
          <div className="mx-auto flex min-h-dvh w-full max-w-[1100px] flex-col border-x border-zinc-300 bg-white">
            <Header />

            <main className="flex-1 px-4 py-8 sm:px-6 sm:py-10">
              {children}
            </main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
