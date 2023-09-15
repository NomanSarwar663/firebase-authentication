import React from 'react';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import { createRoot } from 'react-dom/client';

// third party
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

// project imports
import { store } from 'store';

// style + assets
import 'assets/scss/style.scss';
import config from './config';

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
    <Provider store={store}>
        <BrowserRouter basename={config.basename}>
            <App />
        </BrowserRouter>
    </Provider>
);

serviceWorkerRegistration.register();