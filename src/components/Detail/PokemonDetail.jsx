import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import { useTranslation } from "react-i18next"
import { searchPokemon, getAbility, getType } from "../../api"
import {
    ContainerDetails,
    ContainerImg,
    ContainerInfo,
    ContainerStats,
    StatValue,
    Types,
} from "./DetailElements"


export default function PokemonDetail() {

    const [dataPokemon, setPokemonData] = useState([])

    const [abilityDes, setAbilityDes] = useState([])

    const [typeDes, setTypeDes] = useState([])

    const [t, i18n] = useTranslation('global')

    const [language, setLanguage] = useState("")

    const [favorites, setFavorites] = useState([])

    const { id } = useParams()

    useEffect(async () => {
        setLanguage(JSON.parse(localStorage.getItem('lang')))
        try {
            const data = await searchPokemon(id)
            const promises = await data.types.map(async (el) => {
                return await getType(el.type.name);
            })
            const results = await Promise.all(promises)
            setPokemonData(data)

            if (language === "en") {
                setTypeDes(results.map(el => el.names.find(lang => lang.language.name === "en")))
            } else {
                setTypeDes(results.map(el => el.names.find(lang => lang.language.name === "es")))
            }
        }
        catch (e) { }
    }, [language])


    useEffect(async () => {
        try {
            const data = await searchPokemon(id)
            const promises = await data.abilities.map(async (el) => {
                return await getAbility(el.ability.url);
            })
            const results = await Promise.all(promises)

            if (language === "es") {
                setAbilityDes(results.map(el => el.names.find(lang => lang.language.name === "es")))
            } else {
                setAbilityDes(results.map(el => el.names.find(lang => lang.language.name === "en")))
            }
        }
        catch (e) { }
    }, [language])



    return (

        <ContainerDetails>

            <h1>{dataPokemon.name}</h1>

            <ContainerImg>
                <img src={dataPokemon.sprites?.other.dream_world.front_default} alt={dataPokemon.name} />
            </ContainerImg>

            <ContainerInfo>

                <div>
                    <h1>{t("type.title")}</h1>
                    {<Types>
                        {typeDes?.map((el, index) => {
                            return <h3 key={index}>
                                {el.name}
                            </h3>
                        })}
                    </Types>}
                </div>

                <div>
                    <h1>{t("type.abilities")}</h1>

                    <Types>

                        {abilityDes?.map((el, index) => {
                            return <h3 key={index}>
                                {el.name}
                            </h3>
                        })}
                    </Types>

                </div>

                <ContainerStats>

                    {dataPokemon.stats?.map((el, index) => {
                        return (
                            <div key={index} >
                                <StatValue>
                                    <h3>{el.base_stat}</h3>
                                </StatValue>
                                <h2>{el.stat.name}</h2>
                            </div>

                        )
                    })}
                </ContainerStats>


            </ContainerInfo>



        </ContainerDetails>


    )
}