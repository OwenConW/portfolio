import React, { useRef } from "react"
import * as functions from "../../handlers/localSorage"
import { useDispatch } from "react-redux"
import { changeSelectedWindow} from "../../redux/actions/actions"
import Nav from "../Nav/Nav"
import s from "./Proyects.module.scss"   
import { motion, useScroll } from "framer-motion";
import punto from "./assets/punto.png"
import scroll from "./assets/scroll.png"
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

export default function Proyects() {
  const ref = useRef(null);
  const { scrollXProgress } = useScroll({ container: ref });

  const dispatch = useDispatch();

  React.useEffect(() => {
    functions.setPagerLocalStorage(window.location.pathname.substring(1));
    dispatch(changeSelectedWindow(window.location.pathname.substring(1)));
  }, []);

  return (
    <>
      <div className={s.contenedorPadre}>
        <div className={s.contenedorTitle}>
          <div>
          <motion.b
             initial={{ x: -4000, opacity: 0 }}
             animate={{ x: 0, opacity: 1 }}
             transition={{ delay: 0.5 }}
          >{`>`}</motion.b>
          <motion.h1
              initial={{ x: -4000, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
            className={s.title}
          >
            Galeria de proyectos
          </motion.h1>
          </div>
          <div>
            <img src={punto} alt="punto" className={s.puntoIcon}/>
            <img src={scroll} alt="scroll"/>
          </div>
        </div>
        <div className={s.contenedorProyectsNav}>
          <div className={s.contenedorProyects}>
            <div className={s.contenedorCarousel}>
            <motion.div
              id="carouselExampleControls"
              class="carousel slide"
              data-ride="carousel"
              initial={{ y: 4000, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <div class="carousel-inner">
                <div className="carousel-item active">
                <div className={s.ImagenesProyecto}>
                  <h1 id="firstJ">Job Hub App</h1>
                  <img src={login} alt="login" className={s.itemCarousel}/>
                  <motion.img src={createAccount} alt="createAccount" className={s.itemCarousel}
                    initial={{ opacity: 0, x: 0 }}
                    whileInView={{ opacity: 1}}
                  />
                  <motion.img src={home} alt="home" className={s.itemCarousel}
                  initial={{ opacity: 0, x: 0 }}
                    whileInView={{ opacity: 1}}/>
                  <motion.img src={catalogo} alt="catalogo" className={s.itemCarousel}
                  initial={{ opacity: 0, x: 0 }}
                    whileInView={{ opacity: 1}}/>
                  <motion.img src={mapa} alt="mapa" className={s.itemCarousel}
                  initial={{ opacity: 0, x: 0 }}
                    whileInView={{ opacity: 1}}/>
                  <motion.img src={details} alt="details" className={s.itemCarousel}
                  initial={{ opacity: 0, x: 0 }}
                    whileInView={{ opacity: 1}}/>
                  <motion.img src={chat} alt="chat" className={s.itemCarousel}
                  initial={{ opacity: 0, x: 0 }}
                    whileInView={{ opacity: 1}}/>
                  <motion.img src={admin} alt="admin" className={s.itemCarousel}
                  initial={{ opacity: 0, x: 0 }}
                    whileInView={{ opacity: 1}}/>
                  <motion.img src={faq} alt="faq" className={s.itemCarousel}
                  initial={{ opacity: 0, x: 0 }}
                    whileInView={{ opacity: 1}}/>
                  <motion.img src={panelConfig} alt="panelConfig" className={s.itemCarousel}
                  initial={{ opacity: 0, x: 0 }}
                    whileInView={{ opacity: 1}}/>
                  <motion.img src={profileP} alt="profileP" className={s.itemCarousel}
                  initial={{ opacity: 0, x: 0 }}
                    whileInView={{ opacity: 1}}/>
                  <motion.img src={soporte} alt="soporte" className={s.itemCarousel}
                  initial={{ opacity: 0, x: 0 }}
                    whileInView={{ opacity: 1}}/>
                  <h1><a href="https://github.com/OwenConW/JobHubApp">Repositorio</a></h1>
                  <h1><a href="https://jobhub.vercel.app/">Deploy</a></h1>
                  <h1 className={s.comeBack}><a href="#firstJ">Regresar</a></h1>
                </div>
                </div>
                <div className="carousel-item">
                <div className={s.ImagenesProyecto}>
                <h1 id="firstW">Wiki Pokemon</h1>
                <img src={landingW} alt="landingW" className={s.itemCarousel}/>
                <img src={homeW} alt="homeW" className={s.itemCarousel}/>
                <img src={searchW} alt="searchW" className={s.itemCarousel}/>
                <img src={formW} alt="formW" className={s.itemCarousel}/>
                <img src={aboutW} alt="aboutW" className={s.itemCarousel}/>
                <img src={noPokemonW} alt="noPokemonW" className={s.itemCarousel}/>
                <h1><a href="https://github.com/OwenConW/WikiPokemon">Repositorio</a></h1>
                <h1><a href="https://pokemon-wikit-by-owen.vercel.app/">Deploy</a></h1>
                  <h1 className={s.comeBack}><a href="#firstW">Regresar</a></h1>
            </div>
                </div>
                <div className="carousel-item">
                <div className={s.ImagenesProyecto}>
                <h1 id="firstC">App Clima </h1>
                <img src={soporte} alt="soporte" className={s.itemCarousel}/>
                <h1><a href="https://github.com/OwenConW/App_clima">Repositorio</a></h1>
                <h1><a href="https://app-clima-lime.vercel.app/">Deploy</a></h1>
                  <h1 className={s.comeBack}><a href="#firstC">Regresar</a></h1>
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
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="sr-only">Previous</span>
              </a>
              <a
                className={s.carousel_control_next}
                href="#carouselExampleControls"
                role="button"
                data-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="sr-only">Next</span>
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
          {/*        
            <div>
                <h1>Job Hub App</h1>
                <img src={login} alt="login"/>
            </div>
            <div>
                <h1>Wiki Pokemon</h1>Name
           <img src={home} alt="login"/>
            </div>
            <div>
                <h1>App Clima</h1>
                <img src={mapa} alt="login"/>
            </div> */}