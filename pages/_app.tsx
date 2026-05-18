import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Bungee, Bungee_Outline, Inter } from "next/font/google";
import localFont from "next/font/local";
import CustomCursor from "@/components/CustomCursor";
import FloatingPixelBubble from "@/components/FloatingPixelBubble";
import { PixelChatProvider } from "@/components/pixel/PixelChatProvider";
import Chateleon from "@/components/Chateleon";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const bungee = Bungee({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bungee",
  display: "swap",
});

const bungeeOutline = Bungee_Outline({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bungee-outline",
  display: "swap",
});

const fullpack = localFont({
  src: "../public/fonts/fullpack.ttf",
  variable: "--font-fullpack",
  display: "swap",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div
      className={`${inter.variable} ${bungee.variable} ${bungeeOutline.variable} ${fullpack.variable} font-sans`}
    >
      <PixelChatProvider>
        <Component {...pageProps} />
        <FloatingPixelBubble />
      </PixelChatProvider>
      <CustomCursor />
      <Chateleon />
    </div>
  );
}
