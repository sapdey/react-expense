import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters'

const HomeComponent = () => (
    <div>
        <ExpenseListFilters />
        <ExpenseList />
    </div>
)

export default HomeComponent;