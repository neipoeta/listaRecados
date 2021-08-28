let lista = document.getElementById('login')

axios.get('http://localhost:3333/users')
    .then(response => {
        function validateUser(event) {
            event.preventDefault();
            let userName = document.getElementById('userName');
            let password = document.getElementById('password');

            if (localStorage.dataUser) {
                let dataUser = JSON.parse(localStorage.dataUser);

                for (let user of dataUser) {
                    if (user.userName === userName.value && user.password === password.value) {
                        localStorage.setItem("access", true);
                        window.location.href = "./scrap.html";
                        console.log(user.userName)
                    }
                }
            } else {
                alert('ERROR Sem Usuario... Tente Novamente');
            }
        }
    })
    .catch(error => console.log(error));

async function validateUser(event) {
    event.preventDefault();

    const userName = document.getElementById('userName').value;
    const password = document.getElementById('password').value;
    const user = {
        userName: userName.value,
        password: password.value
    };

    let dataUser = await axios.post('http://localhost:3333/login', {
        userName,
        password
    })

    for (const item of dataUser) {
        if (item.userName === user.userName) {
            alert('usuario ja cadastrado');
            userName = "";
        }
    }

    alert("Registro Incluido com Sucesso!");
    window.location.href = "./login.html";
}