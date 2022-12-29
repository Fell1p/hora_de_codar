import Item from './Item';

export default function List(){
    return(
        <>
            <h1>Minha Lista</h1>
            <ul>
                <Item marca="Ferrari" ano_lancamento={1995}/*marca é a props itilizada no componente item*//>
                <Item marca="Ford" ano_lancamento={2000} />
                <Item marca="Fiat" ano_lancamento={2006} />
            </ul>
        </>
    )
}