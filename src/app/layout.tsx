import type { Metadata } from "next";
import Header from "@/components/Header/Header";
import "./globals.css";
import Script from "next/script";
import ModalContainer from "@/components/Util/ModalContainer";
import { Analytics } from "@vercel/analytics/react";

export function generateMetadata(): Metadata {
  return {
    title: "전국 부실아파트 조회",
    description: "전국 부실아파트를 조회할 수 있는 홈페이지 입니다.",
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="xl:px-10 xl:py-5 flex flex-col h-svh">
        <Script
          strategy="beforeInteractive"
          src={`https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_MAP_KEY}`}
        />
        <Script
          strategy="beforeInteractive"
          src={`https://oapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_MAP_KEY}&submodules=geocoder`}
        />
        <Header />
        {children}
        <div id="modalContent" />
        <ModalContainer />
        <Analytics />
      </body>
    </html>
  );
}
