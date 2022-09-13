import React from "react"
import s from "./home.module.scss"
import hacker from "./assets/hacker.png"
import circulo from "./assets/Ellipse1.png"
import Nav from "../Nav/Nav"


const Home = () => {
    return (
        <div className={s.contenedorPadre}>
            <div className={s.contenedorHeader}>
                <div className={s.contenedorTitle}>
                <b>{`>`}</b><h1 className={s.title}>Bienvenid<b className={s.o}>x</b> al portfolio de <b className={s.o}>O</b>wen...</h1>    
                <div className={s.MyName}>
                    <div>
                        <h1 className={s.name}>OWEN NICOLAS PEREZ BONORIS</h1>
                    </div>
                </div>
                </div>
            </div>
            <div className={s.contenedorImageNav}>
                <div className={s.about}>
                    <b className={s.b1}><b className={s.inicio}>{`>`}</b> Mi nombre es Owen, soy </b>
                    <b className={s.b2}> Desarrollador Web Full Stack, </b>
                    <b className={s.b3}>me motiva aprender nuevas</b>
                    <b className={s.b4}>tecnologias, así como a su vez </b>
                    <b className={s.b5}> adentrarme en el mundo de la </b>
                    <b className={s.b6}><b className={s.inicio}>ciberseguridad</b> y seguir </b>
                    <b className={s.b7}> aprendiendo Ingles.</b>
                </div>
            <div className={s.visual}>
                <img src={circulo} alt="sombra" className={s.Circulo}/>
                <img src={circulo} alt="sombra" className={s.Circulo2}/>
                <img src={hacker} alt="sombra" className={s.hacker}/>
            </div>
            <div className={s.contenedorLista}>
                <Nav></Nav>
            </div>
            </div>
        </div>
    )
}


export default Home