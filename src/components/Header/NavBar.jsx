import { Link, NavLink } from "react-router-dom";

export function NavBar() {
  return (
    <>
      <header className="sticky top-0 shadow hover:shadow-xl text-xl font-semibold ">
        <nav className="flex justify-evenly items-center h-24">
          <div>
            <Link to={"#"}>
            <img src="https://img.icons8.com/?size=100&id=13009&format=png&color=000000" alt="" />
            </Link>
          </div>
          <div >
          <ul className="flex gap-3 duration-200" >
            <li><NavLink to={"/"}  className={({isActive}) => `hover:text-[#E47300] ${isActive?"text-[#E47300]" : ""}`} >Home</NavLink></li>
            <li><NavLink to={"/About"} className={({isActive}) => `hover:text-[#E47300] ${isActive?  "text-[#E47300]" : ""}`}>About</NavLink></li>
            <li><NavLink to={"/Contact"} className={({isActive}) => `hover:text-[#E47300] ${isActive?  "text-[#E47300]": ""}`}>Contact</NavLink></li>
          </ul>
          </div>
          <div className="flex items-center gap-3">
            <div>
            Login/Register
            </div>
            <div>
              <button className="text-center duration-200 transition-all cursor-pointer p-3 bg-amber-500 rounded hover:bg-[#FFC107] ">Get Started</button>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
