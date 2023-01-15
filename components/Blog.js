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
          Here you'll find a collection of articles that cover a wide range of
          topics related to healthcare, medicine, and wellness. I believe in
          educating and empowering my patients, and this blog is a platform for
          me to share my knowledge and expertise with a wider audience. I hope
          that my articles will provide valuable information and inspiration for
          anyone interested in improving their health and well-being. Thank you
          for visiting and I hope you enjoy reading these useful contents.
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
