import { useParams } from "react-router-dom";
import IDataStorage from "../Helpers/IDataStorage";
import LocalDataStorage from "../Helpers/LocalDataStorage";
import { ShortUrl } from "../Types/ShortUrl.type";

function UrlDisplay() {
    const { url } = useParams();
    const dataStorage: IDataStorage = new LocalDataStorage();

    let shortenedUrl: ShortUrl | null;

    if (typeof url === "string") {
        shortenedUrl = dataStorage.getOneUrl(url);
        if (shortenedUrl) {
            window.location.href = shortenedUrl?.url;
            return <p>"Waiting for redirection ...."</p>;
        } else {
            return <h1>Invalid Link</h1>;
        }
    } else {
        return <h1>Oups, something wrong happen...</h1>;
    }
}
export default UrlDisplay;
