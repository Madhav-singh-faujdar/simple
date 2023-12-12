import logo from './logo.svg';
import './App.css';
import {BrowserRouter ,Route,Routes} from "react-router-dom"
import { Protect } from './Componets/Auth/Protect';
import Login from './Componets/Page/Login';
import Register from './Componets/Page/Register';
import { OtpVerify } from './Componets/Page/OtpVerify';
import Profile from './Componets/Page/Profile';
import Faq from './Componets/Page/Static/Faq';
import ResetPassword from './Componets/Page/ResetPassword';
import { SucessPage } from './Componets/Page/Static/SucessPage';
import { NotFound } from './Componets/Page/Static/NotFound';
import { MainProfilePage } from './Componets/Page/MainProfilePage';
import { DealerList } from './Componets/Page/DealerList';
import { AvaliblePoint } from './Componets/Page/AvaliblePoint';
import { PointsHistory } from './Componets/Page/PointsHistory';
import { PointsSuccess } from './Componets/Page/PointsSuccess';
function App() {




  return (
    <>
      <BrowserRouter>
      
      <Routes>



<Route  path='/' element={<Login  />} ></Route>
<Route  path='/singup' element={<Register  />} ></Route>
<Route  path='/otp-registration' element={<OtpVerify  />} ></Route>
<Route path="/user_profile" element={<Protect>{<Profile />}</Protect>} />
<Route path="/user_faq" element={<Protect>{<Faq />}</Protect>} />
<Route path="/dashborad" element={<Protect>{<MainProfilePage />}</Protect>} />
<Route path="/dealers" element={<Protect>{<DealerList />}</Protect>} />
<Route path="/avalible_points" element={<Protect>{<AvaliblePoint />}</Protect>} />
<Route path="/history_points" element={<Protect>{<PointsHistory />}</Protect>} />
<Route path="/Points-Success" element={<Protect>{<PointsSuccess />}</Protect>} />
<Route path="/Reset" element={<ResetPassword />} />
<Route path="/signup-done" element={<SucessPage />} />
<Route path="/404" element={<NotFound />} />

      </Routes>
      
      
      </BrowserRouter>



    </>
  );
}

export default App;
