export async function getNoticias() {
    const response = await fetch("http://localhost:8080/noticias");
    const noticias = await response.json();
    return noticias;
}