import {createBrowserRouter,createHashRouter} from "react-router-dom";

import Index from '../screens/index'
import { Convite } from "../screens/convite";

import { Layout } from "./Layout";
import { NotFound } from "../screens/404";
import { NovoCard } from "../screens/NovoCard";

const rota = createHashRouter([
    {
        path: "/",
        element: <Layout><Index /></Layout>,
    },
    {
        path: "/Convite",
        element: <Layout><Convite /></Layout>,
    },
    {
        path: "*",
        element: <Layout><NotFound /></Layout>,
    },
    {
        path: "/adm",
        element: <Layout><NovoCard /></Layout>,
    },
]);

export {rota};