import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import TopNav from "./components/TopNav";
import Providers from "./components/providers/TQProvider";
import { Suspense } from "react";
import GlobalLoading from "./GlobalLoading";
import { ThemeProvider } from "next-themes";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "LoL 정보 앱",
  description: "League of Legends 정보 앱",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Providers>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white dark:bg-gray-800`}
        >
          <ThemeProvider attribute="class">
            <TopNav />
            <Suspense fallback={<GlobalLoading />}>
              <div className="pt-20  w-full max-w-[1000px] mx-auto">
                {children}
              </div>
            </Suspense>
          </ThemeProvider>
        </body>
      </Providers>
    </html>
  );
}
