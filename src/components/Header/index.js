import { Link, useLocation } from 'react-router-dom';
import './Header.css';

function Header() {

    const pagina = useLocation();

    return (
        <div className="Header">
            <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
                <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
                    <span className="fs-4">ProjetoFlix</span>
                </a>
                {
                    (() => {
                        if (pagina.pathname !== "/cadastro") {
                            return (
                                <ul className="nav nav-pills">
                                    <li className="nav-item"><Link to='/cadastro' className="nav-link">Cadastro</Link></li>
                                </ul>
                            )
                        }
                    })()
                }
            </header>
        </div>
    );
}

export default Header;