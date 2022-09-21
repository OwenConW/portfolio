import React, { useEffect } from "react"
import { motion } from "framer-motion"
import * as functions from "../../handlers/localSorage"
import { useDispatch } from "react-redux"
import { changeSelectedWindow} from "../../redux/actions/actions"
import s from "./Contactme.module.scss"
import Nav from "../Nav/Nav"
import Form from "../Form/Form"
//-

const Contactme = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        functions.setPagerLocalStorage(window.location.pathname.substring(1))
        dispatch(changeSelectedWindow(window.location.pathname.substring(1)))
    }, [])


    return (
      <>
        <div className={s.contenedorPadre}>
          <div className={s.contenedorTitle}>
            <motion.div
                initial={{ opacity: 0, x: -1000 }}
                animate={{opacity: 1, x: 0,}}
                transition={{type: "spring",  delay: 0.5 }}>
              <motion.b>{`>`}</motion.b>
              <motion.h1 className={s.title}>
                Contactame
              </motion.h1>
            </motion.div>
            <div>   
                <motion.svg width="85" height="85" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"
                 initial={{y:-170, opacity: 0}}
                 animate={{y:0 , opacity: 1}}
                 transition={{delay: 1, type: "spring"}}
                 onClick={() => window.location.href = "https://www.linkedin.com/in/dev-owen/"}>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M1.12587 5.39026C0 7.55764 0 10.4051 0 16.1V31.9C0 37.5949 0 40.4424 1.12587 42.6097C2.07462 44.4362 3.56382 45.9254 5.39026 46.8741C7.55764 48 10.4051 48 16.1 48H31.9C37.5949 48 40.4424 48 42.6097 46.8741C44.4362 45.9254 45.9254 44.4362 46.8741 42.6097C48 40.4424 48 37.5949 48 31.9V16.1C48 10.4051 48 7.55764 46.8741 5.39026C45.9254 3.56382 44.4362 2.07462 42.6097 1.12587C40.4424 0 37.5949 0 31.9 0H16.1C10.4051 0 7.55764 0 5.39026 1.12587C3.56382 2.07462 2.07462 3.56382 1.12587 5.39026ZM10.7738 14.9066C13.0735 14.9066 14.9378 13.0423 14.9378 10.7426C14.9378 8.44289 13.0735 6.57861 10.7738 6.57861C8.4741 6.57861 6.60982 8.44289 6.60982 10.7426C6.60982 13.0423 8.4741 14.9066 10.7738 14.9066ZM18.7513 17.9839H25.6524V21.1453C25.6524 21.1453 27.5251 17.3999 32.6204 17.3999C37.1657 17.3999 40.931 19.639 40.931 26.464V40.856H33.7795V28.2079C33.7795 24.1818 31.63 23.739 29.9921 23.739C26.593 23.739 26.011 26.671 26.011 28.7331V40.856H18.7513V17.9839ZM14.4037 17.9839H7.14395V40.856H14.4037V17.9839Z" fill="white"/>
                </motion.svg>

                <motion.svg width="90" height="90" viewBox="0 0 62 60" fill="none" xmlns="http://www.w3.org/2000/svg"
                initial={{y:-170, opacity: 0}}
                animate={{y:0 , opacity: 1}}
                transition={{delay: 1.5, type: "spring"}}
                onClick={() => window.location.href = "https://github.com/OwenConW"}>
                <path d="M30.6773 0C13.7369 0 0 13.7345 0 30.6773C0 44.2315 8.78996 55.7306 20.9791 59.7871C22.5122 60.071 23.0752 59.1216 23.0752 58.3113C23.0752 57.5799 23.0465 55.1631 23.0335 52.5997C14.4988 54.4555 12.698 48.9802 12.698 48.9802C11.3025 45.4343 9.29185 44.4916 9.29185 44.4916C6.50862 42.5876 9.50165 42.6265 9.50165 42.6265C12.5822 42.8431 14.2044 45.788 14.2044 45.788C16.9404 50.4779 21.3809 49.1219 23.1315 48.3383C23.4067 46.3553 24.2019 45.0022 25.0791 44.2361C18.2654 43.4602 11.1023 40.8298 11.1023 29.0752C11.1023 25.7261 12.3008 22.9893 14.2633 20.841C13.9447 20.0682 12.8948 16.9481 14.5604 12.7225C14.5604 12.7225 17.1365 11.898 22.9989 15.8671C25.4458 15.1872 28.0702 14.8465 30.6773 14.835C33.2844 14.8465 35.9108 15.1872 38.3624 15.8671C44.2178 11.898 46.7903 12.7225 46.7903 12.7225C48.46 16.9481 47.4096 20.0682 47.091 20.841C49.0579 22.9893 50.2482 25.7258 50.2482 29.0752C50.2482 40.8577 43.0716 43.4523 36.2406 44.2116C37.3409 45.1636 38.3213 47.0307 38.3213 49.8926C38.3213 53.9971 38.2857 57.3008 38.2857 58.3113C38.2857 59.1276 38.8379 60.0842 40.3931 59.783C52.5754 55.722 61.3543 44.227 61.3543 30.6773C61.3543 13.7345 47.6194 0 30.6773 0Z" fill="white"/>
                </motion.svg>
            </div>
          </div>
          <div className={s.contenedorNavMail}>
              <div className={s.form}>
                  <motion.div
                     initial={{y:470, opacity: 0}}
                     animate={{y:0 , opacity: 1}}
                     transition={{delay: 3, type: "spring"}}
                     >
                    <Form></Form>
                  </motion.div>
              </div>
              <div className={s.nav}>
                  <Nav></Nav>
              </div>
          </div>
        </div>
      </>
    );
}


export default Contactme