const projetos = [
  {
    nome: "Projeto 1",
    descricao: "Meu primeiro projeto em HTML",
    link: "https://github.com/cieciasousa/meu-portfolio.git"
  },
  {
    nome: "Projeto 2",
    descricao: "Projeto Portfolio - React",
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