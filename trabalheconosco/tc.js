// criando parte de perguntas frequentes dinamicamente

// div1
let manipDiv1 = document.getElementById("div1");

// verificando se foi encontrado antes de manipular
if (manipDiv1) {
  let createInfo1Div1 = document.createElement("p");
  createInfo1Div1.className = "title";
  createInfo1Div1.textContent = "Como me candidatar";

  manipDiv1.appendChild(createInfo1Div1);

  let createInfo2Div1 = document.createElement("p");
  createInfo2Div1.className = "response";
  createInfo2Div1.textContent =
    "Caso atenda aos requisitos, enviar CV atualizado para gato4life@recruta.com";

  manipDiv1.appendChild(createInfo2Div1);
} else {
  console.error("Elemento para exibir sessão não encontrado.");
}

// div2
let manipDiv2 = document.getElementById("div2");

// verificando se foi encontrado antes de manipular
if (manipDiv2) {
  let createInfo1Div2 = document.createElement("p");
  createInfo1Div2.className = "title";
  createInfo1Div2.textContent = "Qual a remuneração";

  manipDiv2.appendChild(createInfo1Div2);

  let createInfo2Div2 = document.createElement("p");
  createInfo2Div2.className = "response";
  createInfo2Div2.textContent =
    "Para Aux de cuidados: R$ 1.500, Para Atendimento/ Contato ativo: R$ 1.324, Para Motorista: R$ 1.939, Para Aux administrativo: R$ 1.486";

  manipDiv2.appendChild(createInfo2Div2);
} else {
  console.error("Elemento para exibir sessão não encontrado.");
}

// div3
let manipDiv3 = document.getElementById("div3");

// verificando se foi encontrado antes de manipular
if (manipDiv3) {
  let createInfo1Div3 = document.createElement("p");
  createInfo1Div3.className = "title";
  createInfo1Div3.textContent = "O que esperamos";

  manipDiv3.appendChild(createInfo1Div3);

  let createInfo2Div3 = document.createElement("p");
  createInfo2Div3.className = "response";
  createInfo2Div3.textContent =
    "Um colaborador exemplar é aquele que vai além das expectativas, demonstrando habilidades e traços que contribuem significativamente para o sucesso da empresa. Essas características incluem proatividade, adaptabilidade, trabalho em equipe, excelência profissional, comunicação eficaz, liderança empática, disposição para aprendizado contínuo, integridade e ética profissional, resolução de problemas e auto-motivação. A proatividade é evidente na iniciativa para abordar desafios e melhorar processos sem supervisão constante. A adaptabilidade reflete a capacidade de ajustar-se a mudanças no ambiente de trabalho e abraçar novas responsabilidades. O trabalho em equipe é crucial para colaborar eficazmente com colegas e promover um ambiente de trabalho positivo.";
  manipDiv3.appendChild(createInfo2Div3);
} else {
  console.error("Elemento para exibir sessão não encontrado.");
}

// criando funcao para manipular exibicao de conteudo
function showContent() {
  let catchingContent = document.getElementsByClassName("response")[0];

  // Verifica se o conteúdo está visível
  if (catchingContent.style.visibility === "hidden") {
    catchingContent.style.visibility = "visible";
  } else {
    catchingContent.style.visibility = "hidden";
  }
}

function showContent2() {
  let catchingIcon = document.getElementById("bt-2");
  catchingIcon.addEventListener("click", function () {
    let catchingContent = document.getElementsByClassName("response")[1];

    // Verifica se o conteúdo está visível
    if (catchingContent.style.visibility === "hidden") {
      catchingContent.style.visibility = "visible";
    } else {
      catchingContent.style.visibility = "hidden";
    }
  });
}

function showContent3() {
  let catchingIcon = document.getElementById("bt-3");
  catchingIcon.addEventListener("click", function () {
    let catchingContent = document.getElementsByClassName("response")[2];

    // Verifica se o conteúdo está visível
    if (catchingContent.style.visibility === "hidden") {
      catchingContent.style.visibility = "visible";
    } else {
      catchingContent.style.visibility = "hidden";
    }
  });
}
