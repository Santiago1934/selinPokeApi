import { FiSearch } from "react-icons/fi"
import React, { useState, useEffect } from 'react'
import { useTranslation } from "react-i18next";
import {
    SearchBarContainer,
    InputBar,
    IconSearch,
} from "./SearchBarElements"





const SearchBar = ({onSearch}) => {

    const [data, setData] = useState([])

    const [search, setSearch] = useState("")

    const [t, i18n] = useTranslation("global")

     const handleSubmit = async (e) => {
        e.preventDefault()
        onSearch(search.toLowerCase())
        
    } 

    const handleChange = (e) => {
        setSearch(e.target.value)
        if (e.target.value.length === 0) {
            onSearch(null)
        }
       
    }



    return (
        <div>
            <SearchBarContainer>

                <form onSubmit={handleSubmit}>

                    <IconSearch>
                        <FiSearch />
                    </IconSearch>

                    <InputBar
                        placeholder={t("search.placeholder")}
                        type="text"
                        name="search"
                        onChange={(e) => handleChange(e)}
                    />
                </form>



            </SearchBarContainer>
         
        </div>
    )
}

export default SearchBar;
