import React from 'react'
import { createBrowserRouter } from "react-router-dom";
import Login from './Login';
import Browse from './Browse';
import { RouterProvider } from "react-router-dom";

const Body = () => {

    const router = createBrowserRouter([
        {
            path: "/",
    element: <Login />
        },    {
            path: "/browser",
    element: <Browse />
        }
    ])

    return (
        <div>
<RouterProvider router={router} />
        </div>
    )
}

export default Body
