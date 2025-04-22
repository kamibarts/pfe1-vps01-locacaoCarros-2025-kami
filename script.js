const carros = [
  { id: 1, modelo: "Onix LT 1.0", marca: "Chevrolet", ano: 2022, imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPhaVebMwCbMl5vvbuh3EeZR4PHU2cdV_dyQ&s", combustivel: "Flex", portas: 4, transmissao: "Manual", valor_diaria: 120.00 },
  { id: 2, modelo: "HB20 Vision", marca: "Hyundai", ano: 2023, imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSavvx81ySc9ArJqr9KYBpVv2_jzqVALmRbLA&s", combustivel: "Flex", portas: 4, transmissao: "Automático", valor_diaria: 150.00 },
  { id: 3, modelo: "Renegade Longitude", marca: "Jeep", ano: 2023, imagem: "https://quatrorodas.abril.com.br/wp-content/uploads/2022/02/Novo-Jeep-Renegade-Longitude-1.jpg?crop=1&resize=1212,909", combustivel: "Gasolina", portas: 4, transmissao: "Automático", valor_diaria: 210.00 },
  { id: 4, modelo: "Corolla XEi", marca: "Toyota", ano: 2022, imagem: "https://production.autoforce.com/uploads/version/profile_image/10082/model_main_webp_comprar-xei_fc925dbfe3.png.webp", combustivel: "Flex", portas: 4, transmissao: "Automático", valor_diaria: 250.00 },
  { id: 5, modelo: "Civic Touring", marca: "Honda", ano: 2021, imagem: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcR0blBtIUHy3Y1QJQktnFrlShL__YQR5hBkTgr7oG-A31wMWwWB4utNxOQ7Yuowt23dpVj03eWbXiuDo15lyWo-IWr-00k_sSnuUt7Lgg", combustivel: "Gasolina", portas: 4, transmissao: "Automático", valor_diaria: 230.00 },
  { id: 6, modelo: "Fiat Mobi Like", marca: "Fiat", ano: 2022, imagem: "https://production.autoforce.com/uploads/version/profile_image/10921/comprar-like-1-0_9eee82ebb4.png", combustivel: "Flex", portas: 4, transmissao: "Manual", valor_diaria: 90.00 },
  { id: 7, modelo: "Kwid Zen", marca: "Renault", ano: 2023, imagem: "https://garagem360.com.br/wp-content/uploads/2023/10/Renault-Kwid-Zen-2024-4.jpg", combustivel: "Flex", portas: 4, transmissao: "Manual", valor_diaria: 95.00 },
  { id: 8, modelo: "Gol Trendline", marca: "Volkswagen", ano: 2021, imagem: "https://motorshow.com.br/wp-content/uploads/sites/2/2016/04/10_ms394_gol2.jpg", combustivel: "Flex", portas: 4, transmissao: "Manual", valor_diaria: 100.00 },
  { id: 9, modelo: "Compass Limited", marca: "Jeep", ano: 2022, imagem: "https://autoentusiastas.com.br/ae/wp-content/uploads/2024/01/AE-Jeep-Compass-Limited-T270-3-e1704732944434.jpeg", combustivel: "Diesel", portas: 4, transmissao: "Automático", valor_diaria: 270.00 },
  { id: 10, modelo: "Tracker Premier", marca: "Chevrolet", ano: 2023, imagem: "https://quatrorodas.abril.com.br/wp-content/uploads/2020/03/chevrolet-tracker-premier-1.2-2021-1-e1597083614688.jpg?crop=1&resize=1212,909", combustivel: "Flex", portas: 4, transmissao: "Automático", valor_diaria: 220.00 }
];

const listaCarros = document.getElementById("lista-carros");
const selectCarro = document.getElementById("carro");
const modal = document.getElementById("modal-detalhes");
const detalhesCarro = document.getElementById("detalhes-carro");
const closeBtn = document.querySelector(".close-btn");


carros.forEach(carro => {
  const card = document.createElement("div");
  card.classList.add("carro-card");
  card.innerHTML = `
    <img src="${carro.imagem}" alt="${carro.modelo}">
    <h3>${carro.modelo}</h3>
    <p>Marca: ${carro.marca}</p>
    <p>Valor diária: R$${carro.valor_diaria.toFixed(2)}</p>
    <button data-id="${carro.id}">Ver Detalhes</button>
  `;
  listaCarros.appendChild(card);

  const option = document.createElement("option");
  option.value = carro.id;
  option.textContent = carro.modelo;
  selectCarro.appendChild(option);
});

listaCarros.addEventListener("click", e => {
  if (e.target.tagName === "BUTTON") {
    const id = e.target.dataset.id;
    const carro = carros.find(carro => carro.id === Number(id));
    detalhesCarro.innerHTML = `
      <h3>${carro.modelo}</h3>
      <p>Marca: ${carro.marca}</p>
      <p>Ano: ${carro.ano}</p>
      <p>Combustível: ${carro.combustivel}</p>
      <p>Portas: ${carro.portas}</p>
      <p>Transmissão: ${carro.transmissao}</p>
      <p>Valor diária: R$${carro.valor_diaria.toFixed(2)}</p>
    `;
    modal.style.display = "block";
  }
});


closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});


document.getElementById("locacao-form").addEventListener("submit", e => {
  e.preventDefault();

  const nome = document.getElementById("nome").value;
  const cpf = document.getElementById("cpf").value;
  const dataInicio = document.getElementById("data-inicio").value;
  const dataFim = document.getElementById("data-fim").value;
  const carroId = document.getElementById("carro").value;

  if (cpf.length !== 11 || isNaN(cpf)) {
    alert("CPF deve conter 11 dígitos numéricos.");
    return;
  }

  const locacao = { nome, cpf, dataInicio, dataFim, carroId };

  const locacoes = JSON.parse(localStorage.getItem("locacoes")) || [];
  locacoes.push(locacao);
  localStorage.setItem("locacoes", JSON.stringify(locacoes));

  alert("Locação cadastrada com sucesso!");
  e.target.reset();
});
