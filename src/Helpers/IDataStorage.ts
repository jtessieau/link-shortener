import { ShortUrl } from "../Types/ShortUrl.type";

export default interface IDataStorage {
    storeUrl(shortUrl: ShortUrl): Promise<void>;
    getUrlsArray(): Promise<ShortUrl[] | null>;
    getOneUrl(id: string): Promise<ShortUrl | null>;
    deleteUrl(shortUrl: ShortUrl): Promise<void>;
}
