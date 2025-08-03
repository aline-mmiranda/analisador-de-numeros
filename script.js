let num = document.querySelector('input#txtn');
let lista = document.querySelector('select#txtl');
let res = document.querySelector('div#res');
let a = [];

const add = document.querySelector('input#add');
add.addEventListener('click', adicionar);

function nIntervalo(x) {
    if (Number(x) >= 1 && Number(x) <= 100) {
        return true;
    } else {
        return false;
    }
}

function nRepetido(x, y) {
    if (y.indexOf(Number(x)) != -1) {
        return true;
    } else {
        return false;
    }
}

function adicionar() {
    if (nIntervalo(num.value) && !nRepetido((num.value), a)) {
        a.push(Number(num.value));
        let item = document.createElement('option');
        item.text = `O número ${num.value} foi adicionado.`;
        lista.appendChild(item);
    } else if (num.value.length == 0) {
        alert('ERRO: campo vazio! Por favor, digite um número.');
    } else {
        alert('ERRO: número fora do intervalo ou repetido! Tente novamente.');
    }
    num.value = '';
    num.focus();
}

const fim = document.querySelector('input#fim');
fim.addEventListener('click', finalizar);

function finalizar() {
    a.sort();
    let tot = a.length;
    let mai = a[tot - 1];
    let men = a[0];
    let soma = 0;
    let media = 0;
    for (let i in a) {
        soma += a[i];
    }
    media = soma / tot;

    res.innerHTML = `Ao todo, foram adicionados ${tot} números.<br>`;
    res.innerHTML += `O maior número foi o ${mai}.<br>`;
    res.innerHTML += `O menor número foi o ${men}.<br>`;
    res.innerHTML += `A soma dos números foi igual a ${soma}.<br>`;
    res.innerHTML += `A média foi igual a ${media}.`;
}

