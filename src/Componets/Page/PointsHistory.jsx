import React from 'react'
import { Footer } from '../Footer/Footer'
import { Header } from '../Header/Header'
import { Sidebar } from '../Sidebar/Sidebar'

export const PointsHistory = () => {
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
            <div className="nk-block-head nk-block-head-sm">
              <div className="nk-block-between">
                <div className="nk-block-head-content">
                  <h3 className="nk-block-title page-title">
                    Avail Points History{" "}
                  </h3>
                  <div className="nk-block-des text-soft">
                    <p>See Your Previous Added Invoices and points </p>
                  </div>
                </div>
                {/* .nk-block-head-content */}
                <div className="nk-block-head-content">
                  <div className="toggle-wrap nk-block-tools-toggle">
                    <a
                      href="#"
                      className="btn btn-icon btn-trigger toggle-expand me-n1"
                      data-target="pageMenu"
                    >
                      <em className="icon ni ni-menu-alt-r" />
                    </a>
                  </div>
                  {/* .toggle-wrap */}
                </div>
                {/* .nk-block-head-content */}
              </div>
              {/* .nk-block-between */}
            </div>
            {/* .nk-block-head */}
            <div className="nk-block">
              <div className="card card-bordered card-stretch">
                <div className="card-inner-group">
                  <div className="card-inner position-relative card-tools-toggle">
                    <div className="card-title-group">
                      <div className="card-tools me-n1">
                        <ul className="btn-toolbar gx-1">
                          <li>
                            <a
                              href="#"
                              className="btn btn-icon search-toggle toggle-search"
                              data-target="search"
                            >
                              <em className="icon ni ni-search" />
                            </a>
                          </li>
                          {/* li */}
                          <li className="btn-toolbar-sep" />
                          {/* li */}
                          <li>
                            <div className="toggle-wrap">
                              <a
                                href="#"
                                className="btn btn-icon btn-trigger toggle"
                                data-target="cardTools"
                              >
                                <em className="icon ni ni-menu-right" />
                              </a>
                              <div
                                className="toggle-content"
                                data-content="cardTools"
                              >
                                <ul className="btn-toolbar gx-1">
                                  <li className="toggle-close">
                                    <a
                                      href="#"
                                      className="btn btn-icon btn-trigger toggle"
                                      data-target="cardTools"
                                    >
                                      <em className="icon ni ni-arrow-left" />
                                    </a>
                                  </li>
                                  {/* li */}
                                  <li>
                                    <div className="dropdown">
                                      <a
                                        href="#"
                                        className="btn btn-trigger btn-icon dropdown-toggle"
                                        data-bs-toggle="dropdown"
                                      >
                                        <em className="icon ni ni-setting" />
                                      </a>
                                      <div className="dropdown-menu dropdown-menu-xs dropdown-menu-end">
                                        <ul className="link-check">
                                          <li>
                                            <span>Show</span>
                                          </li>
                                          <li className="active">
                                            <a href="#">10</a>
                                          </li>
                                          <li>
                                            <a href="#">20</a>
                                          </li>
                                          <li>
                                            <a href="#">50</a>
                                          </li>
                                        </ul>
                                        <ul className="link-check">
                                          <li>
                                            <span>Order</span>
                                          </li>
                                          <li className="active">
                                            <a href="#">DESC</a>
                                          </li>
                                          <li>
                                            <a href="#">ASC</a>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                    {/* .dropdown */}
                                  </li>
                                  {/* li */}
                                </ul>
                                {/* .btn-toolbar */}
                              </div>
                              {/* .toggle-content */}
                            </div>
                            {/* .toggle-wrap */}
                          </li>
                          {/* li */}
                        </ul>
                        {/* .btn-toolbar */}
                      </div>
                      {/* .card-tools */}
                    </div>
                    {/* .card-title-group */}
                    <div
                      className="card-search search-wrap"
                      data-search="search"
                    >
                      <div className="card-body">
                        <div className="search-content">
                          <a
                            href="#"
                            className="search-back btn btn-icon toggle-search"
                            data-target="search"
                          >
                            <em className="icon ni ni-arrow-left" />
                          </a>
                          <input
                            type="text"
                            className="form-control border-transparent form-focus-none"
                            placeholder="Search by borrower or category"
                          />
                          <button className="search-submit btn btn-icon">
                            <em className="icon ni ni-search" />
                          </button>
                        </div>
                      </div>
                    </div>
                    {/* .card-search */}
                  </div>
                  {/* .card-inner */}
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
                            <a href="#">
                              <span>4947</span>
                            </a>
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
                            <a href="#">
                              <span>View</span>
                            </a>
                          </td>
                        </tr>
                        {/* tb-tnx-item */}
                        <tr className="tb-tnx-item">
                          <td className="tb-tnx-id">
                            <a href="#">
                              <span>4947</span>
                            </a>
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
                            <a href="#">
                              <span>View</span>
                            </a>
                          </td>
                        </tr>
                        {/* tb-tnx-item */}
                        <tr className="tb-tnx-item">
                          <td className="tb-tnx-id">
                            <a href="#">
                              <span>4947</span>
                            </a>
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
                              <span className="badge badge-dot text-success">
                                Approved
                              </span>
                            </div>
                          </td>
                          <td className="tb-tnx-action">
                            <a href="#">
                              <span>View</span>
                            </a>
                          </td>
                        </tr>
                        {/* tb-tnx-item */}
                        <tr className="tb-tnx-item">
                          <td className="tb-tnx-id">
                            <a href="#">
                              <span>4947</span>
                            </a>
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
                              <span className="badge badge-dot text-success">
                                Approved
                              </span>
                            </div>
                          </td>
                          <td className="tb-tnx-action">
                            <a href="#">
                              <span>View</span>
                            </a>
                          </td>
                        </tr>
                        {/* tb-tnx-item */}
                      </tbody>
                    </table>
                  </div>
                  {/* .card-inner */}
                  <div className="card-inner"></div>
                  {/* .card-inner */}
                </div>
                {/* .card-inner-group */}
              </div>
              {/* .card */}
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
