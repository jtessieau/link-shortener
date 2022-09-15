import { useParams } from "react-router-dom";
import { getOneUrl } from "../Helpers/dataStorageHelper";
import { ShortUrl } from "../Types/ShortUrl.type";

type Props = {};
function UrlDisplay({}: Props) {
    const { url } = useParams();

    let shortenedUrl: ShortUrl | null;

    if (typeof url === "string") {
        shortenedUrl = getOneUrl(url);
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
