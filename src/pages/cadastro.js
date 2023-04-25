import React, { useState } from 'react';
import Title from './../components/Title/index';
import CreditCard from './../components/CreditCard/index';

function Cadastro() {

    const [nomeCompleto, setNomeCompleto] = useState('');
    const [endereco, setEndereco] = useState('');
    const [telefone, setTelefone] = useState('');
    const [planoA, setPlanoA] = useState(false);
    const [planoB, setPlanoB] = useState(false);
    const [planoC, setPlanoC] = useState(false);
    const [planoD, setPlanoD] = useState(false);
    const apenasNumeros = new RegExp('^[0-9]+$');

    const [formDados, setFormDados] = useState({
        nomeCompleto: '',
        endereco: '',
        telefone: '',
        plano: '',
        numero: '',
        nome: '',
        mes: '',
        ano: '',
        cvc: ''
    });

    const handleChange = (evnt) => {
        let inputValue = evnt.target.value;
        let inputName = evnt.target.name;
        setPlanoA(false);
        setPlanoB(false);
        setPlanoC(false);
        setPlanoD(false);
        if (inputValue === "Plano A") {
            setPlanoA(true);
        } else if (inputValue === "Plano B") {
            setPlanoB(true);
        } else if (inputValue === "Plano C") {
            setPlanoC(true);
        } else if (inputValue === "Plano D") {
            setPlanoD(true);
        }
        const newInputValue = { ...formDados, [inputName]: inputValue }
        setFormDados(newInputValue);
    };

    function handleSubmit(event) {
        event.preventDefault();
        if (formDados.numero.length !== 20 || apenasNumeros.test(formDados.numero) !== true) {
            alert("O numero do cartão esta incorreto!");
            return;
        }
        if (formDados.cvc.length !== 3 || apenasNumeros.test(formDados.cvc) !== true) {
            alert("O CVC do cartão esta incorreto!");
            return;
        }
        if (formDados.telefone.length !== 11 || apenasNumeros.test(formDados.telefone) !== true) {
            alert("O telefone esta incorreto!");
            return;
        }
        const checkEmptyInput = !Object.values(formDados).every(res => res === "")
        if (checkEmptyInput) {
            console.log(`Nome completo: ${formDados.nomeCompleto}\r\nEndereco: ${formDados.endereco}\r\nTelefone: ${formDados.telefone}\r\nNumero do cartao: ${formDados.numero}\r\nNome identico ao do cartao: ${formDados.nome}\r\nMes: ${formDados.mes}\r\nAno: ${formDados.ano}\r\nCVC: ${formDados.cvc}\r\nPlano: ${formDados.plano}`);
        }
    }

    return (
        <div className="Cadastro">
            <Title titulo="CADASTRO" texto="SEJA MEMBRO" />
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-sm-12 col-md-6 mb-3">
                        <CreditCard handleChange={handleChange} numero={formDados.numero} nome={formDados.nome} mes={formDados.mes} ano={formDados.ano} cvc={formDados.cvc} />
                    </div>
                    <div className="col-sm-12 col-md-6 mb-3">
                        <input type="text" className="form-control shadow-none mb-3" name="nomeCompleto" defaultValue={nomeCompleto} onBlur={handleChange} placeholder="Nome completo" />
                        <input type="text" className="form-control shadow-none mb-3" name="endereco" defaultValue={endereco} onBlur={handleChange} placeholder="Endereco" />
                        <input type="text" className="form-control shadow-none mb-3" name="telefone" defaultValue={telefone} onBlur={handleChange} maxLength={11} placeholder="Telefone" />
                        <input className={planoA ? "btn btn-outline-warning shadow-none custom me-2" : "btn btn-outline-info shadow-none custom me-2"} name="plano" defaultValue="Plano A" onClick={handleChange} readOnly />
                        <input className={planoB ? "btn btn-outline-warning shadow-none custom me-2" : "btn btn-outline-info shadow-none custom me-2"} name="plano" defaultValue="Plano B" onClick={handleChange} readOnly />
                        <input className={planoC ? "btn btn-outline-warning shadow-none custom me-2" : "btn btn-outline-info shadow-none custom me-2"} name="plano" defaultValue="Plano C" onClick={handleChange} readOnly />
                        <input className={planoD ? "btn btn-outline-warning shadow-none custom me-2" : "btn btn-outline-info shadow-none custom"} name="plano" defaultValue="Plano D" onClick={handleChange} readOnly />
                    </div>
                    <div className="col-sm-12">
                        <button className="w-100 btn btn-outline-success" type="submit">Assinar</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Cadastro;