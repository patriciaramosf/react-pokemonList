import React from 'react';
import Pokemon from './Pokemon'


const PokeList = (props) => {
    
    return(
        <ul className="PokeList__container">
            {props.dataList.map(myPokemon=>
                <li key={myPokemon.id}>
                    <Pokemon    key={myPokemon.id}  
                                pokeImage={myPokemon.url}
                                pokeName={myPokemon.name}
                                pokeTypes={myPokemon.types}
                                favourites={props.favourites}
                                getFav={props.getFav}
                                id={myPokemon.id}
                    /> 
                </li>
            )}         
        </ul>
    )
}

export default PokeList;