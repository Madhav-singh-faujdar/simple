import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom'
import { BASE_URL_AUTH, PostFormApi } from '../Baseurl/baseUrl';

const Login = () => {


  const [loading, setLoading] = useState(false);
const nav = useNavigate()



  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    const storedExpirationDate = localStorage.getItem("expirationTime");
    const storedUserId = localStorage.getItem("userId");
    const isLoggedIn = localStorage.getItem("isLoggedIn");

    if (storedToken || storedExpirationDate || storedUserId || isLoggedIn === "true") {
      nav("/dashborad");
    }
  }, []);



  const hndlSubmit = async (e) => {

    e.preventDefault()

    try {


      if (!email) {
        toast.error('Please fill the email field')
        return
      }

      const checkEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
      if (!checkEmail) {
        toast.error('Please provide a valid email')
        return
      }
      if (!password) {
        toast.error('Please provide a valid password')
        // eslint-disable-next-line no-useless-return
        return
      }

      if (loading) {
        return
      }
      setLoading(true)

      const toastId = toast.loading('Loading...');


      const formData = { email, password }

      const data = await PostFormApi(`${BASE_URL_AUTH}/login`, setLoading, formData, toastId)
      if (data.error) {
        setLoading(false)
        return
      }
      // console.log(data);
      await window.localStorage.setItem("token", data.data.accessToken)
      await window.localStorage.setItem("expirationTime", data.data.accessTokenExpiresIn)
      await window.localStorage.setItem("userId", data.data.userId)
      await window.localStorage.setItem("isLoggedIn", data.data.isLoggedIn)
      await setLoading(false)
      await setEmail('')
      await setPassword('')

      nav("/dashborad");
    } catch (error) {
      console.log(error);
      toast.error(error)
    }

  }





  return (
<>
<Helmet>
<title>Login | SATO Incentive Program</title>

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
                  <h4 className="nk-block-title">Sign-In</h4>
                  <div className="nk-block-des">
                    <p>
                      Access the Sato User panel using your Email and
                      password.
                    </p>
                  </div>
                </div>
              </div>
              <form onSubmit={(e)=>hndlSubmit(e)}>
                <div className="form-group">
                  <div className="form-label-group">
                    <label className="form-label" htmlFor="default-01">
                      Email
                    </label>
                  </div>
                  <div className="form-control-wrap">
                    <input
                      type="email"
                      className="form-control form-control-lg"
                      id="default-01"
                      placeholder="Enter your Email Address"
                      value={email}
                      onChange={(e)=>{setEmail(e.target.value)}}

                    />
                  </div>
                </div>
                <div className="form-group">
                  <div className="form-label-group">
                    <label className="form-label" htmlFor="password">
                      Password
                    </label>
                    <Link className="link link-primary link-sm" to="/Reset">
                      Forgot Password?
                    </Link>
                  </div>
                  <div className="form-control-wrap">
                    <Link
                      href="#"
                      className="form-icon form-icon-right passcode-switch lg"
                      data-target="password"
                    >
                      <em className="passcode-icon icon-show icon ni ni-eye" />
                      <em className="passcode-icon icon-hide icon ni ni-eye-off" />
                    </Link>
                    <input
                      type="password"
                      className="form-control form-control-lg"
                      id="password"
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e)=>{setPassword(e.target.value)}}
                    />
                  </div>
                </div>
                <div className="form-group">
                  {
                    loading  ? '' :
                  <button className="btn btn-lg btn-primary btn-block" type='submit'>
                    Sign in
                  </button>
                  }
                </div>
              </form>
              <div className="form-note-s2 text-center pt-4">
                {" "}
                New on our platform?{" "}
                <Link to="/singup">Create an account</Link>
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

    </>
  )
}

export default Login