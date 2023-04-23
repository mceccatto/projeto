import { Routes, Route } from 'react-router-dom';
import Inicio from './pages/inicio';
import Detalhes from './pages/detalhes';
import Cadastro from './pages/cadastro';

function ConfigRoutes() {
    return (
        <Routes>
            <Route path='/' element={<Inicio />} />
            <Route path='/detalhes/:id' element={<Detalhes />} />
            <Route path='/cadastro' element={<Cadastro />} />
        </Routes>
    );
}

export default ConfigRoutes;