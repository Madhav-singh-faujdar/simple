import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom'
import { PostFormApi } from '../Baseurl/baseUrl';

export const OtpVerify = () => {

  const [loading, setLoading] = useState(false);
const nav = useNavigate()

  const [otp, setOtp] = useState('');

  const handleSubmit = async(event) => {
    event.preventDefault();



try {
  
  if (otp.length !== 6) {
    toast.error('Invalid OTP length. Please enter a 6-digit OTP.');
    return
  }


  if (loading) {
    return
  }
  setLoading(true)

  const toastId = toast.loading('Loading...');


  const formData = { userId:localStorage.getItem('userId'), otp }

  const data = await PostFormApi(`/verifyOtp`, setLoading, formData, toastId)
  if (data.error) {
    setLoading(false)
    return
  }
  nav('/signup-done')

} catch (error) {
  
toast.error(error)

}

  };

  const handleChange = (event) => {
    setOtp(event.target.value);
  };



const hndlOtp = async()=>{
try {
  
  if (loading) {
    return
  }
  setLoading(true)

  const toastId = toast.loading('Loading...');


  const formData = { userId:localStorage.getItem('userId') }

  const data = await PostFormApi(`/resendPhoneOtp`, setLoading, formData, toastId)
  if (data.error) {
    setLoading(false)
    return
  }
} catch (error) {
  toast.error(error)
}
}




  return (
    <div>

<Helmet>
    <title>Otp verification</title>
</Helmet>
<div className="nk-app-root">
  {/* main @s */}
  <div className="nk-main ">
    {/* wrap @s */}
    <div className="nk-wrap nk-wrap-nosidebar">
      {/* content @s */}
      <div className="nk-content ">
        <div className="nk-block nk-block-middle nk-auth-body  wide-xs">
          <div className="brand-logo pb-4 text-center">
           <Link to="/" className="logo-link">
              <img
                className="logo-dark logo-img logo-img-lg"
                src="assets/images/logo-dark.png"
                alt="logo-dark"
              />
            </Link>
          </div>
          <div className="card card-bordered">
            <div className="card-inner card-inner-lg">
              <div className="nk-block-head">
                <div className="nk-block-head-content">
                  <h5 className="nk-block-title">Verify OTP</h5>
                  <div className="nk-block-des">
                    <p>
                      Enter the 6 Digit OTP that we have sent you on your
                      registred mobile number
                    </p>
                  </div>
                </div>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <div className="form-label-group">
                    <label className="form-label" htmlFor="default-01">
                      Enter 6 Digit Otp
                    </label>
                  </div>
                  <div className="form-control-wrap">
                  <input
                type="number"
                className="form-control form-control-lg"
                id="default-01"
                placeholder="######"
                value={otp}
                onChange={handleChange}
              />
                  </div>
                </div>
                <div className="form-group">
                  <button className="btn btn-lg btn-primary btn-block">
                    Verify Now
                  </button>
                </div>
              </form>
              <div className="form-note-s2 text-center pt-4" onClick={hndlOtp} style={{cursor:"pointer"}}  >
               {/* <Link href="/Resend"> */}
                  <strong  >Resend Otp </strong>
                {/* </Link> */}
              </div>
            </div>
          </div>
        </div>
        <div className="nk-footer nk-auth-footer-full">
          <div className="container wide-lg">
            <div className="row g-3">
              {/* <div className="col-lg-6 order-lg-last">
                <ul className="nav nav-sm justify-content-center justify-content-lg-end">
                  <li className="nav-item dropup">
                   <Link
                      className="dropdown-toggle dropdown-indicator has-indicator nav-link"
                      data-bs-toggle="dropdown"
                      data-offset="0,10"
                    >
                      <span>English</span>
                    </Link>
                    <div className="dropdown-menu dropdown-menu-sm dropdown-menu-end">
                      <ul className="language-list">
                        <li>
                         <Link href="#" className="language-item">
                            <img
                              src="assets/images/flags/english.png"
                              alt=""
                              className="language-flag"
                            />
                            <span className="language-name">English</span>
                          </Link>
                        </li>
                        <li>
                         <Link href="#" className="language-item">
                            <img
                              src="assets/images/flags/spanish.png"
                              alt=""
                              className="language-flag"
                            />
                            <span className="language-name">Hindi</span>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div> */}
              <div className="col-lg-6">
                <div className="nk-block-content text-center text-lg-left">
                  <p className="text-soft">
                    ©© 2023 Sato Incentive Plan . Powered by Architising Pvt.
                    Ltd..
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* wrap @e */}
    </div>
    {/* content @e */}
  </div>
  {/* main @e */}
</div>



    </div>




    
  )
}
