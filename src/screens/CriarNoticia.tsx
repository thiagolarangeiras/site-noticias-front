import { useState } from 'react';

import { postNoticia, noticiaDtoPost } from '../requests';

export default function CriarNoticia() {
    const [formData, setFormData] = useState({
        autor: "",
        titulo: "",
        texto: "",
    });

    function subitForm(event) {
        event.preventDefault();
        const dados: noticiaDtoPost = {
            autor: formData.autor,
            titulo: formData.titulo,
            texto: formData.texto,
        }; 
        postNoticia(dados);
    }

    return (
        <form action="#" method="post" onSubmit={subitForm}>
            <fieldset>
                <h3>Criar noticia</h3>
                <div>
                    <label htmlFor="autor">Autor:</label>
                    <input
                        type="text"
                        id="autor"
                        value={formData.autor}
                        onChange={(event) =>
                            setFormData({ ...formData, autor: event.target.value })
                        }
                    />
                </div>
                <div >
                    <label htmlFor="titulo">Titulo:</label>
                    <input
                        type="text"
                        id="titulo"
                        value={formData.titulo}
                        onChange={(event) =>
                            setFormData({ ...formData, titulo: event.target.value })
                        }
                    />
                </div>
                <div>
                    <label htmlFor="texto">Texto:</label>
                    <input
                        type="text"
                        id="texto"
                        value={formData.texto}
                        onChange={(event) =>
                            setFormData({ ...formData, texto: event.target.value })
                        }
                    />
                </div>
                <button type="submit">
                    Adicionar
                </button>
            </fieldset>
        </form>
    );
}