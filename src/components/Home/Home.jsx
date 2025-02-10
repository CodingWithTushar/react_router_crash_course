import React from "react";
import { Link } from "react-router-dom";
import { NavBar } from "../Header/NavBar";
import Footer from "../Footer/Footer";

const Home = () => {
  return<> 
    <NavBar/>
    <div className="flex items-center justify-evenly my-20">
      <div>
        <Link to={"#"}>
        <img src="https://imgs.search.brave.com/bl8SuBV4ExL4maJ433vtqq-QABPlOoZufM0ma5uyK-o/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9rZXlz/dG9uZW1lZGlhaHEu/Y29tL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDIzLzA1L2ZpbmFu/Y2UtYW5pbWF0aW9u/LWV4cGxhaW5lZC1r/ZXlzdG9uZS1tZWRp/YS12aWRlb3MtZm9y/LWZpbmFuY2lhbC1h/ZHZpc29ycy1maW5h/bmNpYWwtc2Vydmlj/ZXMtMTEtMTAyNHg5/NzUuanBn" alt="" width={500} className="rounded" />
        </Link>
      </div>
      <div className="flex  flex-col gap-5 text-center items-center">
        <div>
            <h1 className="text-7xl font-bold">Download Now</h1>
        </div>
        <div>
            <h1 className="text-4xl font-semibold">Enjoy Investing</h1>
        </div>
        <div>
        <button className="flex items-center justify-center text-center duration-200 text-3xl transition-all cursor-pointer p-5 bg-amber-500 rounded hover:bg-[#FFC107] "> <img src="https://img.icons8.com/?size=100&id=L1ws9zn2uD01&format=png&color=000000" alt="" width={50} />Download Now</button>
        </div>
      </div>
    </div>
    <Footer/>
    </>
};

export default Home;
