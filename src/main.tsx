import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Dashboard from "./Pages/Dashboard";
import Layout from "./Shared/Layout";
import UrlDisplay from "./Pages/UrlDisplay";
import IDataStorage from "./Helpers/IDataStorage";
import LocalDataStorage from "./Helpers/LocalDataStorage";

const DataStorage: IDataStorage = new LocalDataStorage();

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
