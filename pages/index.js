import Header from "../components/Header";
import Navbar from "../components/Navbar";
import { useInView } from "react-intersection-observer";

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
      <section id="about" ref={aboutRef}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam vitae
        iure laudantium doloribus cupiditate deleniti quibusdam eius. Obcaecati
        quasi harum iste quod non cum iusto adipisci totam deserunt enim sed ab
        aliquam, eaque veritatis atque odit molestiae, ad nemo vel quae nostrum
        unde. Esse nobis, nulla quas corrupti reprehenderit repellendus?
        Praesentium suscipit cupiditate inventore, culpa ipsum numquam tempora
        doloribus eveniet in architecto dignissimos ullam eligendi debitis animi
        unde magni dolor nulla officiis ut? Quae neque sapiente nostrum sunt
        blanditiis, asperiores libero qui enim optio molestias placeat
        consectetur? Reiciendis illo consequatur eos blanditiis quidem?
        Voluptates odit deserunt, iusto odio nam eius debitis provident pariatur
        architecto quis, corporis minus sapiente quo? Voluptatibus quaerat
        omnis, non ipsam, culpa quisquam esse quia adipisci nihil optio ipsa
        debitis enim dolorem autem repellat hic obcaecati ducimus molestiae est?
        Dolore natus hic eveniet harum, laboriosam maxime fugiat deleniti
        reiciendis rerum aliquam nihil ea necessitatibus libero quod soluta,
        beatae dolorem. Tempore at in molestias tempora eum. Tempore, impedit
        dolore natus optio debitis, molestias voluptate minus culpa totam
        laboriosam cum possimus voluptatem corrupti, perferendis sit cupiditate!
        Excepturi blanditiis eius numquam voluptatibus velit similique, ducimus
        perferendis quam dolorum non repudiandae reprehenderit eaque. Rem autem
        consequatur sit voluptatibus. Molestias esse illo dolorem quas! Aliquid,
        amet aspernatur accusamus veritatis voluptatum pariatur aut eos numquam,
        blanditiis quidem nesciunt repellat in sed odio? Ducimus veritatis neque
        corporis laudantium aut! Nulla enim qui laudantium unde, aperiam minima,
        sunt id modi et debitis dolorem. Ut quaerat nemo et ad dolor nulla cum,
        doloribus accusantium porro at magnam vel consequuntur sapiente
        asperiores quos minima sequi repudiandae illo qui eligendi dignissimos
        reprehenderit neque autem. Sed, labore dolorum atque ipsum corporis
        nobis! Obcaecati laborum nemo animi quod? Beatae quas optio omnis vel
        illum nemo voluptatem repellat, molestiae quos sit consequuntur earum,
        fugit ducimus ex! Rem quo culpa officiis quisquam nobis beatae. A
        nesciunt sunt, ab doloribus quidem beatae rem soluta laudantium aliquam
        deleniti officia cum neque inventore laborum totam repellat facilis
        consequuntur adipisci. Odit deleniti maxime hic consequatur tenetur
        molestiae beatae earum distinctio culpa. Autem molestias dolor fuga
        assumenda at commodi reiciendis dolore alias aut, ipsam corporis minima,
        repellendus voluptate quidem perspiciatis consequuntur fugit minus! Ipsa
        ex corporis laborum, architecto possimus incidunt nostrum unde dolorem
        voluptate impedit, aut deserunt repellat deleniti? Fugiat illum
        dignissimos nisi ex natus tempore amet nulla? Saepe quae adipisci
        deleniti esse! Error quos omnis delectus aut modi dignissimos iure,
        optio animi quis accusantium obcaecati reiciendis?
      </section>
      <section id="bookings" ref={bookingsRef}></section>
      <section id="services" ref={servicesRef}></section>
      <section id="contact" ref={contactRef}></section>
    </main>
  );
}
