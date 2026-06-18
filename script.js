// Array de objetos contendo a lista inicial dos heróis da Marvel
const baseHeroes = [
    {
        name: "Homem de Ferro (Tony Stark)",
        role: "Gênio, bilionário e filantropo com armadura tecnológica.",
        image: "./assets/homemdeferro.jfif"
    },
    {
        name: "Capitão América (Steve Rogers)",
        role: "Líder, estrategista e portador do escudo de Vibranium.",
        image: ""
    },
    {
        name: "Thor (Deus do Trovão)",
        role: "Príncipe de Asgard com poderes divinos e o martelo Mjölnir.",
        image: "https://unsplash.com"
    },
    {
        name: "Hulk (Bruce Banner)",
        role: "O ser mais forte que existe, com força e resistência ilimitadas.",
        image: "https://unsplash.com"
    },
    {
        name: "Viúva Negra (Natasha Romanoff)",
        role: "Espiã de elite, mestre em artes marciais e táticas de combate.",
        image: "https://unsplash.com"
    },
    {
        name: "Gavião Arqueiro (Clint Barton)",
        role: "Mestre arqueiro com pontaria perfeita e reflexos apurados.",
        image: "https://unsplash.com"
    }
];

// Lista de heróis para quando o usuário convocar um novo
const availableHeroes = [
    { name: "Homem-Aranha (Peter Parker)", role: "Amigão da vizinhança, possui habilidades de aranha.", image: "https://unsplash.com" },
    { name: "Capitã Marvel (Carol Danvers)", role: "Um dos heróis mais poderosos do universo.", image: "https://unsplash.com" },
    { name: "Pantera Negra (T'Challa)", role: "Rei de Wakanda, traje de alta tecnologia.", image: "https://unsplash.com" },
    { name: "Doutor Estranho", role: "Mago Supremo, manipula tempo e magia.", image: "https://unsplash.com" }
];

const gridContainer = document.getElementById('heroes-grid');
const addHeroBtn = document.getElementById('add-hero-btn');

// Função para renderizar os cards no HTML
function renderHeroes(heroes) {
    gridContainer.innerHTML = ''; // Limpa a grid
    heroes.forEach(hero => {
        const heroCard = document.createElement('div');
        heroCard.classList.add('hero-card');
        
        heroCard.innerHTML = `
            <img src="${hero.image}" alt="${hero.name}">
            <div class="hero-card-content">
                <h3>${hero.name}</h3>
                <p>${hero.role}</p>
            </div>
        `;
        
        gridContainer.appendChild(heroCard);
    });
}

// Função para convocar um herói aleatório
function recruitNewHero() {
    if (availableHeroes.length === 0) {
        alert("Todos os heróis disponíveis já foram convocados!");
        return;
    }

    // Sorteia um índice aleatório
    const randomIndex = Math.floor(Math.random() * availableHeroes.length);
    
    // Pega o herói sorteado e remove da lista de disponíveis
    const newHero = availableHeroes.splice(randomIndex, 1)[0];
    
    // Adiciona o herói à lista principal
    baseHeroes.push(newHero);
    
    // Re-renderiza a lista
    renderHeroes(baseHeroes);
}

// Adiciona evento de clique ao botão "Convocar Herói"
addHeroBtn.addEventListener('click', recruitNewHero);

// Inicializa a página carregando os heróis iniciais
renderHeroes(baseHeroes);
