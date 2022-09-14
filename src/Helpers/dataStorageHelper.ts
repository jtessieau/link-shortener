import { ShortUrl } from "../Types/ShortUrl.type";

function store(shortUrl: ShortUrl): void {
    const urls = localStorage.getItem("URLS");
    let urlsArray: ShortUrl[] = [];

    if (urls === null) {
        urlsArray.push(shortUrl);
    } else {
        urlsArray = JSON.parse(urls);
        urlsArray.push(shortUrl);
    }

    localStorage.setItem("URLS", JSON.stringify(urlsArray));
}

function list(): ShortUrl[] | null {
    const urls = localStorage.getItem("URLS");

    if (urls) {
        return JSON.parse(urls);
    } else {
        console.log("no url");
        return null;
    }
}

function get(id: string): ShortUrl | null {
    const urls = localStorage.getItem("URLS");

    if (urls === null) {
        return null;
    }

    const urlsArray: ShortUrl[] = JSON.parse(urls);
    const shortUrl = urlsArray.find((el) => el.id === id);

    return shortUrl !== undefined ? shortUrl : null;
}

function deleteUrl(id: string): void {
    const urls = localStorage.getItem("URLS");

    if (urls === null) {
        return;
    }

    const urlsArray: ShortUrl[] = JSON.parse(urls);

    const filteredUrlsArray = urlsArray.filter((el) => el.id !== id);

    if (filteredUrlsArray.length > 0) {
        localStorage.setItem("URLS", JSON.stringify(filteredUrlsArray));
    } else {
        localStorage.removeItem("URLS");
    }
}

export { store, list, get, deleteUrl };
