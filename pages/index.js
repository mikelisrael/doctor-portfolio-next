import Header from "../components/Header";
import Navbar from "../components/Navbar";
import { useInView } from "react-intersection-observer";
import About from "../components/About";
import Services from "../components/Services";
import NeedHelp from "../components/NeedHelp";
import Contact from "../components/Contact";

export default function Home() {
  const { ref: contactRef, inView: contactView } = useInView({
    threshold: 0.6,
  });
  const { ref: servicesRef, inView: servicesView } = useInView({
    threshold: 0.3,
  });
  const { ref: aboutRef, inView: aboutView } = useInView({
    threshold: 0.7,
  });
  const { ref: blogRef, inView: blogView } = useInView({
    threshold: 0.7,
  });

  return (
    <main className="relative" id="home">
      <Header />
      <Navbar views={{ contactView, servicesView, aboutView, blogView }} />
      <About aboutRef={aboutRef} />
      <Services servicesRef={servicesRef} />
      <NeedHelp />

      <section id="blog" ref={blogRef}></section>
      <Contact contactRef={contactRef} />
    </main>
  );
}
