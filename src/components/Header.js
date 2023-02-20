import React from "react";
import { Container } from "react-bootstrap";
import '../Styles/Header.css'
import Logo from '../img/logo.png'
import { BiSearchAlt } from "react-icons/bi";

export const Header = (props) => {
    return (
        <div className="header-container">
            <Container>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '5px' }}>
                    <div className="logo-header">
                        <img className="img-header" src={Logo} />
                        <a href="/" style={{ textDecoration: 'none', color: '#fff', fontWeight: 'bold' }}>ArtConvites Design</a>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <div>
                            <label style={{ color: '#fff', fontWeight: 'bold', padding: '5px' }}>Categorias</label>
                        </div>
                        <div>
                            <select className="form-control" onChange={props?.func}>
                                <option selected value={0}>TODOS</option>
                                <option value={1}>CASAMENTO</option>
                                <option value={2}>ANIVERSÁRIO</option>
                                <option value={3}>15 ANOS</option>
                                <option value={4}>CHÁ DE BEBÊ / REVELAÇÃO</option>
                            </select>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}