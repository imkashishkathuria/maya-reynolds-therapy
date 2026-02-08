import Background from "@/Components/Background";
import Contact from "@/Components/Contact";
import FAQs from "@/Components/FAQs";
import Footer from "@/Components/Footer";
import GetInTouch from "@/Components/GetInTouch";
import GetStarted from "@/Components/GetStarted";
import HeroSection from "@/Components/HeroSection";
import Intro from "@/Components/Intro";
import Navbar from "@/Components/Navbar";
import Specialities from "@/Components/Specialities";
import WorkWithMe from "@/Components/WorkWithMe";
import Reveal from "@/Components/Reveal";


export default function Home() {
  return (
    <>
    <Navbar />
    <Reveal> <HeroSection /></Reveal>
   
     <Reveal> <GetInTouch /> </Reveal>
     <Reveal> <Specialities  /> </Reveal>
     <Reveal> <WorkWithMe /> </Reveal>
     <Reveal> <Intro /> </Reveal>
     <Reveal> <FAQs /> </Reveal>
     <Reveal> <Background /> </Reveal>
     <Reveal> <GetStarted /> </Reveal>
     <Reveal> <Contact /> </Reveal>
    <Footer />
    </>
  );
}
