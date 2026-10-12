import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "中学英語のきほん | 中1〜中3の基礎が全部わかる",
  description:
    "中学1年生から3年生までの英語の基礎を範囲ごとに学べるサイト。be動詞から現在完了・関係代名詞まで、やさしい解説と例文・練習問題で基礎を完全マスター。",
  keywords: [
    "中学英語",
    "英語 基礎",
    "be動詞",
    "不定詞",
    "現在完了",
    "関係代名詞",
    "中学1年生",
    "中学2年生",
    "中学3年生",
    "英文法",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
