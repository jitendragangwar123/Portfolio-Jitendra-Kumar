import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ContextProvider } from "../../src/app/Context/ContextProvider";

const geistSans = localFont({
  src: "../../public/fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../../public/fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const trLarabie = localFont({
  src: "../../public/fonts/TR_Larabie.ttf",
  variable: "--font-trLarabie",
  weight: "100 900",
});

const videoType = localFont({
  src: "../../public/fonts/videoType.otf",
  variable: "--font-videoType",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Jitendra Kumar",
  description: "Full-Stack Blockchain Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
       <body
        className={`${geistSans.variable} ${geistMono.variable} ${trLarabie.variable} ${videoType.variable} antialiased`}
      > <ContextProvider>
        {children}
      </ContextProvider>
      </body>
    </html>
  );
}
