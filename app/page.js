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


export default function Home() {
  return (
    <>
    <Navbar />
    <HeroSection />
    <GetInTouch />
    <Specialities  />
    <WorkWithMe />
    <Intro />
    <FAQs />
    <Background />
    <GetStarted />
    <Contact />
    <Footer />
    </>
  );
}
