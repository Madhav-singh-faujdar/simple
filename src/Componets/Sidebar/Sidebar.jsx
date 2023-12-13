import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export const Sidebar = () => {

  const navigation = useNavigate()

let hndlSignOut = ()=>{
         localStorage.removeItem("token");
         localStorage.removeItem("expirationTime");
         localStorage.removeItem("userId");
         localStorage.removeItem("isLoggedIn");
      navigation('/')


}



  return (
    <div
    className="nk-sidebar nk-sidebar-fixed is-light "
    data-content="sidebarMenu"
  >
    <div className="nk-sidebar-element nk-sidebar-head">
      <div className="nk-sidebar-brand">
        <Link to="/dashborad" className="logo-link nk-sidebar-logo">
          <img
            className="logo-dark logo-img"
            src="assets/images/logo-dark.png"
            alt="logo-dark"
          />
        </Link>
      </div>
      <div className="nk-menu-trigger me-n2">
        <Link
          to="#"
          className="nk-nav-toggle nk-quick-nav-icon d-xl-none"
          data-target="sidebarMenu"
        >
          <em className="icon ni ni-arrow-left" />
        </Link>
      </div>
    </div>
    {/* .nk-sidebar-element */}
    <div className="nk-sidebar-element">
      <div className="nk-sidebar-body" data-simplebar="">
        <div className="nk-sidebar-content">
          <div className="nk-sidebar-widget d-none d-xl-block">
            <div className="user-account-info between-center">
              <div className="user-account-main">
                <h6 className="overline-title-alt">Available Points</h6>
                <div className="user-balance">
                  {" "}
                  2500.63
                  <small className="currency">Points</small>
                </div>
                <div className="user-account-label"></div>
              </div>
            </div>
            {/* <ul class="user-account-data gy-1">
                            <li>
                                <div class="user-account-label">
                                    <span class="overline-title-alt">Interest</span>
                                </div>
                                <div class="user-account-value">
                                    <span class="sub-title text-base">15K <span class="currency">USD</span></span>
                                </div>
                            </li>
                        </ul> */}
            <div className="user-account-actions">
              <ul className="g-3">
                <li>
                  <Link
                    to="/avalible_points"
                    className="btn btn-lg btn-primary"
                  >
                    <span>Avail Points</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/history_points"
                    className="btn btn-lg btn-outline-primary"
                  >
                    <span>History</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          {/* .nk-sidebar-widget */}
          <div className="nk-sidebar-widget nk-sidebar-widget-full d-xl-none pt-0">
            <Link
              className="nk-profile-toggle toggle-expand"
              data-target="sidebarProfile"
              to="#"
            >
              <div className="user-card-wrap">
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
                  <div className="user-action">
                    <em className="icon ni ni-chevron-down" />
                  </div>
                </div>
              </div>
            </Link>
            <div
              className="nk-profile-content toggle-expand-content"
              data-content="sidebarProfile"
            >
              <div className="user-account-info between-center">
                <div className="user-account-main">
                  <h6 className="overline-title-alt">Available Points</h6>
                  <div className="user-balance">
                    2500.63{" "}
                    <small className="currency currency-btc">Points</small>
                  </div>
                  <div className="user-account-label"></div>
                </div>
              </div>
              <ul className="user-account-links">
                <li>
                  <Link to="/avalible_points" className="link">
                    <span>Avail Points</span>
                    <em className="icon ni ni-wallet-in" />
                  </Link>
                </li>
                <li>
                  <Link to="/history_points" className="link">
                    <span>History</span>{" "}
                    <em className="icon ni ni-wallet-out" />
                  </Link>
                </li>
              </ul>
              <ul className="link-list">
                <li>
                  <div onClick={hndlSignOut}>
                    <em className="icon ni ni-signout" />
                    <span>Sign out</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          {/* .nk-sidebar-widget */}
          <div className="nk-sidebar-menu">
            {/* Menu */}
            <ul className="nk-menu">
              <li className="nk-menu-heading">
                <h6 className="overline-title">Menu</h6>
              </li>
              <li className="nk-menu-item">
                <Link to="/dashborad" className="nk-menu-link">
                  <span className="nk-menu-icon">
                    <em className="icon ni ni-dashboard" />
                  </span>
                  <span className="nk-menu-text">Dashboard</span>
                </Link>
              </li>
              <li className="nk-menu-item">
                <Link to="/avalible_points" className="nk-menu-link">
                  <span className="nk-menu-icon">
                    <em className="icon ni ni-property" />
                  </span>
                  <span className="nk-menu-text">Avail Points History</span>
                </Link>
              </li>
              <li className="nk-menu-item">
                <Link to="/user_faq" className="nk-menu-link">
                  <span className="nk-menu-icon">
                    <em className="icon ni ni-chat-circle" />
                  </span>
                  <span className="nk-menu-text">FAQs</span>
                </Link>
              </li>
              <li className="nk-menu-item">
                <Link to="/dealers" className="nk-menu-link">
                  <span className="nk-menu-icon">
                    <em className="icon ni ni-view-col2" />
                  </span>
                  <span className="nk-menu-text">Dealers List </span>
                </Link>
              </li>
              <li className="nk-menu-item">
                <Link to="/user_profile" className="nk-menu-link">
                  <span className="nk-menu-icon">
                    <em className="icon ni ni-account-setting" />
                  </span>
                  <span className="nk-menu-text">My Profile</span>
                </Link>
              </li>
            </ul>
            {/* .nk-menu */}
          </div>
          {/* .nk-sidebar-menu */}
          <div className="nk-sidebar-footer">
            <ul className="nk-menu nk-menu-footer">
              <li className="nk-menu-item">
                <Link to="#" className="nk-menu-link">
                  <span className="nk-menu-icon">
                    <em className="icon ni ni-help-alt" />
                  </span>
                  <span className="nk-menu-text">Support</span>
                </Link>
              </li>
              <li className="nk-menu-item ms-auto">
                <div className="dropup">
                  <Link
                    to="#"
                    className="nk-menu-link dropdown-indicator has-indicator"
                    data-bs-toggle="dropdown"
                    data-bs-offset="0,10"
                  >
                    <span className="nk-menu-icon">
                      <em className="icon ni ni-globe" />
                    </span>
                    <span className="nk-menu-text">English</span>
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
                </div>
              </li>
            </ul>
            {/* .nk-footer-menu */}
          </div>
          {/* .nk-sidebar-footer */}
        </div>
        {/* .nk-sidebar-content */}
      </div>
      {/* .nk-sidebar-body */}
    </div>
    {/* .nk-sidebar-element */}
  </div>  )
}
