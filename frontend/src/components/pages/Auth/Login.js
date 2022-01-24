import {useState, useContext} from 'react'

import Input from '../../form/Input'

import styles from '../../form/Form.module.css'

import { Context } from '../../../context/UserContext'
import { Link } from 'react-router-dom'

function Login(){

    const [user, setUser] = useState({})
    const {login} = useContext(Context)

    function handleChange(e){
        setUser({...user, [e.target.name]: e.target.value })
    }

    function handleSubmit(e){
        e.preventDefault()
        login(user)
    }

    return(
        <section className={styles.form_container}>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <Input
                    text="E-mail"
                    type="email"
                    name="email"
                    placeholder="Digite seu e-mail"
                    handleOnChange={handleChange}
                />
                <Input
                    text="Senha"
                    type="password"
                    name="password"
                    placeholder="Digite sua senha"
                    handleOnChange={handleChange}
                />
                <input type="submit" value="Entrar"></input>
            </form>
                <p>Não tem conta? <Link className="bold" to="/register">Clique aqui</Link></p>
        </section>
    )
}

export default Login