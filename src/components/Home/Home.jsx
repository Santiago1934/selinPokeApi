import React, { useEffect, useState } from 'react'
import { NotFound } from "./PaginationElements"
import { getPokemons, getPokemonData, searchPokemon } from "../../api"
import { useTranslation } from "react-i18next"
import Pokedex from "../Pokedex/Pokedex"
import SearchBar from '../SearchBar/SearchBar'

export default function Home() {

    const [pokemons, setPokemons] = useState([])

    const [page, setPage] = useState(0)

    const [totalPages, setTotalPages] = useState(0)

    const [notFound, setNotFound] = useState(false);

    const [ t, i18n] = useTranslation('global')

    

    const fetchPokemons = async () => {
        try {
            const data = await getPokemons(5 * page)
            const promises = data.results.map(async (pokemon) => {
                return await getPokemonData(pokemon.url)
            })
            const results = await Promise.all(promises)
            setPokemons(results)
            setTotalPages(Math.ceil(data.count / 5))
        } catch (err) { }
    }

    useEffect(async () => {
        fetchPokemons()
    }, [page])


    const onSearch = async (pokemon) => {
        if (!pokemon) {
            setNotFound(false)
            return fetchPokemons();
        }
        setNotFound(false);
        const result = await searchPokemon(pokemon);
        if (!result) {
            setNotFound(true);
            return ;
        } else {
            setPokemons([result])
            setPage(0);
            setTotalPages(1)
        }
    }




    return (
        <div>

           <SearchBar onSearch={onSearch}/>

        
            { notFound ? (
            <NotFound >
              <h1>{t("notfound.text")}</h1>
            </NotFound>
          ) : (
            <Pokedex
              pokemons={pokemons}
              page={page}
              setPage={setPage}
              totalPages={totalPages}
            />
          )}

        </div>
    )
}
