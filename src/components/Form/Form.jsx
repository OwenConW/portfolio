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
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(null)

    const handleChange = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value.toLowerCase()
        })
        setErrors(validateInputs({
            ...input,
            [e.target.name]: e.target.value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setLoading(true)
        Object.keys(validateInputs(input)).length 
        ? Swal.fire({
            title: 'Error!',
            text: 'Porfavor revisa la informacion',
            icon: 'error',
            confirmButtonText: 'Cool'
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

    React.useEffect(() => {
        setErrors(validateInputs(input))
    }, [])

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
                  placeholder="Nombre..."
                  autoComplete="off"
                  onChange={handleChange}
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
                  placeholder="Email..."
                  autoComplete="off"
                  onChange={handleChange}
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
                placeholder="Asunto..."
                autoComplete="off"
                onChange={handleChange}
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
                placeholder="Escriba su mensaje..."
                autoComplete="off"
                onChange={handleChange}
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
                <motion.button
                type="submit"
                animate={{ y: [4000, 0] }}
                transition={{ delay: 3.6 }}
              >
                Enviar
              </motion.button>
              )
            }
           
            <ToastContainer className="foo" style={{ width: "800px" }} />
          </form>
        </div>
      </>
    );
}

function validateInputs(input){

    let errors = {};
    if(!input.from_name){
        errors.from_name = "Porfavor ingrese su nombre."
    }else if(!/^[a-zA-Z ]+$/.test(input.from_name)){
        errors.from_name = "El nombre solo puede tener letras y/o espacios."
    }

    if(!input.from_email){
        errors.from_email = "Porfavor ingrese un mail."
    }else if(!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(input.from_email)){
        errors.from_email = "Porfavor ingrese un mail valido."
    }

    if(!input.email_subject){
        errors.email_subject = "Porfavor ingrese un asunto."
    }else if(!/^[a-zA-Z ]+$/.test(input.email_subject)){
        errors.email_subject = "El asunto solo puede tener letras y/o espacios."
    }

    if(!input.html_message){
        errors.html_message = "Porfavor ingrese un mensaje."
    }

    return errors
}


export default Form