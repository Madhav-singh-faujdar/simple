import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export const Header = () => {



  const navigation = useNavigate()

let hndlSignOut = ()=>{
         localStorage.removeItem("token");
         localStorage.removeItem("expirationTime");
         localStorage.removeItem("userId");
         localStorage.removeItem("isLoggedIn");
      navigation('/')


}



  return (
    <div className="nk-header nk-header-fluid nk-header-fixed is-light">
    <div className="container-fluid">
      <div className="nk-header-wrap">
        <div className="nk-menu-trigger d-xl-none ms-n1">
          <Link
            to="#"
            className="nk-nav-toggle nk-quick-nav-icon"
            data-target="sidebarMenu"
          >
            <em className="icon ni ni-menu" />
          </Link>
        </div>
        <div className="nk-header-brand d-xl-none">
          <Link to="/dashborad" className="logo-link">
            <img
              className="logo-dark logo-img"
              src="assets/images/logo-dark.png"
              alt="logo-dark"
            />
          </Link>
        </div>
        <div className="nk-header-news d-none d-xl-block">
          <div className="nk-news-list">
            {/* <Link className="nk-news-item" href="#"> */}
              <div className="nk-news-icon">
                <em className="icon ni ni-card-view" />
              </div>
              <div className="nk-news-text">
                <p>
                  To Avail Points Click on Avail Points, FIll the Form ,
                  Upload Your Bill And Your Points Will Be added After
                  Verification..................{" "}
                </p>
              </div>
            {/* </Link> */}
          </div>
        </div>
        <div className="nk-header-tools">
          <ul className="nk-quick-nav">
            <li className="dropdown user-dropdown">
              <a
                href="#"
                className="dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                <div className="user-toggle">
                  <div className="user-avatar sm">
                    <em className="icon ni ni-user-alt" />
                  </div>
                  <div className="user-info d-none d-md-block">
                    <div className="user-name dropdown-indicator">
                      {localStorage.getItem('name')}
                    </div>
                  </div>
                </div>
              </a>
              <div className="dropdown-menu dropdown-menu-md dropdown-menu-right dropdown-menu-s1">
                <div className="dropdown-inner user-card-wrap bg-lighter d-none d-md-block">
                  <div className="user-card">
                    <div className="user-avatar">
                      <span>SC</span>
                    </div>
                    <div className="user-info">
                      <span className="lead-text">{localStorage.getItem('name')}</span>
                      <span className="sub-text">
                      {localStorage.getItem('email')}
                      </span>
                    </div>
                  </div>
                </div>
                {/* <div className="dropdown-inner user-account-info">
                  <h6 className="overline-title-alt">Available Points</h6>
                  <div className="user-balance">
                    2500.63{" "}
                    <small className="currency currency-btc">Points</small>
                  </div>
                  <Link to="/avalible_points" className="link">
                    <span>Avail Points </span>{" "}
                    <em className="icon ni ni-wallet-in" />
                  </Link>
                </div> */}
                <div className="dropdown-inner">
                  <ul className="link-list">
                    <li>
                      <Link to="/user_profile">
                        <em className="icon ni ni-user-alt" />
                        <span>View Profile</span>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="dropdown-inner">
                  <ul className="link-list" onClick={hndlSignOut}>
                    <li >
                      
                        <em className="icon ni ni-signout" />
                        <span>Sign out</span>
                  
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            {/* <li className="dropdown notification-dropdown me-n1">
              <Link
                href="#"
                className="dropdown-toggle nk-quick-nav-icon"
                data-bs-toggle="dropdown"
              >
                <div className="icon-status icon-status-info">
                  <em className="icon ni ni-bell" />
                </div>
              </Link> */}
              {/* <div className="dropdown-menu dropdown-menu-xl dropdown-menu-right dropdown-menu-s1">
                <div className="dropdown-head">
                  <span className="sub-title nk-dropdown-title">
                    Notifications
                  </span>
                  <Link href="#">Mark All as Read</Link>
                </div>
                <div className="dropdown-body">
                  <div className="nk-notification">
                    <div className="nk-notification-item dropdown-inner">
                      <div className="nk-notification-icon">
                        <em className="icon icon-circle bg-warning-dim ni ni-curve-down-right" />
                      </div>
                      <div className="nk-notification-content">
                        <div className="nk-notification-text">
                          You have requested to
                          <span>Widthdrawl</span>
                        </div>
                        <div className="nk-notification-time">
                          2 hrs ago
                        </div>
                      </div>
                    </div>
                    {/* .dropdown-inner */}
                    {/* <div className="nk-notification-item dropdown-inner">
                      <div className="nk-notification-icon">
                        <em className="icon icon-circle bg-success-dim ni ni-curve-down-left" />
                      </div>
                      <div className="nk-notification-content">
                        <div className="nk-notification-text">
                          Your <span>Deposit Order</span> is placed
                        </div>
                        <div className="nk-notification-time">
                          2 hrs ago
                        </div>
                      </div>
                    </div> */}
                    {/* .dropdown-inner */}
                    {/* <div className="nk-notification-item dropdown-inner">
                      <div className="nk-notification-icon">
                        <em className="icon icon-circle bg-warning-dim ni ni-curve-down-right" />
                      </div>
                      <div className="nk-notification-content">
                        <div className="nk-notification-text">
                          You have requested to
                          <span>Widthdrawl</span>
                        </div>
                        <div className="nk-notification-time">
                          2 hrs ago
                        </div>
                      </div>
                    </div> */}
                    {/* .dropdown-inner */}
                    {/* <div className="nk-notification-item dropdown-inner">
                      <div className="nk-notification-icon">
                        <em className="icon icon-circle bg-success-dim ni ni-curve-down-left" />
                      </div>
                      <div className="nk-notification-content">
                        <div className="nk-notification-text">
                          Your <span>Deposit Order</span> is placed
                        </div>
                        <div className="nk-notification-time">
                          2 hrs ago
                        </div>
                      </div>
                    </div> */}
                    {/* .dropdown-inner */}
                    {/* <div className="nk-notification-item dropdown-inner">
                      <div className="nk-notification-icon">
                        <em className="icon icon-circle bg-warning-dim ni ni-curve-down-right" />
                      </div>
                      <div className="nk-notification-content">
                        <div className="nk-notification-text">
                          You have requested to
                          <span>Widthdrawl</span>
                        </div>
                        <div className="nk-notification-time">
                          2 hrs ago
                        </div>
                      </div>
                    </div> */}
                    {/* .dropdown-inner */}
                    {/* <div className="nk-notification-item dropdown-inner">
                      <div className="nk-notification-icon">
                        <em className="icon icon-circle bg-success-dim ni ni-curve-down-left" />
                      </div>
                      <div className="nk-notification-content">
                        <div className="nk-notification-text">
                          Your <span>Deposit Order</span> is placed
                        </div>
                        <div className="nk-notification-time">
                          2 hrs ago
                        </div> */}
                      {/* </div> */}
                    {/* </div> */}
                    {/* .dropdown-inner */}
                  {/* </div> */}
                {/* </div> */}
                {/* .nk-dropdown-body */}
                {/* <div className="dropdown-foot center">/ */}
                  {/* <Link href="#">View All</Link> */}
                {/* </div> */}
              {/* </div> */} 
            {/* </li> */}
          </ul>
        </div>
      </div>
    </div>
  </div>  )
}
