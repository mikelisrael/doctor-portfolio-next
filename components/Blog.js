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
              src="https://i0.wp.com/post.healthline.com/wp-content/uploads/2020/04/how-long-does-it-take-to-lose-weight-1296x728-feature.jpg?h=1528"
              alt=""
              className="w-full md:h-44 object-cover"
            />

            <div className="mt-7 space-y-2">
              <small>29 October 2017</small>
              <h2 className="font-medium title_blog">
                Do you ever wonder How Long Does it Take to Lose Weight?
              </h2>
            </div>

            <p className="mt-7 text-justify">
              Whether you want to lose weight for a special occasion or simply
              improve your health, weight loss is a common goal.
            </p>

            <a
              href="https://www.healthline.com/nutrition/how-long-does-it-take-to-lose-weight"
              target="_blank"
              rel="noreferrer"
              className="title_text mt-5 flex items-center gap-1 hover:underline text-sm read_more"
            >
              <span>Read more</span>
              <span>
                <ArrowRightAltIcon />
              </span>
            </a>
          </article>

          <article className="outline outline-1 outline-gray-100 p-4  bg-white">
            <img
              src="https://i0.wp.com/articles.connectnigeria.com/wp-content/uploads/2021/03/healthy-eating.jpg?fit=620%2C342&ssl=1"
              alt=""
              className="w-full md:h-44 object-cover"
            />

            <div className="mt-7 space-y-2">
              <small>14 October 2020</small>
              <h2 className="font-medium title_blog">
                What to Eat (or Not) When Your Stomach Hurts
              </h2>
            </div>

            <p className="mt-7 text-justify">
              When your stomach hurts, the last thing you want to do is eat
              something that makes it worse.
            </p>

            <a
              href="https://www.webmd.com/digestive-disorders/ss/slideshow-food-stomach-upset"
              className="title_text mt-5 flex items-center gap-1 hover:underline text-sm read_more"
              target="_blank"
              rel="noreferrer"
            >
              <span>Read more</span>
              <span>
                <ArrowRightAltIcon />
              </span>
            </a>
          </article>

          <article className="outline outline-1 outline-gray-100 p-4 bg-white">
            <img
              src="https://hips.hearstapps.com/hmg-prod/images/how-to-do-cpr-1527695986.jpg?crop=1xw:0.84375xh;center,top&resize=1200:*"
              alt=""
              className="w-full md:h-44 object-cover"
            />

            <div className="mt-7 space-y-2">
              <small>5 January 2023</small>
              <h2 className="font-medium title_blog">Ready to Learn CPR?</h2>
            </div>

            <p className="mt-7 text-justify">
              Recent events underscore the importance of knowing how to do
              lifesaving CPR. How can you recognize whether a person is
              suffering cardiac arrest?
            </p>

            <a
              href="https://www.health.harvard.edu/blog/ready-to-learn-cpr-202301052871"
              className="title_text mt-5 flex items-center gap-1 hover:underline text-sm read_more"
              target="_blank"
              rel="noreferrer"
            >
              <span>Read more</span>
              <span>
                <ArrowRightAltIcon />
              </span>
            </a>
          </article>
        </div>
      </section>
    </div>
  );
};

export default Blog;
