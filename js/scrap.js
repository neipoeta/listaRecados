const list = document.getElementById('scrap');

axios.get('http://localhost:3333/scraps')
    .then(response => {
        response.data.forEach(scrap => {
            list.innerHTML += `${data.title}<br/>${data.description}<br/>`
        })
        console.log(response.data)
    })
    .catch(error => console.log(error));


async function saveScrap(event) {
    event.preventDefault();

    let description = document.getElementById("description").value;
    let title = document.getElementById("title").value;
    let idMessage = 1;

    const scrap = await axios.post('http://localhost:3333/scraps', {
        title,
        description
    });

    var dataScrap = JSON.parse(localStorage.getItem("dataScrap"));

    if (dataScrap == null) {
        localStorage.setItem("dataScrap", []);
        dataScrap = [];
    }

    if (localStorage.dataScrap) {
        idMessage = dataScrap.length;
    }

    let message = {
        description: description.value,
        title: title.value,
    }

    dataScrap.push(message);

    localStorage.setItem("dataScrap", JSON.stringify(dataScrap));
    alert("Registro Incluido com Sucesso!");

    for (let item of data) {
        list.innerHTML =
            `<tr>
                <td>${idMessage}</td>
                <td>${localStorage.getItem("dataScrap")}</td> 
                <td>${item.title}</td>
                <td>
                    <button type="button" onclick="removeItem(event)" class="btn-danger">Excluir</button>
                    <button onclick="editItem(event)" class="btn-success">Editar</button>
                <td>
                <td><td>
            </tr>`;
        console.log(message);
        item++;
        break;
    }
}

// function removeItem(event) {
//     localStorage.removeItem("dataScrap", "description");
// }