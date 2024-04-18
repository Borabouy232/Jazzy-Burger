import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import navLogo from '../assets/Jazzy.Burger.svg.svg';
import locationlogo from '../assets/Location.Logo2.svg';
import allproductlogo from '../assets/Allproduct-Logo.svg';
import guestlogo from '../assets/Guest-Logo.svg';
import cartlogo from '../assets/Cart2-logo.svg';
import jazzybite from '../assets/Jazzy-bite.jpg'
import AuthDropDown from '../components/AuthDropDown'
import { GoChevronDown } from "react-icons/go";
import { GoChevronUp } from "react-icons/go";
import Bag from '../components/Bag';


const NavBar = ({cartItem}) => {
  const [authShow, setAuthShow] = useState(false);
  const [bagShow, setBagshow] = useState(false);
  return (
    <>
    <main className='container position-relative'>
        <nav className="container d-flex justify-content-between align-items-center"> 
        {/* section-1 */}
        <section className="d-flex justify-content-between align-items-center gap-3">
        {/* div-1 */}
        <div>
         <Link to="/">
         <img src={navLogo} alt='nav-logo' className='img-fluid p-3'/>
         </Link>
        </div>
        {/* div-2 */}
        <div>
            <img src={locationlogo} alt="location-logo" className='d-none d-lg-block'/>
        </div>
        <h5 className="text-danger d-none d-lg-block">Lagos, Nigeria</h5>
        </section>
        {/* section-2 */}
        <section className='d-flex justify-content-between align-items-center gap-3'>
        <img src={allproductlogo} alt="allproduct-logo" className='img-fluid' />
        <h5 className='d-none d-lg-block text-danger mt-3'>All product</h5>
        {/* div-1 */}
        <div className="d-flex gap-3 position-relative" role='button' onClick={()=> !authShow ? setAuthShow(true) : setAuthShow(false)}>
        <img src={guestlogo} alt="guest-logo" />
        <h5 className='d-none d-lg-block mt-3 text-secondsry'>Hi Guest</h5>
        {!authShow ? (
          <div className='d-none d-lg-block mt-3 text-secondary'>
            <GoChevronDown/>
            </div>
        ) :
        (
          <div className='d-none d-lg-block mt-3 text-secondary'>
           <GoChevronUp/> 
           </div>
        )
      }
        <div className='position-absolute top-100 end-0 mt-3'>
          {authShow && <AuthDropDown/>}
        </div>

        </div>
        {/* div-2*/}
        <div onClick={()=>(!bagShow ? setBagshow(true)
        : setBagshow)}>
          <div className='position-relative'>
            <div className='position-absolute top-0 start-100 translate-middle bg-danger text-light rounded-circle w-75 text-center h-75 fw-bold'>
              <p className=''>{cartItem.length}</p>
            </div>
          <img role="button"src={cartlogo} alt="" />

          </div>
          
        </div>
        </section>

        </nav>
        <div className='position-absolute end-0'>{bagShow && <Bag/>}</div>
        <Outlet/>
    </main>

    </>
  )
}


export default NavBar