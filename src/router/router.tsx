import { createBrowserRouter, Navigate, RouteObject } from "react-router-dom";
import { App } from "../App";
import { RootView } from "../views";


export const routes: RouteObject[] = [
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/*',
                element: <Navigate to={'/'} />,
            },
            {
                index: true,
                element: <RootView />,
            },

        ]
    }
]

export const router = createBrowserRouter(routes)

