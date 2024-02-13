import Header from "@/components/Header";
import Recentforms from "@/components/Recentforms";
import React from "react";

const FormsPage = () => {
  return (
    <>
      <Header />
      <main className="max-w-6xl mx-auto">
        <Recentforms/>
        </main>
    </>
  );
};

export default FormsPage;
