import React from "react";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

const Blog = ({ blogRef }) => {
  return (
    <div className="universal second_bg">
      <section id="blog" className="py-28 xl:px-24" ref={blogRef}>
        <h3>I love providing you with some</h3>

        <h2 className="text-2xl lg:text-3xl font-bold mt-2 title_text">
          Useful Contents
        </h2>

        <p className="mt-7 text-justify">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt
          officia repellat odio officiis harum dolorem quia, unde eligendi
          possimus recusandae eius voluptatibus illum quos animi architecto
          tempora, tenetur ea corporis voluptas. Sequi voluptate vel corrupti
          harum maiores laudantium ullam quidem sapiente sit reprehenderit
          voluptas, exercitationem nemo laborum voluptatum recusandae. Adipisci
          mollitia doloribus odio placeat, fugit voluptatum aliquid hic.
          Voluptatum, aliquam.
        </p>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-x-3 gap-y-10">
          <article className="outline outline-1 outline-gray-100 p-4 bg-white">
            <img
              src="https://shorturl.at/DGPW1"
              alt=""
              className="w-full md:h-44 object-cover"
            />

            <div className="mt-7 space-y-2">
              <small>29 March 2017</small>
              <h2 className="font-medium title_blog">The Future of medicine</h2>
            </div>

            <p className="mt-7 text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            </p>

            <a
              href=""
              className="title_text mt-5 flex items-center gap-2 hover:underline text-sm"
            >
              <span>Read more</span>
              <ArrowRightAltIcon />
            </a>
          </article>

          <article className="outline outline-1 outline-gray-100 p-4  bg-white">
            <img
              src="https://shorturl.at/DGPW1"
              alt=""
              className="w-full md:h-44 object-cover"
            />

            <div className="mt-7 space-y-2">
              <small>29 March 2017</small>
              <h2 className="font-medium title_blog">The Future of medicine</h2>
            </div>

            <p className="mt-7 text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            </p>

            <a
              href=""
              className="title_text mt-5 flex items-center gap-2 hover:underline text-sm"
            >
              <span>Read more</span>
              <ArrowRightAltIcon />
            </a>
          </article>

          <article className="outline outline-1 outline-gray-100 p-4 bg-white">
            <img
              src="https://shorturl.at/DGPW1"
              alt=""
              className="w-full md:h-44 object-cover"
            />

            <div className="mt-7 space-y-2">
              <small>29 March 2017</small>
              <h2 className="font-medium title_blog">The Future of medicine</h2>
            </div>

            <p className="mt-7 text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            </p>

            <a
              href=""
              className="title_text mt-5 flex items-center gap-2 hover:underline text-sm"
            >
              <span>Read more</span>
              <ArrowRightAltIcon />
            </a>
          </article>
        </div>
      </section>
    </div>
  );
};

export default Blog;
