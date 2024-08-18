import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/themeprovider";
const inter = Inter({ subsets: ["latin"] });

import { headers } from "next/headers"; // added
import { cookieToInitialState } from "wagmi"; // added
import { config } from "@/config"; // added
import Web3ModalProvider from "@/context"; // added
import { Inter as FontSans } from "next/font/google"
import { Footer } from "@/components/Footer/page";
import { Navbar } from "@/components/Header/Navbar";



export const metadata: Metadata = {
  title: "SHOPNFT",
  description: "Powered by WalletConnect"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const initialState = cookieToInitialState(config, headers().get("cookie")); // added
  return (
    <html className="!scroll-smooth scrollbar-hide" lang="en">
      <body className={inter.className}>
     
        <Web3ModalProvider initialState={initialState}>
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Navbar />
         
           {children} 
            
           <Footer/>
          </ThemeProvider> 
        </Web3ModalProvider>
         
        
      </body>
    </html>
  );
}