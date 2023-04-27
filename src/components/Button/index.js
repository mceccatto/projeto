import React, { useState } from 'react';

function Button({ status }) {

    const [assistido, setAssistido] = useState(status);

    function Assistir() {
        if (!assistido) {
            setAssistido(true);
        }
    }

    return (
        <button type="button" className="btn btn-outline-success mb-2" onClick={() => Assistir()}>{assistido ? 'Assistir Novamente' : 'Assistir'}</button>
    );
}

export default Button;