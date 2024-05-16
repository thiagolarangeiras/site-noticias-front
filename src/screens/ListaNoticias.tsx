import { Link } from "react-router-dom";

export default function ListaNoticias() {
  return (
    <>
    <NoticiaCard id={1} titulo={"Noticia 1"} autor={"autor 1"}/>
    <NoticiaCard id={1} titulo={"Noticia 2"} autor={"autor 1"}/>
    <NoticiaCard id={1} titulo={"Noticia 2"} autor={"autor 2"}/>
    {/* // {items.map((item, index) => (
    //     <ItemCard id={index} item={item} setItems={setItems} />
    // ))} */}
    </>
  );
}

function NoticiaCard({ id, titulo, autor }) {
  return (
    <div className="border p-3 mb-3 d-flex flex-row justify-content-between">
      <Link to="/noticia/1">
      <div className="m-2">
        <h1>{titulo}</h1>
        <h6>{autor}</h6>
      </div>
      </Link>
    </div>
  );
}
