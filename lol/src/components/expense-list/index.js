import React from 'react';
import './expense-list.css';
import Card from './card';
import { useSelector } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify';

const ExpenseList = () => {
    const {expenseList: list, query } = useSelector(state=>state.expenses);
    const filteredList = list.filter(item=>item.title.includes(query)); 

    const notifyDelete = () => {
        toast.success('Expense removed from list!');
    };
    return (
        <div className="expense-list">
            {filteredList.length? filteredList.map(item=>(
                <Card key={item.id} item={item} notifyDelete={notifyDelete}/>
            )):<div className='empty'>
                <img src={require('../../assets/shrug.png')} alt="empty list" />
                <span><b>Looks like you are not tracking any expenses yet!</b></span>
            </div>}
            <ToastContainer
                position="bottom-left"
                autoClose={1500}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </div>
    );
};

export default ExpenseList;