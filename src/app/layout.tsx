import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Gochi_Hand } from "next/font/google";

const gochi_hand = Gochi_Hand({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-gochi-hand',
})

const marlin = localFont({
  src: [
    {
      path: "./fonts/Marlin Soft SQ Thin.ttf",
      weight: "100",
      style: "normal",
    },
    {
      path: "./fonts/Marlin Soft SQ ExtraLight.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "./fonts/Marlin Soft SQ Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/Marlin Soft SQ Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Marlin Soft SQ Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/Marlin Soft SQ Bold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/Marlin Soft SQ ExtraBold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/Marlin Soft SQ Black.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "./fonts/Marlin Soft SQ ExtraBlack.ttf",
      weight: "900",
      style: "normal",
    },
    {
      path: "./fonts/Marlin Soft SQ ThinItalic.ttf",
      weight: "100",
      style: "italic",
    },
    {
      path: "./fonts/Marlin Soft SQ ExtraLightItalic.ttf",
      weight: "200",
      style: "italic",
    },
    {
      path: "./fonts/Marlin Soft SQ LightItalic.ttf",
      weight: "300",
      style: "italic",
    },
    {
      path: "./fonts/Marlin Soft SQ RegularItalic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "./fonts/Marlin Soft SQ MediumItalic.ttf",
      weight: "500",
      style: "italic",
    },
    {
      path: "./fonts/Marlin Soft SQ BoldItalic.ttf",
      weight: "600",
      style: "italic",
    },
    {
      path: "./fonts/Marlin Soft SQ ExtraBoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
    {
      path: "./fonts/Marlin Soft SQ BlackItalic.ttf",
      weight: "800",
      style: "italic",
    },
    {
      path: "./fonts/Marlin Soft SQ ExtraBlackItalic.ttf",
      weight: "900",
      style: "italic",
    },
  ],
  variable: "--font-marlin",
});

export const metadata: Metadata = {
  title: "A Gift For You!",
  description: "A special suprise for my special girl.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${marlin.className} ${gochi_hand.variable}`}>{children}</body>
    </html>
  );
}
