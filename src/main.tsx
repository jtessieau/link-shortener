import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Dashboard from "./Pages/Dashboard";
import Layout from "./Shared/Layout";
import UrlDisplay from "./Pages/UrlDisplay";

import IDataStorage from "./Helpers/IDataStorage";
// import LocalDataStorage from "./Helpers/LocalDataStorage";
import { FirebaseDataStorage } from "./Helpers/FirebaseDataStorage";

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: import.meta.env.VITE_API_KEY,
    authDomain: import.meta.env.VITE_AUTH_DOMAIN,
    databaseURL: import.meta.env.VITE_DATABASE_URL,
    projectId: import.meta.env.VITE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_APP_ID,
};

console.log(firebaseConfig);

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// const DataStorage: IDataStorage = new LocalDataStorage();
const DataStorage: IDataStorage = new FirebaseDataStorage(db);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <Router>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route path='/' element={<Homepage />} />
                    <Route
                        path='/dashboard'
                        element={<Dashboard DataStorage={DataStorage} />}
                    />

                    <Route
                        path='/:url'
                        element={<UrlDisplay DataStorage={DataStorage} />}
                    />
                </Route>
            </Routes>
        </Router>
    </React.StrictMode>
);
