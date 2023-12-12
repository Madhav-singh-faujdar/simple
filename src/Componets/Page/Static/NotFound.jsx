import React from 'react'
import { Link } from 'react-router-dom'

export const NotFound = () => {
  return (
<>
  <div className="nk-app-root">
    {/* main @s */}
    <div className="nk-main ">
      {/* wrap @s */}
      <div className="nk-wrap nk-wrap-nosidebar">
        {/* content @s */}
        <div className="nk-content ">
          <div className="nk-block nk-block-middle wide-md mx-auto">
            <div className="nk-block-content nk-error-ld text-center">
              <img
                className="nk-error-gfx"
                src="assets/images/gfx/error-404.svg"
                alt=""
              />
              <div className="wide-xs mx-auto">
                <h3 className="nk-error-title">Oops! Why you’re here?</h3>
                <p className="nk-error-text">
                  We are very sorry for inconvenience. It looks like you’re try
                  to access a page that either has been deleted or never
                  existed.
                </p>
               <Link href="/dashborad" className="btn btn-lg btn-primary mt-2">
                  Back To Home
                </Link>
              </div>
            </div>
          </div>
          {/* .nk-block */}
        </div>
        {/* wrap @e */}
      </div>
      {/* content @e */}
    </div>
    {/* main @e */}
  </div>
  <div className="modal fade" tabIndex={-1} role="dialog" id="region">
    <div className="modal-dialog modal-lg" role="document">
      <div className="modal-content">
        <a href="#" className="close" data-bs-dismiss="modal">
          <em className="icon ni ni-cross-sm" />
        </a>
        <div className="modal-body modal-body-md">
          <h5 className="title mb-4">Select Your Countryy</h5>
          <div className="nk-country-region">
            <ul className="country-list text-center gy-2">
              <li>
                <a href="#" className="country-item">
                  <img
                    src="assets/images/flags/arg.png"
                    alt=""
                    className="country-flag"
                  />
                  <span className="country-name">Argentina</span>
                </a>
              </li>
              <li>
                <a href="#" className="country-item">
                  <img
                    src="assets/images/flags/aus.png"
                    alt=""
                    className="country-flag"
                  />
                  <span className="country-name">Australia</span>
                </a>
              </li>
              <li>
                <a href="#" className="country-item">
                  <img
                    src="assets/images/flags/bangladesh.png"
                    alt=""
                    className="country-flag"
                  />
                  <span className="country-name">Bangladesh</span>
                </a>
              </li>
              <li>
                <a href="#" className="country-item">
                  <img
                    src="assets/images/flags/canada.png"
                    alt=""
                    className="country-flag"
                  />
                  <span className="country-name">
                    Canada <small>(English)</small>
                  </span>
                </a>
              </li>
              <li>
                <a href="#" className="country-item">
                  <img
                    src="assets/images/flags/china.png"
                    alt=""
                    className="country-flag"
                  />
                  <span className="country-name">Centrafricaine</span>
                </a>
              </li>
              <li>
                <a href="#" className="country-item">
                  <img
                    src="assets/images/flags/china.png"
                    alt=""
                    className="country-flag"
                  />
                  <span className="country-name">China</span>
                </a>
              </li>
              <li>
                <a href="#" className="country-item">
                  <img
                    src="assets/images/flags/french.png"
                    alt=""
                    className="country-flag"
                  />
                  <span className="country-name">France</span>
                </a>
              </li>
              <li>
                <a href="#" className="country-item">
                  <img
                    src="assets/images/flags/germany.png"
                    alt=""
                    className="country-flag"
                  />
                  <span className="country-name">Germany</span>
                </a>
              </li>
              <li>
                <a href="#" className="country-item">
                  <img
                    src="assets/images/flags/iran.png"
                    alt=""
                    className="country-flag"
                  />
                  <span className="country-name">Iran</span>
                </a>
              </li>
              <li>
                <a href="#" className="country-item">
                  <img
                    src="assets/images/flags/italy.png"
                    alt=""
                    className="country-flag"
                  />
                  <span className="country-name">Italy</span>
                </a>
              </li>
              <li>
                <a href="#" className="country-item">
                  <img
                    src="assets/images/flags/mexico.png"
                    alt=""
                    className="country-flag"
                  />
                  <span className="country-name">México</span>
                </a>
              </li>
              <li>
                <a href="#" className="country-item">
                  <img
                    src="assets/images/flags/philipine.png"
                    alt=""
                    className="country-flag"
                  />
                  <span className="country-name">Philippines</span>
                </a>
              </li>
              <li>
                <a href="#" className="country-item">
                  <img
                    src="assets/images/flags/portugal.png"
                    alt=""
                    className="country-flag"
                  />
                  <span className="country-name">Portugal</span>
                </a>
              </li>
              <li>
                <a href="#" className="country-item">
                  <img
                    src="assets/images/flags/s-africa.png"
                    alt=""
                    className="country-flag"
                  />
                  <span className="country-name">South Africa</span>
                </a>
              </li>
              <li>
                <a href="#" className="country-item">
                  <img
                    src="assets/images/flags/spanish.png"
                    alt=""
                    className="country-flag"
                  />
                  <span className="country-name">Spain</span>
                </a>
              </li>
              <li>
                <a href="#" className="country-item">
                  <img
                    src="assets/images/flags/switzerland.png"
                    alt=""
                    className="country-flag"
                  />
                  <span className="country-name">Switzerland</span>
                </a>
              </li>
              <li>
                <a href="#" className="country-item">
                  <img
                    src="assets/images/flags/uk.png"
                    alt=""
                    className="country-flag"
                  />
                  <span className="country-name">United Kingdom</span>
                </a>
              </li>
              <li>
                <a href="#" className="country-item">
                  <img
                    src="assets/images/flags/english.png"
                    alt=""
                    className="country-flag"
                  />
                  <span className="country-name">United State</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* .modal-content */}
    </div>
    {/* .modla-dialog */}
  </div>
</>
  )
}
