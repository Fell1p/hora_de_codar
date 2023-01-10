import { useState } from "react"; //Aplicando reindenizações condicionais

export default function Condicional(){

    const [email, setEmail] = useState() //Usou-se o useState para passar o estado do fomulario para ser manipulado no html e reindenizado posteriormente para o App JS
    const [userEmail, setUserEmail] = useState()

    function enviarEmail(e){ //Utiliza-se o "e.preventDefault" para não se perder os dados do formulario
        e.preventDefault()
        setUserEmail(email)
    }

    function limparEmail(){
        setUserEmail('')
    }

    return (
        <div>
            <h2>Cadastre seu email</h2>
            <form>
                <input type="email" placeholder="Digite seu email" onChange={(e) => setEmail(e.target.value)} />
                <button type="submit" onClick={enviarEmail}> Enviar-email
                </button>
                {userEmail && ( //Utilizou-se o "&&" para aplicar a condicional, e caso True se reindeniza a div subsequente
                    <div>
                        <p>O email do usuário é: {userEmail}</p>
                        <button onClick={limparEmail}>Limpar e-mail</button>
                    </div>
                )}
            </form>
            
        </div>
    )

}