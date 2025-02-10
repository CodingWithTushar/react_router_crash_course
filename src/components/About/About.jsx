import React from "react";
import { NavBar } from "../Header/NavBar";
import Footer from "../Footer/Footer";

const About = () => {
  return (
    <div className="w-screen h-screen">
      <NavBar />
      <div className=" bg-white my-28">
        <div className="container m-auto px-6  md:px-12 xl:px-6">
          <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
            <div className="md:5/12 lg:w-5/12">
              <img
                src="https://imgs.search.brave.com/EOCdPE7m4l88lwJGLknfO_mWD5L-skANpKJ5_X1eFcM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9rZXlz/dG9uZW1lZGlhaHEu/Y29tL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDIzLzA1L2ZpbmFu/Y2UtYW5pbWF0aW9u/LWV4cGxhaW5lZC1r/ZXlzdG9uZS1tZWRp/YS12aWRlb3MtZm9y/LWZpbmFuY2lhbC1h/ZHZpc29ycy1maW5h/bmNpYWwtc2Vydmlj/ZXMtMDYtMTAyNHg2/ODMuanBn"
                alt="image"
              />
            </div>
            <div className="md:7/12 lg:w-6/12">
              <h2 className="text-2xl  font-bold md:text-4xl">
                "Empowering Your Financial Future with Smart Investments"
              </h2>
              <p className="mt-6 text-2xl ">
                we believe that everyone deserves the opportunity to achieve
                financial freedom. Our team of seasoned investment professionals
                is dedicated to providing personalized, strategic guidance
                tailored to your unique financial goals. We combine cutting-edge
                technology with proven investment strategies to help you
                navigate the complex world of investing with confidence.
              </p>
              <p className="mt-4 text-2xl">
                Our mission is to empower you with the knowledge and tools
                needed to make informed investment decisions. Trust us to be
                your reliable partner on the journey to financial success.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
