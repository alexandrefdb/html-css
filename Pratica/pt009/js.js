let familia = {
    ganhos: [3000.5, 826, 3200.78, 265],
    despesas: [2500.4, 80, 258, 801.8, 3000, 1000]
}

function somar(array){
    let total = 0

    for(let value of array){
        total += value
    }
    return total
}

function calcular(){
    const calcularGanhos = somar(familia.ganhos);
    const calcularDespesas = somar(familia.despesas)

    const total = calcularGanhos - calcularDespesas

    const its0K = total >= 0
    let BalanceText = 'Negativo'

    if(its0K){
        BalanceText = 'Positivo'
    }
    console.log(`Seu saldo é ${BalanceText}: ${total.toFixed(2)}R$`)
}

calcular()