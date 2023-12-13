import React, { useEffect, useState } from 'react'
import { Footer } from '../Footer/Footer'
import { Header } from '../Header/Header'
import { Sidebar } from '../Sidebar/Sidebar'
import { GetFormApiDealer } from '../Baseurl/baseUrl'

export const DealerList = () => {

  const [loading, setLoading] = useState(false);
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


                {
  dealer.length < 1  ?  "Not Avalible" :

  (dealer || [] ).map((v)=>(

    <div className="col-sm-6 col-lg-4">
      <div className="card card-bordered h-100">
        <div className="card-inner">
          <h5 className="card-title">{v?.userName}</h5>
          <ul className="list-plain">
            <li>
              <em className="icon ni ni-map-pin" />
              <span>{v?.Address}</span>
            </li>
          </ul>
        </div>
      </div>
      {/* .card */}
    </div>

  ))


                }
               
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
