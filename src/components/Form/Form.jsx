import React, { useState } from "react"
import s from "./Form.module.scss"
import { motion } from "framer-motion"
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swal from 'sweetalert2'

const Form = () => {

    const [input, setInput] = useState({
      from_name: "",
      from_email: "",
      email_subject: "",
      html_message: ""    
    })
    const [errors, setErrors] = useState({
      from_name: "",
      from_email: "",
      email_subject: "",
      html_message: "" 
    });
    const [loading, setLoading] = useState(null)

    const handleChange = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value.toLowerCase()
        })
        validateInputs(e)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        setLoading(true)
        Object.values(errors).some(e => e !== "") 
        ? Swal.fire({
            title: 'Error!',
            text: 'Porfavor revisa la información',
            icon: 'error',
            confirmButtonText: 'Ok :('
        })
        .then(() => {
            setLoading(false)
        })
        : toast.promise(
            emailjs.sendForm("service_t1g8pha", "template_l8deqls", e.target , "LpSKE9RqtisGqUtaQ"),
            {
            pending: 'Enviando... por favor aguarda',
            success: 'Mail enviado con éxito',
            error: 'Lo siento, ha ocurrido un error, vuelve a intentarlo'
            }
        )
        .then(() => {
            setInput({
                from_name: "",
                from_email: "",
                email_subject: "",
                html_message: ""
            })
            setLoading(false)
        }, (error) => {
            console.log(error.text);
        });
    }

    function validateInputs(e){
    
        if(e.target.name === "from_name"){
          if(!e.target.value){
            setErrors({...errors, 
            [e.target.name]: "Porfavor ingrese su nombre."
            })
          }else if(!/^[a-zA-Z ]+$/.test(e.target.value)){
            setErrors({...errors, 
              [e.target.name]: "El nombre solo puede tener letras y espacios."
            })
          }else{
            setErrors({
              ...errors,
              [e.target.name]: ""
            })
          }
        }
        if(e.target.name === "from_email"){
          if(!e.target.value){
            setErrors({...errors, 
              [e.target.name]: "Porfavor ingrese un mail."
              })
          }else if(!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e.target.value)){
            setErrors({...errors, 
              [e.target.name]: "Porfavor ingrese un mail valido."
            }) 
          }else{
            setErrors({
              ...errors,
              [e.target.name]: ""
            })
          }
        }
        if(e.target.name ===  "email_subject"){
          if(!e.target.value){
            setErrors({...errors, 
              [e.target.name]: "Porfavor ingrese un asunto."
            }) 
          }else if(!/^[a-zA-Z ]+$/.test(e.target.value)){
            setErrors({...errors, 
              [e.target.name]: "El asunto solo puede tener letras y espacios."
            }) 
          }else{
            setErrors({
              ...errors,
              [e.target.name]: ""
            })
          }
        }
        if(e.target.name ===  "html_message"){
          if(!e.target.value){
            setErrors({...errors, 
              [e.target.name]: "Porfavor ingrese un mensaje."
            })       
          }else{
            setErrors({
              ...errors,
              [e.target.name]: ""
            })
          }
        }

    }

    return (
      <>
        <div>
          <form autoComplete="off" onSubmit={handleSubmit}>
            <div>
              <motion.div
                animate={{ x: [4000, 0] }}
                transition={{ delay: 3.1 }}
              >
                <input
                  value={input.from_name}
                  name="from_name"
                  type="text"
                  placeholder=" * Nombre..."
                  autoComplete="off"
                  onChange={handleChange}
                  required
                ></input>
                {errors ? <p>{errors.from_name}</p> : <p></p>}
              </motion.div>
              <motion.div
                animate={{ x: [4000, 0] }}
                transition={{ delay: 3.3 }}
              >
                <input
                  value={input.from_email}
                  name="from_email"
                  type="text"
                  placeholder=" * Email..."
                  autoComplete="off"
                  onChange={handleChange}
                  required
                ></input>
                {errors ? <p>{errors.from_email}</p> : <p></p>}
              </motion.div>
            </div>
            <motion.div
              animate={{ y: [4000, 0] }}
              transition={{ delay: 3.4 }}
              className={s.subject}
            >
              <input
                value={input.email_subject}
                name="email_subject"
                type="text"
                placeholder=" * Asunto..."
                autoComplete="off"
                onChange={handleChange}
                required
              ></input>
              {errors ? <p>{errors.email_subject}</p> : <p></p>}
            </motion.div>
            <motion.div
              animate={{ y: [4000, 0] }}
              transition={{ delay: 3.5 }}
              className={s.textareaContainer}
            >
              <textarea
                value={input.html_message}
                name="html_message"
                placeholder=" * Escriba su mensaje..."
                autoComplete="off"
                onChange={handleChange}
                required
              ></textarea>
              {errors ? <p>{errors.html_message}</p> : <p></p>}
            </motion.div>
            {
                loading 
                ? (
                <div className={s.contenedorLoading}>
                    <span className={s.loader}></span>
                </div>
                ) : (
                <button type="submit">Enviar </button>
              )
            }
           
            <ToastContainer className="foo" style={{ width: "800px" }} />
          </form>
        </div>
      </>
    );
}



export default Form