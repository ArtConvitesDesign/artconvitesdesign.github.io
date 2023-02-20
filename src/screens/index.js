import React, { useState, useEffect } from "react";

import '../Styles/Content.css'

import { CardConfig } from "../config/CardConfig";

import Card from '../components/Card'
import { Header } from '../components/Header'
import { Col } from "react-bootstrap";

export default Index => {
    const [valorFiltro, setValorFiltro] = useState(0);
    const [ehFiltro, setEhFiltro] = useState(false);

    function onChangeFiltro(e)
    {
        setEhFiltro(true);
        setValorFiltro(e.target.value);
    }

    return (
        <>
            <Header func={onChangeFiltro}/>
            <div className="content" id="content">
                {CardConfig(ehFiltro, valorFiltro).map(item => {
                    return (
                        <div style={{ padding: '10px' }} key={item.Id}>
                            <Card Img={item.Img[item.NomeImg]} Titulo={item.Titulo} Texto={item.Texto} Id={item.Id} />
                        </div>
                    );
                })}
            </div>
        </>
    );
}