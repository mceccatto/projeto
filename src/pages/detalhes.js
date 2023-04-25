import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Title from './../components/Title/index';
import Detail from './../components/Detail/index';

function Detalhes() {

    const { id } = useParams();
    const [filme, setFilme] = useState([]);
    const [loading, setLoading] = useState('');

    useEffect(() => {
        let temp = [];
        const DetalheFilme = async () => {
            setLoading(<div className='text-center mb-3'><img src={"/assets/images/loading.gif"} alt="img" height="50px"></img></div>);
            const response = await fetch(`https://my-json-server.typicode.com/marycamila184/moviedetails/moviedetails/${id}`, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            }).then(response => response.json());
            temp.push(response);
            setFilme(temp);
            setLoading('');
        }
        DetalheFilme();
    }, []);

    return (
        <div className="Detalhes">
            <Title titulo="DETALHES" texto="DETALHAMENTO AVANCADO" />
            {loading}
            {
                filme && filme.map((dados) => (
                    <Detail id={dados.id} capa={dados.poster} titulo={dados.titulo} ano={dados.ano} sinopse={dados.sinopse} status={dados.assistido}/>
                ))
            }
        </div>
    )
}

export default Detalhes;