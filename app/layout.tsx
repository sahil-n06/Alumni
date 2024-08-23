import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";

const poppins = Poppins({ subsets: ["latin"],
  weight:['400','500','600','700'],
  variable: '--font-poppins',
 });

export const metadata: Metadata = {
  title: "hmare app ka naam",
  description: "khuch bhi likh denge baad mai",
  icons: {
    // public(iske andar assests folder bhi hoga) folder banana hai and then ek icon app ke andar daalna hai favicon.ico naam ka 
    // icon:"/assets/images/any logo"
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
       <body className={poppins.variable}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
