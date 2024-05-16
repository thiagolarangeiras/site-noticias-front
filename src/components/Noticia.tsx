import { Link } from "react-router-dom";

export type PropsNoticia = {
    noticias: PropsNoticiaCard[] | any[] | undefined;
};

export function NoticiaList({ noticias }: PropsNoticia) {
    return (
        <>
        {noticias?.map((noticia, index) => (
            <NoticiaCard 
                index={index} 
                id={noticia.id} 
                titulo={noticia.titulo} 
                autor={noticia.autor} 
            />
        ))}
        </>
    );
}

export type PropsNoticiaCard = {
    index: number;
    id: number;
    titulo: string;
    autor: string;
}

export function NoticiaCard({ id, titulo, autor }: PropsNoticiaCard) {
    return (
        <Link to={`/noticia/${id}`}>
            <div className="border p-3 mb-3 d-flex flex-row justify-content-between">
                <div className="m-2">
                    <h1>{titulo}</h1>
                    <h6>{autor}</h6>
                </div>
            </div>
        </Link>
    );
}