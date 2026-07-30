import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Script from "next/script";
import { Bungee, Bungee_Outline, Inter } from "next/font/google";
import localFont from "next/font/local";
import CustomCursor from "@/components/CustomCursor";
import { PixelChatProvider } from "@/components/pixel/PixelChatProvider";

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
      </PixelChatProvider>
      <CustomCursor />
      {/* PXL Chat — "Pixel Bot Main", configured in the PXL Chat Studio */}
      <Script
        src="https://pxlchat.vercel.app/widget.js"
        data-bot="pk_live_kel03udbnoft"
        strategy="lazyOnload"
      />
    </div>
  );
}
