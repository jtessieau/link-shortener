import { ShortUrl } from "../Types/ShortUrl.type";

const LS_URLS: string = "URLS";

function storeUrl(shortUrl: ShortUrl): void {
    const urlsArray = getUrlsArray();

    const findUrl = getOneUrl(shortUrl.id);

    if (findUrl === null) {
        urlsArray.push(shortUrl);
        storeUrlsArray(urlsArray);
    } else {
        throw new Error("An error occured please try again.");
    }
}

function storeUrlsArray(urlsArray: ShortUrl[]) {
    localStorage.setItem(LS_URLS, JSON.stringify(urlsArray));
}

function getUrlsArray(): ShortUrl[] {
    const urls = localStorage.getItem(LS_URLS);

    if (urls) {
        return JSON.parse(urls);
    } else {
        return [];
    }
}

function getOneUrl(id: string): ShortUrl | null {
    const urlsArray = getUrlsArray();
    const shortUrl = urlsArray.find((el) => el.id === id);

    return shortUrl !== undefined ? shortUrl : null;
}

function deleteUrl(id: string): void {
    const urlsArray = getUrlsArray();

    if (urlsArray.length > 0) {
        const filteredUrlsArray = urlsArray.filter((el) => el.id !== id);

        if (filteredUrlsArray.length > 0) {
            storeUrlsArray(filteredUrlsArray);
        } else {
            localStorage.removeItem("URLS");
        }
    }
}

export { storeUrl, getOneUrl, getUrlsArray, deleteUrl };
