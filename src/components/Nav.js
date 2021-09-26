import React, { useEffect, useState } from "react";
import NetflixLogo from '../netflix-logo.svg'
import '../css/nav.css'

function Nav(){

    const [show, setShow] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 100) {
                setShow(true)
            }else{
                setShow(false)
            }
        })
        return () => {
            window.removeEventListener("scroll")
        }
    },[])

    return(
        <div className={`nav ${show && 'nav-black'}`}>
            <img 
            className="nav-logo"
            src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
            alt="Netflix"
            />
            <img 
            className="nav-avatar"
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt="Profile"
            />
        </div>
    )
}

export default Nav