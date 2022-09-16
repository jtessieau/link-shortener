import { ShortUrl } from "../Types/ShortUrl.type";
import IDataStorage from "./IDataStorage";

export default class LocalDataStorage implements IDataStorage {
    private LS_URLS: string = "URLS";

    private storeUrlsArray(urlsArray: ShortUrl[]) {
        localStorage.setItem(this.LS_URLS, JSON.stringify(urlsArray));
    }

    public storeUrl(shortUrl: ShortUrl): void {
        const urlsArray = this.getUrlsArray();

        const findUrl = this.getOneUrl(shortUrl.id);

        if (findUrl === null) {
            urlsArray.push(shortUrl);
            this.storeUrlsArray(urlsArray);
        } else {
            throw new Error("An error occured please try again.");
        }
    }

    public getOneUrl(id: string): ShortUrl | null {
        const urls = this.getUrlsArray();

        const urlFound = urls.find((el) => el.id === id);
        return urlFound === undefined ? null : urlFound;
    }

    public getUrlsArray(): ShortUrl[] {
        const urls = localStorage.getItem(this.LS_URLS);
        return urls ? JSON.parse(urls) : [];
    }

    public deleteUrl(shortUrl: ShortUrl): void {
        const urlsArray = this.getUrlsArray();

        if (urlsArray.length > 0) {
            const filteredUrlsArray = urlsArray.filter(
                (el) => el.id !== shortUrl.id
            );

            if (filteredUrlsArray.length > 0) {
                this.storeUrlsArray(filteredUrlsArray);
            } else {
                localStorage.removeItem("URLS");
            }
        }
    }
}
