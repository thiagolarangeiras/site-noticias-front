import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { NoticiaList } from '../components/Noticia';
import { getNoticias } from "../requests"

export type Comentario = {
    id: number;
    usuario: string;
    texto: string;
    data: string;
};

export type Dados = [{
    id: number;
    titulo: string;
    autor: string;
    texto: string;
    data: string;
    //comentarios: any[]
}];

export default function ListarNoticias() {
    const { id } = useParams();
    const [ dados, setDados ] = useState<Dados>();

    useEffect(() => {
        getNoticias().then((value)=> {
            setDados(value);
        });
    }, []);
    
    return (
        <div className="border p-3 mb-3 d-flex flex-row justify-content-between">
            <div className="m-2">
                <NoticiaList noticias={dados}/>
            </div>
        </div>
    );
}