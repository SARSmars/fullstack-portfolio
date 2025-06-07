import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import {Providers} from "./Providers";
import Navbar from "@/components/Navbar";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers> 
          {/* //Provider is client component that wraps the entire app */}
          {/* Header */}
          <Header/> 
          {/* //it is server component, so it can be used in the layout */}

        {/* Navbar */}
          <Navbar/>

        {/* Search box */}
        {children}
        </Providers>
      </body>
    </html>
  );
}
