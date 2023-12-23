import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import TrangChu from "./components/TrangChu/TrangChu"
import { RegisterForm } from "./components/Register/register";
import { LoginForm } from "./components/Login/login";

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
                element: <LoginForm />
            },
            {
                path: '/contact',
                element: <TrangChu />
            },
            {
                path: '/register',
                element: <RegisterForm />
            }
        ]
    }
]);

export default router;