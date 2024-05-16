import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { ComentarioList } from '../components/Comentario';
import { getComentarios, getNoticias } from "../requests"

export type Comentario = {
    id: number;
    usuario: string;
    texto: string;
    data: string;
};

export type Dados = {
    id: number;
    titulo: string;
    autor: string;
    texto: string;
    data: string;
    comentarios: any[]
};

export default function VisualizarNoticia() {
    const { id } = useParams();
    const [ dados, setDados ] = useState<Dados>();
    const [ comentarios , setComentarios ] = useState<Comentario[]>();

    useEffect(() => {
        if (id == undefined) return;
        getNoticias().then((value)=> {
            setDados(value[parseInt(id)-1]);
        });
        getComentarios(parseInt(id)).then((value)=>{
            setComentarios(value);
        });
    }, []);
    
    return (
        <div className="border p-3 mb-3 d-flex flex-row justify-content-between">
            <div className="m-2">
                <h1>{id}</h1>
                <h1>{dados?.titulo}</h1>
                <h3>{dados?.autor}</h3>
                <h3>{dados?.texto}</h3>
                <h3>{dados?.data}</h3>
            </div>
            <ComentarioList comentarios={comentarios} />
        </div>
    );
}