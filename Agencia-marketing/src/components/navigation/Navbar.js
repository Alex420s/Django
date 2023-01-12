import { connect } from "react-redux";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo_nav from 'assets/img/Alex.jpg'
import CV from './test.pdf'
import { DotLoader } from "react-spinners";


function Navbar() {
  // Definimos para usar el loading de react-spinners
  const [loading,setLoading]=useState(true)

  return (
    <nav className="w-full py-3  top-0 shadow-navbar z-40 fixed bg-django-second">
      <div className="  px-4 sm:px-6 bg-django-second">
      <div className=" ml-2 -mt-2 flex flex-wrap items-center justify-between sm:flex-nowrap">
          <NavLink  to='/' className="ml-4 mt-2 cursor-pointer flex justify-center items-center   " >
          <img src={logo_nav} title='Alex-Django' width={60} height={60} alt="Logo de navegación" className=" rounded-full "/>
          <p className="text-2xl font-bold text-white pl-4 Logo active:text-bluedemon hover:text-django-primary">Alex Django</p>
          </NavLink>
          <div className="ml-4 mt-2 flex-shrink-0">
            {/* <NavLink to='/' className="text-lg inline-flex mx-4 font-medium leading-6 text-white border-b-2 border-django-second hover:text-django-primary ">
              Home
            </NavLink> */}
            <NavLink to='/about' className="text-lg inline-flex mx-4 font-medium leading-6 text-white border-b-2 border-django-second hover:text-django-primary ">
              About
            </NavLink>
            <NavLink to='/portfolio' className="text-lg inline-flex mx-4 font-medium leading-6 text-white border-b-2 border-django-second hover:text-django-primary">
              Portfolio
            </NavLink><NavLink to='/contact' className="text-lg inline-flex mx-4 font-medium leading-6 text-white border-b-2 border-django-second hover:text-django-primary">
              Contact
            </NavLink><NavLink to='/blog' className="text-lg inline-flex mx-4 font-medium leading-6 text-white border-b-2 border-django-second hover:text-django-primary">
              Blog
            </NavLink>
            <button
        type="button"
        className="inline-flex items-center rounded-md border border-transparent bg-django-primary px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-green-500 transition duration-300 ease-in-out  focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
      <a href={ CV } >Download CV  </a>
        <DotLoader className="ml-3 -mr-1 h-5 w-5" loading={loading} size={20} color="#61dafb" />
      </button>
          </div>
      </div>
      </div>
    </nav>
  );
}

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, {})(Navbar);
