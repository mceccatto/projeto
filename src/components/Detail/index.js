import React from 'react';

function Detail({ capa, titulo, ano, sinopse, status }) {
    return (
        <div className="Detail">
            <div className="row">
                <div className="col-md-12">
                    <div className="row g-0 border rounded overflow-hidden flex-md-row shadow-sm h-md-250 position-relative">
                        <div className="col p-4 d-flex flex-column position-static">
                            <h3 className="mb-0">{titulo}</h3>
                            <div className="mb-1 text-body-secondary">{ano}</div>
                            <p className="card-text mb-auto">{sinopse}</p>
                            <a href={'/'} className="link">&#8672; Voltar</a>
                        </div>
                        <div className="col-auto d-none d-lg-block">
                            <img src={capa}></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Detail;