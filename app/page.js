import Background from "@/Components/Background";
import FAQs from "@/Components/FAQs";
import GetInTouch from "@/Components/GetInTouch";
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
    </>
  );
}
