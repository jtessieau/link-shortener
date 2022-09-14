import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Dashboard from "./Pages/Dashboard";
import Layout from "./Shared/Layout";
import CreateShortLink from "./Pages/Dashboard/CreateShortLink";
import UrlDisplay from "./Pages/UrlDisplay";
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <Router>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route path='/' element={<Homepage />} />
                    <Route path='/dashboard' element={<Dashboard />} />
                    <Route path='/dashboard'>
                        <Route path='create' element={<CreateShortLink />} />
                    </Route>

                    <Route path='/:url' element={<UrlDisplay />} />
                </Route>
            </Routes>
        </Router>
    </React.StrictMode>
);
