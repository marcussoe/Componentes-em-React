import Item from "./Item"

function List() {
    return(
        <>
            <h1>Minha Lista</h1>
            <ul>
                <Item marca = "Ferrari" ano_lancamento={2022}/>
                <Item marca = "Mercedez" ano_lancamento={2020} />
                <Item marca = "Bmw" ano_lancamento={2019} />

            </ul>
        </>
    )
}

export default List