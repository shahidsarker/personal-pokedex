String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

String.prototype.toProperCase = function() {
    return this.replace(/\w\S*/g, function(txt) { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); });
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
let pokeMenu = document.getElementById("pokemon-menu")

class Trainer {
    constructor(trainerName) {
        this.trainerName = trainerName;
        this.trainerPokemon = {};
        this.pokemonArray = [];
        this.pokeCount = 0;
    }
    all(num) {
        // console.log(Object.values(this.trainerPokemon))
        return Object.values(this.trainerPokemon)
    }
    get(name) {
        // console.log(this.trainerPokemon[name]);
        return this.trainerPokemon[name]
    }
    add(id) {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`).then((response) => {
            // axios.get(`https://pokeapi-nycda.firebaseio.com/pokemon/${id}.json`).then((response) => {
            let pokedata = response.data
                // console.log(pokedata)
            let pokeName = pokedata.name;
            let pokeId = pokedata.id;
            let pokeHp = pokedata.stats[5].base_stat;
            let pokeAtt = pokedata.stats[4].base_stat;
            let pokeDef = pokedata.stats[3].base_stat;
            let pokeFrontURL = pokedata.sprites.front_default
            let pokeBackURL = pokedata.sprites.back_default
            let pokeTypesArray = pokedata.types;
            console.log(pokeTypesArray[0].type.name)

            let pokemonObject = new Pokemon(pokeName, pokeId, pokeHp, pokeAtt, pokeDef, pokeFrontURL, pokeBackURL, this.pokeCount)
                // pushes abilities to pokemonObject
            pokedata.abilities.forEach(element => {
                pokemonObject.ability.push((element.ability.name))
                    // get rid of dash and capitalize:
                    // pokemonObject.ability.push((element.ability.name).split('-').join(' ').toProperCase())
            });

            pokeTypesArray.forEach(element => {
                pokemonObject.types.push((element.type.name))
            });

            this.trainerPokemon[pokemonObject.name] = pokemonObject;
            let menuLink = document.createElement("button")
            menuLink.innerText = `${pokeName.capitalize()}`
            menuLink.setAttribute("onclick", `loadPokemon(${this.trainerName}, ${this.pokeCount})`)
                // menuLink.classList.add("bounce")
            menuLink.setAttribute("class", `${pokemonObject.types[0].type}-type `)
            pokeMenu.appendChild(menuLink)

            this.pokeCount++
                // console.log(pokemonObject);

        })

    }
}

// let shahid = new Trainer("shahid")
// shahid.add(150)
//     // shahid.get("mewtwo")
// shahid.add(129)
//     // shahid.get("magikarp")
// shahid.add(126)