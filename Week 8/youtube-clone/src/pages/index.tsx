import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";

import { Inter } from "next/font/google";

const inter = Inter ({subsets : ['latin']})

import { VideoCard } from "@/Components/VideoCard";
import { VideoGrid } from "@/Components/VideoGrid";
import { AppBar } from "@/Components/AppBar";

export default function Home() {
  return (
    <>
      
      <AppBar/>
      <VideoGrid/>
    </>
  );
}
