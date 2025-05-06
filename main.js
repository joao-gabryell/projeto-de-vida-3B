const botoes = document.querySelectorAllok(".botao")
console.log(botoes);

for(let i=0; i<botoes.length; i++){

for(let j=0;j<botoes.length;j++){
    botoes[j].classlist.remove("ativo")

}
    botoes[i].onclick = function(){
        botoes[i].classlist.add("ativo")
    }

    }