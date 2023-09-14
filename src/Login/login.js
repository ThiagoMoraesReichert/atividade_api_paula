import { Fundo } from "./style"
import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"



function Login(){

    const saveUserInfoLocalStorage = (token)=>{
        localStorage.setItem('token', token)
        localStorage.setItem('email', email)
    }

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()

    const goToHome = ()=>{
        navigate('home')
    }

    const hadleSubmit = (e)=>{
        e.preventDefault()

        const credentials = {email, password}

        axios.post('http://localhost:8000/login', credentials, {
            headers:{
                'Content-Type': 'application/json',
            },
        })
        .then(response =>{
            alert(response.data.message)
            saveUserInfoLocalStorage(response.data.token)
            goToHome()
            
        })
        .catch(error => console.log(error))
    }

    return(
        <>
            <Fundo>
                <form onSubmit={hadleSubmit}>
                    <input type="email"
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    placeholder="Email"

                    />
                    <input type="password"
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    placeholder="Senha"

                    />

                    <button type="submit">ENTRAR</button>
                </form>
            </Fundo>
        </>
    )
}

export default Login