function exibirMensagem() {
    console.log("Bem-vindo ao Sirius Estampas! Solicite seu orçamento em nossos canais de atendimento.");
  }
  
  function destacarTexto() {
    const textoPersonalizado = document.querySelector("h2 strong");
    textoPersonalizado.style.backgroundColor = "yellow";
  }
  
  const textoPersonalizado = document.querySelector("h2 strong");
  textoPersonalizado.addEventListener("mouseover", destacarTexto);
  
  exibirMensagem();
  