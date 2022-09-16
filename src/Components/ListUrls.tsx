import { useState } from "react";
import LocalDataStorage from "../Helpers/LocalDataStorage";
import IDataStorage from "../Helpers/IDataStorage";
import { ShortUrl } from "../Types/ShortUrl.type";

function ListUrls() {
    const dataStorage: IDataStorage = new LocalDataStorage();
    const [urlsArray, setUrlsArray] = useState(dataStorage.getUrlsArray());

    const urlGenerator = (shortUrl: ShortUrl) => {
        return window.location.origin + "/" + shortUrl.id;
    };

    const handleDelete = (shortUrl: ShortUrl) => {
        dataStorage.deleteUrl(shortUrl);
    };
    const handleCopy = (shortUrl: ShortUrl) => {
        navigator.clipboard.writeText(urlGenerator(shortUrl));
    };

    console.log(urlsArray);

    if (urlsArray.length > 0) {
        return (
            <>
                <h1>List urls:</h1>
                <ul>
                    {urlsArray.map((shortUrl) => {
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
