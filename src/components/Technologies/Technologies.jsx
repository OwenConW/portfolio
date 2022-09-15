import React from "react"
import { motion } from "framer-motion"
import s from "./Technologies.module.scss"
import bootstrap from "./assets/bootstrap.png"
import css from "./assets/css.png"
import express from "./assets/express.png"
import figma from "./assets/figma.png"
import git from "./assets/git.png"
import github from "./assets/github.png"
import html from "./assets/html.png"
import js from "./assets/js.png"
import node from "./assets/node-js.png"
import postgre from "./assets/postgre.png"
import react from "./assets/react.png"
import redux from "./assets/redux.png"
import sass from "./assets/sass.png"
import scrum from "./assets/scrum.png"
import sql from "./assets/sql.png"
import typescript from "./assets/typescript.png"
import Nav from "../Nav/Nav"
import * as functions from "../../handlers/localSorage"
import { useDispatch } from "react-redux"
import { changeSelectedWindow} from "../../redux/actions/actions"


const Technologies = () => {

    const dispatch = useDispatch()

    React.useEffect(() => {
        functions.setPagerLocalStorage(window.location.pathname === "/" ? "home" : window.location.pathname.substring(1))
        dispatch(changeSelectedWindow(window.location.pathname.substring(1)))
    }, [])


    return (
      <div className={s.contenedorPadre}>
        <div className={s.contenedorTitle}>
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
            Tecnologias y skills...
          </motion.h1>
        </div>
        <div className={s.contenedorTechnologiesNav}>
        <div className={s.contenedorTechnologies}>
        <div className={s.todas}>  

          <motion.div className={s.contenedorTechnologie}
            drag
            dragConstraints={{
                top: -80,
                left: -80,
                right: 80,
                bottom: 80
            }}
            initial={{opacity: 0, delay: 2}}
            animate={{ y: [2700, 0], opacity: [0, 1]}}
            transition={{delay: 0.1}}
            >
            <motion.img src={bootstrap} alt="bootstrap" unselectable="on" />
            <h1>Bootstrap</h1>
          </motion.div>

          <motion.div className={s.contenedorTechnologie}
          drag
            dragConstraints={{
                top: -80,
                left: -80,
                right: 80,
                bottom: 80
            }}
            initial={{opacity: 0, delay: 1}}
            animate={{ y: [2700, 0], opacity: [0, 1]}}
            transition={{delay: 0.2}}
            >
            <img src={css} alt="css" />
            <h1>CSS</h1>
          </motion.div>
          <motion.div className={s.contenedorTechnologie}
          drag
            dragConstraints={{
                top: -80,
                left: -80,
                right: 80,
                bottom: 80
            }}
            initial={{opacity: 0, delay: 1}}
            animate={{ y: [2700, 0], opacity: [0, 1]}}
            transition={{delay: 0.3}}>
            <img src={express} alt="express" />
            <h1>Express</h1>
          </motion.div>
          <motion.div className={s.contenedorTechnologie}
          drag
            dragConstraints={{
                top: -80,
                left: -80,
                right: 80,
                bottom: 80
            }}
            initial={{opacity: 0, delay: 1}}
            animate={{ y: [2700, 0], opacity: [0, 1]}}
            transition={{delay: 0.4}}>
            <img src={figma} alt="figma" />
            <h1>Figma</h1>
          </motion.div>
          <motion.div className={s.contenedorTechnologie}
          drag
            dragConstraints={{
                top: -80,
                left: -80,
                right: 80,
                bottom: 80
            }}
            initial={{opacity: 0, delay: 1}}
            animate={{ y: [2700, 0], opacity: [0, 1]}}
            transition={{delay: 0.5}}>
            <img src={git} alt="git" />
            <h1>Git</h1>
          </motion.div>
          <motion.div className={s.contenedorTechnologie}
          drag
            dragConstraints={{
                top: -80,
                left: -80,
                right: 80,
                bottom: 80
            }}
            initial={{opacity: 0, delay: 1}}
            animate={{ y: [2700, 0], opacity: [0, 1]}}
            transition={{delay: 0.6}}>
            <img src={github} alt="github" />
            <h1>GitHub</h1>
          </motion.div>
          <motion.div className={s.contenedorTechnologie}
          drag
            dragConstraints={{
                top: -80,
                left: -80,
                right: 80,
                bottom: 80
            }}
            initial={{opacity: 0, delay: 1}}
            animate={{ y: [2700, 0], opacity: [0, 1]}}
            transition={{delay: 1.2}}>
            <img src={html} alt="html" />
            <h1>HTML</h1>
          </motion.div>
          <motion.div className={s.contenedorTechnologie}
          drag
            dragConstraints={{
                top: -80,
                left: -80,
                right: 80,
                bottom: 80
            }}
            initial={{opacity: 0, delay: 1}}
            animate={{ y: [2700, 0], opacity: [0, 1]}}
            transition={{delay: 1.1}}>
            <img src={js} alt="js" />
            <h1>JavaScript</h1>
          </motion.div>
          <motion.div className={s.contenedorTechnologie}
          drag
            dragConstraints={{
                top: -80,
                left: -80,
                right: 80,
                bottom: 80
            }}
            initial={{opacity: 0, delay: 1}}
            animate={{ y: [2700, 0], opacity: [0, 1]}}
            transition={{delay: 1}}>
            <img src={node} alt="node" />
            <h1>Node.js</h1>
          </motion.div>
          <motion.div className={s.contenedorTechnologie}
          drag
            dragConstraints={{
                top: -80,
                left: -80,
                right: 80,
                bottom: 80
            }}
            initial={{opacity: 0, delay: 1}}
            animate={{ y: [2700, 0], opacity: [0, 1]}}
            transition={{delay: 0.9}}
            >
            <img src={postgre} alt="postgre" />
            <h1>PostgreSQL</h1>
          </motion.div>
          <motion.div className={s.contenedorTechnologie}
          drag
            dragConstraints={{
                top: -80,
                left: -80,
                right: 80,
                bottom: 80
            }}
            initial={{opacity: 0, delay: 1}}
            animate={{ y: [2700, 0], opacity: [0, 1]}}
            transition={{delay: 0.8}}>
            <img src={react} alt="react" />
            <h1>React</h1>
          </motion.div>
          <motion.div className={s.contenedorTechnologie}
          drag
            dragConstraints={{
                top: -80,
                left: -80,
                right: 80,
                bottom: 80
            }}
            initial={{opacity: 0, delay: 1}}
            animate={{ y: [2700, 0], opacity: [0, 1]}}
            transition={{delay: 0.7}}>
            <img src={redux} alt="redux" />
            <h1>Redux</h1>
          </motion.div>
          <motion.div className={s.contenedorTechnologie}
          drag
            dragConstraints={{
                top: -80,
                left: -80,
                right: 80,
                bottom: 10
            }}
            initial={{opacity: 0, delay: 1}}
            animate={{ y: [2700, 0], opacity: [0, 1]}}
            transition={{delay: 1.3}}>
            <img src={sass} alt="sass" />
            <h1>SASS</h1>
          </motion.div>
          <motion.div className={s.contenedorTechnologie}
          drag
            dragConstraints={{
                top: -80,
                left: -80,
                right: 80,
                bottom: 10
            }}
            initial={{opacity: 0, delay: 1}}
            animate={{ y: [2700, 0], opacity: [0, 1]}}
            transition={{delay: 1.4}}>
            <img src={scrum} alt="scrum" />
            <h1>Metodologia Scrum</h1>
          </motion.div>
          <motion.div className={s.contenedorTechnologie}
          drag
            dragConstraints={{
                top: -80,
                left: -80,
                right: 80,
                bottom: 10
            }}
            initial={{opacity: 0, delay: 1}}
            animate={{ y: [2700, 0], opacity: [0, 1]}}
            transition={{delay: 1.5}}>
            <img src={sql} alt="sql" />
            <h1>SQL</h1>
          </motion.div>
          <motion.div className={s.contenedorTechnologie}
          drag
            dragConstraints={{
                top: -80,
                left: -80,
                right: 80,
                bottom: 10
            }}
            initial={{opacity: 0, delay: 1}}
            animate={{ y: [2700, 0], opacity: [0, 1]}}
            transition={{delay: 1.6}}>
            <img src={typescript} alt="typescript" />
            <h1>Typescript</h1>
          </motion.div>       
          </div>
        </div>
        <div className={s.Nav}>
                <Nav></Nav>
        </div>
        </div>
      </div>
    );
}


export default Technologies