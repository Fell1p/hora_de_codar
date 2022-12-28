import Item from './Item';

export default function List(){
    return(
        <>
            <h1>Minha Lista</h1>
            <ul>
                <Item marca="Dor" /*marca é a props itilizada no componente item*//>
                <Item marca="Amor" />
                <Item marca="Paixão" />
            </ul>
        </>
    )
}