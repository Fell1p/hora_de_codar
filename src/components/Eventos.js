//Utilizando o evento onClick
//Eventos React são iguais aos eventos DOM

import Button from './evento/Button'

export default function Evento() {

    function meuEvento(){ //Função de evento que será chamada no retorno
        console.log(`Ativando primeiro evento`);
    }

    function segundoEvento(){
        console.log(`Ativando segundo`)
    }


    return (
        <div>
            <p>Clique aqui para ativar</p>
            <Button event={meuEvento} text="Primeiro Evento" />
            <Button event={segundoEvento} text="Segundo Evento" />
        </div>
    )
}