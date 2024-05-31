import { Outlet } from "react-router-dom";
// import Buttons from '../components/Buttons';
import Footer from "../components/Footer";

import SideNavbar from "../components/SideNavbar";

const PageLayOut = () => {
  return (
    <div>
      <div>
        <SideNavbar />
      </div>
      <div>
        <Outlet />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default PageLayOut;
