import type { Metadata } from "next";

import { GoogleAnalytics } from '@next/third-parties/google'


import { SUSE } from "next/font/google";
import "./globals.css";

const suse = SUSE({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lato',
  weight: ['300', '400', '500', '600', '700', '800']
});

export const metadata: Metadata = {
  title: "My Portfolio 2024",
  description: "Get in touch!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${suse.className} antialiased`}>
        {children}
        <GoogleAnalytics gaId="G-00WQPHM20S" />
        
      </body>
    </html>
  );
}
