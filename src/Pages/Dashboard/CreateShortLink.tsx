import { ShortUrl } from "../../Types/ShortUrl.type";
import ShortUniqueId from "short-unique-id";
import { store } from "../../Helpers/dataStorageHelper";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function createShortLink() {
    const navigate = useNavigate();
    const [error, setError] = useState("");
    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();

        const urlInput = document.querySelector<HTMLInputElement>("#url");

        if (urlInput) {
            try {
                const url = new URL(urlInput.value);
                const uid = new ShortUniqueId({ length: 10 });

                const id: string = uid();

                const shortUrl: ShortUrl = {
                    id: id,
                    url: url.href,
                    descritpion: url.origin,
                };

                store(shortUrl);
                navigate("/dashboard");
            } catch (err) {
                if (err instanceof TypeError) {
                    setError("Please enter a valid url");
                } else {
                    throw err;
                }
            }
        } else {
            alert("Invalid data");
        }
    }
    return (
        <>
            <h1>Create a short link</h1>

            <form
                onSubmit={(e) => {
                    handleSubmit(e);
                }}
            >
                <input
                    type='url'
                    id='url'
                    name='url'
                    placeholder='Enter the url'
                />
                <button type='submit'>Submit</button>
                <p>{error}</p>
            </form>
        </>
    );
}
export default createShortLink;