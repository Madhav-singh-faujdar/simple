import React from 'react'
import { Footer } from '../Footer/Footer'
import { Sidebar } from '../Sidebar/Sidebar'
import { Header } from '../Header/Header'
import { Link } from 'react-router-dom'

export const PointsSuccess = () => {
  return (
<div className="nk-app-root">
  {/* main @s */}
  <div className="nk-main ">
  <Sidebar/>
    {/* wrap @s */}
    <div className="nk-wrap ">
      {/* main header @s */}
     <Header/>
      {/* content @s */}
      <div className="nk-content nk-content-fluid">
        <div className="container-xl wide-lg">
          <div className="nk-content-body">
            <div className="content-page wide-lg">
              <div className="nk-block-head nk-block-head-lg">
                <div className="nk-block-head-content">
                  <h3 className="nk-block-title ">Request Submitted </h3>
                  <div className="nk-block-des">
                    <p className="lead">
                      Your Requeat to avail points have been submitted. We will
                      add the Points in Your Account once it is Verified &amp;
                      approved
                    </p>
                  </div>
                </div>
                <div className="user-account-actions">
                  <ul className="g-3">
                    <li>
                      <Link to="/dashborad" className="btn btn-lg btn-primary">
                        <span>Back to Dashboard</span>
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
              {/* .nk-block */}
            </div>
            {/* .content-page */}
          </div>
        </div>
      </div>
    </div>
    {/* content @e */}
 <Footer/>
  </div>
  {/* wrap @e */}
</div>



  )
}
