import Header from "../components/Header";
import Navbar from "../components/Navbar";
import { useInView } from "react-intersection-observer";
import About from "../components/About";
import Services from "../components/Services";

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
  const { ref: bookingsRef, inView: bookingsView } = useInView({
    threshold: 0.7,
  });

  return (
    <main className="relative" id="home">
      <Header />
      <Navbar views={{ contactView, servicesView, aboutView, bookingsView }} />
      <div className="universal">
        <About aboutRef={aboutRef} />
        <Services servicesRef={servicesRef} />
        <section id="bookings" ref={bookingsRef}></section>
        <section id="contact" ref={contactRef}></section>
      </div>
    </main>
  );
}
