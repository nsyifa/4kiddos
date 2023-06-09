import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ user, updateUser }) => {
  return (
    <div>
      <Header user={user} updateUser={updateUser} />
      <div className="content">
        <Outlet />
      </div>
      
      <div className="footer-all">
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
