import React from 'react';
import supportLogo from '../assets/Support-Logo.svg';
import paymentLogo from '../assets/Payment-Logo.svg';
import appleLogo from '../assets/Apple-logo.svg';
import googleImg from '../assets/GooglePlay-Logo.svg'


const Footer = () => {
  return (
    <>
    <footer className='bg-black'>
        <main className='text-white container py-5'>
            {/* section-1 */}
            <section className="d-lg-flex justify-content-between">
              {/* parent div */}
            <div className="flex-column-reverse flex-lg-row d-flex">
              {/* div for 24/7 text and logo */}
              <div className="d-lg-flex">
                <img src={supportLogo} alt="24/7 logo" />
                <h2>
                  
                  24/7 <span>Support</span>
                </h2>
              </div>
              {/* div for 100% text and logo */}
              <div className="d-lg-flex">
                <img src={paymentLogo} alt="24/7 logo" />
                <h2 className="text-center ">
                  
                  100% <br /> <span>Payment Secured</span>
                </h2>
              </div>
            </div>
            {/* parent div for apple and google logo */}
            <div className="d-lg-flex gap-4">
                {/* div for appleImg  */}
                <div>

                <img src={appleLogo} alt="apple image" />
                </div>
                {/* div for googleImg  */}
                <div>

                <img src={googleImg} alt="google image" />
                </div>
            </div>
          </section>

        </main>
    </footer>
    </>
  )
}

export default Footer