import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Button } from "@material-ui/core";


import TemplatePage from '../../templates/Page'
import Toasty from '../../components/Toasty'

const useStyles = makeStyles((theme) => ({
    wrapper: {
      '& > *': {
        margin: theme.spacing(2),
      },
    },
  }));


const Edit = () => {
    const classes = useStyles()
    const {id} = useParams()
    
   
    const [form, setForm] = useState({
        name: {
            value: '',
            error: false,
        },
        job: {
            value: '',
            error: false,
        },
    })

    useEffect(() => {
        axios.get(`https://reqres.in/api/users/${id}`)
        .then(response => {
            const {data} = response.data

            setForm({
                name: {
                    value: data.first_name,
                    error: false,
                },
                job: {
                    value: data.job,
                    error: false,
                },
            })
        })
    }, [])
    


    const [openToasty, setOpenToasty] = useState(false)

    const [isLoading, setIsLoading] = useState(false)

    const [isSeverity, setIsSeverity] = useState()

    const [text, setText] = useState()


    const handleInputChange = (e) => {
        const {name, value} = e.target 

        setForm({
            ...form,
            [name]: {
                value,
            }
        })
    }

    const handleRegisterButton = () => {
        setIsLoading(true)

        let hasError = false
        
        let newFormState = {
            ...form,
        }

        if(!form.name.value) {
            hasError = true
            setOpenToasty(true)
            setIsLoading(false)
            setIsSeverity('error')
            setText('por favor preencha os campos')

            newFormState.name = {
                value: form.name.value,
                error: true, 
                helperText: "Digite o campo corretamente!" 
            }
        }

        if(!form.job.value) {
            hasError = true
            setOpenToasty(true)
            setIsLoading(false)
            setIsSeverity('error')
            setText('por favor preencha os campos')

            newFormState.job = {
                value: form.job.value,
                error: true, 
                helperText: "Digite o campo corretamente!" 
            }
        }

        if(hasError) {
            setForm(newFormState)
        }else {
            axios.put(`https://reqres.in/api/users/${id}`, {
                nome: form.name.value,
                job: form.job.value,
            }).then((response) => {
                setOpenToasty(true)
                setIsLoading(false)
                setIsSeverity('success')
                setText('cadastro atualizado com sucesso')
            })
        }

    }
            
            
            
    return (
        <>
            <TemplatePage title='Editar Clientes'/>
            <div className={classes.wrapper}>  
            <TextField 
                error={form.name.error}
                helperText={form.name.error ? form.name.helperText : ''}
                id="standard-basic" 
                label="Digite seu nome"
                name="name"
                value={form.name.value} 
                onChange={handleInputChange}/>
            </div>
            <div className={classes.wrapper}>
                <TextField
                error={form.job.error}
                helperText={form.job.error ? form.job.helperText : ''}
                id="standard-basic"
                label="Digite seu cargo"
                name="job"
                value={form.job.value}
                onChange={handleInputChange}/>
            </div>
            <div className={classes.wrapper}>
                <Button variant="contained" color="primary" onClick={handleRegisterButton}>
                    {isLoading ? 'Aguarde...' : 'salvar alterações'}
                </Button>
            </div>

            <Toasty open={openToasty} severity={isSeverity} text={text}/>
        </>
    )
}

export default Edit