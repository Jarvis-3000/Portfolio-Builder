import React from "react";
import Header from "../components/Header";
import TopImage from "../components/TopImage";
import Introduction from "../components/Introduction";
import Projects from "../components/Projects";
import Footer from "../components/Footer";
import Experiences from "@/src/components/Experiences";
import { ThemeToggler } from "@/src/components/ThemeToggler";
import { Skills } from "@/src/components/Skills";

const Portfolio: React.FC = () => {
  return (
    <div className="w-full h-full bg-slate-100 dark:bg-slate-500 flex flex-col gap-y-[50px]">
      <Header />
      <TopImage />
      <Introduction />
      <br />
      <Skills />
      <br />
      <Projects type="card" />
      <br />
      <Experiences />
      <Footer />
      <ThemeToggler />
    </div>
  );
};

export default Portfolio;
