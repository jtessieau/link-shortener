import { useParams } from "react-router-dom";
import { get } from "../Helpers/dataStorageHelper";
import { ShortUrl } from "../Types/ShortUrl.type";

type Props = {};
function UrlDisplay({}: Props) {
    const { url } = useParams();

    let shortenedUrl: ShortUrl | null;

    if (typeof url === "string") {
        shortenedUrl = get(url);
        if (shortenedUrl) {
            window.location.href = shortenedUrl?.url;
            return "Waiting for redirection ....";
        } else {
            return <h1>Invalid Link</h1>;
        }
    } else {
        return <h1>Oups, something wrong happen...</h1>;
    }
}
export default UrlDisplay;
