const itens = [
    { nome: "Jornal", tipo: "papel" },
    { nome: "Garrafa PET", tipo: "plastico" },
    { nome: "Copo de vidro", tipo: "vidro" },
    { nome: "Lata de refrigerante", tipo: "metal" },
    { nome: "Restos de comida", tipo: "organico" },
  ];
  
  const itensContainer = document.getElementById('itens-container');
  const lixeiras = document.querySelectorAll('.lixeira');
  const mensagem = document.getElementById('mensagem');
  const backBtn = document.getElementById('back-btn');
  
  // Criar os itens na tela
  itens.forEach((item, index) => {
    const div = document.createElement('div');
    div.classList.add('item');
    div.setAttribute('draggable', true);
    div.setAttribute('data-tipo', item.tipo);
    div.innerText = item.nome;
    itensContainer.appendChild(div);
  });
  
  // Eventos de arrastar
  document.querySelectorAll('.item').forEach(item => {
    item.addEventListener('dragstart', e => {
      e.dataTransfer.setData('tipo', item.dataset.tipo);
    });
  });
  
  // Eventos das lixeiras
  lixeiras.forEach(lixeira => {
    lixeira.addEventListener('dragover', e => e.preventDefault());
  
    lixeira.addEventListener('drop', e => {
      e.preventDefault();
      const tipoItem = e.dataTransfer.getData('tipo');
      const tipoLixeira = lixeira.dataset.tipo;
  
      if (tipoItem === tipoLixeira) {
        mensagem.innerText = "Muito bem! Você reciclou corretamente!";
        mensagem.style.color = "#1fa83d";
        const itemRemover = document.querySelector(`.item[data-tipo="${tipoItem}"]`);
        if (itemRemover) itemRemover.remove();
      } else {
        mensagem.innerText = "Ops! Lugar errado! Tente novamente.";
        mensagem.style.color = "red";
      }
    });
  });
  
  // Botão de voltar
  backBtn.addEventListener('click', () => {
    window.location.href = "index.html";
  });
  