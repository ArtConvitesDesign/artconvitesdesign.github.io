import React, { useEffect, useState } from "react";
import { AdicionarCard } from "../components/AdicionarCard";
import { SenhaAdm } from "../components/SenhaAdm";

import { Adicionar, BuscarTodos } from "../bd/api";

export const NovoCard = () => {
    const [valido, setValido] = useState(true);
    const [senha, setSenha] = useState('');
    const [senhaAdm] = useState('pkusnd157894623');
    const [Texto, setTexto] = useState('');
    const [Descricao, setDescricao] = useState('');
    const [Titulo, setTitulo] = useState('');
    const [Categoria, setCategoria] = useState(0);
    const [Img, setImg] = useState();


    const onChangeSenha = e => setSenha(e.target.value);

    const onClickValidar = () => {
        const ehValido = senha === senhaAdm;
        setValido(ehValido);
        if (!ehValido) {
            alert('Senha inválida!')
        }
    };

    const onChangeForm = (e) => {
        if ('Texto' === e.target.name) {
            setTexto(e.target.value);
        }

        if ('Titulo' === e.target.name) {
            setTitulo(e.target.value);
        }

        if ('Descricao' === e.target.name) {
            setDescricao(e.target.value);
        }

        if ('Categoria' === e.target.name) {
            setCategoria(e.target.value);
        }
    }



    const validaFomulario = () => {
        if (Titulo === '') {
            alert('Preencha o campo título.');
            return false;
        } else if (Texto === '') {
            alert('Preencha o campo valor.');
            return false;
        } else if (Descricao === '') {
            alert('Preencha o campo Descricao.');
            return false;
        } else if (Categoria === 0) {
            alert('Selecione o campo Categoria.');
            return false;
        }
        return true;
    }

    const onChangeFile = e => {
        var file = document.querySelector(
            'input[type=file]')['files'][0];
        var reader = new FileReader();
        reader.onload = function () {
            var base64String = reader.result.replace("data:", "")
                .replace(/^.+,/, "");

            setImg(base64String);
        }
        reader.readAsDataURL(file);
    }

    const AdicionarConvite = async () => {
        if (validaFomulario()) {
            Adicionar({
                Titulo: Titulo,
                Texto: `R$ ${Texto} Un.`,
                Img: Img,
                Id: 0,
                Descricao: Descricao,
                Categoria: Categoria
            },);
        }
    }

    return (
        valido ? <AdicionarCard onChangeFile={onChangeFile} add={AdicionarConvite} form={{ Titulo, Texto, Categoria, Descricao }} onChange={onChangeForm} /> : <SenhaAdm onClick={onClickValidar} onChange={onChangeSenha} ValSenha={senha} />
    );
}