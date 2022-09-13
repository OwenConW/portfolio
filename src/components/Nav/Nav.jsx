import React from "react"
import { Link } from "react-router-dom"
import s from "./Nav.module.scss"


const Nav = () =>  {
    return(
        <>
        <ul className={s.lista}>
                    <li className={s.item}><Link to="/about" className={s.Link}>.SOBRE_MI<b className={s.parentesis}>()</b></Link></li>
                    <li className={s.item}><Link to="/proyects" className={s.Link}>.PROYECTOS<b className={s.parentesis}>()</b></Link></li>
                    <li className={s.item}><Link to="/contact" className={s.Link}>.CONTACTAME<b className={s.parentesis}>()</b></Link></li>
                    <li className={s.item}><Link to="/tech" className={s.Link}>.TECNOLOGIAS<b className={s.parentesis}>()</b></Link></li>
                </ul>
        </>
    )
}


export default Nav