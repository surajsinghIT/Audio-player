import { Outlet } from "react-router-dom";
import Header from "../Pages/Header";
import Footer from "../Pages/Footer";


function Layout() {
    return (
        <>
        <div className="main-container">
            <Header/>
            <Outlet />            
            <Footer/>   
            </div>
        </>
    );
}

export default Layout;