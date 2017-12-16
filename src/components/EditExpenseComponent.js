import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense, removeExpense } from '../actions/expenses';

const EditExpenseComponent = (props) => {
    return (
        <div>
            <ExpenseForm
                expense={props.expense}
                onSubmit={(expense) => {
                    console.log(props.expense.id, expense)
                    props.dispatch(editExpense({id:props.expense.id, updates: expense}));
                    props.history.push('/');
                }} />
                <button onClick={() =>{
                    props.dispatch(removeExpense({id: props.expense.id}));
                    props.history.push('/');
                }}>Remove</button>
        </div>
    )

};

const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find(expense => expense.id === props.match.params.id)
    };
}

export default connect(mapStateToProps)(EditExpenseComponent);