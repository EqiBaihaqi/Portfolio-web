import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Al Akbar Baihaqi | Mobile Engineer",
  description:
    "Mobile Engineer with a strong background in building cross-platform Flutter applications from architectural setup to deployment. Specializing in Clean Architecture, GetX, Patrol testing, IoT, and AI integrations.",
  keywords: [
    "Al Akbar Baihaqi",
    "Mobile Engineer",
    "Flutter",
    "Dart",
    "Clean Architecture",
    "GetX",
    "Patrol Testing",
    "Freezed",
    "Dio",
    "Politeknik Negeri Malang",
    "Bionic Technology Indonesia",
  ],
  authors: [{ name: "Al Akbar Baihaqi" }],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#080b11",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark scroll-smooth`}
    >
      <body className="min-h-screen bg-[#080b11] text-slate-100 antialiased selection:bg-cyan-500/20 selection:text-white flex flex-col">
        {children}
      </body>
    </html>
  );
}
