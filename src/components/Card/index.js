import React from 'react';
import Button from './../Button/index';

function Card({ id, capa, titulo, ano, nota, status }) {

    return (
        <div className="Card">
            <div className="col">
                <div className="card">
                    <div className="card-body text-center">
                        <img src={capa} className="img-fluid" alt="img" height="150px"></img>
                        <h6 className="card-title">{titulo}</h6>
                        <p className="card-text">Ano: {ano}<br />Nota: {nota}</p>
                        <Button status={status} />
                        <br />
                        <a className="btn btn-outline-secondary mb-3" href={`/detalhes/${id}`}>Detalhes</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;