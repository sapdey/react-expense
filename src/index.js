import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './index.css';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
//import App from './App';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses'
import registerServiceWorker from './registerServiceWorker';

const store = configureStore();

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)


ReactDOM.render(jsx, document.getElementById('root'));
registerServiceWorker();
