import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next";

import {
    Nav,
    Logo,
    Options,
    LangMenu,
    SelectedLanguage,
    OptionEN,
    OptionES
} from "./NavBarElements"


export default function NavBar() {


    const [displayLangMenu, setDisplayLangMenu] = useState(false)

    const [language, setLanguage] = useState("")

    const [t, i18n] = useTranslation("global")


    useEffect(() =>{
        if(!window.localStorage.getItem('lang')) {
            window.localStorage.setItem('lang', JSON.stringify(language))
        } else {
            setLanguage(JSON.parse(window.localStorage.getItem('lang')))
        }  
            i18n.changeLanguage(language)
    },[language])

    const handleLanguage = (lang) => {
        if(window.location.pathname !== "/") {
            window.location.reload()
        }
         setLanguage(lang) 
        window.localStorage.setItem('lang', JSON.stringify(lang))
    }

    return (
        <div>

            <Nav>
                <Link to="/">
                    <Logo src="https://fontmeme.com/permalink/210808/4e816b2054ec28e02df265cce2ba2753.png" alt="fuente-pokemon" border="0" />
                </Link>


                <LangMenu onClick={() => setDisplayLangMenu(!displayLangMenu)}>

                    <SelectedLanguage>
                        {language === "en" ? <OptionEN>English</OptionEN> : <OptionES>Spanish</OptionES>}
                    </SelectedLanguage>


                    <Options displayLangMenu={displayLangMenu}>

                        <OptionEN onClick={() => handleLanguage("en")}>English</OptionEN>

                        <OptionES onClick={() => handleLanguage("es")}>Spanish</OptionES>

                    </Options>

                </LangMenu> 
                
            </Nav>

        </div>
    )
}
