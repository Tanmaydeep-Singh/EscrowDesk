'use client';

import DashboardHead from "@/components/Home/DashboardHead/DashboardHead";
import FAQs from "@/components/Home/FAQs/FAQs";
import Hero from "@/components/Home/Hero/Hero";
import Problem from "@/components/Home/Problem/Problem";
import TrustedBy from "@/components/Home/TrustedBy/TrustedBy";
import WhyUs from "@/components/Home/WhyUs/WhyUs";
import WorkFlow from "@/components/Home/WorkFlow/WorkFlow";

export default function Home() {

  return (

    <div className=" min-h-screen relative space-y-8 flex flex-col justify-center items-center" >

      <Hero />
      <DashboardHead/>
      <Problem />
      <WhyUs />
      <WorkFlow />
      <FAQs />
      <TrustedBy />

    </div>


  );
}
