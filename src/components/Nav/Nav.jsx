import React from "react"
import { Link } from "react-router-dom"
import s from "./Nav.module.scss"
import { motion } from "framer-motion"
import { useSelector, useDispatch } from "react-redux"
import { changeSelectedWindow} from "../../redux/actions/actions"

const Nav = () =>  {

    const dispatch = useDispatch()

    const selected = useSelector(state => state.selected)

    const handleClick = (e) => {
        dispatch(changeSelectedWindow(e.target.id))
        console.log(e.target)
    } 

    return(
        <>
            <ul className={s.lista}>
                {
                    console.log("TAMAÑO:", window.screen.width)
                }
                {
                    window.visualViewport.width <= 688 ? (
                        <>
                        <motion.li className={selected === "home" ? s.selected : s.item} 
                        inital={{x: 100}} 
                        animate={{ y: [700, 0], x: [0, 0] }} 
                        transition={{delay: 0.5}}  
                        onClick={handleClick}><Link id={"home"} to="/" className={s.Link}>.SOBRE_MI<b className={s.parentesis}>()</b></Link>
                        </motion.li>
                        <motion.li className={selected === "projects" ? s.selected : s.item} 
                        inital={{x: 100}}  
                        animate={{ y: [700, 0], x: [0, 0] }} 
                        transition={{delay: 1}}  
                        onClick={handleClick}><Link id={"projects"} to="/proyects" className={s.Link}>.PROYECTOS<b className={s.parentesis}>()</b></Link>
                        </motion.li>
                        <motion.li className={selected === "contactme" ? s.selected : s.item} 
                        inital={{x: 100}}  
                        animate={{ y: [700, 0], x: [0, 0] }} 
                        transition={{delay: 1.5}}  
                        onClick={handleClick}><Link id={"contactme"} to="/contact" className={s.Link}>.CONTACTAME<b className={s.parentesis}>()</b></Link>
                        </motion.li>
                        <motion.li className={selected === "tecnologies" ? s.selected : s.item} 
                        inital={{x: 100}}  
                        animate={{ y: [700, 0], x: [0, 0] }} 
                        transition={{delay: 2}}  
                        onClick={handleClick}><Link id={"tecnologies"} to="/tech" className={s.Link}>.TECNOLOGIAS<b className={s.parentesis}>()</b></Link>
                        </motion.li>
                        </>
                    ) : (
                        <>
                        <motion.li className={selected === "home" ? s.selected : s.item} 
                        inital={{x: 100}} 
                        animate={{ y: [-700, 0], x: [0, 0] }} 
                        transition={{delay: 0.5}}  
                        onClick={handleClick}><Link id={"home"} to="/" className={s.Link}>.SOBRE_MI<b className={s.parentesis}>()</b></Link>
                        </motion.li>
                        <motion.li className={selected === "projects" ? s.selected : s.item} 
                        inital={{x: 100}}  
                        animate={{ y: [-700, 0], x: [0, 0] }} 
                        transition={{delay: 1}}  
                        onClick={handleClick}><Link id={"projects"} to="/proyects" className={s.Link}>.PROYECTOS<b className={s.parentesis}>()</b></Link>
                        </motion.li>
                        <motion.li className={selected === "contactme" ? s.selected : s.item} 
                        inital={{x: 100}}  
                        animate={{ y: [-700, 0], x: [0, 0] }} 
                        transition={{delay: 1.5}}  
                        onClick={handleClick}><Link id={"contactme"} to="/contact" className={s.Link}>.CONTACTAME<b className={s.parentesis}>()</b></Link>
                        </motion.li>
                        <motion.li className={selected === "tecnologies" ? s.selected : s.item} 
                        inital={{x: 100}}  
                        animate={{ y: [-700, 0], x: [0, 0] }} 
                        transition={{delay: 2}}  
                        onClick={handleClick}><Link id={"tecnologies"} to="/tech" className={s.Link}>.TECNOLOGIAS<b className={s.parentesis}>()</b></Link>
                        </motion.li>
                        </>
                    )
                }
            </ul>
        </>
    )
}


export default Nav