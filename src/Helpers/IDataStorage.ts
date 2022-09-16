import { ShortUrl } from "../Types/ShortUrl.type";

export default interface IDataStorage {
    storeUrl(shortUrl: ShortUrl): void;
    getUrlsArray(): ShortUrl[];
    getOneUrl(id: string): ShortUrl | null;
    deleteUrl(shortUrl: ShortUrl): void;
}
