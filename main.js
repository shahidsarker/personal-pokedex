class Pokemon {
    constructor(name, pokeId, hp, attack, defense, ability) {
        this.name = name;
        this.pokeId = pokeId;
        this.hp = hp;
        this.attack = attack;
        this.defense = defense;
        this.ability = [];
    }
}

class Trainer {
    constructor(trainerName, trainerPokemon) {
        this.trainerName = trainerName;
        this.trainerPokemon = {}
        this.pokeCount = 0;
    }
    all() {
        return pokemonArray;
    }
    get(name) {
        return trainerPokemon.name;
    }
    add(pokemonObject) {
        this.trainerPokemon[pokemonObject.name] = pokemonObject
        this.pokeCount++
    }


}
String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}




let pokemonNumber = 150

// axios.get('https://pokeapi.co/api/v2/pokemon/?limit=1&offset=' + (pokemonNumber - 1)).then((response) => {
axios.get('https://pokeapi.co/api/v2/pokemon/?limit=949').then((response) => {
    let data = response.data
    console.log(data)

    let pokeNumData = (num) => {
        console.log((data.results[(num + 1)].name).capitalize())
        console.log(data.results[(num + 1)].url)
    }
    pokeNumData(12)

    // console.log(data.results["pikachu"])
    let pokemonApiUrl = data.results[0].url
    console.log(pokemonApiUrl)
        // createPokemon() => {}
    axios.get(pokemonApiUrl).then((response) => {
        let pokedata = response.data
            // console.log(pokedata)
        let pokeName = pokedata.name;
        let pokeHp = pokedata.stats[5].base_stat
        let pokeAtt = pokedata.stats[4].base_stat
        let pokeDef = pokedata.stats[3].base_stat
            // let pokeAbility = ;
            // console.log(pokemonNumber)
            //     // creating a pokemon testing
            // let newPoke = new Pokemon(pokeName, pokemonNumber, pokeHp, pokeAtt, pokeDef)
            // pokedata.abilities.forEach(element => {
            //     newPoke.ability.push(element.ability.name)
            // });
            // console.log(newPoke)

        let newPoke = new Pokemon(pokeName, pokemonNumber, pokeHp, pokeAtt, pokeDef)
        pokedata.abilities.forEach(element => {
            newPoke.ability.push(element.ability.name)
        });
        console.log(newPoke)

    })
})