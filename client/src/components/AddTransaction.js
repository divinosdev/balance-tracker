import React, { useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import { v4 as uuidv4 } from 'uuid';

var i = 0;
export const AddTransaction = () => {

    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);

    const { addTransaction } = useContext(GlobalContext);

    const onSubmit = e => {
        i++;
        if (i >= 3) {
            alert("You can only add 2 events.");
            e.preventDefault();
            return;
        }
        e.preventDefault();

        const newTransaction = {
            id: uuidv4(),
            text,
            amount: +amount
        }



        addTransaction(newTransaction);
    }

    return (
        <>
            <h3>Add new transaction</h3>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor="text">Title</label>
                    <input type="text" value={text} onChange={(e) => setText(e.target.value)}
                        placeholder="Enter text..." />
                </div>
                <div className="form-control">
                    <label htmlFor="amount">
                        Amount <br />
                    </label>
                    <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)}
                        placeholder="Enter amount..." />
                </div>
                <button className="btn">Add transaction</button>
            </form>
        </>
    )
}
