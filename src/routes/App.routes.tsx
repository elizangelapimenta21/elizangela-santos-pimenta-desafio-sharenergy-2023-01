import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Cadastro } from '../pages/Register';
import { Home } from '../pages/Home';
import { Login } from '../pages/Login';
import { Status } from '../pages/StatusCode';
import { RamdomDog } from '../pages/RamdomDog';
import { Users } from '../pages/Users';

export function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/cadastro" element={<Cadastro />} />
                <Route index path="/" element={<Home />} />
                <Route index path="/cats" element={<Status />} />
                <Route index path="/ramdom-dog" element={<RamdomDog />} />
                <Route index path="/users" element={<Users />} />
            </Routes>
        </BrowserRouter>
    );
}
