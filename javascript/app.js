"use strict"

const calcular = document.querySelector("#calcular")
const resultado = document.querySelector("#resultado")
const select = document.getElementById('selected')
const select1 = document.getElementById('selected1')
const entrada = document.querySelector('[data-js="entrada"]')


calcular.addEventListener('click', () => {
    //moeda 1    
    const valor = select.options[select.selectedIndex].value
    //moeda 2        
    const valor1 = select1.options[select1.selectedIndex].value


    if (valor == valor1) {
        resultado.innerHTML = `<p class="minFont">selecione as moedas diferentes </p>`
        calcular.value = ""
    } else {
        fetch(`https://economia.awesomeapi.com.br/${valor}-${valor1}`)
            .then(data => {
                return data.json()
            })
            .then((json) => {
                //console.log(json)
                if (entrada.value != "") {
                    resultado.innerHTML = json[0].bid * entrada.value
                }
                else {
                    resultado.innerHTML = json[0].bid
                }
            }).catch(err => {
                console.log(err)

            })
    }
}
)


