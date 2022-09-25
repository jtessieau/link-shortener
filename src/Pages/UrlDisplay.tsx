import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import IDataStorage from "../Helpers/IDataStorage";

type Props = {
    DataStorage: IDataStorage;
};
function UrlDisplay({ DataStorage }: Props) {
    const { url } = useParams();

    const [isUrlValid, setIsUrlValid] = useState(true);

    useEffect(() => {
        if (typeof url === "string") {
            DataStorage.getOneUrl(url).then((shortUrl) => {
                if (shortUrl) {
                    window.location.href = shortUrl.url;
                    setIsUrlValid(true);
                } else {
                    setIsUrlValid(false);
                }
            });
        } else {
            setIsUrlValid(false);
        }
    }, []);

    if (isUrlValid) {
        return <p>"Waiting for redirection ...."</p>;
    } else {
        return <h1>Sorry, Invalid Link</h1>;
    }
}
export default UrlDisplay;
