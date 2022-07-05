"use strict";
// O código abaixo tem alguns erros e não funciona como deveria. Você pode identificar quais são os erros e corrigi-los em um arquivo TS?
let botaoAtualizar = document.getElementById("atualizar-saldo");
let botaoLimpar = document.getElementById("limpar-saldo");
let soma = document.getElementById("soma");
let campoSaldo = document.getElementById("campo-saldo");
let saldo = 0;
campoSaldo.innerHTML = 0;
function somarAoSaldo(valor) {
    if (valor > 0) {
        saldo += valor;
        campoSaldo.innerHTML = saldo;
        soma.value = "";
    }
}
function limparSaldo() {
    saldo = 0;
    campoSaldo.innerHTML = 0;
}
botaoAtualizar.addEventListener("click", function () {
    somarAoSaldo(Number(soma.value));
});
botaoLimpar.addEventListener("click", function () { limparSaldo(); });
