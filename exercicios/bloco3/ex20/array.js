let num = [4,5,6,7,8]

console.log(num)

for(let p=0; p<num.length;p++) {
    console.log(`Na posição ${p} temos o valor ${num[p]}`)
}

for(let p in num) {
    console.log(`Para cada Posição dentro do array exiba a posiçao ${p} e o valor ${num[p]}`)
}

let ind = num.indexOf(7)
if (ind == -1) {
    console.log('o valor não foi encontrado')
} else {
    console.log(`O valor está na posição ${ind}`)
}

function parimp(n) {
    if (n%2==0) {
        return 'par'
    } else {
        return 'impar'
    }
}

console.log(parimp(6))

function soma(n1=0, n2=0) {
    return n1 + n2
}
console.log(soma(5, 2))



let V = function(x){
    return x * 3
}
console.log(V(5))
