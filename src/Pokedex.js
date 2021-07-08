import React, { Component } from 'react';
import './Pokedex.css';
import Pokecard from './Pokecard';

class Pokedex extends Component {
  static defaultProps = {
    pokemon: [
      { id: 4, name: 'Charmander', type: 'fire', base_experience: 62 },
      { id: 7, name: 'Squirtle', type: 'water', base_experience: 63 },
      { id: 11, name: 'Metapod', type: 'bug', base_experience: 72 },
      { id: 12, name: 'Butterfree', type: 'flying', base_experience: 178 },
      { id: 25, name: 'Pikachu', type: 'electric', base_experience: 112 },
      { id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95 },
      { id: 94, name: 'Gengar', type: 'poison', base_experience: 225 },
      { id: 133, name: 'Eevee', type: 'normal', base_experience: 65 },
    ],
  };
  render() {
    let title;
    if (this.props.iswinner) {
      title = <h1 className='Pokdex-winner'>Winning Hand</h1>;
    } else {
      title = <h1 className='Pokdex-loser'>Losing Hand</h1>;
    }
    return (
      <div className='Pokedex'>
        <h1>Pokedex</h1>
        <p>Total experience: {this.props.exp}</p>
        <p>{this.props.iswinner ? 'WINNER' : 'LOSER'}</p>
        {title}
        <div className='Pokedex-cards'>
          {this.props.pokemon.map((currPokemon) => (
            <Pokecard
              id={currPokemon.id}
              name={currPokemon.name}
              type={currPokemon.type}
              exp={currPokemon.base_experience}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Pokedex;
