// CASAMENTO
import Fisico1 from '../img/fisico1.png';
import Fisico2 from '../img/fisico2.png';
import Digital1 from '../img/digital1.png';
import Casamento4 from '../img/casamento4.png';
import Casamento5 from '../img/casamento5.png';
//aniversario
import Princesa1 from '../img/princesa1.png';
import Aniversario1 from '../img/aniversario1.png';
import Aniversario2 from '../img/aniversario2.png';
//cha de bebe
import Chabebe1 from '../img/chabebe1.png';
import Chabebe2 from '../img/chabebe2.png';
import Chabebe3 from '../img/chabebe3.png';
import Charevelacao1 from '../img/charevelacao1.png';
//15 anos

//outros
import ConvitePersonalizado from '../img/ConvitePersonalizado.png';


const convites = [
    {
        Titulo: 'Convite de casamento físico',
        Texto: 'R$ 2,99 Un.',
        Img: { Fisico1 },
        NomeImg: 'Fisico1',
        Id: 1
        , Descricao: 'Convite básico para casamento. Entregamos em todo território nacional. Pode ser personalizado.  Vem com envelope. Pedido mínimo: 10 Un'
        , Categoria: 1
    },
    {
        Titulo: 'Convite de casamento digital',
        Texto: 'R$ 24,99 Un.',
        Img: { Digital1 },
        NomeImg: 'Digital1',
        Id: 2,
        Descricao: 'Convite digital para casamento. Entregamos no formato de PDF. Pode ser personalizado. Pedimos um prazo de 7 dias para entrega. Pedido mínimo: 1 Un'
        , Categoria: 1
    },
    {
        Titulo: 'Convite de casamento físico',
        Texto: 'R$ 3,49 Un.',
        Img: { Fisico2 },
        NomeImg: 'Fisico2',
        Id: 3,
        Descricao: 'Convite para casamento. Entregamos em todo território nacional. Pode ser personalizado.  Vem com envelope. Pedido mínimo: 10 Un'
        , Categoria: 1
    },
    {
        Titulo: 'Convite de aniversario infantil',
        Texto: 'R$ 2,29 Un.',
        Img: { Princesa1 },
        NomeImg: 'Princesa1',
        Id: 4,
        Descricao: 'Convite aniversário infantil de princesa. Entregamos em todo território nacional. Pode ser personalizado. Pedido mínimo: 10 Un'
        , Categoria: 2
    },
    {
        Titulo: 'Convite de chá de bebê/Revelação',
        Texto: 'R$ 2,49 Un.',
        Img: { Chabebe1 },
        NomeImg: 'Chabebe1',
        Id: 5,
        Descricao: 'Convite de chá de bebê/Revelação. Entregamos em todo território nacional. Pode ser personalizado. Pedido mínimo: 10 Un'
        , Categoria: 4
    },
    {
        Titulo: 'Convite de chá de bebê/Revelação',
        Texto: 'R$ 2,39 Un.',
        Img: { Charevelacao1 },
        NomeImg: 'Charevelacao1',
        Id: 6,
        Descricao: 'Convite de chá de bebê/Revelação. Entregamos em todo território nacional. Pode ser personalizado. Pedido mínimo: 10 Un'
        , Categoria: 4
    },
    {
        Titulo: 'Convite de casamento físico',
        Texto: 'R$ 2,49 Un.',
        Img: { Casamento5 },
        NomeImg: 'Casamento5',
        Id: 7,
        Descricao: 'Convite de casamento físico. Entregamos em todo território nacional. Pode ser personalizado.  Vem com envelope. Pedido mínimo: 10 Un'
        , Categoria: 1
    },
    {
        Titulo: 'Convite de casamento físico',
        Texto: 'R$ 2,49 Un.',
        Img: { Casamento4 },
        NomeImg: 'Casamento4',
        Id: 8,
        Descricao: 'Convite de casamento físico. Entregamos em todo território nacional. Pode ser personalizado. Vem com envelope .Pedido mínimo: 10 Un'
        , Categoria: 1
    },
    {
        Titulo: 'Convite de chá de bebê/Revelação',
        Texto: 'R$ 2,49 Un.',
        Img: { Chabebe3 },
        NomeImg: 'Chabebe1',
        Id: 9,
        Descricao: 'Convite de chá de bebê/Revelação. Entregamos em todo território nacional. Pode ser personalizado. Pedido mínimo: 10 Un'
        , Categoria: 4
    },
    {
        Titulo: 'Convite de chá de bebê/Revelação',
        Texto: 'R$ 2,49 Un.',
        Img: { Chabebe2 },
        NomeImg: 'Chabebe1',
        Id: 10,
        Descricao: 'Convite de chá de bebê/Revelação. Entregamos em todo território nacional. Pode ser personalizado. Pedido mínimo: 10 Un'
        , Categoria: 4
    },
    {
        Titulo: 'Convite personalizado',
        Texto: 'Valor sob pedio.',
        Img: { ConvitePersonalizado },
        NomeImg: 'ConvitePersonalizado',
        Id: 10,
        Descricao: 'Convite personalizado a gosto do cliente. Entregamos em todo território nacional. Pedido mínimo: 10 Un'
        , Categoria: 0
    },
    {
        Titulo: 'Convite de aniversario infatil',
        Texto: 'R$ 2,29 Un.',
        Img: { Aniversario1 },
        NomeImg: 'Princesa1',
        Id: 11,
        Descricao: 'Convite aniversário infantil do sonic . Entregamos em todo território nacional. Pode ser personalizado. Pedido mínimo: 10 Un'
        , Categoria: 2
    },
    {
        Titulo: 'Convite de aniversario infantil',
        Texto: 'R$ 2,49 Un.',
        Img: { Aniversario2 },
        NomeImg: 'Aniversario2',
        Id: 12,
        Descricao: 'Convite aniversário. Entregamos em todo território nacional. Pode ser personalizado. Pedido mínimo: 10 Un'
        , Categoria: 2
    },
];


export function CardConfig(ehFiltro, valorFiltro) {
    if (ehFiltro) {
        if (parseInt(valorFiltro) === 0) {
            return convites;
        }
        return convites.filter(x => x.Categoria === parseInt(valorFiltro));
    }

    return convites;
}

