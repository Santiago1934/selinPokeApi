import React from "react";
import Card from "../Card/Card"
import Pagination from "../Home/Pagination"
import { ContainerCard } from "../Card/CardElements"

const Pokedex = ({ pokemons, setPage, totalPages, page }) => {

    
    const lastPage = () => {
        const nextPage = Math.max(page - 1, 0);
        setPage(nextPage);
      };
    
      const nextPage = () => {
        const nextPage = Math.min(page + 1, totalPages - 1);
        setPage(nextPage);
      };

     

    return (

        <div>
            <ContainerCard>

                {pokemons?.length ? pokemons.map((pokemon, index) => {
                    return <Card pokemon={pokemon} key={index} />
                }) : <></>}

            </ContainerCard>

            <Pagination
                page={page + 1}
                onRightClick={nextPage}
                onLeftClick={lastPage}
                totalPages={totalPages} />
        </div>
    )
}

export default Pokedex;
