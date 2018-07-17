let shahid = new Trainer("shahid")
shahid.add(150)
shahid.add(129)
shahid.add(126)
    //


let loadPokemon = (trainer, pokemonIndex) => {


    let pokename = document.getElementById("pokemon-name")
    pokename.innerText = trainer.all()[pokemonIndex].name.capitalize()

    let pokeid = document.getElementById("pokemon-id")
    pokeid.innerText = trainer.all()[pokemonIndex].pokeId

    let pokeHp = document.getElementById("pokemon-hp")
    pokeHp.innerText = `HP: ${trainer.all()[pokemonIndex].hp}`

    let pokeAttack = document.getElementById("pokemon-attack")
    pokeAttack.innerText = `Attack: ${trainer.all()[pokemonIndex].attack}`

    let pokeDef = document.getElementById("pokemon-defense")
    pokeDef.innerText = `Defense: ${trainer.all()[pokemonIndex].attack}`

    let pokeImg = document.getElementById("pokemon-front-sprite")
    pokeImg.setAttribute("src", trainer.all()[pokemonIndex].frontURL)

    let pokeabilities = document.getElementById("pokemon-abilities")
    pokeabilities.innerText = `Abilities: ${ trainer.all()[pokemonIndex].ability[0].split('-').join(' ').toProperCase() }, ${ trainer.all()[pokemonIndex].ability[1].split('-').join(' ').toProperCase()}`

    let pokeType = document.getElementById("pokemon-type")
    pokeType.innerText = `${ trainer.all()[pokemonIndex].types[0].capitalize()}`
    pokeType.setAttribute("class", `${trainer.all()[pokemonIndex].types[0]}-type`)

}