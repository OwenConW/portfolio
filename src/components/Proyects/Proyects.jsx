import React, { useRef } from "react"
import * as functions from "../../handlers/localSorage"
import { useDispatch } from "react-redux"
import { changeSelectedWindow} from "../../redux/actions/actions"
import Nav from "../Nav/Nav"
import s from "./Proyects.module.scss"   
import { motion, useTime } from "framer-motion";
import punto from "./assets/punto.png"
import scroll from "./assets/scroll.png"
import click from "./assets/hacer-clic.png"
import gitHub from "./assets/github.png"
import deploy from "./assets/deploy.png"
//-
import login from "./assets/login.png"
import createAccount from "./assets/createAccount.png"
import home from "./assets/home.png"
import catalogo from "./assets/catalogo.png"
import mapa from "./assets/mapa.png"
import details from "./assets/details.png"
import chat from "./assets/chat.png"
import admin from "./assets/admin.png"
import faq from "./assets/faq.png"
import panelConfig from "./assets/panelConfig.png"
import profileP from "./assets/profileP.png"
import soporte from "./assets/soporte.png"
//-
import landingW from "./assets/landingW.png"
import homeW from "./assets/homeW.png"
import searchW from "./assets/searchW.png"
import formW from "./assets/formW.png"
import aboutW from "./assets/aboutW.png"
import noPokemonW from "./assets/noPokemonW.png"
import errorW from "./assets/errorW.png"
//-
import nocities from "./assets/nocities.png"
import citiesDay from "./assets/citiesDay.png"
import citiesNight from "./assets/citiesNight.png"
import detailClima from "./assets/detailClima.png"
import aboutClima from "./assets/aboutClima.png"
import errorC from "./assets/error.png"

export default function Proyects() {
  const cardVariants = {
    offscreenL: {
      x: -500
    },
    offscreenR: {
      x: 500
    },
    onscreen: {
      x: 0,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8
      }
    }
  };
  const dispatch = useDispatch();

  let imagenesJobHub = [login, createAccount, home, catalogo, mapa, details, chat, admin, faq, panelConfig, profileP, soporte]

  let imagenesWiki = [landingW, homeW, searchW, formW, aboutW, noPokemonW, errorW]

  let imagenesAppClima = [nocities, citiesDay, citiesNight, detailClima, aboutClima, errorC]

  React.useEffect(() => {
    functions.setPagerLocalStorage(window.location.pathname.substring(1));
    dispatch(changeSelectedWindow(window.location.pathname.substring(1)));
  }, []);

  return (
    <>
      <div className={s.contenedorPadre}>
        <div className={s.contenedorTitle}>
          <motion.div
          initial={{ opacity: 0, x: -1000 }}
          animate={{opacity: 1, x: 0,}}
          transition={{type: "spring",  delay: 0.5 }}>
          <motion.b>{`>`}</motion.b>
          <motion.h1 className={s.title}>Galeria de proyectos </motion.h1>
          </motion.div>
          <motion.div
          animate={{ y: [-170, 0], x: [0, 0], opacity: [0, 1]}}
          transition={{delay: 1}}>
            <motion.img src={punto} alt="punto" className={s.puntoIcon}
            animate={{y:[0, 0, 0, 8, 0, 0, 8, 0,  0, 8, 0,  0, 8, 0, 0]}}
            transition={{repeat: Infinity, duration: 7}}/>
            <motion.img src={scroll} alt="scroll"
            animate={{y:[0, 0, 0, 8, 0, 0, 8, 0,  0, 8, 0,  0, 8, 0, 0]}}
            transition={{repeat: Infinity, duration: 7}}/>
          </motion.div>
        </div>
        <div className={s.contenedorProyectsNav}>
          <div className={s.contenedorProyects}>
            <div className={s.contenedorCarousel}>
            <motion.div
              id="carouselExampleControls"
              class="carousel slide"
              data-ride="carousel"
              initial={{ x: 4000, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}>
              <div className="carousel-inner">
                <div className="carousel-item active">
                <div className={s.ImagenesProyecto}>
                  <h1 id="firstJ" className={s.tituloProyecto}>Job Hub App</h1>
                  {
                    imagenesJobHub?.map((l, i) => {
                      return (
                        i % 2 === 0 ? 
                        <motion.img src={`${l}`} alt={`${l}`} className={s.itemCarousel}
                        variants={cardVariants}
                        initial="offscreenR"
                        whileInView="onscreen"/>
                        :
                        <motion.img src={`${l}`} alt={`${l}`} className={s.itemCarousel}
                        variants={cardVariants}
                        initial="offscreenL"
                        whileInView="onscreen"/>
                      )
                    })
                  }
                  <h1><img src={gitHub} alt="github"/><a href="https://github.com/OwenConW/JobHubApp">Repositorio</a></h1>
                  <h1><img src={deploy} alt="deploy"/><a href="https://jobhub.vercel.app/">Deploy</a></h1>
                  <h1 className={s.comeBack}><a href="#firstJ">Regresar</a><img src={click} alt="clickback"/></h1>
                </div>
                </div>
                <div className="carousel-item">
                <div className={s.ImagenesProyecto}>
                <h1 id="firstW" className={s.tituloProyecto}>Wiki Pokemon</h1>
                {
                    imagenesWiki?.map((l, i) => {
                      return (
                        i % 2 === 0 ? 
                        <motion.img src={`${l}`} alt={`${l}`} className={s.itemCarousel}
                        variants={cardVariants}
                        initial="offscreenR"
                        whileInView="onscreen"/>
                        :
                        <motion.img src={`${l}`} alt={`${l}`} className={s.itemCarousel}
                        variants={cardVariants}
                        initial="offscreenL"
                        whileInView="onscreen"/>
                      )
                    })
                  }
                <h1><img src={gitHub} alt="github"/><a href="https://github.com/OwenConW/WikiPokemon">Repositorio</a></h1>
                <h1><img src={deploy} alt="deploy"/><a href="https://pokemon-wikit-by-owen.vercel.app/">Deploy</a></h1>
                  <h1 className={s.comeBack}><a href="#firstW">Regresar</a><img src={click} alt="clickback"/></h1>
            </div>
                </div>
                <div className="carousel-item">
                <div className={s.ImagenesProyecto}>
                <h1 id="firstC" className={s.tituloProyecto}>App Clima </h1>
                {
                    imagenesAppClima?.map((l, i) => {
                      return (
                        i % 2 === 0 ? 
                        <motion.img src={`${l}`} alt={`${l}`} className={s.itemCarousel}
                        variants={cardVariants}
                        initial="offscreenR"
                        whileInView="onscreen"/>
                        :
                        <motion.img src={`${l}`} alt={`${l}`} className={s.itemCarousel}
                        variants={cardVariants}
                        initial="offscreenL"
                        whileInView="onscreen"/>
                      )
                    })
                  }
                <h1><img src={gitHub} alt="github"/><a href="https://github.com/OwenConW/App_clima">Repositorio</a></h1>
                <h1><img src={deploy} alt="deploy"/><a href="https://app-clima-lime.vercel.app/">Deploy</a></h1>
                  <h1 className={s.comeBack}><a href="#firstC">Regresar</a><img src={click} alt="clickback"/></h1>
                </div>
                </div>
              </div>
              <a
                className={s.carousel_control_prev}
                href="#carouselExampleControls"
                role="button"
                data-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="sr-only">Previous</span>
              </a>
              <a
                className={s.carousel_control_next}
                href="#carouselExampleControls"
                role="button"
                data-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="sr-only">Next</span>
              </a>
            </motion.div>
            </div>
          </div>
          <div className={s.contenedorNav}>
            <Nav></Nav>
          </div>
        </div>
      </div>
    </>
  );
}