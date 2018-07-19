let shahid = new Trainer("shahid")

shahid.add(150)
shahid.add(129)
shahid.add(126)
    //




let loadPokemon = (trainer, pokemonIndex) => {

    let pokename = document.getElementById("pokemon-name")
    pokename.innerText = trainer.all()[pokemonIndex].name.capitalize()

    let pokeid = document.getElementById("pokemon-id")
    pokeid.innerText = `# ${trainer.all()[pokemonIndex].pokeId}`

    let pokeHp = document.getElementById("pokemon-hp")
    pokeHp.innerText = `${trainer.all()[pokemonIndex].hp}`
    let hpStatBar = document.getElementById("bar-hp")
    hpStatBar.setAttribute("style", `width:${(trainer.all()[pokemonIndex].hp/255)*100}%;`)

    let pokeAttack = document.getElementById("pokemon-attack")
    pokeAttack.innerText = `${trainer.all()[pokemonIndex].attack}`
    let attackStatBar = document.getElementById("bar-attack")
    attackStatBar.setAttribute("style", `width:${(trainer.all()[pokemonIndex].attack / 190) * 100}%;`)

    let pokeDef = document.getElementById("pokemon-defense")
    pokeDef.innerText = `${trainer.all()[pokemonIndex].defense}`
    let defenseStatBar = document.getElementById("bar-defense")
    defenseStatBar.setAttribute("style", `width:${(trainer.all()[pokemonIndex].defense / 230) * 100}%;`)

    let pokeImg = document.getElementById("pokemon-front-sprite")
    pokeImg.setAttribute("src", trainer.all()[pokemonIndex].frontURL)

    let pokeabilities = document.getElementById("pokemon-abilities")
    pokeabilities.innerText = `${ trainer.all()[pokemonIndex].ability[0].split('-').join(' ').toProperCase() }, ${ trainer.all()[pokemonIndex].ability[1].split('-').join(' ')}`

    let pokeType = document.getElementById("pokemon-type")
    pokeType.innerHTML = `<span class="badge badge-primary ${trainer.all()[pokemonIndex].types[0]}-type">${trainer.all()[pokemonIndex].types[0]}</span>`

}