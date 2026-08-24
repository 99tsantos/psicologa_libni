import type { Metadata } from "next";
import { Roboto, Patrick_Hand } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Head from "next/head";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-roboto",
});
const patrickHand = Patrick_Hand({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-patrick-hand",
});

export const metadata: Metadata = {
  title: "Psicóloga Libní",
  description: "Página profesional de Libní Gonzaléz.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Head>
        <link rel="icon" href="/icon.ico" sizes="any" />
      </Head>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            (function () {
              var savedTheme = localStorage.getItem("theme");
              var prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
              var shouldUseDark = savedTheme ? savedTheme === "dark" : prefersDark;
              document.documentElement.classList.toggle("dark", shouldUseDark);
            })();
          `,
        }}
      />
      <body className={`${roboto.variable} ${patrickHand.variable}`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
