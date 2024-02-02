import { BrowserRouter, Route, Routes } from 'react-router-dom';

import HomePage from '../../pages/HomePage';
import Layout from '../layout/Layout';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path='/' element={<HomePage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
