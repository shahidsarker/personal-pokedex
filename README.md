# Personal Pokedex

A personal Pokédex created during the NYCDA Web Development Fellowship. The exercise requires creating a webpage to display three Pokémon characters belonging to a Pokémon Trainer.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites


#### General
- Represent a fictitious trainer name
- Have relevant information presented on at least 3 different pokemon:
    - display information regarding the pokemon’s:
        - Hp
        - Attack
        - Defense
        - At least one ability


#### GitHub
- Deploy to GitHub pages
- Have an active GitHub repo with multiple commits and branches.

#### Technical
- Have a Pokemon Class which will be able to create instances of pokemon with the following properties:
    - hp - integer
    - attack - integer
    - defense - integer
    - abilities - array of strings
- Have a Trainer Class which will have a container object to store all your pokemon objects inside of it. 
    - have a method named all
        - accepts no parameters
        - returns an array of Pokemon objects
    - have a method named get
        - accepts 1 parameter called name
        - returns a Pokemon object housing information for the pokemon it found
    - have a method named add
        - accepts 1 parameter called pokemonObject
        - adds the pokemon object to the trainer's container object for all his pokemon
- retrieve pokemon information via the Pokemon API
- retrieve information using javascript ajax calls
- have all CSS code written in SASS
- use a front-end framework like materialize/bootstrap/skeleton to integrate the grid system.

### Installing

A step by step series of examples that tell you how to get a development env running

Say what the step will be

```
Give the example
```

And repeat

```
until finished
```

End with an example of getting some data out of the system or using it for a little demo

## Running the tests

Explain how to run the automated tests for this system

### Break down into end to end tests

Explain what these tests test and why

```
Give an example
```

### And coding style tests

Explain what these tests test and why

```
Give an example
```

## Deployment

Add additional notes about how to deploy this on a live system

## Built With

* [Bootstrap](http://www.dropwizard.io/1.0.2/docs/) - The web framework used
* [Sass](https://maven.apache.org/) - Style Sheet Language
* [Koala](http://koala-app.com) - GUI App for Sass to CSS Compilation
* [VSCode](https://code.visualstudio.com) - Source code editor
* [axios](https://github.com/axios/axios) - Promise based HTTP client

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags). 

## Authors

* **Shahid Sarker** - *Initial work* - [shahidsarker](https://github.com/shahidsarker)


## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Hat tip to anyone whose code was used
* Inspiration
* etc