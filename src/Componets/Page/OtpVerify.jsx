import React from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'

export const OtpVerify = () => {
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
              <form action="success.html">
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
                    />
                  </div>
                </div>
                <div className="form-group">
                  <button className="btn btn-lg btn-primary btn-block">
                    Verify Now
                  </button>
                </div>
              </form>
              <div className="form-note-s2 text-center pt-4">
               {/* <Link href="/Resend"> */}
                  <strong>Resend Otp </strong>
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
