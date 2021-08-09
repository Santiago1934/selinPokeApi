import React from "react";
import { useTranslation } from "react-i18next"
import { PokemonCard, Background, ContainerImg, CardFooter } from "./CardElements";





export default function Card({ pokemon }) {

    const [t, i18n] = useTranslation('global')

   
    return (

        <PokemonCard to={`/${pokemon.id}`} key={pokemon.id}>



            <Background></Background>

            <ContainerImg>
                <img src={pokemon.sprites?.other.dream_world.front_default} alt={pokemon.name} />
            </ContainerImg>

            <CardFooter>
                <h2>{pokemon.name}</h2>

                <div>
                    <h3>{t("card.weight")}:
                        <span>{pokemon.weight}</span>
                    </h3>
                    <h3>{t("card.height")}:
                        <span>{pokemon.height}</span>
                    </h3>
                </div>
               
            </CardFooter>

        </PokemonCard>

    );
}
