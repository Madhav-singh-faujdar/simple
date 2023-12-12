import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    distributor: "",
    aadhar: null,
    address: "",
    pincode: "",
    password: "",
    checkbox: false,
  });

  // State to hold form errors
  const [errors, setErrors] = useState({});

  // Handle form field changes
  const handleChange = (e) => {
    const { id, value } = e.target;
    console.log(value);
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  // Handle file input change (for Aadhar Card)
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData((prevData) => ({
      ...prevData,
      aadhar: file,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate form data
    const validationErrors = validateFormData(formData);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      // Form data is valid, proceed with submission
      console.log("Form data:", formData);
    } else {
      // Form data is not valid, display errors
      console.log("Form data validation failed:", validationErrors);
    }
  };

  // Validation function for form data
  const validateFormData = (data) => {
    const errors = {};
    // Validate each form field
    if (!data.name) {
      errors.name = "Name is required";
    }
    if (!data.mobile) {
      errors.mobile = "Mobile number is required";
    } else if (!/^\d{10}$/.test(data.mobile)) {
      errors.mobile = "Invalid mobile number";
    }
    if (!data.email) {
      errors.email = "Email address is required";
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      errors.email = "Invalid email address";
    }
    if (!data.distributor) {
      errors.distributor = "Select a preferred distributor";
    }
    if (!data.aadhar) {
      errors.aadhar = "Upload Aadhar card";
    }
    if (!data.address) {
      errors.address = "Address is required";
    }
    if (!data.pincode) {
      errors.pincode = "Pin code is required";
    } else if (!/^\d{6}$/.test(data.pincode)) {
      errors.pincode = "Invalid pin code";
    }
    if (!data.password) {
      errors.password = "Password is required";
    }
    if (!data.checkbox) {
      errors.checkbox = "You must agree to the terms";
    } else if (data.password.length < 6) {
      errors.password = "Password must be at least 6 characters";
    }
    return errors;
  };

  return (
    <div>
      <Helmet>
        <title>Register | Sato Incentive Program</title>
      </Helmet>

      <div className="nk-app-root">
        {/* main @s */}
        <div className="nk-main ">
          {/* wrap @s */}
          <div className="nk-wrap nk-wrap-nosidebar">
            {/* content @s */}
            <div className="nk-content ">
              <div className="nk-block nk-block-middle nk-auth-body wide-xs">
                <div className="brand-logo pb-4 text-center">
                  <Link to="/" className="logo-link">
                    <img
                      className="logo-dark logo-img logo-img-lg"
                      src="assets/images/logo-dark.png"
                      alt="logo-dark"
                    />
                  </Link>
                </div>
                <div className="card card-bordered register-bordered">
                  <div className="card-inner card-inner-lg">
                    <div className="nk-block-head">
                      <div className="nk-block-head-content">
                        <h4 className="nk-block-title">Register</h4>
                        <div className="nk-block-des">
                          <p>
                            Create New Account &amp; Join Sato Incentive Program
                          </p>
                        </div>
                      </div>
                    </div>
                    <form onSubmit={handleSubmit}>
                      <div className="row g-gs">
                        <div className="col-md-6">
                          <div className="form-group">
                            <label className="form-label" htmlFor="name">
                              Name
                            </label>
                            <div className="form-control-wrap">
                              <input
                                type="text"
                                className={`form-control form-control-lg ${
                                  errors.name ? "is-invalid" : ""
                                }`}
                                id="name"
                                placeholder="Enter your name"
                                value={formData.name}
                                onChange={handleChange}
                              />
                              {errors.name && (
                                <div className="invalid-feedback">
                                  {errors.name}
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label className="form-label" htmlFor="mobile">
                              Mobile Number
                            </label>
                            <div className="form-control-wrap">
                              <input
                                type="number"
                                className={`form-control form-control-lg ${
                                  errors.mobile ? "is-invalid" : ""
                                }`}
                                id="mobile"
                                placeholder="Enter your mobile number"
                                value={formData.mobile}
                                onChange={handleChange}
                              />
                              {errors.mobile && (
                                <div className="invalid-feedback">
                                  {errors.mobile}
                                </div>
                              )}
                            </div>
                          </div>
                        </div>

                        <div className="col-md-6">
                          <div className="form-group">
                            <label className="form-label" htmlFor="email">
                              Email Address
                            </label>
                            <div className="form-control-wrap">
                              <input
                                type="text"
                                className={`form-control form-control-lg ${
                                  errors.email ? "is-invalid" : ""
                                }`}
                                id="email"
                                placeholder="Enter your email address"
                                value={formData.email}
                                onChange={handleChange}
                              />
                              {errors.email && (
                                <div className="invalid-feedback">
                                  {errors.email}
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label className="form-label">
                              Select Preferred Distributor
                            </label>
                            <div className="form-control-wrap">
                              <select
                                className={`form-select js-select2 ${
                                  errors.distributor ? "is-invalid" : ""
                                }`}
                                id="distributor"
                                value={formData.distributor}
                                onChange={handleChange}
                              >
                                <option value="">Select a Distributor</option>
                                <option value="Distributor-1">
                                  Distributor 1
                                </option>
                                <option value="Distributor-2">
                                  Distributor 2
                                </option>
                              </select>
                              {errors.distributor && (
                                <div className="invalid-feedback">
                                  {errors.distributor}
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label className="form-label" htmlFor="aadhar">
                              Upload Aadhar Card
                            </label>
                            <div className="form-control-wrap">
                              <div className="form-file">
                                <input
                                  type="file"
                                  className={`form-file-input ${
                                    errors.aadhar ? "is-invalid" : ""
                                  }`}
                                  id="aadhar"
                                  onChange={handleFileChange}
                                />
                                <label
                                  className="form-file-label"
                                  htmlFor="aadhar"
                                >
                                  Choose file
                                </label>
                                {errors.aadhar && (
                                  <div className="invalid-feedback">
                                    {errors.aadhar}
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label className="form-label" htmlFor="address">
                              Address
                            </label>
                            <div className="form-control-wrap">
                              <input
                                type="text"
                                className={`form-control form-control-lg ${
                                  errors.address ? "is-invalid" : ""
                                }`}
                                id="address"
                                placeholder="Enter your full address"
                                value={formData.address}
                                onChange={handleChange}
                              />
                              {errors.address && (
                                <div className="invalid-feedback">
                                  {errors.address}
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label className="form-label" htmlFor="pincode">
                              Pin Code
                            </label>
                            <div className="form-control-wrap">
                              <input
                                type="number"
                                className={`form-control form-control-lg ${
                                  errors.pincode ? "is-invalid" : ""
                                }`}
                                id="pincode"
                                placeholder="Enter pin code"
                                value={formData.pincode}
                                onChange={handleChange}
                              />
                              {errors.pincode && (
                                <div className="invalid-feedback">
                                  {errors.pincode}
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label className="form-label" htmlFor="password">
                              Password
                            </label>
                            <div className="form-control-wrap">
                              <Link
                                to="#"
                                className="form-icon form-icon-right passcode-switch lg"
                                data-target="password"
                              >
                                <em className="passcode-icon icon-show icon ni ni-eye" />
                                <em className="passcode-icon icon-hide icon ni ni-eye-off" />
                              </Link>
                              <input
                                type="password"
                                className={`form-control form-control-lg ${
                                  errors.password ? "is-invalid" : ""
                                }`}
                                id="password"
                                placeholder="Enter your password"
                                value={formData.password}
                                onChange={handleChange}
                              />
                              {errors.password && (
                                <div className="invalid-feedback">
                                  {errors.password}
                                </div>
                              )}
                            </div>
                          </div>
                        </div>

                        <div className="form-group">
                          <div className="custom-control custom-control-xs custom-checkbox">
                            <input
                              type="checkbox"
                              className={`custom-control-input ${
                                errors.checkbox ? "is-invalid" : ""
                              }`}
                              id="checkbox"
                              name="checkbox"
                              onChange={() => {
                                setFormData((prevData) => ({
                                  ...prevData,
                                  checkbox: !prevData.checkbox,
                                }));
                              }}
                              checked={formData.checkbox}
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="checkbox"
                            >
                              I agree to SATO <Link to="#">Privacy Policy</Link>{" "}
                              &amp; <Link to="#"> Terms.</Link>
                            </label>
                            <br/>
                            {errors.checkbox && (
                              <div className="invalid-feedback">
                                {errors.checkbox}
                              </div>
                            )}
                          </div>
                        </div>

                        <div className="form-group">
                          <button className="btn btn-lg btn-primary btn-block">
                            Register
                          </button>
                        </div>
                      </div>
                    </form>
                    <div className="form-note-s2 text-center pt-4">
                      {" "}
                      Already have an account?{" "}
                      <Link to="/">
                        <strong>Sign In </strong>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="nk-footer nk-auth-footer-full">
                <div className="container wide-lg">
                  <div className="row g-3">
                    <div className="col-lg-6">
                      <div className="nk-block-content text-center text-lg-left">
                        <p className="text-soft">
                          ©© 2023 Sato Incentive Plan . Powered by Architising
                          Pvt. Ltd..
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
    </div>
  );
};

export default Register;
