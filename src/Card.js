export default function Card(attr){
    let pokemon = attr.person;
    return(
        <div className="card">
            <div className="card-header">
                Nome: <strong>{pokemon.name}</strong>
            </div>
            <img src={pokemon.sprites.other['official-artwork'].front_default} className="card-img-top" alt="..." />
            <div className="card-body">
                <p>Altura: <strong>{pokemon.height}</strong></p>
                <p>Peso: <strong>{pokemon.weight}</strong></p>
                <div>
                    Habilidades:
                    <ul>
                        {
                            pokemon.abilities.map(function(item)
                            {
                                return (<li key={item.ability.name}>{item.ability.name}</li>)
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}