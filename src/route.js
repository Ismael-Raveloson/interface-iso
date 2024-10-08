import React from "react";
import Auth from "./page/Auth/Auth";
import Home from "./page/Home/Home";
import Brouillon from "./page/Brouillon/Brouillon";
import Creation from "./page/Creation/Creation";
import DocumentValable from "./page/Home/DocumentValable";
import Processus from "./components/creation/Processus";
import Edition from "./page/Creation/Edition";

export const routes = [
    {
        path : '/',
        element : <Auth />
    },
    {
        path : '/home',
        element : <Home />
    },
    {
        path : '/brouillon',
        element : <Brouillon />
    },
    {
        path : '/valable/:identifiant',
        element : <DocumentValable></DocumentValable>
    },
    {
        path : '/creation',
        element : <Creation />
    },
    {
        path : '/processus',
        element : <Processus/>
    },
    {
        path : '/edition',
        element : <Edition/>
    }

]