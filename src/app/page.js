"use client"
import Navber from "@/components/Navber";
import Image from "next/image";
import Servicesection from "./components/Servicesection";
import Banner from "@/components/Banner";
import Smallbanner from "./components/Smallbanner";
import Blackbanner from "./components/Blackbanner";
import Products from "./components/Products";
import TeamSlider from "./components/TeamSlider";

export default function Home() {
  return (
    <div className="container mx-auto font-mono">
      <Banner></Banner>
      <Smallbanner></Smallbanner>
      <Servicesection></Servicesection>
      <Blackbanner></Blackbanner>
      <Products></Products>
      <TeamSlider></TeamSlider>
    </div>
  );
}
