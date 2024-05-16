import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ListarNoticias from "./screens/ListarNoticias";
import VisualizarNoticia from "./screens/VisualizarNoticia";
import './index.css'

const router = createBrowserRouter([
    {
        path: "/",
        element: <ListarNoticias />   
    },
    {
        path: "/noticia/:id",
        element: <VisualizarNoticia  />
    }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>,
)