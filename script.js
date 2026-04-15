const projetos = [
  {
    nome: "Projeto 1",
    descricao: "Meu primeiro projeto em HTML",
    link: "#"
  },
  {
    nome: "Projeto 2",
    descricao: "Projeto com CSS",
    link: "#"
  },
];

const container = document.getElementById("lista-projetos");

projetos.forEach(projeto => {
  const card = document.createElement("div");
  card.classList.add("card");

  card.innerHTML = `
    <h3>${projeto.nome}</h3>
    <p>${projeto.descricao}</p>
    <a href="${projeto.link}" target="_blank">Ver Projeto</a>
  `;

  container.appendChild(card);
});