let resultado = document.querySelector('.resultado p');

function limpar() {
    resultado.innerHTML = '';
}

function backspace() {
    if (resultado.textContent) {
        let result = document.querySelector('.resultado p').innerHTML;
        resultado.innerHTML = result.substring(0, result.length - 1);
    }
}
 
function insert(valor) {
    resultado.innerHTML += valor;
}

function calcular() {
    if (resultado.textContent !== 'Erro') {
        resultado.innerHTML = eval(resultado.innerHTML);
    }
}