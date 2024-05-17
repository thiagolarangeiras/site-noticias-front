import { useState } from 'react';

import { postComentario, comentarioDtoPost } from '../requests';

export default function CriarNoticia({ idNoticia }) {
    const [formData, setFormData] = useState({
        usuario: "",
        texto: "",
    });

    function subitForm(event) {
        event.preventDefault();
        const dados: comentarioDtoPost = {
            usuario: formData.usuario, 
            texto: formData.texto,
        }; 
        postComentario(idNoticia, dados);
    }

    return (
        <form action="#" method="post" onSubmit={subitForm}>
            <fieldset>
                <h3>Criar Comentario</h3>
                <div>
                    <label htmlFor="usuario">Usuario:</label>
                    <input
                        type="text"
                        id="usuario"
                        value={formData.usuario}
                        onChange={(event) =>
                            setFormData({ ...formData, usuario: event.target.value })
                        }
                    />
                </div>
                <div >
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