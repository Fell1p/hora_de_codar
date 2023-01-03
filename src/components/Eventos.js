//Utilizando o evento onClick
//Eventos React são iguais aos eventos DOM

export default function Evento({ numero }) {

    function meuEvento(){ //Função de evento que será chamada no retorno
        console.log(`${numero}`);
    }

    return (
        <div>
            <p>Clique aqui para ativar</p>
            <button onClick={meuEvento}>Ativar!</button>
        </div>
    )
}