// --------------------- SECCIÓN HOME ---------------------
// Obtenemos las referencias a los elementos del DOM
const home = document.getElementById('home-section'); // Sección de inicio
const loginBtn = document.getElementById('login-btn'); // Botón para ir al login
const registerBtn = document.getElementById('register-btn'); // Botón para ir al registro
const goHomeBtns = document.querySelectorAll('.go-home'); // Botones para volver al home

// --------------------- SECCIONES LOGIN Y REGISTRO ---------------------
// Obtenemos las referencias a las secciones de autenticación
const loginSection = document.getElementById('login-section'); // Sección de inicio de sesión
const registerSection = document.getElementById('register-section'); // Sección de registro

// --------------------- SECCIÓN POSTS ---------------------
const postSection = document.getElementById('post-section'); // Sección de publicaciones

// --------------------- MANEJO DE EVENTOS ---------------------

// Cuando se hace clic en "Iniciar sesión", oculta el home y muestra la sección de login
loginBtn.addEventListener('click', () => {
    home.style.display = 'none';
    loginSection.style.display = 'block';
});

// Cuando se hace clic en "Registrarse", oculta el home y muestra la sección de registro
registerBtn.addEventListener('click', () => {
    home.style.display = 'none';
    registerSection.style.display = 'block';
});

// --------------------- MANEJO DE LOGIN ---------------------

// Capturamos los elementos del formulario de login
const form = document.getElementById('login-form');
const email = document.getElementById('email');
const password = document.getElementById('password');
const msg = document.getElementById('msg');

// Agregamos un evento al formulario para manejar el login
form.addEventListener('submit', async (e) => {
    e.preventDefault(); // Evita que la página se recargue

    // Creamos un objeto con los datos del usuario
    const user = { email: email.value, password: password.value };
    console.log(user);

    // Enviamos los datos al backend para autenticación
    const res = await fetch('/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    });

    const result = await res.json(); // Convertimos la respuesta a JSON

    if (result.success) {
        // Si el login es exitoso, mostramos la sección de posts y ocultamos el login
        postSection.style.display = 'block';
        loginSection.style.display = 'none';
    } else {
        // Si falla, mostramos el mensaje de error
        msg.innerText = `${result.message}`;
        msg.style.color = 'red';
        console.log(result.message);
    }
});

// --------------------- MANEJO DE REGISTRO ---------------------

// Capturamos los elementos del formulario de registro
const registerForm = document.getElementById('register-form');
const registerEmail = document.getElementById('register-email');
const userName = document.getElementById('register-name');
const registerPassword = document.getElementById('register-password');
const registerMsg = document.getElementById('register-msg');

// Agregamos un evento al formulario para manejar el registro
registerForm.addEventListener('submit', async (e) => {
    e.preventDefault(); // Evita que la página se recargue

    // Creamos un objeto con los datos del nuevo usuario
    const newUser = { 
        email: registerEmail.value, 
        name: userName.value, 
        password: registerPassword.value 
    };
    console.log(newUser);

    // Enviamos los datos al backend para registrar el usuario
    const res = await fetch('/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newUser)
    });

    const result = await res.json();

    if (result.success) {
        // Si el registro es exitoso, regresamos a la página de inicio
        registerSection.style.display = 'none';
        home.style.display = 'block';
    } else {
        // Si falla, limpiamos el formulario y mostramos el mensaje de error
        registerForm.reset();
        registerMsg.innerText = `${result.message}`;
        registerMsg.style.color = 'red';
    }
});

// --------------------- CREACIÓN DE POSTS ---------------------

// Capturamos los elementos del formulario de creación de post
const postForm = document.getElementById('post-form');
const img = document.getElementById('img');
const title = document.getElementById('title');
const desc = document.getElementById('desc');
const postMsg = document.getElementById('post-msg');

// Agregamos un evento al formulario para manejar la creación de posts
postForm.addEventListener('submit', async (e) => {
    e.preventDefault(); // Evita que la página se recargue

    // Creamos un objeto con los datos del nuevo post
    const post = { 
        img: img.value, 
        title: title.value, 
        desc: desc.value 
    };
    console.log(post);

    // Enviamos los datos al backend para guardar el post
    const res = await fetch('/create-post', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(post)
    });

    const result = await res.json();

    if (result.success) {
        // Si el post se crea con éxito, mostramos un mensaje y limpiamos el formulario
        postMsg.innerText = `${result.message}`;
        postMsg.style.color = 'green';
        console.log(result.message);
        postForm.reset();
    }
});

// --------------------- MANEJO DE BOTONES PARA VOLVER AL HOME ---------------------

// Agregamos eventos a todos los botones que regresan al home
goHomeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        home.style.display = 'block'; // Mostramos la página de inicio
        registerSection.style.display = 'none'; // Ocultamos la sección de registro
        loginSection.style.display = 'none'; // Ocultamos la sección de login
        postSection.style.display = 'none'; // Ocultamos la sección de posts
    });
});
