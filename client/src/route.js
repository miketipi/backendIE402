import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import TrangChu from "./components/TrangChu/TrangChu"

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <TrangChu />
            },
            {
                path: '/login',
                element: <TrangChu/>
            },
            {
                path: '/contact',
                element: <TrangChu/>
            },
            {
            path: '/register',
            element: <TrangChu/>
            }
        ]
    }
]);

export default router;