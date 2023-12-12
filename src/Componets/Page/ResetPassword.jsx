import React from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'

const ResetPassword = () => {
  return (
    <div>
<Helmet>

<title>Reset | Sato Incentive Program</title>

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
                  <h5 className="nk-block-title">Reset password</h5>
                  <div className="nk-block-des">
                    <p>
                      If you forgot your password, well, then we’ll email you
                      instructions to reset your password.
                    </p>
                  </div>
                </div>
              </div>
              <form action="assets/imagesreset.html">
                <div className="form-group">
                  <div className="form-label-group">
                    <label className="form-label" htmlFor="default-01">
                      Email
                    </label>
                  </div>
                  <div className="form-control-wrap">
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      id="default-01"
                      placeholder="Enter your email address"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <button className="btn btn-lg btn-primary btn-block">
                    Send Reset Link
                  </button>
                </div>
              </form>
              <div className="form-note-s2 text-center pt-4">
                <Link to="/">
                  <strong>Return to login</strong>
               </Link>
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
                          <Link to="#" className="language-item">
                            <img
                              src="assets/images/flags/english.png"
                              alt=""
                              className="language-flag"
                            />
                            <span className="language-name">English</span>
                         </Link>
                        </li>
                        <li>
                          <Link to="#" className="language-item">
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

export default ResetPassword