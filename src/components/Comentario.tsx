type PropsComentario = {
    comentarios: PropsComentarioCard[] | any[] | undefined;
};

export function ComentarioList({ comentarios }: PropsComentario) {
    return (
        <>
        {comentarios?.map((comentario, index) => (
            <ComentarioCard 
                index={index} 
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
    usuario: string;
    texto: string;
    data: string;
};

export function ComentarioCard({ index, usuario, texto, data }: PropsComentarioCard) {
    const index1 = index;
    return (
        <div className="border p-3 mb-3 d-flex flex-row justify-content-between">
            <div className="m-2">
                <h1>{usuario}</h1>
                <h6>{data}</h6>
                <h6>{texto}</h6>
            </div>
        </div>
    );
}