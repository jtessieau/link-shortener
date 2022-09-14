import { Link } from "react-router-dom";
import "./Navbar.scss";
function Navbar() {
    return (
        <nav className='navbar'>
            <ul>
                <li>
                    <Link to='/'>Homepage</Link>
                </li>
                <li>
                    <Link to='/dashboard'>Dashboard</Link>
                </li>
            </ul>
        </nav>
    );
}
export default Navbar;
