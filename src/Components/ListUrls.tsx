import { useState } from "react";
import { deleteUrl, getAllUrls } from "../Helpers/dataStorageHelper";
import { ShortUrl } from "../Types/ShortUrl.type";

function ListUrls() {
    const [urlsArray, setUrlsArray] = useState(getAllUrls());

    function handleDelete(id: string) {
        deleteUrl(id);
        setUrlsArray(() => getAllUrls());
    }

    function getLink(shortUrl: ShortUrl): string {
        return "http://" + window.location.host + "/" + shortUrl.id;
    }

    if (urlsArray !== null) {
        return (
            <>
                <h1>Urls List:</h1>
                <ul>
                    {urlsArray.map((shortUrl) => {
                        console.log(shortUrl);
                        return (
                            <li key={shortUrl.id}>
                                <a href={getLink(shortUrl)} target='_blank'>
                                    {shortUrl.descritpion}{" "}
                                    <button
                                        onClick={(e) => {
                                            e.preventDefault();
                                            handleDelete(shortUrl.id);
                                        }}
                                    >
                                        delete
                                    </button>
                                    <button
                                        onClick={(e) => {
                                            e.preventDefault();
                                            navigator.clipboard.writeText(
                                                getLink(shortUrl)
                                            );
                                            alert("Link added to clipboard");
                                        }}
                                    >
                                        Copy Link
                                    </button>
                                </a>
                            </li>
                        );
                    })}
                </ul>
            </>
        );
    } else {
        return (
            <p>
                <strong>Please create your first short url</strong>
            </p>
        );
    }
}
export default ListUrls;
