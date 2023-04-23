import React, { useState } from 'react';

function Card({ id, capa, titulo, ano, nota, status }) {

    const [assistido, setAssistido] = useState(status);

    function Assistir() {
        if (!assistido) {
            setAssistido(true);
        }
    }

    return (
        <div className="Card">
            <div className="col">
                <div className="card">
                    <div className="card-body text-center">
                        <img src={capa} className="img-fluid" alt="img" height="150px"></img>
                        <h6 className="card-title">{titulo}</h6>
                        <p className="card-text">Ano: {ano}<br />Nota: {nota}</p>
                        <button type="button" className="btn btn-outline-success mb-2" onClick={() => Assistir()}>{assistido ? 'Assistir Novamente' : 'Assistir'}</button>
                        <br />
                        <a className="btn btn-outline-secondary" href={`/detalhes/${id}`}>Detalhes</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;