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
    <html lang="en">
      <Head>
        <link rel="icon" href="/icon.ico" sizes="any" />
      </Head>
      <body className={`${roboto.variable} ${patrickHand.variable}`}>
        {children}
      </body>
    </html>
  );
}
