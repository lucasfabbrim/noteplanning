import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import * as amplitude from "@amplitude/analytics-browser";
import { SpeedInsights } from "@vercel/speed-insights/next"

const inter = localFont({
  src: [
    {
      path: "./fonts/Inter_18pt-BlackItalic.ttf",
      weight: "900",
      style: "italic",
    },
    {
      path: "./fonts/Inter_18pt-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/Inter_18pt-BoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
    {
      path: "./fonts/Inter_18pt-ExtraBoldItalic.ttf",
      weight: "800",
      style: "italic",
    },
    {
      path: "./fonts/Inter_18pt-Italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "./fonts/Inter_18pt-LightItalic.ttf",
      weight: "300",
      style: "italic",
    },
    {
      path: "./fonts/Inter_18pt-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/Inter_18pt-MediumItalic.ttf",
      weight: "500",
      style: "italic",
    },
    {
      path: "./fonts/Inter_18pt-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Inter_18pt-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/Inter_18pt-SemiBoldItalic.ttf",
      weight: "600",
      style: "italic",
    },
    {
      path: "./fonts/Inter_18pt-Thin.ttf",
      weight: "100",
      style: "normal",
    },
    {
      path: "./fonts/Inter_18pt-ThinItalic.ttf",
      weight: "100",
      style: "italic",
    },
  ],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Note Planning - Templates",
  description:
    "O maior template de organização e produtividade! Um ecosistema dentro do Notion de organização e produtividade!",
};  

// Initialize Amplitude on the client side
if (typeof window !== "undefined") {
  amplitude.init("b6dea72913009f27a05b5fce377adf3b", {
    defaultTracking: true,
    autocapture: true,
    logLevel: amplitude.Types.LogLevel.Debug,
  });
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-inter antialiased`}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
