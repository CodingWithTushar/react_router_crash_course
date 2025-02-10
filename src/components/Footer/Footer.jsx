import React from "react";
import { Link, NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="">
        <div className=" flex items-center justify-around">
          <div>
            <Link to={"#"}>
              <img
                src="https://imgs.search.brave.com/8eAidTRHY35PWWZC5vCoXQDQsbHrUa1nYukqZzCn5S0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9rZXlz/dG9uZW1lZGlhaHEu/Y29tL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDIzLzA1L2ZpbmFu/Y2UtYW5pbWF0aW9u/LWV4cGxhaW5lZC1r/ZXlzdG9uZS1tZWRp/YS12aWRlb3MtZm9y/LWZpbmFuY2lhbC1h/ZHZpc29ycy1maW5h/bmNpYWwtc2Vydmlj/ZXMtMDUtMTAyNHg2/ODguanBn"
                alt="Know About Us"
                width={170}
              />
            </Link>
          </div>
          <div className="grid grid-cols-3 gap-10 p-5 text-lg">
            <ul>
              <h1 className="font-semibold"> Resoures</h1>
              <li >
                <NavLink to={"/"} className={({ isActive }) =>`${isActive? "no-underline":"underline"}`}>
                  Home
                </NavLink>
              </li>
              <li >
                <NavLink to={"/about"} className={({ isActive }) =>`${isActive? "no-underline":"underline"}`}>
                  About
                </NavLink>
              </li>
            </ul>
            <ul>
              <h1 className="font-semibold">Follow Us</h1>
              <li className="underline hover:no-underline">X</li>
              <li className="underline hover:no-underline">Instagram</li>
            </ul>
            <ul>
              <h1 className="font-semibold">Legal</h1>
              <li className="underline hover:no-underline">Privacy Policy</li>
              <li className="underline hover:no-underline">
                Terms & Conditions
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
