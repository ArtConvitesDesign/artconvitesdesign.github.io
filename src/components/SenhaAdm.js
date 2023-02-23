import React, { useState } from "react";
import { AiFillEye,AiFillEyeInvisible } from "react-icons/ai";

export const SenhaAdm = (props) => {

    const container = { display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '40rem' };
    const p = { padding: '10px' };
    const { onChange, ValSenha, onClick } = props;
    const [verSenha,setVerSenha] = useState(false);

    const onChangeVisualizar = () => setVerSenha(!verSenha); 

    return (
        <div style={container}>
            <div style={{ width: '350px', border: '2px solid', padding: '20px', borderRadius: '10%' }}>
                <div style={p}>
                    <label style={{ fontWeight: 'bold' }}>Digite a senha de adm.</label>
                </div>
                <div style={p}>
                    <div style={{ display: 'flex' }}>
                        <input onChange={onChange} value={ValSenha} type={verSenha? 'text' : 'password'} className="form-control" placeholder="Digite a senha de adm." />
                    <button onClick={()=> onChangeVisualizar()} className="btn">{verSenha ? <AiFillEyeInvisible/> : <AiFillEye/>}</button>
                    </div>
                </div>
                <button style={{ width: '100%' }} onClick={onClick} className="btn btn-danger">Enviar</button>
            </div>
        </div>
    );
}