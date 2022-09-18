import ListUrls from "../Components/ListUrls";
import { ToastContainer } from "react-toastify";
import ShortUrlForm from "../Components/ShortUrlForm";
import { useState } from "react";
import IDataStorage from "../Helpers/IDataStorage";

type Props = {
    DataStorage: IDataStorage;
};
export default function Dashboard({ DataStorage }: Props) {
    const [urls, setUrls] = useState([]);
    return (
        <>
            <h1>Dashboard</h1>
            <ShortUrlForm setUrls={setUrls} DataStorage={DataStorage} />
            <ListUrls urls={urls} setUrls={setUrls} DataStorage={DataStorage} />
            <ToastContainer />
        </>
    );
}
