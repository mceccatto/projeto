import './CreditCard.css';

function CreditCard({handleChange, numero, nome, mes, ano, cvc}) {
    return (
        <div className="CreditCard">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Informacoes do cartao de credito</h5>
                    <div className="row">
                        <div className="col-sm-12 mb-3">
                            <input type="text" className="form-control shadow-none" name="numero" value={numero} onChange={handleChange} maxLength={20} placeholder="Numero do cartao" />
                        </div>
                        <div className="col-sm-12 mb-3">
                            <input type="text" className="form-control shadow-none" name="nome" value={nome} onChange={handleChange} placeholder="Nome identico ao do cartao" />
                        </div>
                        <div className="col-sm-4 mb-3">
                            <select className="form-select shadow-none" name="mes" value={mes} onChange={handleChange}>
                                <option value="">Mes</option>
                                <option value="01">Janeiro</option>
                                <option value="02">Fevereiro</option>
                                <option value="03">Marco</option>
                                <option value="04">Abril</option>
                                <option value="05">Maio</option>
                                <option value="06">Junho</option>
                                <option value="07">Julho</option>
                                <option value="08">Agosto</option>
                                <option value="09">Setembro</option>
                                <option value="10">Outubro</option>
                                <option value="11">Novembro</option>
                                <option value="12">Dezembro</option>
                            </select>
                        </div>
                        <div className="col-sm-4 mb-3">
                            <select className="form-select shadow-none" name="ano" value={ano} onChange={handleChange}>
                                <option value="">Ano</option>
                                <option value="23">23</option>
                                <option value="24">24</option>
                                <option value="25">25</option>
                                <option value="26">26</option>
                                <option value="27">27</option>
                                <option value="28">28</option>
                                <option value="29">29</option>
                                <option value="30">30</option>
                                <option value="31">31</option>
                                <option value="32">32</option>
                                <option value="33">33</option>
                                <option value="34">34</option>
                                <option value="35">35</option>
                            </select>
                        </div>
                        <div className="col-sm-4 mb-3">
                            <input type="password" className="form-control shadow-none" name="cvc" value={cvc} onChange={handleChange} maxLength={3} placeholder="CVC" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreditCard;