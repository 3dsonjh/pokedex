import axios from "axios"
import { useState } from "react";
import Card from "./Card";

export default function Tela()
{
    const [pokemon, setPokemon] = useState(null);
    const [pesquisa, setPesquisa] = useState("");
    const [alertErro, setAlertErro] = useState(false);

    //let alertErro = "" 

    async function carregaPokemon()
    {
        try{
            setPokemon(null);
            /*const pokemon = await axios.get("https://pokeapi.co/api/v2/pokemon/ditto");*/
            const { data } = await axios.get("https://pokeapi.co/api/v2/pokemon/"+pesquisa.toLowerCase());
            /*const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pesquisa.toLowerCase()}`);*/
            /*console.log(data);*/
            setPokemon(data);
        }
        catch(erro) {
            /*console.log(erro);*/
            setAlertErro(true);
        }
    }

    function pokeNome(evento){
        setPesquisa(evento.target.value);
    }


    /* exibe o pokemon depois de ser feita uma pesquisa */
    /*let cardPokemon =(pokemon != null) ? <Card /> : "";*/
    /*let cardPokemon = "";
    if(pokemon!=null){
        cardPokemon = <Card />;
    }*/

    return (
        <div>
            <div className="input-group mb-3">
                <input type="text" onChange={pokeNome} className="form-control" placeholder="Digite o nome" />
                <button disabled={pesquisa == ""} onClick={carregaPokemon} className="btn btn-outline-secondary" type="button">Pesquisar</button>
            </div> 
           
            {(pokemon != null) ? <Card person={pokemon} /> : "" }
            {(alertErro==true)? <div className="alert alert-danger" role="alert">
            Bichinho não encontrado!
            </div>:""}   
        </div>
        
    )
}