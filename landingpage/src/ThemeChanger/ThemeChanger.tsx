import React, { useEffect, useState } from "react";
import getThemes from "../Api/Api";


/*

    Needs this link with default theme in html header:
    <link id="theme" rel="stylesheet" href="https://api.kamodb.de:5000/themes/futuristic.css">


*/

interface Theme {
    key: string,
    path: string
}

export default function ThemeChanger(){

    const [themesList, setThemesList] = useState([])

    useEffect(() => {
        getThemes().then(
            data => {
                setThemesList(data.themes)
                // console.log(data.themes)
            }
        )
    }, [])


    return (
        <div>
        <select title="Change theme" className="theme_changer" onChange={(e) => {document.getElementById("theme")?.setAttribute("href", e.target.value)}}>
            {themesList.map((theme: Theme, index: number) => {
                return <option key={index} value={theme.path}>{theme.key}</option>
            })}
        </select>
        </div>
    )

}