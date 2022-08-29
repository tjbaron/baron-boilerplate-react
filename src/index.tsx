import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import './styles/main.css';

const RootComponent = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
            </Routes>
        </BrowserRouter>
    );
};

ReactDOM.render(<RootComponent />, document.getElementById('root'));
