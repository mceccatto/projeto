import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Title from './../components/Title/index';
import Detail from './../components/Detail/index';

function Detalhes() {

    const { id } = useParams();
    const [filme, setFilme] = useState([]);
    const [loading, setLoading] = useState('');
    const [teste, setTeste] = useState(true);

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
            if (Object.keys(response).length !== 0) {
                temp.push(response);
                setFilme(temp);
            } else {
                setTeste(false);
            }
            setLoading('');
        }
        DetalheFilme();
    }, [id]);

    return (
        <div className="Detalhes">
            <Title titulo="DETALHES" texto="DETALHAMENTO AVANCADO" />
            {loading}
            {
                (() => {
                    if (teste) {
                        return (
                            filme && filme.map((dados, index) => (
                                <Detail key={index} id={dados.id} capa={dados.poster} titulo={dados.titulo} ano={dados.ano} sinopse={dados.sinopse} status={dados.assistido} />
                            ))
                        )
                    } else {
                        return (
                            <div className="row">
                                <div className="col-md-12 mb-3">
                                    <div className="row g-0 border rounded overflow-hidden flex-md-row shadow-sm h-md-250 position-relative">
                                        <div className="col p-4 d-flex flex-column position-static">
                                            <h3 className="mb-0">Este filme não possui detalhes vinculados.</h3>
                                            <a href={'/'} className="link">&#8672; Voltar</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                })()
            }
        </div>
    )
}

export default Detalhes;