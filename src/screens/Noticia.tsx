export default function Noticia({ id }) {
    const titulo = "";
    const autor = "";
    const texto = "";
    const comentarios = [
        {
            "usuario": "eu",
            "texto": "texto"
        }
    ]
    
    return (
      <div className="border p-3 mb-3 d-flex flex-row justify-content-between">
        <div className="m-2">
          <h1>{titulo}</h1>
          <h3>{autor}</h3>
          <h3>{texto}</h3>
        </div>
        <div className="comentarios">
            {comentarios.map((comentario, index) => (
                <div key={index}>
                    {comentario.usuario}
                    <br/>
                    {comentario.texto}
                </div>
            ))}
        </div>
      </div>
    );
}