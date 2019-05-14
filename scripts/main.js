String.prototype.capitalize = function() {
  return this.charAt(0).toUpperCase() + this.slice(1);
};

String.prototype.toProperCase = function() {
  return this.replace(/\w\S*/g, function(txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
};

class Pokemon {
  constructor(name, pokeId, hp, attack, defense, frontURL, backURL, addOrder) {
    this.name = name;
    this.pokeId = pokeId;
    this.hp = hp;
    this.attack = attack;
    this.defense = defense;
    this.frontURL = frontURL;
    this.backURL = backURL;
    this.addOrder = addOrder;
    this.ability = [];
    this.types = [];
  }
}
// pokemon menu creator
let pokeMenu = document.getElementById("pokemon-menu");

class Trainer {
  constructor(trainerName) {
    this.trainerName = trainerName;
    this.trainerPokemon = {};
    this.pokemonArray = [];
    this.pokeCount = 0;
  }
  all() {
    return Object.values(this.trainerPokemon);
  }
  get(name) {
    return this.trainerPokemon[name];
  }
  add(id) {
    //      pokeapi request (works with name or id of pokemon)
    axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`).then(response => {
      let pokedata = response.data;
      let pokeName = pokedata.name;
      let pokeId = pokedata.id;
      let pokeHp = pokedata.stats[5].base_stat;
      let pokeAtt = pokedata.stats[4].base_stat;
      let pokeDef = pokedata.stats[3].base_stat;
      let pokeFrontURL = pokedata.sprites.front_default;
      let pokeBackURL = pokedata.sprites.back_default;
      let pokeTypesArray = pokedata.types;

      let pokemonObject = new Pokemon(
        pokeName,
        pokeId,
        pokeHp,
        pokeAtt,
        pokeDef,
        pokeFrontURL,
        pokeBackURL,
        this.pokeCount
      );
      // pushes abilities to pokemonObject
      pokedata.abilities.forEach(element => {
        pokemonObject.ability.push(element.ability.name);
        // get rid of dash and capitalize:
        // pokemonObject.ability.push((element.ability.name).split('-').join(' ').toProperCase())
      });

      pokeTypesArray.forEach(element => {
        pokemonObject.types.push(element.type.name);
      });

      this.trainerPokemon[pokemonObject.name] = pokemonObject;

      let menuLink = document.createElement("li");
      menuLink.innerText = `${pokeName.capitalize()}`;
      menuLink.setAttribute(
        "onclick",
        `loadPokemon(${this.trainerName}, ${this.pokeCount})`
      );
      menuLink.setAttribute(
        "class",
        `btn btn-block btn-lg btn-outline-success`
      );
      pokeMenu.appendChild(menuLink);

      this.pokeCount++;
    });
  }
}
