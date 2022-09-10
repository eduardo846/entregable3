import axios from 'axios';
import React, { useEffect, useState } from 'react';
import CharactersItems from './CharactersItems';


const UniverseRickAndMorty = () => {
    const [characters, setCharacter]=useState({})
    const [typeId, setTypeId]=useState("")

    useEffect(()=>{
        const randomId = Math.floor(Math.random()*126)+1
        axios.get(`https://rickandmortyapi.com/api/location/${randomId}`)
        .then(res => setCharacter(res.data))
    },[])

    const searchType = () =>{
     axios.get(`https://rickandmortyapi.com/api/location/${typeId}`)
     .then(res => setCharacter(res.data))
    }

console.log(characters)
    return (
        <div>
            <h1>{characters.name}</h1>
            <input type="text" value={typeId} onChange={e=>setTypeId(e.target.value)} className="input-container"/>
            <button onClick={searchType}>Search</button>
            <ul className='character-container'>
            {characters.residents?.map(character=>(
            //<li key={character}>{character}</li>
            <CharactersItems url={character} key={character}/>
            ))}
            </ul>
        </div>
    );
};

export default UniverseRickAndMorty;