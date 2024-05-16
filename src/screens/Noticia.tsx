import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import ListaComentarios, { ComentarioCard } from './ListaComentarios';
import { getNoticias } from "./requestBuito"

type Dados = {
    titulo: string;
    autor: string;
    texto: string;
    data: Date;
};

export default function Noticia() {
    const { id } = useParams();
    const [ dados, setDados ] = useState<Dados>();

    useEffect(() => {
        getNoticias().then((value)=> {
            setDados(value);
        });
    }, [])

    
    const comentarios = [
        {
            "usuario": "eu",
            "texto": "texto",
            "data": "data"
        }
    ]

    return (
        <div className="border p-3 mb-3 d-flex flex-row justify-content-between">
            <div className="m-2">
                <h1>{id}</h1>
                <h1>{dados.titulo}</h1>
                <h3>{autor}</h3>
                <h3>{texto}</h3>
                <h3>{data}</h3>
            </div>
            <div className="comentarios">
                {comentarios.map((comentario, index) => (
                    <ComentarioCard usuario={comentario.usuario} texto={comentario.texto} data={comentario.data} />
                ))}
            </div>
        </div>
    );
}