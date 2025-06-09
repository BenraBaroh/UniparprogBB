let X = document.querySelector("#X");
let Y = document.querySelector("#Y");
let Z = document.querySelector("#Z");
let resultado = document.querySelector("#resultado");

function triancal(){
    let x = Number(X.value);
    let y = Number(Y.value);
    let z = Number(Z.value);

    total = x + y + z
    if(x > total - x){
        resultado.textContent = "numero invalido";
    }
    else if(y > total - y){
        resultado.textContent = "numero invalido";
    }
    else if(z > total - z){
        resultado.textContent = "numero invalido";
    }
    else if(x == y && y == z){
        resultado.textContent = "Equilateros";
    }
    else if(x == y && y != z){
        resultado.textContent = "isosceles";
    }
    else if(y == z && z != x){
        resultado.textContent = "isosceles";
    }
    else if(z == x && x != y){
        resultado.textContent = "isosceles";
    }
    else{
        resultado.textContent = "Escaleno";
    }
    
    

    
   
}

calc.onclick = triancal;



let altura = document.querySelector("#altura");
let peso = document.querySelector("#peso");
let btIMC = document.querySelector("#btIMC");
let IMC = document.querySelector("#IMC");

function fIMC() {
    let alt = Number(altura.value);
    let pes = Number(peso.value);
    
    total = pes / (alt * alt);
    
    if(total <= 18.5) {
        IMC.textContent = total + " // Abaixo do peso";
    }
    else if(total >= 18.5 && total < 25) {
        IMC.textContent = total + " // Peso normal";
    }
    else if(total >= 25 && total < 30) {
        IMC.textContent = total + " // Sobrepeso";
    }
    else if(total >= 30 && total < 35) {
        IMC.textContent = total + " // Obesidade grau 1";
    }
    else if(total >= 35 && total < 40) {
        IMC.textContent = total + " // Obesidade grau 2";
    }
    else{
        IMC.textContent = total + " // Obesidade grau 3";
    }
}

btIMC.onclick = fIMC;



let iptValorInicial = document.querySelector("#iptValorInicial");
let iptAnodeFabricacao = document.querySelector("#iptAnodeFabricacao");
let btnvrumvrum = document.querySelector("#btnvrumvrum");
let Detran = document.querySelector("#Detran");

function Impostoruim() {
    let carval = Number(iptValorInicial.value)
    let adfval = Number(iptAnodeFabricacao.value)

    if(adfval <= 1989){
        adfval = 0.01
        Dethanos = carval + (carval * adfval)
        Detran.textContent = Dethanos+" -> Imposto de 1%"
    }
    else{
        adfval = 0.015
        Dethanos = carval + (carval * adfval)
        Detran.textContent = Dethanos+" -> Imposto de 1,5%"
    }

    
}

btnvrumvrum.onclick = Impostoruim;



let iptCargo = document.querySelector("#iptCargo");
let iptSalario = document.querySelector("#iptSalario");
let btnSalario = document.querySelector("#btnSalario");
let msgSalario = document.querySelector("#msgSalario");

function Salario() {
    slo = Number(iptSalario.value);
    cargo = String(iptCargo.value);

    if(cargo === "gerente"){
        msgSalario.textContent = "Salário novo: "+slo * 1.1+" ->aumento de 10%"
    }
    else if(cargo === "engenheiro"){
        msgSalario.textContent = "Salário novo: "+slo * 1.2+" ->aumento de 20%"
    }
    else if(cargo === "tecnico"){
        msgSalario.textContent = "Salário novo: "+slo * 1.3+" -> aumento de 30%"
    }
    else if(cargo != "gerente" && cargo != "engenheiro" && cargo != "tecnico"){
        msgSalario.textContent = "Salário novo: "+slo * 1.4+" -> aumento de 40%"
    }
     
}

btnSalario.onclick = Salario;



let iptCredito = document.querySelector("#iptCredito");
let btnCredito = document.querySelector("#btnCredito");
let msgCredito = document.querySelector("#msgCredito");

function Credito(){
    sm = Number(iptCredito.value)

    if(sm <= 200){
        msgCredito.textContent = "Nenhum crédito"
    }
    if(sm >= 201 && sm <= 400){
        msgCredito.textContent = "20% de crédito"
    }
    if(sm >= 401 && sm <= 600){
        msgCredito.textContent = "30% de crédito"
    }
    if(sm >= 601){
        msgCredito.textContent = "40% de crédito"
    }
}

btnCredito.onclick = Credito;


let iptLanche = document.querySelector("#iptLanche");
let iptLanchequantia = document.querySelector("#iptLanchequantia");
let btnLanche = document.querySelector("#btnLanche");
let msgLanche = document.querySelector("#msgLanche");

function Lanche(){
    let lanqua = Number(iptLanchequantia.value);
    let lanped = Number(iptLanche.value);

    if(lanped == 100){
        msgLanche.textContent = lanqua+" Cachorro-quente --> "+"R$"+lanqua * 9
    }
    if(lanped == 101){
        msgLanche.textContent = lanqua+" X-salada --> "+"R$"+lanqua * 10
    }
    if(lanped == 102){
        msgLanche.textContent = lanqua+" X-bacon --> "+"R$"+lanqua * 12
    }
    if(lanped == 103){
        msgLanche.textContent = lanqua+" Refrigerante --> "+"R$"+lanqua * 4
    }
    if(lanped == 104){
        msgLanche.textContent = lanqua+" Suco --> "+"R$"+lanqua * 5
    }
    
}

btnLanche.onclick = Lanche;



let iptProduto = document.querySelector("#iptProduto");
let iptProdutopreco = document.querySelector("#iptprodutopreco");
let btnProduto = document.querySelector("#btnProduto");
let msgProduto = document.querySelector("#msgProduto");

function Produto(){
    pp = Number(iptProdutopreco.value)
    mp = Number(iptMetodop.value)
    pm = String(iptProduto.value)

    if(mp == 1){
        msgProduto.textContent = iptProduto.value+" À vista em dinheiro ou cheque: R$"+pp * 0.9
    }
    if(mp == 2){
        msgProduto.textContent = iptProduto.value+" À vista no cartão de crédito: R$"+pp * 0.85
    }
    if(mp == 3){
        msgProduto.textContent = iptProduto.value+" Em duas vezes - Preço normal de etiqueta, sem juros: "+" 2 de R$"+pp / 2
    }
    if(mp == 4){
        msgProduto.textContent = iptProduto.value+" Em duas vezes - Preço normal de etiqueta, com juros: "+" 2 de R$"+(pp / 2) * 1.1
    }
}

btnProduto.onclick = Produto;



let iptNivel = document.querySelector("#iptNivel");
let iptHAtrabalhadas = document.querySelector("#iptHAtrabalhadas");
let btnProfessor = document.querySelector("#btnProfessor");
let msgProfessor = document.querySelector("#msgProfessor");

function Professor(){
   niv = Number(iptNivel.value)
   ha = Number(iptHAtrabalhadas.value)

   if(niv == 1){
    msgProfessor.textContent = "Salário semanal de: R$"+ha * 12 * 4.5
   }
   if(niv == 2){
    msgProfessor.textContent = "Salário semanal de: R$"+ha * 17 * 4.5
   }
   if(niv == 3){
    msgProfessor.textContent = "Salário semanal de: R$"+ha * 25 * 4.5
   }
}

btnProfessor.onclick = Professor;