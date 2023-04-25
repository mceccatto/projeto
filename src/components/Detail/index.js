import React from 'react';
import Comments from '../Comments/index';

const comentarios = [
    {
        "filmeId": 85,
        "registros": [
            {
                "usuario": "Exemplo1",
                "avatar": "/assets/images/avatar.png",
                "data": "20/04/2023 12:00:00",
                "mensagem": "Exemplo de comentário do usuário Exemplo1"
            },
            {
                "usuario": "Exemplo2",
                "avatar": "/assets/images/avatar.png",
                "data": "21/04/2023 13:00:00",
                "mensagem": "Exemplo de comentário do usuário Exemplo2"
            },
            {
                "usuario": "Exemplo3",
                "avatar": "/assets/images/avatar.png",
                "data": "22/04/2023 14:00:00",
                "mensagem": "Exemplo de comentário do usuário Exemplo3"
            },
            {
                "usuario": "Exemplo4",
                "avatar": "/assets/images/avatar.png",
                "data": "23/04/2023 15:00:00",
                "mensagem": "Exemplo de comentário do usuário Exemplo4"
            },
            {
                "usuario": "Exemplo5",
                "avatar": "/assets/images/avatar.png",
                "data": "24/04/2023 16:00:00",
                "mensagem": "Exemplo de comentário do usuário Exemplo5"
            }
        ]
    },
    {
        "filmeId": 14,
        "registros": [
            {
                "usuario": "Exemplo6",
                "avatar": "/assets/images/avatar.png",
                "data": "20/04/2023 12:00:00",
                "mensagem": "Exemplo de comentário do usuário Exemplo6"
            },
            {
                "usuario": "Exemplo7",
                "avatar": "/assets/images/avatar.png",
                "data": "21/04/2023 13:00:00",
                "mensagem": "Exemplo de comentário do usuário Exemplo7"
            },
            {
                "usuario": "Exemplo8",
                "avatar": "/assets/images/avatar.png",
                "data": "22/04/2023 14:00:00",
                "mensagem": "Exemplo de comentário do usuário Exemplo8"
            },
            {
                "usuario": "Exemplo9",
                "avatar": "/assets/images/avatar.png",
                "data": "23/04/2023 15:00:00",
                "mensagem": "Exemplo de comentário do usuário Exemplo9"
            },
            {
                "usuario": "Exemplo10",
                "avatar": "/assets/images/avatar.png",
                "data": "24/04/2023 16:00:00",
                "mensagem": "Exemplo de comentário do usuário Exemplo10"
            }
        ]
    },
    {
        "filmeId": 96,
        "registros": [
            {
                "usuario": "Exemplo11",
                "avatar": "/assets/images/avatar.png",
                "data": "20/04/2023 12:00:00",
                "mensagem": "Exemplo de comentário do usuário Exemplo11"
            },
            {
                "usuario": "Exemplo12",
                "avatar": "/assets/images/avatar.png",
                "data": "21/04/2023 13:00:00",
                "mensagem": "Exemplo de comentário do usuário Exemplo12"
            },
            {
                "usuario": "Exemplo13",
                "avatar": "/assets/images/avatar.png",
                "data": "22/04/2023 14:00:00",
                "mensagem": "Exemplo de comentário do usuário Exemplo13"
            },
            {
                "usuario": "Exemplo14",
                "avatar": "/assets/images/avatar.png",
                "data": "23/04/2023 15:00:00",
                "mensagem": "Exemplo de comentário do usuário Exemplo14"
            },
            {
                "usuario": "Exemplo15",
                "avatar": "/assets/images/avatar.png",
                "data": "24/04/2023 16:00:00",
                "mensagem": "Exemplo de comentário do usuário Exemplo15"
            }
        ]
    },
    {
        "filmeId": 78,
        "registros": [
            {
                "usuario": "Exemplo16",
                "avatar": "/assets/images/avatar.png",
                "data": "20/04/2023 12:00:00",
                "mensagem": "Exemplo de comentário do usuário Exemplo16"
            },
            {
                "usuario": "Exemplo17",
                "avatar": "/assets/images/avatar.png",
                "data": "21/04/2023 13:00:00",
                "mensagem": "Exemplo de comentário do usuário Exemplo17"
            },
            {
                "usuario": "Exemplo18",
                "avatar": "/assets/images/avatar.png",
                "data": "22/04/2023 14:00:00",
                "mensagem": "Exemplo de comentário do usuário Exemplo18"
            },
            {
                "usuario": "Exemplo19",
                "avatar": "/assets/images/avatar.png",
                "data": "23/04/2023 15:00:00",
                "mensagem": "Exemplo de comentário do usuário Exemplo19"
            },
            {
                "usuario": "Exemplo20",
                "avatar": "/assets/images/avatar.png",
                "data": "24/04/2023 16:00:00",
                "mensagem": "Exemplo de comentário do usuário Exemplo20"
            }
        ]
    },
    {
        "filmeId": 36,
        "registros": [
            {
                "usuario": "Exemplo21",
                "avatar": "/assets/images/avatar.png",
                "data": "20/04/2023 12:00:00",
                "mensagem": "Exemplo de comentário do usuário Exemplo21"
            },
            {
                "usuario": "Exemplo22",
                "avatar": "/assets/images/avatar.png",
                "data": "21/04/2023 13:00:00",
                "mensagem": "Exemplo de comentário do usuário Exemplo22"
            },
            {
                "usuario": "Exemplo23",
                "avatar": "/assets/images/avatar.png",
                "data": "22/04/2023 14:00:00",
                "mensagem": "Exemplo de comentário do usuário Exemplo23"
            },
            {
                "usuario": "Exemplo24",
                "avatar": "/assets/images/avatar.png",
                "data": "23/04/2023 15:00:00",
                "mensagem": "Exemplo de comentário do usuário Exemplo24"
            },
            {
                "usuario": "Exemplo25",
                "avatar": "/assets/images/avatar.png",
                "data": "24/04/2023 16:00:00",
                "mensagem": "Exemplo de comentário do usuário Exemplo25"
            }
        ]
    },
    {
        "filmeId": 39,
        "registros": [
            {
                "usuario": "Exemplo26",
                "avatar": "/assets/images/avatar.png",
                "data": "20/04/2023 12:00:00",
                "mensagem": "Exemplo de comentário do usuário Exemplo26"
            },
            {
                "usuario": "Exemplo27",
                "avatar": "/assets/images/avatar.png",
                "data": "21/04/2023 13:00:00",
                "mensagem": "Exemplo de comentário do usuário Exemplo27"
            },
            {
                "usuario": "Exemplo28",
                "avatar": "/assets/images/avatar.png",
                "data": "22/04/2023 14:00:00",
                "mensagem": "Exemplo de comentário do usuário Exemplo28"
            },
            {
                "usuario": "Exemplo29",
                "avatar": "/assets/images/avatar.png",
                "data": "23/04/2023 15:00:00",
                "mensagem": "Exemplo de comentário do usuário Exemplo29"
            },
            {
                "usuario": "Exemplo30",
                "avatar": "/assets/images/avatar.png",
                "data": "24/04/2023 16:00:00",
                "mensagem": "Exemplo de comentário do usuário Exemplo30"
            }
        ]
    },
    {
        "filmeId": 80,
        "registros": [
            {
                "usuario": "Exemplo31",
                "avatar": "/assets/images/avatar.png",
                "data": "20/04/2023 12:00:00",
                "mensagem": "Exemplo de comentário do usuário Exemplo31"
            },
            {
                "usuario": "Exemplo32",
                "avatar": "/assets/images/avatar.png",
                "data": "21/04/2023 13:00:00",
                "mensagem": "Exemplo de comentário do usuário Exemplo32"
            },
            {
                "usuario": "Exemplo33",
                "avatar": "/assets/images/avatar.png",
                "data": "22/04/2023 14:00:00",
                "mensagem": "Exemplo de comentário do usuário Exemplo33"
            },
            {
                "usuario": "Exemplo34",
                "avatar": "/assets/images/avatar.png",
                "data": "23/04/2023 15:00:00",
                "mensagem": "Exemplo de comentário do usuário Exemplo34"
            },
            {
                "usuario": "Exemplo35",
                "avatar": "/assets/images/avatar.png",
                "data": "24/04/2023 16:00:00",
                "mensagem": "Exemplo de comentário do usuário Exemplo35"
            }
        ]
    },
    {
        "filmeId": 78,
        "registros": [
            {
                "usuario": "Exemplo36",
                "avatar": "/assets/images/avatar.png",
                "data": "20/04/2023 12:00:00",
                "mensagem": "Exemplo de comentário do usuário Exemplo36"
            },
            {
                "usuario": "Exemplo37",
                "avatar": "/assets/images/avatar.png",
                "data": "21/04/2023 13:00:00",
                "mensagem": "Exemplo de comentário do usuário Exemplo37"
            },
            {
                "usuario": "Exemplo38",
                "avatar": "/assets/images/avatar.png",
                "data": "22/04/2023 14:00:00",
                "mensagem": "Exemplo de comentário do usuário Exemplo38"
            },
            {
                "usuario": "Exemplo39",
                "avatar": "/assets/images/avatar.png",
                "data": "23/04/2023 15:00:00",
                "mensagem": "Exemplo de comentário do usuário Exemplo39"
            },
            {
                "usuario": "Exemplo40",
                "avatar": "/assets/images/avatar.png",
                "data": "24/04/2023 16:00:00",
                "mensagem": "Exemplo de comentário do usuário Exemplo40"
            }
        ]
    }
];

function Detail({ id, capa, titulo, ano, sinopse, status }) {

    const comentariosFilme = comentarios.find(a => a.filmeId === id);

    return (
        <div className="Detail">
            <div className="row">
                <div className="col-md-12 mb-3">
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
            <div className="row">
                {
                    comentariosFilme && comentariosFilme.registros.map((registro, index) => (
                        <Comments key={index} usuario={registro.usuario} avatar={registro.avatar} data={registro.data} mensagem={registro.mensagem} />
                    ))
                }
            </div>
        </div>
    );
}

export default Detail;