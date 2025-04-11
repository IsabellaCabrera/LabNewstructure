const usersBtn = document.getElementById('users-btn'); // Botón para obtener la lista de usuarios
const postsBtn = document.getElementById('posts-btn'); // Botón para obtener la lista de posts

// Asigna la función getUsers() al evento click del botón de usuarios
usersBtn.addEventListener('click', getUsers);

// Función para obtener los usuarios desde el backend
async function getUsers() {
    const res = await fetch('/users'); // Realiza la petición GET a /users

    if (res.ok) {
        const data = await res.json(); // Convierte la respuesta en JSON
        console.log(data); // Muestra los datos en la consola (puede eliminarse en producción)
        const users = data.users;
        renderUsers(users); // Llama a la función para mostrar los usuarios en pantalla
    }
}

// Función para renderizar la lista de usuarios en el DOM
function renderUsers(data) {
    const usersContainer = document.getElementById('users-container');
    usersContainer.innerHTML = ''; // Vacía el contenedor antes de agregar nuevos datos

    data.forEach(user => {
        const card = document.createElement('article'); // Crea un elemento para cada usuario
        card.innerHTML = `
        <p>Email: <span>${user.email}</span></p>
        <p>Name: <span>${user.name}</span></p>
        `;
        usersContainer.appendChild(card); // Agrega la tarjeta al contenedor
    });
}

// Asigna la función getPosts() al evento click del botón de posts
postsBtn.addEventListener('click', getPosts);

// Función para obtener los posts desde el backend
async function getPosts() {
    const res = await fetch('/posts'); // Realiza la petición GET a /posts

    if (res.ok) {
        const data = await res.json(); // Convierte la respuesta en JSON
        console.log(data); // Muestra los datos en la consola (puede eliminarse en producción)
        const posts = data.posts;
        renderPosts(posts); // Llama a la función para mostrar los posts en pantalla
    }
}

// Función para renderizar la lista de posts en el DOM
function renderPosts(data) {
    const postsContainer = document.getElementById('posts-container');
    postsContainer.innerHTML = ''; // Vacía el contenedor antes de agregar nuevos datos

    data.forEach(post => {
        const card = document.createElement('article'); // Crea un elemento para cada post
        card.innerHTML = `
        <img src="${post.img}" alt="${post.title}"/>
        <p>Title: <span>${post.title}</span></p>
        <p>Description: <span>${post.desc}</span></p>
        `;
        postsContainer.appendChild(card); // Agrega la tarjeta al contenedor
    });
}
