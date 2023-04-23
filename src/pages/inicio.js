import React, { useEffect, useState } from 'react';
import Title from './../components/Title/index';
import Card from './../components/Card/index';

function Inicio() {

    const [filmes, setFilmes] = useState([]);
    const [busca, setBusca] = useState('');
    const [ordem, setOrdem] = useState('Titulo');
    const [loading, setLoading] = useState('');
    const [vazio, setVazio] = useState('');

    const ListarFilmes = async () => {
        setLoading(<div className='text-center mb-3'><img src={"/assets/images/loading.gif"} alt="img" height="50px"></img></div>);
        const response = await fetch("https://my-json-server.typicode.com/marycamila184/movies/movies", {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(response => response.json());
        filtroFilmes(response);
        setLoading('');
    }

    useEffect(() => {
        ListarFilmes();
    }, []);

    function filtroFilmes(event) {
        let result = [];
        let temp = [];
        if (ordem === "Titulo") {
            result = event.sort((a, b) => a.titulo > b.titulo ? 1 : -1);
        } else if (ordem === "Ano") {
            result = event.sort((a, b) => b.ano - a.ano);
        } else {
            result = event.sort((a, b) => b.nota - a.nota);
        }
        if (busca !== "") {
            for (let i = 0; i < result.length; i++) {
                if ((result[i].titulo.toLowerCase().includes(busca.toLowerCase()))) {
                    temp.push(result[i]);
                }
            }
            result = temp;
        }
        setVazio('');
        if(result.length === 0) {
            setVazio(<div className="text-center mb-2">Nenhum resultado foi encontrado!</div>);
        }
        setFilmes(result);
    }

    function handleBusca(event) {
        setBusca(event.target.value);
    }

    function handleOrdem(event) {
        setOrdem(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        ListarFilmes();
    }

    return (
        <div className="Inicio">
            <Title titulo="BEM VINDO(A)" texto="CONFIRA NOSSO CATALOGO" />
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className='col-sm-12 col-md-8 mb-2'>
                        <input type="text" className="form-control shadow-none" value={busca} onChange={handleBusca} placeholder="Busca filme" />
                    </div>
                    <div className='col-sm-12 col-md-2 mb-2'>
                        <select className="form-select shadow-none" value={ordem} onChange={handleOrdem}>
                            <option value="Titulo">Titulo</option>
                            <option value="Ano">Ano</option>
                            <option value="Nota">Nota</option>
                        </select>
                    </div>
                    <div className='col-sm-12 col-md-2'>
                        <button className="w-100 btn btn-outline-success" type="submit">Buscar</button>
                    </div>
                </div>
            </form>
            <hr />
            {loading}
            {vazio}
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-3">
                {
                    filmes && filmes.map((filme) => (
                        <Card id={filme.id} capa={filme.poster} titulo={filme.titulo} ano={filme.ano} nota={filme.nota} status={filme.assistido} />
                    ))
                }
            </div>
        </div>
    )
}

export default Inicio;