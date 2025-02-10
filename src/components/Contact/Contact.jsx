import React from "react";
import { NavBar } from "../Header/NavBar";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="w-screen h-screen">
      <NavBar />
      <div className="flex items-center justify-evenly my-25">
      <div>
        <Link to={"#"}>
        <img src="https://imgs.search.brave.com/8xGicDEVNaOITLodtEQ1BcBMtK480ul5IwMzIbqF3SY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9rZXlz/dG9uZW1lZGlhaHEu/Y29tL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDIzLzA1L2ZpbmFu/Y2UtYW5pbWF0aW9u/LWV4cGxhaW5lZC1r/ZXlzdG9uZS1tZWRp/YS12aWRlb3MtZm9y/LWZpbmFuY2lhbC1h/ZHZpc29ycy1maW5h/bmNpYWwtc2Vydmlj/ZXMtMTAtMTAyNHg2/NDAuanBn" width={700} alt="" />
        </Link>
      </div>
      <div className="flex flex-col">
        <div className="flex gap-15 items-center justify-start mt-5">
            <label htmlFor="" className="text-xl">Full Name:</label>
            <input type="text" placeholder="Tushar Kumar" className="border rounded-md font-semibold text-xl border-gray-500 px-3 py-2  hover:ring-2 ring-amber-500 " required />
        </div>
        <div className="flex gap-25 items-center justify-start mt-5">
            <label htmlFor="" className="text-xl">Email:</label>
            <input type="email" placeholder="User1@gmail.com" className="border rounded-md font-semibold text-xl border-gray-500 px-3 py-2  hover:ring-2 ring-amber-500 " required />
        </div>
        <div className="flex gap-3 items-center justify-start mt-5">
            <label htmlFor="" className="text-xl">Phone Number:</label>
            <input type="Number" placeholder="99903999**" className="border rounded-md font-semibold text-xl border-gray-500 px-3 py-2  hover:ring-2 ring-amber-500 " required />
        </div>
            <button className="flex items-center justify-center text-center duration-200 text-2xl transition-all cursor-pointer p-3 bg-amber-500 rounded hover:bg-[#FFC107] mt-10"> Submit</button>
        </div>
    </div>
      <Footer />
    </div>
  );
};

export default Contact;
