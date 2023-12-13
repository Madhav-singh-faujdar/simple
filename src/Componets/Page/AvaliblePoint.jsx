import React, { useEffect, useState } from 'react'
import { Footer } from '../Footer/Footer'
import { Header } from '../Header/Header'
import { Sidebar } from '../Sidebar/Sidebar'
import { Link, useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import { GetFormApiDealer, PostFormApi } from '../Baseurl/baseUrl'

export const AvaliblePoint = () => {

  const [dealer, setDealer] = useState([]);

 useEffect(() => {
    let fun = async () => {
      const saveTheData = await GetFormApiDealer(
        "/getAuthenticUser",
        setLoading
      );

      if (saveTheData.error) {
        setLoading(false);
        return;
      }
      setDealer(saveTheData.data);
    };

    fun();
  }, []);









  const [loading, setLoading] = useState(false);
const nav = useNavigate()
  const [formData, setFormData] = useState({
    invoiceNumber: '',
    uploadInvoice: null,
    checkbox: false,
    invoiceDate:'',
    invoiceAmount:'',
    distributor:''
  });
console.log(formData);
  const handleChange = (e) => {
    const { id, type, checked } = e.target;
  
    if (type === 'file') {
      const file = e.target.files[0]; // Get the selected file
      setFormData((prevData) => ({
        ...prevData,
        [id]: file,
      }));
  
      // If you need to read the file content, you can use FileReader
      const reader = new FileReader();
      reader.onloadend = () => {
        // Do something with the file content, for example:
        // console.log(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [id]: type === 'checkbox' ? checked : e.target.value,
      }));
    }
  };
  
  const hndl = async (image) => {
    try {
      const URL = "6bc0752cef68cc0aaa0f6d26e5186ddb";

      const formData_img = new FormData();
      formData_img.append("image", image);
      const url = `https://api.imgbb.com/1/upload?key=${URL}`;

      const data = await fetch(url, {
        method: "POST",
        body: formData_img,
      });
      const ImageData = await data.json();
      if (!data.ok) {
        throw new Error(data.message);
      }

      return ImageData.data.url;
    } catch (error) {
      console.log(error);
    }
  };




  const handleSubmit = async(e) => {
    e.preventDefault();

    if (!formData.invoiceNumber || !formData.checkbox || !formData?.invoiceDate || !formData?.invoiceAmount ||!formData.uploadInvoice  || !formData.distributor) {
      toast.error('Please fill in all required fields.');
      return;
    }

try {

  const imgBB = await hndl(formData.uploadInvoice);

if (!imgBB) {
  toast.error('Please provide a valid image');
      return;
}



let SIGNUP_DATA = { uploadedBill:imgBB, billNumber:formData.invoiceNumber, userID:localStorage.getItem('userId'),invoiceDate:formData?.invoiceDate,
invoiceAmount:formData?.invoiceAmount , distributor:formData?.distributor}

  const toastId = toast.loading("Loading...");

        setLoading(true);

        const saveTheData = await PostFormApi(
          "/addBill",
          setLoading,
          SIGNUP_DATA,
          toastId
        );

        if (saveTheData.error) {
          setLoading(false);
          return;
        }

        setFormData({
          invoiceNumber: '',
          uploadInvoice: '',
          checkbox: false,
          invoiceDate:'',
          invoiceAmount:'',
        })


        nav('/Points-Success')

} catch (error) {
  toast.error(error)
  setLoading(false)
}

  
  }


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
                  <h3 className="nk-block-title page-title">Avail Points </h3>
                  <div className="nk-block-des text-soft">
                    <p className="text-soft">
                      Fill in the Details , Uplaod Invoice And Avail your Points{" "}
                    </p>
                  </div>
                </div>
                {/* .nk-block-head-content */}
              </div>
              {/* .nk-block-between */}
            </div>
            {/* .nk-block-head */}
            <div className="nk-block">
              <div className="card card-bordered card-stretch">
                <div className="card-inner">
                  <form onSubmit={handleSubmit}>
                    <div className="row g-gs">
                      <div className="col-md-6">
                      <div className="form-group">
                              <label className="form-label" htmlFor="invoice-date">
                                Invoice Number
                              </label>
                              <div className="form-control-wrap">
                                <input
                                  type="text"
                                  id="invoiceNumber"
                                  className="form-control"
                                  placeholder="Fill the invoice number"
                                  required=""
                                  value={formData.invoiceNumber}
                                  onChange={handleChange}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6">
                      <div className="form-group">
                              <label className="form-label" htmlFor="invoice-date">
                                Invoice Date
                              </label>
                              <div className="form-control-wrap">
                                <input
                                  type="date"
                                  id="invoiceDate"
                                  className="form-control"
                                  placeholder=""
                                  required=""
                                  value={formData.invoiceDate}
                                  onChange={handleChange}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6">
                      <div className="form-group">
                              <label className="form-label" htmlFor="invoice-date">
                                Invoice Amount
                              </label>
                              <div className="form-control-wrap">
                                <input
                                  type="number"
                                  id="invoiceAmount"
                                  className="form-control"
                                  placeholder="Fill the amount"
                                  required=""
                                  value={formData.invoiceAmount}
                                  onChange={handleChange}
                                />
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
                                id="distributor"
                                value={formData.distributor}
                                onChange={handleChange}
                              >
                                <option value="">Select a Distributor</option>

                                {(dealer || []).map((v) => (
                                  <option key={v._id} value={v._id}>
                                    {v.userName}
                                  </option>
                                ))}
                              </select>

                              
                            </div>
                          </div>
                        </div>







                          <div className="col-md-6">
                            <div className="form-group">
                              <label className="form-label" htmlFor="aadhar-card">
                                Upload Invoice or Bill
                              </label>
                              <div className="form-control-wrap">
                                <div className="form-file">
                                  <input
                                    type="file"
                                    className="form-file-input"
                                    id="uploadInvoice"
                                    onChange={handleChange}
                                  />
                                  <label className="form-file-label" htmlFor="invoice">
                                    Choose file
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="custom-control custom-control-sm custom-checkbox">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                id="checkbox"
                                checked={formData.checkbox}
                                onChange={handleChange}
                              />
                              <label className="custom-control-label" htmlFor="checkbox">
                                <p>
                                  I do hereby admit that all the above information that I have input is true &amp; correct.
                                  <br />
                                  If any of the above information figured out false or incorrect, I understand &amp; agree that my incentive will not be approved.
                                </p>
                              </label>
                            </div>
                          </div>
                          <div className="col-12">
                            <ul className="align-center flex-wrap flex-sm-nowrap gx-4 gy-2">
                              <li>

                                {

loading ? "":
                                <button type="submit" className="btn btn-lg btn-primary">
                                  Submit
                                </button>
                                }
                              </li>
                        </ul>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              {/* .card */}
            </div>
            {/* .nk-block */}
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
                          request, report an issues. Our team support team will
                          get back to you by email.
                        </p>
                      </div>
                    </div>
                    {/* <div className="nk-block-content flex-shrink-0">
                      <Link to="#" className="btn btn-lg btn-outline-primary">
                        Get Support Now
                      </Link>
                    </div> */}
                  </div>
                </div>
                {/* .card-inner */}
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
