import React from "react";
import Header from "./Header";

function About() {
  return (
    <>
      <Header />
      <section id="about" class="py-8">
        <div class="container mx-auto">
          <h2 class="text-3xl font-bold mb-4 text-center">About Me</h2>
          <div class="grid grid-cols-1 md:grid-cols-1 gap-4 pl-16">
            <div className="cntnt-ii font-light text-white-400 mt-6 pl-20">
              Thank you so much for visiting my side. <br />I am Nayem Sarkar.I
              am a Front-end Web Developer. <br />
              I get my most excitement when I design a section, play with
              colours, fonts. <br /> I don't know why but these small things
              fascinate me a lot, gives me motivation to move furthure.
            </div>
            <div class="mb-4 md:mb-0">
              <p class="text-lg text-gray-700 mb-6">
                I'm <span className="font-bold">Nayem Sarkar</span>, a frontend
                web developer specializing in creating user-friendly and
                visually appealing websites.
              </p>
              <p class="text-lg text-gray-700 mb-6">
                With a strong foundation in HTML, CSS, and JavaScript, I bring
                designs to life and create seamless user experiences. I have
                experience working with frameworks like React and have a keen
                eye for UI/UX design.
              </p>
            </div>
            <div class="mb-4 md:mb-0">
              <p class="text-lg text-gray-700 mb-6">
                I graduated with a Bachelor's degree in English from City
                University and have completed various web development courses to
                stay updated with the latest industry trends.
              </p>
              <p class="text-lg text-gray-700 mb-6">
                Throughout my career, I have collaborated with clients from
                diverse industries, delivering high-quality websites that meet
                their business objectives. I am passionate about creating
                efficient and maintainable code and continuously learning new
                technologies to enhance my skills.
              </p>
              <p class="text-lg text-gray-700 mb-6">
                Please feel free to reach out to me at Nayemsarkar.ln@gmail.com
                to discuss your web development needs or explore collaboration
                opportunities. You can also visit my portfolio at
                johnportfolio.com to view some of my past projects.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
