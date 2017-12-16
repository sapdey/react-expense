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
store.dispatch(addExpense({ description: 'Water Bill', amount: 12332 }));
store.dispatch(addExpense({ description: 'Gas Bill', amount: 1223333 }));

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);


console.log(visibleExpenses);

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)


ReactDOM.render(jsx, document.getElementById('root'));
registerServiceWorker();
