const divs = document.getElementsByClassName('bot')
const resultado = document.getElementById('resultado')
let numeros = ''

Array.from(divs).forEach(item => {
    item.addEventListener('click', () => adicionar(item))
})



function adicionar(item) {
    const valor = item.textContent

    if (valor === 'AC'){
        limpar()
    } else if (valor  === '='){
        calcular()
    } else {
        adicionarNum(valor)
    }
}

function calcular() {
    try{
        const r = Function(`'use strict'; return (${numeros})`)();
        resultado.innerHTML = r;
        numeros = r.toString();
    } catch (error) {
        window.alert('Não podemos calcular essa expressão.')
    }
}

function adicionarNum(valor){
    if (numeros.length < 7){
        numeros += valor
        resultado.innerHTML = numeros
    }
}

function limpar() {
    resultado.innerHTML = ''
    numeros = ''
}



