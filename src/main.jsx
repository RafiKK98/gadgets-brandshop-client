import React from 'react'
import ReactDOM from 'react-dom/client'
import {
    RouterProvider,
} from "react-router-dom";
import './index.css'
import AuthProvider from './providers/AuthProvider';
import router from './routes/AllRoutes';



ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <AuthProvider>
            <RouterProvider router={router}>

            </RouterProvider>
        </AuthProvider>
    </React.StrictMode>,
)
