import React, { useId } from "react";
import LocalDataStorage from "../Helpers/LocalDataStorage";
import ShortUniqueId from "short-unique-id";
import { ShortUrl } from "../Types/ShortUrl.type";
import { toast } from "react-toastify";
import IDataStorage from "../Helpers/IDataStorage";

type Props = { setUrls: Function; DataStorage: IDataStorage };

export default function ShortUrlForm({ setUrls, DataStorage }: Props) {
    const uid = new ShortUniqueId({ length: 8 });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const urlInput = document.querySelector<HTMLInputElement>("#url");

        if (urlInput === null) {
            throw new Error();
        }

        if (urlInput.value !== "") {
            try {
                const url = new URL(urlInput.value);

                const shortUrl: ShortUrl = {
                    id: uid(),
                    descritpion: url.origin,
                    url: url.href,
                };

                DataStorage.storeUrl(shortUrl);
                setUrls(DataStorage.getUrlsArray());
                urlInput.value = "";
                toast.info(shortUrl.url + " added to storage", {
                    hideProgressBar: true,
                });
            } catch (err) {}
        }
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type='text' id='url' name='url' />
                <button type='submit'>Submit</button>
            </form>
        </div>
    );
}
