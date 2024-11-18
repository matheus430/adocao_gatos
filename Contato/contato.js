function alertSubmitForm() {
  // peguei button pelo id para manipular
  let pegandoSubmitForm = document.getElementById("enviar");

  // peguei form pela tag para manipular
  let pegandoForm = document.getElementsByTagName("form");

  // adicionando evento que ocorrera com o click
  pegandoSubmitForm.addEventListener("click", () => {
    // controlando o fluxo permitindo envio somente se true/ completo, se false envio brecado
    if (pegandoForm === true) {
      alert("Recebemos sua solicitação, aguarde o período para retorno.");
    } else {
      alert("Faltando preencher algo");
    }
  });
}
