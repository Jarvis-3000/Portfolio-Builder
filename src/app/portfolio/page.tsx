import React from "react";
import Header from "../../components/Header";
import TopImage from "../../components/TopImage";
import Introduction from "../../components/Introduction";
import Projects from "../../components/Projects";
import ContactForm from "../../components/ContactForm";
import Footer from "../../components/Footer";
import Experiences from "@/src/components/Experiences";

const Portfolio: React.FC = () => {
  return (
    <div className="w-full relative bg-slate-300 flex flex-col gap-6">
      <Header />
      <TopImage />
      <Introduction />
      <Projects type="view" />
      <Experiences />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Portfolio;
