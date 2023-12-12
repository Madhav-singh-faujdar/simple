import React from 'react'
import { Footer } from '../Footer/Footer'
import { Header } from '../Header/Header'
import { Sidebar } from '../Sidebar/Sidebar'

export const DealerList = () => {
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
                  <h3 className="nk-block-title page-title">Branches</h3>
                  <div className="nk-block-des text-soft">
                    <p>Here is the Address of Branches</p>
                  </div>
                </div>
                {/* .nk-block-head-content */}
              </div>
              {/* .nk-block-between */}
            </div>
            {/* .nk-block-head */}
            <div className="nk-block">
              <div className="row g-gs">
                <div className="col-sm-6 col-lg-4">
                  <div className="card card-bordered h-100">
                    <div className="card-inner">
                      <h5 className="card-title">Bank of Italy</h5>
                      <ul className="list-plain">
                        <li>
                          <em className="icon ni ni-map-pin" />
                          <span>60311 Frankfurt am Main, Italy</span>
                        </li>
                        <li>
                          <em className="icon ni ni-emails" />
                          <span>info@admin.com</span>
                        </li>
                        <li>
                          <em className="icon ni ni-call" />
                          <span>+43 720 884 749</span>
                        </li>
                        <li>
                          <em className="icon ni ni-clock" />
                          <span>Opening Hours - 8.00am to 4.00pm</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* .card */}
                </div>
                {/* .col */}
                <div className="col-sm-6 col-lg-4">
                  <div className="card card-bordered h-100">
                    <div className="card-inner">
                      <h5 className="card-title">Reserve Bank of Australia</h5>
                      <ul className="list-plain">
                        <li>
                          <em className="icon ni ni-map-pin" />
                          <span>60311 Frankfurt am Main, Australia</span>
                        </li>
                        <li>
                          <em className="icon ni ni-emails" />
                          <span>info@admin.com</span>
                        </li>
                        <li>
                          <em className="icon ni ni-call" />
                          <span>+43 720 884 749</span>
                        </li>
                        <li>
                          <em className="icon ni ni-clock" />
                          <span>Opening Hours - 8.00am to 4.00pm</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* .card */}
                </div>
                {/* .col */}
                <div className="col-sm-6 col-lg-4">
                  <div className="card card-bordered h-100">
                    <div className="card-inner">
                      <h5 className="card-title">European Central Bank</h5>
                      <ul className="list-plain">
                        <li>
                          <em className="icon ni ni-map-pin" />
                          <span>60311 Frankfurt am Main, Europe</span>
                        </li>
                        <li>
                          <em className="icon ni ni-emails" />
                          <span>info@admin.com</span>
                        </li>
                        <li>
                          <em className="icon ni ni-call" />
                          <span>+43 720 884 749</span>
                        </li>
                        <li>
                          <em className="icon ni ni-clock" />
                          <span>Opening Hours - 8.00am to 4.00pm</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* .card */}
                </div>
                {/* .col */}
                <div className="col-sm-6 col-lg-4">
                  <div className="card card-bordered h-100">
                    <div className="card-inner">
                      <h5 className="card-title">National Bank of Denmark</h5>
                      <ul className="list-plain">
                        <li>
                          <em className="icon ni ni-map-pin" />
                          <span>60311 Frankfurt am Main, Denmark</span>
                        </li>
                        <li>
                          <em className="icon ni ni-emails" />
                          <span>info@admin.com</span>
                        </li>
                        <li>
                          <em className="icon ni ni-call" />
                          <span>+43 720 884 749</span>
                        </li>
                        <li>
                          <em className="icon ni ni-clock" />
                          <span>Opening Hours - 8.00am to 4.00pm</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* .card */}
                </div>
                {/* .col */}
                <div className="col-sm-6 col-lg-4">
                  <div className="card card-bordered h-100">
                    <div className="card-inner">
                      <h5 className="card-title">Bank of the Republic</h5>
                      <ul className="list-plain">
                        <li>
                          <em className="icon ni ni-map-pin" />
                          <span>60311 Frankfurt am Main, Colombia</span>
                        </li>
                        <li>
                          <em className="icon ni ni-emails" />
                          <span>info@admin.com</span>
                        </li>
                        <li>
                          <em className="icon ni ni-call" />
                          <span>+43 720 884 749</span>
                        </li>
                        <li>
                          <em className="icon ni ni-clock" />
                          <span>Opening Hours - 8.00am to 4.00pm</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* .card */}
                </div>
                {/* .col */}
                <div className="col-sm-6 col-lg-4">
                  <div className="card card-bordered h-100">
                    <div className="card-inner">
                      <h5 className="card-title">Bank of Canada</h5>
                      <ul className="list-plain">
                        <li>
                          <em className="icon ni ni-map-pin" />
                          <span>7680 Frankfurt am Main, Canada</span>
                        </li>
                        <li>
                          <em className="icon ni ni-emails" />
                          <span>info@admin.com</span>
                        </li>
                        <li>
                          <em className="icon ni ni-call" />
                          <span>+43 720 884 749</span>
                        </li>
                        <li>
                          <em className="icon ni ni-clock" />
                          <span>Opening Hours - 8.00am to 4.00pm</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* .card */}
                </div>
                {/* .col */}
                <div className="col-sm-6 col-lg-4">
                  <div className="card card-bordered h-100">
                    <div className="card-inner">
                      <h5 className="card-title">Bank of Canada</h5>
                      <ul className="list-plain">
                        <li>
                          <em className="icon ni ni-map-pin" />
                          <span>7680 Frankfurt am Main, Canada</span>
                        </li>
                        <li>
                          <em className="icon ni ni-emails" />
                          <span>info@admin.com</span>
                        </li>
                        <li>
                          <em className="icon ni ni-call" />
                          <span>+43 720 884 749</span>
                        </li>
                        <li>
                          <em className="icon ni ni-clock" />
                          <span>Opening Hours - 8.00am to 4.00pm</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* .card */}
                </div>
                {/* .col */}
                <div className="col-sm-6 col-lg-4">
                  <div className="card card-bordered h-100">
                    <div className="card-inner">
                      <h5 className="card-title">Bank of Canada</h5>
                      <ul className="list-plain">
                        <li>
                          <em className="icon ni ni-map-pin" />
                          <span>7680 Frankfurt am Main, Canada</span>
                        </li>
                        <li>
                          <em className="icon ni ni-emails" />
                          <span>info@admin.com</span>
                        </li>
                        <li>
                          <em className="icon ni ni-call" />
                          <span>+43 720 884 749</span>
                        </li>
                        <li>
                          <em className="icon ni ni-clock" />
                          <span>Opening Hours - 8.00am to 4.00pm</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* .card */}
                </div>
                {/* .col */}
                <div className="col-sm-6 col-lg-4">
                  <div className="card card-bordered h-100">
                    <div className="card-inner">
                      <h5 className="card-title">Bank of Canada</h5>
                      <ul className="list-plain">
                        <li>
                          <em className="icon ni ni-map-pin" />
                          <span>7680 Frankfurt am Main, Canada</span>
                        </li>
                        <li>
                          <em className="icon ni ni-emails" />
                          <span>info@admin.com</span>
                        </li>
                        <li>
                          <em className="icon ni ni-call" />
                          <span>+43 720 884 749</span>
                        </li>
                        <li>
                          <em className="icon ni ni-clock" />
                          <span>Opening Hours - 8.00am to 4.00pm</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* .card */}
                </div>
                {/* .col */}
                <div className="col-sm-6 col-lg-4">
                  <div className="card card-bordered h-100">
                    <div className="card-inner">
                      <h5 className="card-title">Bank of Canada</h5>
                      <ul className="list-plain">
                        <li>
                          <em className="icon ni ni-map-pin" />
                          <span>7680 Frankfurt am Main, Canada</span>
                        </li>
                        <li>
                          <em className="icon ni ni-emails" />
                          <span>info@admin.com</span>
                        </li>
                        <li>
                          <em className="icon ni ni-call" />
                          <span>+43 720 884 749</span>
                        </li>
                        <li>
                          <em className="icon ni ni-clock" />
                          <span>Opening Hours - 8.00am to 4.00pm</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* .card */}
                </div>
                {/* .col */}
                <div className="col-sm-6 col-lg-4">
                  <div className="card card-bordered h-100">
                    <div className="card-inner">
                      <h5 className="card-title">Bank of Canada</h5>
                      <ul className="list-plain">
                        <li>
                          <em className="icon ni ni-map-pin" />
                          <span>7680 Frankfurt am Main, Canada</span>
                        </li>
                        <li>
                          <em className="icon ni ni-emails" />
                          <span>info@admin.com</span>
                        </li>
                        <li>
                          <em className="icon ni ni-call" />
                          <span>+43 720 884 749</span>
                        </li>
                        <li>
                          <em className="icon ni ni-clock" />
                          <span>Opening Hours - 8.00am to 4.00pm</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* .card */}
                </div>
                {/* .col */}
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
