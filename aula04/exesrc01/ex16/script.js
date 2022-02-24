function contar() {
    let ini = document.getElementById("txtini")
    let fim = document.getElementById("txtfim")
    let pas = document.getElementById("txtpas")
    let res = document.getElementById("res")

    if (ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0) {
        //window.alert('[ERRO] Faltam Dados')
        res.innerHTML = 'Impossivel contar, faltam dados...'
    } else {
        res.innerHTML = 'Contando: <br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(pas.value)
        if (i < f) {
            //contagem crescente
            for (let c = i; c <= f; c += p) {
                res.innerHTML += `${c} \u{1f517}`
            } 
        } else {
            //contagem regressiva
            for(let c = i; c >= f; c -= p) {
                res.innerHTML += ` ${c} \u{1f517}`
            }
                

        }
        res.innerHTML += `\u{1F51A}`   
        
        
    }
} 
