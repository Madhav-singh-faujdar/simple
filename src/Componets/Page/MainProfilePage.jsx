import React from 'react'
import { Footer } from '../Footer/Footer'
import { Header } from '../Header/Header'
import { Sidebar } from '../Sidebar/Sidebar'
import { Link } from 'react-router-dom'

export const MainProfilePage = () => {
  return (
<div className="nk-app-root">
  {/* main @s */}
  <div className="nk-main ">
    <Sidebar/>
    {/* wrap @s */}
    <div className="nk-wrap ">
    <Header/>
      {/* content @s */}
      <div className="nk-content nk-content-fluid">
        <div className="container-xl wide-lg">
          <div className="nk-content-body">
            <div className="nk-block-head">
              <div className="nk-block-head-sub">
                <span>Welcome!</span>
              </div>
              <div className="nk-block-between-md g-4">
                <div className="nk-block-head-content">
                  <h2 className="nk-block-title fw-normal">Sahil Choudhury</h2>
                  <div className="nk-block-des">
                    <p>At a glance summary of your account. Have fun!</p>
                  </div>
                </div>
                {/* .nk-block-head-content */}
                <div className="nk-block-head-content">
                  <ul className="nk-block-tools gx-3">
                    <li>
                      <Link to="/avalible_points" className="btn btn-primary">
                        <span>Avail Points</span>{" "}
                        <em className="icon ni ni-arrow-long-right" />
                      </Link>
                    </li>
                  </ul>
                </div>
                {/* .nk-block-head-content */}
              </div>
              {/* .nk-block-between */}
            </div>
            {/* .nk-block-head */}
            <div className="nk-block">
              <div className="row gy-gs">
                <div className="col-12 col-xxl-8">
                  <div className="card card-bordered h-100">
                    <div className="card-inner border-bottom">
                      <div className="card-title-group">
                        <div className="card-title">
                          <h6 className="title">Avail Points Request</h6>
                        </div>
                        <div className="card-tools">
                          <Link to="/history_points" className="link">
                            See Details
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="card-inner p-0">
                      <table className="table table-tranx">
                        <thead>
                          <tr className="tb-tnx-head">
                            <th className="tb-tnx-id">
                              <span className=""> ID</span>
                            </th>
                            <th className="tb-tnx-info">
                              <span className="tb-tnx-desc d-none d-sm-inline-block">
                                <span>Distributer Name</span>
                              </span>
                              <span className="tb-tnx-date d-md-inline-block d-none">
                                <span className="d-md-none">Date</span>
                                <span className="d-none d-md-block">
                                  <span>Inoice Date</span>
                                </span>
                              </span>
                            </th>
                            <th className="tb-tnx-amount is-alt">
                              <span className="tb-tnx-total">Amount</span>
                              <span className="tb-tnx-status d-none d-md-inline-block">
                                Status
                              </span>
                            </th>
                            <th className="tb-tnx-action">
                              <span> Invoice</span>
                            </th>
                          </tr>
                          {/* tb-tnx-item */}
                        </thead>
                        <tbody>
                          <tr className="tb-tnx-item">
                            <td className="tb-tnx-id">
                                <span>4947</span>
                            </td>
                            <td className="tb-tnx-info">
                              <div className="tb-tnx-desc">
                                <span className="title">Distributer 1</span>
                              </div>
                              <div className="tb-tnx-date">
                                <span className="date">10-05-2023</span>
                              </div>
                            </td>
                            <td className="tb-tnx-amount is-alt">
                              <div className="tb-tnx-total">
                                <span>₹2599.00</span>
                              </div>
                              <div className="tb-tnx-status">
                                <span className="badge badge-dot text-warning">
                                  Pending
                                </span>
                              </div>
                            </td>
                            <td className="tb-tnx-action">
                              <Link href="#">
                                <span>View</span>
                              </Link>
                            </td>
                          </tr>
                          
                        </tbody>
                      </table>
                    </div>
                    {/* .card-inner */}
                  </div>
                  {/* .card */}
                </div>
                {/* .col */}
                <div className="col-md-6 col-xxl-4">
                  <div className="card card-bordered h-100">
                    <div className="card-inner pb-0">
                      <div className="card-title-group pt-1">
                        <div className="card-title">
                          <h6 className="title">How to Avail Points </h6>
                        </div>
                        <div className="card-tools"></div>
                      </div>
                    </div>
                    <div className="card-inner">
                      <div className="timeline">
                        <ul className="timeline-list">
                          <li className="timeline-item">
                            <div className="timeline-status bg-primary is-outline" />
                            <div className="timeline-date">
                              Step-1 <em className="icon ni ni-alarm-alt" />
                            </div>
                            <div className="timeline-data">
                              <h6 className="timeline-title">
                                Click on Avail Points
                              </h6>
                              <p>
                                Login &amp; Click on Avail Points Button in your
                                Dashboard
                              </p>
                            </div>
                          </li>
                          <li className="timeline-item">
                            <div className="timeline-status bg-primary" />
                            <div className="timeline-date">
                              Step-2
                              <em className="icon ni ni-alarm-alt" />
                            </div>
                            <div className="timeline-data">
                              <h6 className="timeline-title">Upload Bill </h6>
                              <div className="timeline-des">
                                <p>Fill the Form and Upload Your Invoice </p>
                              </div>
                            </div>
                          </li>
                          <li className="timeline-item">
                            <div className="timeline-status bg-pink" />
                            <div className="timeline-date">
                              Step-3
                              <em className="icon ni ni-alarm-alt" />
                            </div>
                            <div className="timeline-data">
                              <h6 className="timeline-title">
                                {" "}
                                Wait for Approval{" "}
                              </h6>
                              <div className="timeline-des">
                                <p>
                                  Submit the Form &amp; Wait for Approval from
                                  Admin
                                </p>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/* .card */}
                </div>
                {/* .col */}
                <div className="nk-block">
                  <div className="card card-bordered">
                    <div className="card-inner">
                      <div className="align-center flex-wrap flex-md-nowrap g-4">
                        <div className="nk-block-image w-120px flex-shrink-0">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 120 118"
                          >
                            <path
                              d="M8.916,94.745C-.318,79.153-2.164,58.569,2.382,40.578,7.155,21.69,19.045,9.451,35.162,4.32,46.609.676,58.716.331,70.456,1.845,84.683,3.68,99.57,8.694,108.892,21.408c10.03,13.679,12.071,34.71,10.747,52.054-1.173,15.359-7.441,27.489-19.231,34.494-10.689,6.351-22.92,8.733-34.715,10.331-16.181,2.192-34.195-.336-47.6-12.281A47.243,47.243,0,0,1,8.916,94.745Z"
                              transform="translate(0 -1)"
                              fill="#f6faff"
                            />
                            <rect
                              x={18}
                              y={32}
                              width={84}
                              height={50}
                              rx={4}
                              ry={4}
                              fill="#fff"
                            />
                            <rect
                              x={26}
                              y={44}
                              width={20}
                              height={12}
                              rx={1}
                              ry={1}
                              fill="#e5effe"
                            />
                            <rect
                              x={50}
                              y={44}
                              width={20}
                              height={12}
                              rx={1}
                              ry={1}
                              fill="#e5effe"
                            />
                            <rect
                              x={74}
                              y={44}
                              width={20}
                              height={12}
                              rx={1}
                              ry={1}
                              fill="#e5effe"
                            />
                            <rect
                              x={38}
                              y={60}
                              width={20}
                              height={12}
                              rx={1}
                              ry={1}
                              fill="#e5effe"
                            />
                            <rect
                              x={62}
                              y={60}
                              width={20}
                              height={12}
                              rx={1}
                              ry={1}
                              fill="#e5effe"
                            />
                            <path
                              d="M98,32H22a5.006,5.006,0,0,0-5,5V79a5.006,5.006,0,0,0,5,5H52v8H45a2,2,0,0,0-2,2v4a2,2,0,0,0,2,2H73a2,2,0,0,0,2-2V94a2,2,0,0,0-2-2H66V84H98a5.006,5.006,0,0,0,5-5V37A5.006,5.006,0,0,0,98,32ZM73,94v4H45V94Zm-9-2H54V84H64Zm37-13a3,3,0,0,1-3,3H22a3,3,0,0,1-3-3V37a3,3,0,0,1,3-3H98a3,3,0,0,1,3,3Z"
                              transform="translate(0 -1)"
                              fill="#798bff"
                            />
                            <path
                              d="M61.444,41H40.111L33,48.143V19.7A3.632,3.632,0,0,1,36.556,16H61.444A3.632,3.632,0,0,1,65,19.7V37.3A3.632,3.632,0,0,1,61.444,41Z"
                              transform="translate(0 -1)"
                              fill="#6576ff"
                            />
                            <path
                              d="M61.444,41H40.111L33,48.143V19.7A3.632,3.632,0,0,1,36.556,16H61.444A3.632,3.632,0,0,1,65,19.7V37.3A3.632,3.632,0,0,1,61.444,41Z"
                              transform="translate(0 -1)"
                              fill="none"
                              stroke="#6576ff"
                              strokeMiterlimit={10}
                              strokeWidth={2}
                            />
                            <line
                              x1={40}
                              y1={22}
                              x2={57}
                              y2={22}
                              fill="none"
                              stroke="#fffffe"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                            />
                            <line
                              x1={40}
                              y1={27}
                              x2={57}
                              y2={27}
                              fill="none"
                              stroke="#fffffe"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                            />
                            <line
                              x1={40}
                              y1={32}
                              x2={50}
                              y2={32}
                              fill="none"
                              stroke="#fffffe"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                            />
                            <line
                              x1="30.5"
                              y1="87.5"
                              x2="30.5"
                              y2="91.5"
                              fill="none"
                              stroke="#9cabff"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <line
                              x1="28.5"
                              y1="89.5"
                              x2="32.5"
                              y2="89.5"
                              fill="none"
                              stroke="#9cabff"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <line
                              x1="79.5"
                              y1="22.5"
                              x2="79.5"
                              y2="26.5"
                              fill="none"
                              stroke="#9cabff"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <line
                              x1="77.5"
                              y1="24.5"
                              x2="81.5"
                              y2="24.5"
                              fill="none"
                              stroke="#9cabff"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <circle
                              cx="90.5"
                              cy="97.5"
                              r={3}
                              fill="none"
                              stroke="#9cabff"
                              strokeMiterlimit={10}
                            />
                            <circle
                              cx={24}
                              cy={23}
                              r="2.5"
                              fill="none"
                              stroke="#9cabff"
                              strokeMiterlimit={10}
                            />
                          </svg>
                        </div>
                        <div className="nk-block-content">
                          <div className="nk-block-content-head px-lg-4">
                            <h5>We’re here to help you!</h5>
                            <p className="text-soft">
                              Ask a question or file a support ticket, manage
                              request, report an issues. Our team support team
                              will get back to you by email.
                            </p>
                          </div>
                        </div>
                        <div className="nk-block-content flex-shrink-0">
                          <Link
                            href="#"
                            className="btn btn-lg btn-outline-primary"
                          >
                            Get Support Now
                          </Link>
                        </div>
                      </div>
                    </div>
                    {/* .card-inner */}
                  </div>
                  {/* .card */}
                </div>
                {/* .nk-block */}
              </div>
              {/* .row */}
            </div>
            {/* .nk-block */}
          </div>
        </div>
      </div>
      {/* content @e */}
   <Footer/>
    </div>
    {/* wrap @e */}
  </div>
  {/* main @e */}
</div>
  )
}
