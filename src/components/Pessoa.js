export default function Pessoa({nome, idade, profissao, foto}){//Os argmentos não precisão ser necessariamente o termo props, podemos construir as propriedade com o  formato de parametros
    return(
        <div>  
            <img src={foto} alt={nome} />
            <h1>Nome: {nome}</h1>
            <p>Idade: {idade}</p>
            <p>Profissao: {profissao}</p>
        </div>
    )
}