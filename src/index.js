import React from 'react';
import ReactDOM from 'react-dom/client';
import GlobalStyles from './pageStyles/globalStyles'
import Routes from './routes'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <> 
        <Routes />
        <GlobalStyles />
    </>
);

