import { deleteComentario } from "../requests"; 

type PropsComentario = {
    idNoticia: number;
    comentarios: PropsComentarioCard[] | any[] | undefined;
};

export function ComentarioList({ idNoticia, comentarios }: PropsComentario) {
    return (
        <>
        {comentarios?.map((comentario, index) => (
            <ComentarioCard 
                index={index} 
                idNoticia={idNoticia}
                id={comentario.id}
                usuario={comentario.usuario} 
                texto={comentario.texto}
                data={comentario.data} 
            />
        ))}
        </>
    );
}

type PropsComentarioCard = {
    index: number;
    idNoticia: number;
    id: number;
    usuario: string;
    texto: string;
    data: string;
};

export function ComentarioCard({ index, idNoticia, id, usuario, texto, data }: PropsComentarioCard) {
    const index1 = index;
    return (
        <div className="border p-3 mb-3 d-flex flex-row justify-content-between">
            <div className="m-2">
                <h1>{usuario}</h1>
                <h6>{data}</h6>
                <h6>{texto}</h6>
            </div>
            <button type="button" onClick={() => { deleteComentario(idNoticia, id); }}>
                Deletar
            </button>
        </div>
    );
}