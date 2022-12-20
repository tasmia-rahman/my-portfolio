import { createBrowserRouter } from "react-router-dom";
import Main from './../layout/Main';
import Error from "../components/Shared/Error/Error";
import Home from '../components/Home/Home';
import ProjectDetails from './../components/Projects/ProjectDetails/ProjectDetails';

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
            },
            {
                path: '/project/:id',
                element: <ProjectDetails></ProjectDetails>
            }
        ]
    },
    {
        path: '*',
        element: <Error></Error>
    }
])