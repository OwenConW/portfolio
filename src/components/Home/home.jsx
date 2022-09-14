import React from "react"
import s from "./home.module.scss"
import hacker from "./assets/hacker.png"
import circulo from "./assets/Ellipse1.png"
import portfolioIcon from "./assets/portfolio.png"
import Nav from "../Nav/Nav"
import { motion } from "framer-motion"


const Home = () => {

    return (
        <div className={s.contenedorPadre}>
            <div className={s.contenedorHeader}>
                <div className={s.contenedorTitle}>
                <motion.b initial={{x:-4000, opacity: 0}} animate={{ x: 0, opacity: 1 }} transition={{delay: 0.5}}>{`>`}</motion.b><motion.h1 initial={{x:-4000, opacity: 0}} animate={{ x: 0, opacity: 1 }} transition={{delay: 0.5}} className={s.title}>Bienvenid<b className={s.o}>@</b> al portfolio de <b className={s.o}>O</b>wen.....</motion.h1>    
                <motion.div className={s.MyName} animate={{ x: [700, 0], y: [0, 0],  opacity: [0, 1] }}>
                    <div>
                        <img src={portfolioIcon} alt="icon" className={s.portfolioIcon}/>
                    </div>
                </motion.div>
                </div>
            </div>
            <div className={s.contenedorImageNav}>
                <div className={s.about}>
                    <b className={s.b1}><b className={s.inicio}>{`>`}</b> Mi nombre es Owen, soy </b>
                    <b className={s.b2}> Desarrollador Web Full Stack, </b>
                    <b className={s.b3}>me motiva aprender nuevas</b>
                    <b className={s.b4}>tecnologias, así como a su vez </b>
                    <b className={s.b5}> adentrarme en el mundo de la </b>
                    <b className={s.b6}><b className={s.inicio}>ciberseguridad</b> y continuar </b>
                    <b className={s.b7}> aprendiendo Ingles.</b>
                </div>
            <motion.div className={s.visual} animate={{ y: [700, 0], opacity: [0, 1] }} >
                <img src={circulo} alt="sombra" className={s.Circulo}/>
                <img src={circulo} alt="sombra" className={s.Circulo2}/>
                <img src={hacker} alt="sombra" className={s.hacker}/>
            </motion.div>
            <div className={s.contenedorLista}>
                <Nav></Nav>
            </div>
            </div>
        </div>
    )
}


export default Home