import { useState } from "react"
import "./DarkMode.css"

export default function DarkMode(){
    const [darkmode, setDarkmode] =useState(false)
    return(
        <div className={`page ${darkmode && 'dark-mode'}`}>
            <button className="dark-mode-button" onClick={()=> setDarkmode(true)}>Dark Mode</button>
            <button className="light-mode-button" onClick={()=> setDarkmode(false)}>Light Mode</button>
        </div>  
    )
}