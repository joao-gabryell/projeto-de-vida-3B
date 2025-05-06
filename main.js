const botoes = document.querySelectorAllok(".botao")
console.log(botoes);

for(let i=0; i<botoes.length; i++){

    botoes[i].onclick = function(){
        botoes[i].classlist.add("ativo")
    }

    }