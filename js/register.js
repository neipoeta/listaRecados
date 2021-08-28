const registerPage = document.getElementById('register');
const user = document.getElementById('user');
const paginaLogin = document.getElementById('login');



async function registerUsers(event) {
    event.preventDefault();

    const userName = document.getElementById('userName').value;
    const password = document.getElementById('password').value;
    const password2 = document.getElementById('password2'.value);
    const user = {
        userName: userName.value,
        password: password.value
    };

    let dataUser = await axios.post('http://localhost:3333/users', {
        userName,
        password
    })

    if (localStorage.dataUser) {
        dataUser = JSON.parse(localStorage.dataUser);
    }

    for (const item of dataUser) {
        if (item.userName === user.userName) {
            alert('usuario ja cadastrado');
            userName = "";
        }
    }

    if (password.value != password2.value) {
        alert("Senhas diferentes!");
        return false;
    } else if (user.userName == "" || password.value == "") {
        alert('Campos de Usuário e Senha são obrigatórios.');
    } else {
        dataUser.push(user);
        localStorage.dataUser = JSON.stringify(dataUser);

        alert("Registro Incluido com Sucesso!");
        window.location.href = "./login.html";
    }

}