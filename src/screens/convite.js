import React, { useEffect } from "react";
import { CardConfig } from "../config/CardConfig";
import { AiOutlineWhatsApp, AiOutlineInstagram, AiFillBackward } from "react-icons/ai";
import Logo from '../img/logo.png'
import { Header } from "../components/Header";
import '../components/Convite-Script'
import '../Styles/Convite.css'
export const Convite = () => {

    const Id = document.location.hash.substring(18)
    
    const card = CardConfig().find(x => x.Id === parseInt(Id));
    if(card === null || card === undefined) {window.location.href = '#/*'}


    setTimeout(()=>{
        const div = document.getElementById('convite-img');
        const img = document.getElementById('img-convite');
        if (div != null && img != null) {
            div.addEventListener('mousemove', (e) => {
                const x = e.clientX - e.target.offsetLeft;
                const y = e.clientY - e.target.offsetTop;
                img.style.transformOrigin = `${x}px ${y}px`;
                img.style.transform = 'scale(2)';
                div.style.cursor = 'zoom-in';
            })
            
            div.addEventListener('mouseleave', (e) => {
                img.style.transformOrigin = "center center";
                img.style.transform = 'scale(1)';
            })
        }
    },100)

    return (
        <>
            <div style={{ display: 'flex',justifyContent:'center',alignItems:'center' }} id='content-convite'>
                <div style={{ width: '80vw', height: '80vh' }}>
                    <div>
                        <a href="#" onClick={() => window.history.back()}><AiFillBackward size={30} /></a>
                    </div>
                    <div>
                        <label style={{ opacity: 0.7 }}>Foto do produto:</label>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} id='convite-img'>
                        <img src={card?.Img[card?.NomeImg]} id='img-convite' />
                    </div>
                    <div style={{ padding: '10px', borderTop: '1px solid rgb(199 196 196)' }}>
                        <div>
                            <label style={{ opacity: 0.7 }}>Descrição:</label>
                        </div>
                        <div>
                            {
                                card?.Descricao.split('.').map(x => {
                                    return <h6>{x}.</h6>
                                })
                            }
                        </div>
                    </div>
                </div>
                <div className="contatos-convite">
                    <div>
                        <label style={{ opacity: 0.7 }}>Contatos:</label>
                    </div>
                    <div className="img-logo-convite">
                        <img style={{ width: '18rem', height: '100%' }} src={Logo} />
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '10px' }}>
                        <a  href={`https://wa.me/5531971465201?text=Oi%20gostaria%20de%20conversar%20sobre%20o%20convite%20do%20c%C3%B3digo:${Id}`} target='_blank' className="btn btn-primary">ENVIAR MENSAGEM<AiOutlineWhatsApp size={30} /></a>
                        <a href="https://www.instagram.com/_artconvites.design" target='_blank' className="btn btn-secondary">ENVIAR MENSAGEM<AiOutlineInstagram size={30} color='#fff' /></a>
                    </div>
                </div>
            </div>
        </>
    );
}