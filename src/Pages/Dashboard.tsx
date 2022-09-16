import { Link } from "react-router-dom";
import ListUrls from "../Components/ListUrls";
import { ToastContainer } from "react-toastify";

export default function Dashboard() {
    return (
        <>
            <h1>Dashboard</h1>
            <Link to='create'>Create a new Short Link</Link>
            <ListUrls />
            <ToastContainer />
        </>
    );
}
