const taskInput = document.getElementById("");
const taskInputId = document.getElementById("atvs");
const listContainer = document.getElementById("");

const respostaAPI = [
    {"id": 1, "descricao": "Varrer a sala"},
    {"id": 2, "descricao": "Revisar a aula de BD"},
    {"id": 3, "descricao": "Lavar a louça"},
];

function init() {
    carregarLista();
}

function carregarLista() {
    let idx = -1;
    listContainer.innerHTML = '';

    while(respostaAPI.length > 0 && ++idx < respostaAPI.length){
        listConteiner.innerHTML += `<div id="atv">
            <input type="checkbox">
            <p>${respostaAPI[idx].descricao}</p>
            <div class="botoes">
                <button onclick='editarTarefa${JSON.stringify(respostaAPI[idx])}
                    <img src="./imagens/lapis.png" alt="lapis">
                </button>
                <button>
                    <img src="./imagens/lixo.png" alt="lixo">
                </button>
            </div>`; 
            }
}

function salvarTarefa () {
    if(taskInput.value == '') {
        respostaAPI
    }
}