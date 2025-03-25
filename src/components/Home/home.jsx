import React from "react"
import s from "./home.module.scss"
import hacker from "./assets/hacker.png"
import circulo from "./assets/Ellipse1.png"
import portfolioIcon from "./assets/portfolio.png"
import Nav from "../Nav/Nav"
import { motion } from "framer-motion"
import * as functions from "../../handlers/localSorage"
import { useDispatch } from "react-redux"
import { changeSelectedWindow} from "../../redux/actions/actions"


const Home = () => {
  
    const dispatch = useDispatch()

    React.useEffect(() => {
        functions.setPagerLocalStorage(window.location.pathname === "/" ? "home" : window.location.pathname.substring(1))
        dispatch(changeSelectedWindow("home"))
    }, [])


    return (
      <div className={s.contenedorPadre}>
        <div className={s.contenedorHeader}>
          <div className={s.contenedorTitle}>
            <motion.b
              animate={{ x: [-1800, 0], y: [0, 0], opacity: [0, 1] }}
              transition={{delay: 0.5}}
            >{`>`}</motion.b>
            <motion.h1
              animate={{ x: [-1800, 0], y: [0, 0], opacity: [0, 1] }}
              transition={{delay: 0.5}}
              className={s.title}
            >
              Bienvenid<b className={s.o}>@</b> al portfolio de{" "}
              <b className={s.o}>O</b>wen
            </motion.h1>
            <motion.div
              className={s.MyName}
              animate={{ x: [700, 0], y: [0, 0], opacity: [0, 1] }}
            >
              <div>
                <img
                  src={portfolioIcon}
                  alt="icon"
                  className={s.portfolioIcon}
                />
              </div>
            </motion.div>
          </div>
        </div>
        <div className={s.contenedorImageNav}>
          <div className={s.about}>
              <>
                <b className={s.b1}><b className={s.inicio}>{`>`}</b> Mi nombre es Owen, soy Desarrollador</b>
                <b className={s.b2}>Web Full Stack. Me motiva aprender nuevas </b>
                <b className={s.b3}>tecnologias, trabajar en  equipos donde la</b>
                <b className={s.b4}> diversidad de opiniones y puntos de vista </b>
                <b className={s.b5}> aportan al desarrollo grupal, mejorar en esta </b>
                <b className={s.b6}> area cada día y continuar aprendiendo Ingles.</b>
                <b className={s.b7}> Team Front y Back por igual ;)</b> 
              </>
              <motion.div
                 animate={{ y: [200, 0], x: [0, 0], opacity: [0, 1] }}
                 transition={{delay: 0.5}}
                 className={s.downloadCV}>
                <a download="CV-Owen" className={s.downloadCVButton}>Descargar CV </a>
              </motion.div>
          </div>
          <motion.div
            className={s.visual}
            animate={{ y: [700, 0], opacity: [0, 1] }}
          >
            <img src={circulo} alt="sombra" className={s.Circulo} />
            <img src={circulo} alt="sombra" className={s.Circulo2} />
            <img src={hacker} alt="sombra" className={s.hacker} />
          </motion.div>
          <div className={s.contenedorLista}>
            <Nav></Nav>
          </div>
        </div>
      </div>
    );
}


export default Home