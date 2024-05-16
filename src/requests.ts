export async function getNoticias() {
    const response = await fetch("http://localhost:8080/noticias");
    const noticias = await response.json();
    return noticias;
}

export async function getComentarios(noticiaId: number) {
    const response = await fetch(`http://localhost:8080/noticias/${noticiaId}/comentarios`);
    const comentarios = await response.json();
    return comentarios;
}