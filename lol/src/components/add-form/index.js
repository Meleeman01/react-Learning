import React, { useState } from 'react';

import { categories } from '../../constants/add-expenses.js';
import { addExpense } from '../../redux/actions/expenses';
import { useDispatch } from 'react-redux';

import 'react-toastify/dist/ReactToastify.css';
import SuccessModal from './success-modal';

import { toast, ToastContainer } from 'react-toastify';
import './add-form.css';

const AddForm = () => {
    const cat = categories;
    console.log(cat);
    const [categoryOpen,setCategoryOpen] = useState(false);
    const [category,setCategory] = useState();
    const [title,setTitle] = useState('');
    const [amount,setAmount] = useState('');
    const [modalOpen,setModalOpen] = useState(false);
    
    const dispatch = useDispatch();

    const handleTitle = (e) => {
        console.log(e.target.value);
        setTitle(e.target.value);
    };
    const handleAmount = (e) => {
        console.log(e.target.value);
        setAmount(e.target.value);
    };
    const handleCategory = (category) => {
        setCategory(category);
        setCategoryOpen(false);
    };
    const handleSubmit = () => {
        console.log('submitted');
        if (title===''||amount ===''|| !category) {
            console.log('no data!');
            toast.error('please fill out all the fields.');
        }
        else {
            const data = {
                title,amount,category,createdAt:new Date(),
            };
            setModalOpen(true);
            dispatch(addExpense(data));
        }
        
    };

    return (
        <div className="add-form">
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
            <SuccessModal modalOpen={modalOpen} setModalOpen={setModalOpen}/>
            <div className="form-item">
                <label>Title</label>
                <input placeholder="Give a name to your expenditure..." value={title} 
                    onChange={(e)=> handleTitle(e)}/>
            </div>
            <div className="form-item">
                <label>Amount $</label>
                <input className="amount-input" placeholder="Enter Amount..." value={amount} 
                    onChange={(e)=> handleAmount(e)}/>
            </div>
            <div className="category-container-parent">
                <div className="category">
                    <div className="category-dropdown" onClick={()=>setCategoryOpen(!categoryOpen)}>
                        <label>{category? category.title : 'Category'}</label>
                        <i className="fi fi-rr-angle-down"></i>
                    </div>
                    {categoryOpen&&<div className="category-container">
                        {cat.map(category=>(
                            <div key={category.id}  onClick={()=>handleCategory(category)} className="category-item" style={{'borderRight':`5px solid ${category.color}`}}>
                                <label>{category.title}</label>
                                <i className={category.icon}></i>
                            </div>
                        ))}
                    </div>}
                </div>
            </div>
            <div className="form-add-button">
                <div onClick={handleSubmit}>
                    <label>Add</label>
                    <i className="fi fi-rr-paper-plane"></i>
                </div>
            </div>
        </div>
    );
};

export default AddForm;