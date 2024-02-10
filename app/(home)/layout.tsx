import LandingHeader from "@/components/LandingHeader";
import React from "react";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <LandingHeader />
      {children}
    </>
  );
};

export default HomeLayout;
