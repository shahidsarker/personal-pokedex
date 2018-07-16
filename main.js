String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}


class Pokemon {
    constructor(name, pokeId, hp, attack, defense, frontURL, backURL, ability) {
        this.name = name;
        this.pokeId = pokeId;
        this.hp = hp;
        this.attack = attack;
        this.defense = defense;
        this.frontURL = frontURL;
        this.backURL = backURL;
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

let addPokemon = (id) => {
    axios.get('https://pokeapi.co/api/v2/pokemon/' + id + '/').then((response) => {
        let pokedata = response.data
        let pokeName = pokedata.name;
        let pokeId = pokedata.id;
        let pokeHp = pokedata.stats[5].base_stat;
        let pokeAtt = pokedata.stats[4].base_stat;
        let pokeDef = pokedata.stats[3].base_stat;
        let pokeFrontURL = pokedata.sprites.front_default
        let pokeBackURL = pokedata.sprites.back_default
            // console.log(pokemonNumber)

        let pokemonnn = new Pokemon(pokeName, pokeId, pokeHp, pokeAtt, pokeDef, pokeFrontURL, pokeBackURL)
        console.log(pokemonnn.name);
    })


}

let mewtwo = addPokemon(150);
// console.log(mewtwo)

let magikarp = addPokemon(129);




// axios.get('https://pokeapi.co/api/v2/pokemon/?limit=949').then((response) => {
//     let data = response.data
//     console.log(data)

//     // let pokeNumData = (num) => {
//     //     console.log((data.results[(num + 1)].name).capitalize())
//     //     console.log(data.results[(num + 1)].url)
//     // }
//     // pokeNumData(12)

//     // console.log(data.results["pikachu"])
//     let pokemonApiUrl = data.results[0].url
//     console.log(pokemonApiUrl)
//         // createPokemon() => {}

//     // get pokemon stuff from pokemon url
//     axios.get(pokemonApiUrl).then((response) => {
//         let pokedata = response.data
//         let pokeName = pokedata.name;
//         let pokeHp = pokedata.stats[5].base_stat
//         let pokeAtt = pokedata.stats[4].base_stat
//         let pokeDef = pokedata.stats[3].base_stat
//             // console.log(pokemonNumber)
//             // creating a pokemon testing
//             // let newPoke = new Pokemon(pokeName, pokemonNumber, pokeHp, pokeAtt, pokeDef)
//             // pokedata.abilities.forEach(element => {
//             //     newPoke.ability.push(element.ability.name)
//             // });

//     })
// })












// // axios.get('https://pokeapi.co/api/v2/pokemon/?limit=949').then((response) => {
// //     let data = response.data
// //     console.log(data)

// //     // let pokeNumData = (num) => {
// //     //     console.log((data.results[(num + 1)].name).capitalize())
// //     //     console.log(data.results[(num + 1)].url)
// //     // }
// //     // pokeNumData(12)

// //     // console.log(data.results["pikachu"])
// //     let pokemonApiUrl = data.results[0].url
// //     console.log(pokemonApiUrl)
// //         // createPokemon() => {}

// //     // get pokemon stuff from pokemon url
// //     axios.get(pokemonApiUrl).then((response) => {
// //         let pokedata = response.data
// //         let pokeName = pokedata.name;
// //         let pokeHp = pokedata.stats[5].base_stat
// //         let pokeAtt = pokedata.stats[4].base_stat
// //         let pokeDef = pokedata.stats[3].base_stat
// //             // console.log(pokemonNumber)



// //         // creating a pokemon testing
// //         // let newPoke = new Pokemon(pokeName, pokemonNumber, pokeHp, pokeAtt, pokeDef)
// //         // pokedata.abilities.forEach(element => {
// //         //     newPoke.ability.push(element.ability.name)
// //         // });

// //     })
// // })