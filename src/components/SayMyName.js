export default function SayMyName(props) { //Entre os parenteses se utilizou o argumento props

    return( //Na tag paragrafo se utilizou os {} para dentro do mesmo passar uma propriedade que depois será usada em outro componente
        <div>
            <p>Fala aí {props.nome}, suave?</p> 
        </div>
    )

}