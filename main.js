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

class Trainer {
    constructor(trainerName) {
        this.trainerName = trainerName;
        this.trainerPokemon = {};
        this.pokeCount = 0;
    }
    all() {
        // console.log(Object.values(this.trainerPokemon))
        return Object.values(this.trainerPokemon)
    }
    get(name) {
        // console.log(this.trainerPokemon[name]);
        return this.trainerPokemon[name]
    }
    add(id) {
        // axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`).then((response) => {
        axios.get(`https://pokeapi-nycda.firebaseio.com/pokemon/${id}.json`).then((response) => {
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
            this.pokeCount++
                // console.log(pokemonObject);
        })


    }
}

let shahid = new Trainer("shahid")
shahid.add(150)
    // shahid.get("mewtwo")
shahid.add(129)
    // shahid.get("magikarp")
shahid.add(126)



















































// let addPokemon = (id) => {
//     axios.get('https://pokeapi.co/api/v2/pokemon/' + id + '/').then((response) => {
//         let pokedata = response.data
//         let pokeName = pokedata.name;
//         let pokeId = pokedata.id;
//         let pokeHp = pokedata.stats[5].base_stat;
//         let pokeAtt = pokedata.stats[4].base_stat;
//         let pokeDef = pokedata.stats[3].base_stat;
//         let pokeFrontURL = pokedata.sprites.front_default
//         let pokeBackURL = pokedata.sprites.back_default
//             // console.log(pokemonNumber)

//         let pokemonnn = new Pokemon(pokeName, pokeId, pokeHp, pokeAtt, pokeDef, pokeFrontURL, pokeBackURL)
//         console.log(pokemonnn);
//     })
// }


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