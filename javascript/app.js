"use strict"

const calcular = document.querySelector("#calcular")
const resultado = document.querySelector("#resultado")
const select = document.getElementById('selected')
const select1 = document.getElementById('selected1')
const entrada = document.querySelector('[data-js="entrada"]')

//
const calculaMoeda = () => {
    //moeda 1    
    const valor = select.options[select.selectedIndex].value
    //moeda 2        
    const valor1 = select1.options[select1.selectedIndex].value

    resultado.style.backgroundColor = "rgb(52, 52, 150)"
    if (valor == valor1) {
        resultado.innerHTML = `<p class="minFont"> moedas iguais </p>`
        resultado.style.backgroundColor = "red"
        entrada.value = ""
    } else {
        fetch(`https://economia.awesomeapi.com.br/${valor}-${valor1}`)
            .then(data => {
                return data.json()
            })
            .then((json) => {
                console.log(json)
                if (entrada.value != "") {
                    resultado.innerHTML = (json[0].bid * entrada.value).toFixed(2)//arrrendo 2 casas decimais/11.123, o valor fica 11.12, já se temos 20.555, o valor fica 20.56

                }
                else {

                    resultado.innerHTML = json[0].bid
                }
            }).catch(err => {
                console.log(err)

            })
    }
}

//calcula conversao ao clicar ENTER
entrada.addEventListener("keypress", (event) => {
    if (event.key == "Enter") {
        calculaMoeda()
    }
})

//calcula conversão ao clicar no botao CALCULAR
calcular.addEventListener('click', calculaMoeda)


