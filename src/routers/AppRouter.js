import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from '../components/Header';
import HomeComponent from '../components/HomeComponent';
import AddExpenseComponent from '../components/AddExpenseComponent';
import EditExpenseComponent from '../components/EditExpenseComponent';
import HelpComponent from '../components/HelpComponent';
import NotFoundComponent from '../components/NotFoundComponent';


const AppRouter = () => (
    <div>
        <BrowserRouter>
            <div>
                <Header />
                <Switch>
                    <Route path="/" component={HomeComponent} exact={true} />
                    <Route path="/create" component={AddExpenseComponent} />
                    <Route path="/edit/:id" component={EditExpenseComponent} />
                    <Route path="/help" component={HelpComponent} />
                    <Route component={NotFoundComponent} />
                </Switch>
            </div>
        </BrowserRouter>
    </div>
)

export default AppRouter;