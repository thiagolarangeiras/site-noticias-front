
export default function ListaComentarios() {
    return (
        <>
            <ComentarioCard usuario={"a"} texto={"a"} data={"a"} />
            <ComentarioCard usuario={"a"} texto={"a"} data={"a"} />
            <ComentarioCard usuario={"a"} texto={"a"} data={"a"} />
            {/* // {items.map((item, index) => (
      //     <ItemCard id={index} item={item} setItems={setItems} />
      // ))} */}
        </>
    );
}

export function ComentarioCard({ usuario, texto, data }) {
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
