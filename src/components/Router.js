import {createBrowserRouter,createHashRouter} from "react-router-dom";

import Index from '../screens/index'
import { Convite } from "../screens/convite";

import { Layout } from "./Layout";

const rota = createHashRouter([
    {
        path: "/",
        element: <Layout><Index /></Layout>,
    },
    {
        path: "/Convite",
        element: <Layout><Convite /></Layout>,
    },
]);

export {rota};