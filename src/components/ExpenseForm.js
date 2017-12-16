import React from 'react';
import moment, { calendarFormat } from 'moment';
import 'react-dates/initialize';
import { SingleDatePicker } from 'react-dates';

import 'react-dates/lib/css/_datepicker.css';

const now = moment();

export default class ExpenseForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            description: props.expense? props.expense.description : '',
            amount: props.expense? props.expense.amount : '',
            note: props.expense? props.expense.note : '',
            createdAt: props.expense? moment(props.expense.createdAt) : moment(),
            calenderFocused: false,
            error: ''
        }
    };
    onDescription = (e) => {
        const description = e.target.value;
        this.setState(() => ({ description }));
    };
    onAmount = (e) => {
        const amount = e.target.value;
        if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)){
            this.setState(() => ({ amount }));
        }
    };
    onNote = (e) => {
        const note = e.target.value;
        this.setState(() => ({ note }));
    };
    onDateChange = (createdAt) => {
        if(createdAt) {
            this.setState(() => ({ createdAt }));
        }
    };
    onFocusChange = ({ focused }) => {
        this.setState(() => ({ calenderFocused: focused }));
    }
    onSubmit = (e) => {
        e.preventDefault();
        if(!this.state.description || !this.state.amount){
            this.setState(() => ({ error: 'Please add the description and amount'}))
        } else {
            this.setState(() => ({ error: '' }));
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount),
                createdAt: this.state.createdAt.valueOf(),
                note: this.state.note
            })
        }
    }
    render() {
        return (
            <div>
                {this.state.error}
                <form onSubmit={this.onSubmit}>
                    <input type="text" placeholder="Description" autoFocus value={this.state.description} onChange={this.onDescription}/>
                    <input type="text" placeholder="Amount" value={this.state.amount} onChange={this.onAmount}/>
                     <SingleDatePicker
                        date={this.state.createdAt}
                        onDateChange={this.onDateChange}
                        focused={this.state.calenderFocused}
                        onFocusChange={this.onFocusChange}
                        numberOfMonths={1}
                        isOutsideRange={() => false}
                     />
                    <textarea placeholder="Add a note" value={this.state.note} onChange={this.onNote} ></textarea>
                    <button type="submit">Add Expense</button>
                </form>
            </div>
        )
    }
}