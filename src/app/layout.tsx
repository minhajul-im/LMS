import type { Metadata } from "next";
import "../common/style//globals.css";
import localFont from "next/font/local";
import { ThemeProvider } from "@/provider/theme-provider";
import { ScreenHeader } from "@/modules/header/screen-header";

const geistSans = localFont({
  src: "../common/fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "../common/fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "quiz-lms",
  description: "this project will be kind of lms",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <ScreenHeader />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
