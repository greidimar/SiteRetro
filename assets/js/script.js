console.log("cALCULAR COM jAVA SCRITP")

//Manipular DOM
// variavel contexto
//let   local 
// var  global
// const contante
const qtde = document.querySelector("#qtde").addEventListener("change", calcular)
const tipo = document.querySelector("#tipo").addEventListener("change", calcular)
const prot_sim = document.querySelector("#prot_sim").addEventListener("change", calcular)
const prot_nao = document.querySelector("#prot_nao").addEventListener("change", calcular)

function calcular()
{
    console.log("calcula tranquera")
    const qtde = document.querySelector("#qtde").value
    let preco = qtde * 1000
    let total = 0;
    const tipo = document.querySelector("#tipo").value

    const temlayout = document.querySelector("#prot_sim").checked
    
    if(tipo == 2) 
       {total = preco + 1000}
    else
       {total = preco + 30000}

     if(temlayout)  total *=1.1
    
   

    document.querySelector("#orcamento").innerText = "R$ " + total.toFixed(2)
    //console.log(preco)
}

