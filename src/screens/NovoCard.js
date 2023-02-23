import React, { useState } from "react";
import { AdicionarCard } from "../components/AdicionarCard";
import { SenhaAdm } from "../components/SenhaAdm";


export const NovoCard = () => {
    const [valido, setValido] = useState(false);
    const [senha, setSenha] = useState('');
    const [senhaAdm] = useState('pkusnd157894623');
    const [form, setForm] = useState({
        Titulo: '',
        Texto: '',
        Img: '',
        Id: 0,
        Descricao: '',
        Categoria: '',
    });

    const onChangeSenha = e => setSenha(e.target.value);

    const onClickValidar = () => {
        const ehValido = senha === senhaAdm;
        setValido(ehValido);
        if (!ehValido) {
            alert('Senha inválida!')
        }
    };

    const onChangeForm = (e) => setForm([form[e.target.name] = e.target.value])

    const convertToBase64 = (file) => new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });

    const validaFomulario = () =>
    {

    }

    return (
        valido ? <AdicionarCard form={form} pnChange={onChangeForm}/> : <SenhaAdm onClick={onClickValidar} onChange={onChangeSenha} ValSenha={senha} />
    );
}