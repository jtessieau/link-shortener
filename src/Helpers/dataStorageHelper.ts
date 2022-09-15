import { ShortUrl } from "../Types/ShortUrl.type";

function storeUrl(shortUrl: ShortUrl): void {
    const urlsArray = getAllUrls();
    urlsArray.push(shortUrl);

    storeUrlsArray(urlsArray);
}

function storeUrlsArray(urlsArray: ShortUrl[]) {
    localStorage.setItem("URLS", JSON.stringify(urlsArray));
}

function getAllUrls(): ShortUrl[] {
    const urls = localStorage.getItem("URLS");

    if (urls) {
        return JSON.parse(urls);
    } else {
        return [];
    }
}

function getOneUrl(id: string): ShortUrl | null {
    const urlsArray = getAllUrls();
    const shortUrl = urlsArray.find((el) => el.id === id);

    return shortUrl !== undefined ? shortUrl : null;
}

function deleteUrl(id: string): void {
    const urlsArray = getAllUrls();

    if (urlsArray.length > 0) {
        const filteredUrlsArray = urlsArray.filter((el) => el.id !== id);

        if (filteredUrlsArray.length > 0) {
            storeUrlsArray(filteredUrlsArray);
        } else {
            localStorage.removeItem("URLS");
        }
    }
}

export { storeUrl, getAllUrls, getOneUrl, deleteUrl };
