document.getElementById('load-users').addEventListener('click', async () => {
    const ul = document.getElementById('user-list');
    ul.innerHTML = ''; // Limpia lo que hubiera antes

    try {
        // 1. Hacemos la solicitud a la API
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await response.json();

        // 2. Recorremos el array de usuarios
        users.forEach(user => {
        const li = document.createElement('li');
        li.innerHTML = `
            <strong>Nombre:</strong> ${user.name} <br>
            <strong>Email:</strong> ${user.email} <br>
            <strong>Ciudad:</strong> ${user.address.city}<br>
            <strong>Teléfono:</strong> ${user.phone}
            <br><br>
        `;
        ul.prepend(li);
        });

    } catch (error) {
        console.error('Error!', error);
    }
});
