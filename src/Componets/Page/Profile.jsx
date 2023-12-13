import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { Sidebar } from '../Sidebar/Sidebar'
import { Header } from '../Header/Header'
import { Footer } from '../Footer/Footer'
import { Link } from 'react-router-dom'
import { GetFormApiDealer } from '../Baseurl/baseUrl'
import moment from 'moment'

const Profile = () => {
  const [loading, setLoading] = useState(false);

const[data,setData] = useState()
  useEffect(() => {
    let fun = async () => {
      const saveTheData = await GetFormApiDealer(
        `/self/${localStorage.getItem('userId')}`,
        setLoading
      );

      if (saveTheData.error) {
        setLoading(false);
        return;
      }
      setData(saveTheData.data);
    };

    fun();
  }, []);


console.log(data);

  return (
    <div>
<Helmet>
<title>Sato Incentive Plan </title>

</Helmet>

<div className="nk-app-root">
  {/* main @s */}
  <div className="nk-main ">
    {/* sidebar @s */}
 <Sidebar/>
    {/* sidebar @e */}
    {/* wrap @s */}
    <div className="nk-wrap ">
      {/* main header @s */}
     <Header/>
      {/* main header @e */}
      {/* content @s */}
      <div className="nk-content nk-content-fluid">
        <div className="container-xl wide-lg">
          <div className="nk-content-body">
            <div className="nk-block">
              <div className="card card-bordered">
                <div className="card-aside-wrap">
                  <div className="card-content">
                    <div className="card-inner card-inner-lg">
                      <div className="nk-block">
                        <div className="nk-block-head">
                          <h4 className="title">Personal Information</h4>
                          <p>
                            Basic info, like your name and address, that you
                            used to register on Sato{" "}
                          </p>
                        </div>
                        {/* .nk-block-head */}
                        <div className="profile-ud-list pt-2">
                          <div className="profile-ud-item">
                            <div className="profile-ud wider">
                              <span className="profile-ud-label">Title</span>
                              <span className="profile-ud-value">Mr.</span>
                            </div>
                          </div>
                          <div className="profile-ud-item">
                            <div className="profile-ud wider">
                              <span className="profile-ud-label">
                                Full Name
                              </span>
                              <span className="profile-ud-value">
                                {data?.fullName}
                              </span>
                            </div>
                          </div>
                          {/* <div className="profile-ud-item">
                            <div className="profile-ud wider">
                              <span className="profile-ud-label">
                                Date of Birth
                              </span>
                              <span className="profile-ud-value">
                                10 Aug, 1980
                              </span>
                            </div> */}
                          {/* </div> */}
                          {/* <div className="profile-ud-item">
                            <div className="profile-ud wider">
                              <span className="profile-ud-label">Surname</span>
                              <span className="profile-ud-value">IO</span>
                            </div>
                          </div> */}
                          <div className="profile-ud-item">
                            <div className="profile-ud wider">
                              <span className="profile-ud-label">
                                Mobile Number
                              </span>
                              <span className="profile-ud-value">
                                {data?.phone}
                              </span>
                            </div>
                          </div>
                          <div className="profile-ud-item">
                            <div className="profile-ud wider">
                              <span className="profile-ud-label">
                                Email Address
                              </span>
                              <span className="profile-ud-value">
                              {data?.email}
                              </span>
                            </div>
                          </div>
                        </div>
                        {/* .profile-ud-list */}
                      </div>
                      {/* .nk-block */}
                      <div className="nk-block">
                        <div className="nk-block-head nk-block-head-line">
                          <h6 className="title overline-title text-base">
                            Additional Information
                          </h6>
                        </div>
                        {/* .nk-block-head */}
                        <div className="profile-ud-list">
                          <div className="profile-ud-item">
                            <div className="profile-ud wider">
                              <span className="profile-ud-label">
                                Joining Date
                              </span>
                              <span className="profile-ud-value">
                                {moment(data?.createdAt).format('MMMM Do YYYY')}
                              </span>
                            </div>
                          </div>
                          <div className="profile-ud-item">
                            <div className="profile-ud wider">
                              <span className="profile-ud-label">
                                Reg Method
                              </span>
                              <span className="profile-ud-value">Email</span>
                            </div>
                          </div>
                          <div className="profile-ud-item">
                            <div className="profile-ud wider">
                              <span className="profile-ud-label">Pincode</span>
                              <span className="profile-ud-value">
                              {data?.pinCode}
                                                          </span>
                            </div>
                          </div>
                          <div className="profile-ud-item">
                            <div className="profile-ud wider">
                              <span className="profile-ud-label">
                                Address
                              </span>
                              <span className="profile-ud-value">
                              {data?.address}
                              </span>
                            </div>
                          </div>
                        </div>
                        {/* .profile-ud-list */}
                      </div>
                      {/* .nk-block */}
                      <div className="nk-divider divider md" />
                      <div className="nk-block">
                        <div className="nk-block-head nk-block-head-sm nk-block-between">
                          <h5 className="title">Notice</h5>
                        </div>
                        {/* .nk-block-head */}
                        <div className="bq-note">
                          <div className="bq-note-item">
                            <div className="bq-note-text">
                              <p>
                                Aproin at metus et dolor tincidunt feugiat eu id
                                quam. Pellentesque habitant morbi tristique
                                senectus et netus et malesuada fames ac turpis
                                egestas. Aenean sollicitudin non nunc vel
                                pharetra.{" "}
                              </p>
                            </div>
                            {/* <div className="bq-note-meta">
                              <span className="bq-note-added">
                                Added on{" "}
                                <span className="date">September 15, 2021</span>{" "}
                                at <span className="time">5:34 PM</span>
                              </span>
                              <span className="bq-note-sep sep">|</span>
                              <span className="bq-note-by">
                                By <span>Softnio</span>
                              </span>
                              <a href="#" className="link link-sm link-danger">
                                Hide Note
                              </a>
                            </div>*/}
                          </div> 
                          {/* .bq-note-item */}
                        </div>
                        {/* .bq-note */}
                      </div>
                      {/* .nk-block */}
                    </div>
                    {/* .card-inner */}
                  </div>
                  <div
                    className="card-aside card-aside-left user-aside toggle-slide toggle-slide-left toggle-break-lg"
                    data-content="userAside"
                    data-toggle-screen="lg"
                    data-toggle-overlay="true"
                  >
                    <div className="card-inner-group" data-simplebar="">
                      <div className="card-inner">
                        <div className="user-card">
                          <div className="user-avatar bg-primary">
                            <span>AB</span>
                          </div>
                          <div className="user-info">
                            <span className="lead-text">{data?.fullName}</span>
                            <span className="sub-text">
                            {data?.email}
                            </span>
                          </div>
                          {/* <div className="user-action">
                            <div className="dropdown">
                              <a
                                className="btn btn-icon btn-trigger me-n2"
                                data-bs-toggle="dropdown"
                                href="#"
                              >
                                <em className="icon ni ni-more-v" />
                              </a>
                              <div className="dropdown-menu dropdown-menu-end">
                                <ul className="link-list-opt no-bdr">
                                  <li>
                                    <a href="#">
                                      <em className="icon ni ni-camera-fill" />
                                      <span>Change Photo</span>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <em className="icon ni ni-edit-fill" />
                                      <span>Update Profile</span>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div> */}
                        </div>
                        {/* .user-card */}
                      </div>
                      {/* .card-inner */}
                      {/* <div className="card-inner">
                        <div className="user-account-info py-0">
                          <h6 className="overline-title-alt">
                            Available Points
                          </h6>
                          <div className="user-balance">
                            2500.63{" "}
                            <small className="currency currency-btc">USD</small>
                          </div>
                          <div className="user-account-label"></div>
                        </div>
                      </div> */}
                      {/* .card-inner */}
                      <div className="card-inner p-0">
                        <ul className="link-list-menu">
                          <li>
                            <Link className="active" to="/user_profile">
                              <em className="icon ni ni-user-fill-c" />
                              <span>Personal Infomation</span>
                            </Link>
                          </li>
                          {/* <li><a href="profile-notification.html"><em class="icon ni ni-bell-fill"></em><span>Notifications</span></a></li>
                                  <li><a href="profile-settings.html"><em class="icon ni ni-lock-alt-fill"></em><span>Security Settings</span></a></li>
                                  <li><a href="profile-connected.html"><em class="icon ni ni-share-alt"></em><span>Connect Social</span></a></li> */}
                        </ul>
                      </div>
                      {/* .card-inner */}
                    </div>
                    {/* .card-inner-group */}
                  </div>
                  {/* card-aside */}
                </div>
                {/* .card-aside-wrap */}
              </div>
              {/* .card */}
            </div>
            {/* .nk-block */}
          </div>
        </div>
      </div>
      {/* content @e */}
   <Footer/>
      {/* footer @e */}
    </div>
    {/* wrap @e */}
  </div>
  {/* main @e */}
</div>


    </div>
  )
}

export default Profile