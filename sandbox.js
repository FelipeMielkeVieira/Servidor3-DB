const crud = require("./crud");

async function buscarDados() {
    const dados = await crud.get("pessoas");
    console.log(dados);
}

async function buscarDadoId() {
    const dados = await crud.getById("pessoas", "cWCQGpRfSlBHHO3iFvxA");
    console.log(dados);
}

async function deletar() {
    const dados = await crud.remove("pessoas", "cWCQGpRfSlBHHO3iFvxA");
    console.log(dados);
}

deletar();