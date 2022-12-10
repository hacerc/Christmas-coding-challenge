// api
const pokeApi="https://pokeapi.co/api/v2";
// 151 in hepsini tek seferde aldık, pokemon objsini yolluyoruz ekrana 151 tane obje 
// 151 tanesi
const getAllPokemons = async() => {
    try {
        const res = await fetch(`${pokeApi}/pokemon/?limit=151`);
        const data = await res.json();
        return data.results;
    } catch (error) {
        console.log(error);
    }
}
//getAllPokemons().then(results => console.log(results));
getAllPokemons().then(async (pokemons) => {
   await pokemons.forEach(async element => {
        await getPokemon(element)//.then((pokemon) => console.log(pokemon));
    });
})
/*
const getPokemonById = async(id) => {
    try {
        const res = await fetch(`${pokeApi}/pokemon/${id}`);
        const data = await res.json();
        return data;
    } catch (error) {
        console.log(error);
    }
} */

const getPokemon = async(pokemonObj) => {
    try {
        const res = await fetch(pokemonObj.url);
        const data = await res.json();

        const main = document.querySelector("main");
        const newDivCard = document.createElement("div"); newDivCard.className = "card";
        const newDivImageContainer = document.createElement("div"); newDivImageContainer.className = "img-container";
        const newDivCardContent = document.createElement("div"); newDivCardContent.className = "card-content";

        const newImage = document.createElement("img"); newImage.src = data.sprites.other['official-artwork'].front_default;
        newDivImageContainer.appendChild(newImage);

        const newh3 = document.createElement("h3"); newh3.innerHTML = `${data.id} - ${data.name}`;
        const newh4 = document.createElement("h4"); newh4.innerHTML = "Types: ";

        const newUl = document.createElement("ul");

        let typeList = "";
        data.types.forEach(element => {
            typeList += `<li>${element.type.name}</li>`;
        });

        newUl.innerHTML = typeList;

        newDivCardContent.appendChild(newh3); newDivCardContent.appendChild(newUl);
        newDivCard.appendChild(newDivImageContainer); newDivCard.appendChild(newDivCardContent);
        main.appendChild(newDivCard);
        

        return data;
    } catch (error) {
        console.log(error);
    }
}

const setFooterDate = () => {
    const date = new Date();
    const footer = document.querySelector("footer");
    const template = `
        <div class="licence">
            Copyright © - ${date.getFullYear()}    
        </div>
    `
   footer.innerHTML += template;
}
setFooterDate();


// Search Bar
const input = document.querySelector('input[type="search"]');

input.addEventListener('search', async() => {
    const pokeList = await getPokemonsByName(input.value);
    const main = document.querySelector("main");
    main.innerHTML = "";
    pokeList.forEach(element => {
        getPokemon(element);
    });
});

const getPokemonsByName = async(inputName) => {
    try {
        const pokemonList = await getAllPokemons();
        return pokemonList.filter(({name}) => name.trim().toLowerCase().includes(inputName.trim().toLowerCase()));
    } catch (error) {
        console.log(error);
    }
}

// footer konacak, search yazılacak.about author a linkedin vs konacak, footer içerisine copyright konacak yıl js den dinamic alınacak.
// categorye göre filter
// yazdıkça filtre atsın ekrana search kısmı