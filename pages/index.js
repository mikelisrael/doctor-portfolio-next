import Header from "../components/Header";
import Navbar from "../components/Navbar";
import { useInView } from "react-intersection-observer";
import About from "../components/About";

export default function Home() {
  const { ref: contactRef, inView: contactView } = useInView({
    threshold: 0.7,
  });
  const { ref: servicesRef, inView: servicesView } = useInView({
    threshold: 0.7,
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
      <div className="universal mt-16">
        <About aboutRef={aboutRef} />
        <section id="bookings" ref={bookingsRef}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Exercitationem dolore obcaecati inventore nostrum, eos, ipsum nisi
          expedita eligendi ad ullam similique perferendis. Esse fugit odio
          labore perferendis voluptatem sunt voluptatibus! Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Ut possimus magni vel dolorem
          quisquam, molestias molestiae porro eum suscipit labore recusandae
          quas modi sunt facere non nam illum rerum, fugiat at maiores nostrum
          optio voluptate. Minus laudantium inventore dolore, similique neque
          molestias cumque excepturi dolores ex asperiores eligendi non numquam
          alias debitis suscipit, iusto in dignissimos a, aliquid natus voluptas
          ipsa dolor tempore. Sequi dignissimos totam excepturi neque ratione.
          Iure sed quibusdam cupiditate libero architecto aut est omnis! Tenetur
          sequi numquam id. Numquam quos ducimus quo dicta excepturi
          necessitatibus maxime iste dignissimos a, quasi vero minus sed error
          harum corporis tempora libero, fuga porro! Reiciendis perferendis
          quaerat et rem corrupti aliquid ab sapiente, expedita ullam vero, quam
          assumenda debitis iusto minima nostrum cupiditate ipsum odit quibusdam
          maxime magnam repellendus! Sunt autem obcaecati quasi illum quo ex,
          laborum ratione dolores a doloribus sequi, debitis iste nam beatae
          tempora laudantium, perspiciatis sint. Eius cupiditate tempora quas
          inventore dolore minima ad repellendus vel aut distinctio similique
          sapiente temporibus possimus ab ducimus iusto et explicabo tenetur,
          quibusdam ut officia ullam ipsa obcaecati fuga! Dicta minima mollitia
          necessitatibus repellat, doloremque, quidem quia recusandae nam
          assumenda exercitationem voluptatum. Cumque vitae veritatis cum
          possimus dolor voluptatibus rem? Quod blanditiis doloremque fuga quos!
          Provident hic praesentium dolores id nemo quas non officia unde
          ratione! Praesentium iusto nobis asperiores. Soluta aperiam alias
          quaerat inventore. Earum omnis numquam error nam mollitia corrupti
          aspernatur nisi, aut sequi et nostrum qui dolorem aperiam maiores
          rerum voluptate laboriosam quod itaque est, eius unde aliquid rem
          doloremque quisquam. Dolores sapiente debitis error totam ratione in
          consequuntur! Dolores dolorum, optio magni repudiandae pariatur
          molestiae veritatis beatae unde aut totam maxime eos eius similique
          hic natus ab a itaque ratione deleniti laborum? In error doloribus
          voluptate dignissimos enim placeat. Impedit reiciendis deserunt,
          asperiores consequatur maiores odio quis placeat dignissimos
          accusantium consequuntur beatae inventore unde voluptas illum eligendi
          repudiandae tenetur similique voluptatibus voluptates aliquid quo eos
          enim. Fuga architecto corporis nam neque voluptate maxime eum
          doloremque deleniti recusandae ipsa unde quidem laboriosam facere
          similique ipsam, iure placeat minus mollitia ab sequi. Facere
          provident atque nesciunt unde amet possimus voluptatem, ullam modi,
          eligendi similique ad blanditiis reiciendis asperiores quaerat. Totam
          excepturi in, laborum necessitatibus quisquam amet atque rerum
          accusantium veniam, sapiente blanditiis ut cupiditate ducimus hic quo
          quasi dicta earum autem. Nobis, possimus ipsum quod mollitia earum
          blanditiis cum eaque provident dolorem nemo ab quis? Recusandae,
          tempora delectus.
        </section>
        <section id="services" ref={servicesRef}></section>
        <section id="contact" ref={contactRef}></section>
      </div>
    </main>
  );
}
