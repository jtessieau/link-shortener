import { ShortUrl } from "../Types/ShortUrl.type";
import IDataStorage from "./IDataStorage";

export default class LocalDataStorage implements IDataStorage {
    private LS_URLS: string = "URLS";

    private storeUrlsArray(urlsArray: ShortUrl[]) {
        localStorage.setItem(this.LS_URLS, JSON.stringify(urlsArray));
    }

    public async storeUrl(shortUrl: ShortUrl): Promise<void> {
        const foundUrl = await this.getOneUrl(shortUrl.id);
        if (foundUrl === null) {
            const urlsArray = await this.getUrlsArray();
            urlsArray.push(shortUrl);
            this.storeUrlsArray(urlsArray);
        } else {
            throw new Error("An error occured please try again.");
        }
    }

    public async getOneUrl(id: string): Promise<ShortUrl | null> {
        const urlsArray = await this.getUrlsArray();
        const urlFound = urlsArray.find((el) => el.id === id);
        return urlFound === undefined ? null : urlFound;
    }

    public async getUrlsArray(): Promise<ShortUrl[]> {
        const urls = localStorage.getItem(this.LS_URLS);
        return urls ? JSON.parse(urls) : [];
    }

    public async deleteUrl(shortUrl: ShortUrl): Promise<void> {
        const urlsArray = await this.getUrlsArray();

        if (urlsArray !== null) {
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
