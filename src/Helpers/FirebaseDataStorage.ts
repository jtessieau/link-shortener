import { ShortUrl } from "../Types/ShortUrl.type";
import IDataStorage from "./IDataStorage";

import {
    collection,
    doc,
    // addDoc,
    setDoc,
    getDoc,
    getDocs,
    deleteDoc,
    Firestore,
} from "firebase/firestore";

export class FirebaseDataStorage implements IDataStorage {
    private db: Firestore;
    private table: string;

    constructor(db: Firestore) {
        this.db = db;
        this.table = "shortUrls";
    }

    public async storeUrl(shortUrl: ShortUrl): Promise<void> {
        await setDoc(doc(this.db, this.table, shortUrl.id), {
            url: shortUrl.url,
            description: shortUrl.descritpion,
        });
    }

    public async getOneUrl(id: string): Promise<ShortUrl | null> {
        const docRef = doc(this.db, this.table, id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            console.log(docSnap.data());

            return {
                id: id,
                url: docSnap.data().url,
                descritpion: docSnap.data().description,
            };
            // return docSnap.data();
        } else {
            return null;
        }
    }

    public async getUrlsArray(): Promise<ShortUrl[]> {
        const querySnapshot = await getDocs(collection(this.db, this.table));

        const returnArray: ShortUrl[] = [];

        querySnapshot.forEach((doc) => {
            returnArray.push({
                id: doc.id,
                url: doc.data().url,
                descritpion: doc.data().description,
            });
        });

        return returnArray;
    }

    public async deleteUrl(shortUrl: ShortUrl): Promise<void> {
        await deleteDoc(doc(this.db, this.table, shortUrl.id));
    }
}
