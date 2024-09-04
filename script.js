// Obteniendo los elementos del DOM
const postForm = document.getElementById('postForm');
const postsContainer = document.getElementById('postsContainer');

// Array para almacenar las publicaciones
let posts = [];

// Función para agregar una nueva publicación
postForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;

    const newPost = {
        title,
        content,
        date: new Date().toLocaleDateString()
    };

    posts.push(newPost);
    renderPosts();
    postForm.reset();
});

// Función para renderizar las publicaciones en el DOM
function renderPosts() {
    postsContainer.innerHTML = '';

    posts.forEach((post, index) => {
        const postElement = document.createElement('div');
        postElement.classList.add('post');
        postElement.innerHTML = `
            <h3>${post.title}</h3>
            <p>${post.content}</p>
            <small>${post.date}</small>
        `;
        postsContainer.appendChild(postElement);
    });
}
