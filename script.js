function jogar() {
  idade = prompt("Qual a sua idade?");

  if (idade < 18) {
    alert("Você NÃO pode jogar!");
  }

  if (idade >= 18) {
    escolhaJogador = prompt("Escolha entre 1-Pedra, 2-Papel e 3-Tesoura");
    escolhaHarley = Math.floor(Math.random() * 3) + 1;

    //escolhas iguais, empate!
    if (escolhaJogador == escolhaHarley) {
      alert(
        "EMPATE!"
      )
    }
    //Jogador escolheu pedra
    if (escolhaJogador == 1) {
      //Máquina escolheu papel
      if(escolhaHarley == 2){
        alert("Harley VENCEU, escolheu papel!")
      }
            //Maquina escolheu tesoura
      else if (escolhaHarley == 3) {
        alert(
          "Você VENCEU! Harley escolheu tesoura!"
        );
      }
    }

    //Jogador escolheu papel
    if (escolhaJogador == 2) {
      //Maquina escolheu pedra
      if (escolhaHarley == 1) {
        alert(
          "Você VENCEU, Harley escolheu pedra!"
        );
      }
      //Maquina escolheu tesoura
      else if (escolhaHarley == 3) {
        alert(
          "Harley VENCEU, escolheu tesoura!"
        );
      }
    }

    //Jogador escolheu tesoura
    if (escolhaJogador == 3) {
      //Maquina escolheu pedra
      if (escolhaHarley == 1) {
        alert(
          "Harley VENCEU, escolheu pedra!"
        );
      }
      //Maquina escolheu papel
      else if (escolhaHarley == 2) {
        alert(
          "Você VENCEU, Harley escolheu papel!"
        );
      }
    }

    alert("Escolha da Harley: " + escolhaHarley);
  }
}
