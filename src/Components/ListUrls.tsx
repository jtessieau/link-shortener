import { useEffect } from "react";
import IDataStorage from "../Helpers/IDataStorage";
import { toast } from "react-toastify";
import { ShortUrl } from "../Types/ShortUrl.type";
import "react-toastify/dist/ReactToastify.css";

type Props = { urls: ShortUrl[]; setUrls: Function; DataStorage: IDataStorage };

function ListUrls({ urls, setUrls, DataStorage }: Props) {
    useEffect(() => {
        setUrls(DataStorage.getUrlsArray());
    }, []);

    const urlGenerator = (shortUrl: ShortUrl) => {
        return window.location.origin + "/" + shortUrl.id;
    };

    const handleDelete = (shortUrl: ShortUrl) => {
        DataStorage.deleteUrl(shortUrl);
        setUrls(DataStorage.getUrlsArray());
        toast.warning(shortUrl.id + " has been deleted", {
            autoClose: 2000,
            hideProgressBar: true,
        });
    };
    const handleCopy = (shortUrl: ShortUrl) => {
        navigator.clipboard.writeText(urlGenerator(shortUrl));
        toast.info("Link copied to clipboard!", {
            autoClose: 2000,
            hideProgressBar: true,
        });
    };

    if (urls.length > 0) {
        return (
            <>
                <h1>List urls:</h1>
                <ul>
                    {urls.map((shortUrl) => {
                        return (
                            <li key={shortUrl.id}>
                                <a href={urlGenerator(shortUrl)}>
                                    {shortUrl.descritpion}
                                </a>
                                <button onClick={() => handleDelete(shortUrl)}>
                                    Delete
                                </button>
                                <button onClick={() => handleCopy(shortUrl)}>
                                    Copy Url
                                </button>
                            </li>
                        );
                    })}
                </ul>
            </>
        );
    } else {
        return <p>No shortened urls stored.</p>;
    }
}
export default ListUrls;
