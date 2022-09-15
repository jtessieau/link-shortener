import { Outlet } from "react-router-dom";
import "./style.scss";
import Navbar from "./Navbar";

function Layout() {
    return (
        <>
            <Navbar />
            <div className='container'>
                <Outlet />
            </div>
        </>
    );
}
export default Layout;
