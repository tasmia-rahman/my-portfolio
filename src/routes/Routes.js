import { createBrowserRouter } from "react-router-dom";
import Main from './../layout/Main';
import Error from "../components/Shared/Error/Error";
import Home from '../components/Home/Home';

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
            }
        ]
    },
    {
        path: '*',
        element: <Error></Error>
    }
])