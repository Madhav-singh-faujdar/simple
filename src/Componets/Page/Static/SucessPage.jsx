import React from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'

export const SucessPage = () => {
  return (
    <div>
<Helmet>
<title>Success | DashLite Admin Template</title>

</Helmet>

<div className="nk-app-root">
  {/* main @s */}
  <div className="nk-main ">
    {/* wrap @s */}
    <div className="nk-wrap nk-wrap-nosidebar">
      {/* content @s */}
      <div className="nk-content ">
        <div className="nk-block nk-block-middle nk-auth-body">
          <div className="brand-logo pb-5">
            <Link href="/dashborad" className="logo-link">
              <img
                className="logo-dark logo-img logo-img-lg"
                src="assets/images/logo-dark.png"
                alt="logo-dark"
              />
            </Link>
          </div>
          <div className="nk-block-head">
            <div className="nk-block-head-content">
              <h4 className="nk-block-title">OTP Verified Successfuly </h4>
              <div className="nk-block-des text-success">
                <p>
                  You can now Sign in with your Username/Email &amp; Password
                </p>
                <div className="nk-block-head-content">
                  <ul className="nk-block-tools gx-3">
                    <li>
                      <Link href="/" className="btn btn-primary">
                        <span>Login</span>{" "}
                        <em className="icon ni ni-arrow-long-right" />
                      </Link>
                    </li>
                  </ul>
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





    </div>
  )
}
