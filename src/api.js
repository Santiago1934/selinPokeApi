export const getPokemons = async (offset=0) => {
    try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=5`)
        const data = await res.json()
        return data;
    }
    catch(error) {}
}


export const searchPokemon = async (name) => {
    try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
        const data = await res.json()
        return data;
    }
    catch(error) {}
}



export const getPokemonData = async (url)  => {
    try {
        const res = await fetch(url)
        const data = await res.json()
        return data;
    } catch(error) {}
}


export const getPokemonDescription = async (id)  => {
    try {
        const res = await fetch(`https://pokeapi.co/api/v2/characteristic/${id}/`)
        const data = await res.json()
        return data;
    } catch(error) {}
}


export const getAbility = async (url) => {
    try {
        const res = await fetch(url)
        const data = await res.json()
        return data;
    } catch(error) {}
}


export const getType = async (name) => {
    try {
        const res = await fetch(`https://pokeapi.co/api/v2/type/${name}/`)
        const data = await res.json()
        return data;
    } catch(error) {}
}