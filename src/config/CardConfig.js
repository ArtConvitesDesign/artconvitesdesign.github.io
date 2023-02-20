import Fisico1 from '../img/fisico1.png';
import Fisico2 from '../img/fisico2.png';
import Digital1 from '../img/digital1.png';
import Princesa1 from '../img/princesa1.png';
import Chabebe1 from '../img/chabebe1.png';
import Charevelacao1 from '../img/charevelacao1.png';

//1 = Casamento
//2 = aniversario
//

const convites = [
    {
        Titulo: 'Convite de casamento físico',
        Texto: 'R$ 3,00 Un.',
        Img: { Fisico1 },
        NomeImg: 'Fisico1',
        Id: 1
        , Descricao: 'Convite básico para casamento. Entregamos em todo território nacional. Pode ser personalizado. Pedido mínimo: 10 Un.'
        , Categoria: 1
    },
    {
        Titulo: 'Convite de casamento digital',
        Texto: 'R$ 25,00 Un.',
        Img: { Digital1 },
        NomeImg: 'Digital1',
        Id: 2,
        Descricao: 'Convite digital para casamento. Entregamos no formato de PDF. Pode ser personalizado. Pedimos um prazo de 7 dias para entrega. Pedido mínimo: 1 Un.'
        , Categoria: 1
    },
    {
        Titulo: 'Convite de casamento físico',
        Texto: 'R$ 3,50 Un.',
        Img: { Fisico2 },
        NomeImg: 'Fisico2',
        Id: 3,
        Descricao: 'Convite para casamento. Entregamos em todo território nacional. Pode ser personalizado. Pedido mínimo: 10 Un.'
        , Categoria: 1
    },
    {
        Titulo: 'Convite de aniversario infantil',
        Texto: 'R$ 2,50 Un.',
        Img: { Princesa1 },
        NomeImg: 'Princesa1',
        Id: 4,
        Descricao: 'Convite aniversario infanti de princesa. Entregamos em todo território nacional. Pode ser personalizado. Pedido mínimo: 10 Un.'
        , Categoria: 2
    },
    {
        Titulo: 'Convite de chá de bebê/Revelação',
        Texto: 'R$ 2,50 Un.',
        Img: { Chabebe1 },
        NomeImg: 'Chabebe1',
        Id: 5,
        Descricao: 'Convite de chá de bebê/Revelação. Entregamos em todo território nacional. Pode ser personalizado. Pedido mínimo: 10 Un.'
        , Categoria: 4
    },
    {
        Titulo: 'Convite de chá de bebê/Revelação',
        Texto: 'R$ 2,50 Un.',
        Img: { Charevelacao1 },
        NomeImg: 'Charevelacao1',
        Id: 6,
        Descricao: 'Convite de chá de bebê/Revelação. Entregamos em todo território nacional. Pode ser personalizado. Pedido mínimo: 10 Un.'
        , Categoria: 4
    },
];


export function CardConfig(ehFiltro, valorFiltro) {
    if (ehFiltro) {
        if(parseInt(valorFiltro) === 0)
        {
            return convites;
        }
        return convites.filter(x=> x.Categoria === parseInt(valorFiltro));
    }

    return convites;
}

