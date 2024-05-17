// const init: RequestInit = {
//     method: "POST", // *GET, POST, PUT, DELETE, etc.
//     mode: "cors", // no-cors, *cors, same-origin
//     cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
//     credentials: "same-origin", // include, *same-origin, omit
//     headers: {
//         "Content-Type": "application/json",
//         // 'Content-Type': 'application/x-www-form-urlencoded',
//     },
//     redirect: "follow", // manual, *follow, error
//     referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
//     body: JSON.stringify(data), // body data type must match "Content-Type" header
// };

const url = "http://localhost:8080";

export type noticiaDtoPost = {
    autor: string;
    titulo: string;
    texto: string;
};

export type noticiaDtoPut = {
    autor: string;
    titulo: string;
    texto: string;
    data: string; 
};

export type comentarioDtoPost = {
    usuario: string;
    texto: string
};

export type comentarioDtoPut = {
    texto: string;
};

export async function getNoticias() {
    const init: RequestInit = {
        method: "GET",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        redirect: "follow",
        referrerPolicy: "no-referrer",
    };
    const response = await fetch(`${url}/noticias`, init);
    return await response.json();
}

export async function postNoticia(dados: noticiaDtoPost) {
    const init: RequestInit = {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: { "Content-Type": "application/json" },
        redirect: "follow",
        referrerPolicy: "no-referrer",
        body: JSON.stringify(dados),
    };
    const response = await fetch(`${url}/noticias`, init);
    return await response.json();
}

export async function putNoticia(idNoticia: number, dados: noticiaDtoPut) {
    const init: RequestInit = {
        method: "PUT",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: { "Content-Type": "application/json" },
        redirect: "follow",
        referrerPolicy: "no-referrer",
        body: JSON.stringify(dados),
    };
    const response = await fetch(`${url}/noticias/${idNoticia}`, init);
    return await response.json();
}

export async function deleteNoticia(idNoticia: number) {
    const init: RequestInit = {
        method: "DELETE",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        redirect: "follow",
        referrerPolicy: "no-referrer",
    };
    const response = await fetch(`${url}/noticias/${idNoticia}`, init);
    return await response.json();
}

export async function getComentarios(idNoticia: number) {
    const init: RequestInit = {
        method: "GET",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        redirect: "follow",
        referrerPolicy: "no-referrer",
    };
    const response = await fetch(`${url}/noticias/${idNoticia}/comentarios`, init);
    return await response.json();
}

export async function postComentario(idNoticia: number, dados: comentarioDtoPost) {
    const init: RequestInit = {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: { "Content-Type": "application/json" },
        redirect: "follow",
        referrerPolicy: "no-referrer",
        body: JSON.stringify(dados),
    };
    const response = await fetch(`${url}/noticias/${idNoticia}/comentarios`, init);
    return await response.json();
}

export async function putComentario(idNoticia: number, idComentario: number, dados: comentarioDtoPut) {
    const init: RequestInit = {
        method: "PUT",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: { "Content-Type": "application/json" },
        redirect: "follow",
        referrerPolicy: "no-referrer",
        body: JSON.stringify(dados),
    };
    const response = await fetch(`${url}/noticias/${idNoticia}/comentarios/${idComentario}`, init);
    return await response.json();
}

export async function deleteComentario(idNoticia: number, idComentario: number) {
    const init: RequestInit = {
        method: "DELETE",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        redirect: "follow",
        referrerPolicy: "no-referrer",
    };
    const response = await fetch(`${url}/noticias/${idNoticia}/comentarios/${idComentario}`, init);
    return await response.json();
}