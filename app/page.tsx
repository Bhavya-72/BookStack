"use client";
// import CustomButton from "../components/CustomBtn"
import { useAccount } from "wagmi";
import { useContext } from "react";
// import { Navbar } from "@/components/Header/Navbar";
import {AuroraBackgroundDemo} from "@/components/Home/Hero"
import { Footer } from "@/components/Footer/page";

// import { AuroraBackground } from "@/components/ui/aurora-background";
// import { Button } from "@/components/ui/button";

export default function Home() {
  const { isConnected } = useAccount();
  return (
    <main>
      {/* <Navbar /> */}
      <AuroraBackgroundDemo/>
      
      
      {/* <w3m-button /> */}
      

    </main>
  );
}
