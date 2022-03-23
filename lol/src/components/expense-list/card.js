import React from 'react';
import './card.css';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { deleteExpense } from '../../redux/actions/expenses';
/* eslint-disable react/prop-types */ // TODO: upgrade to latest eslint tooling
const Card = ({ item, notifyDelete }) => {
    console.log(item);
    const time = moment(item.createdAt).fromNow();
    const dispatch = useDispatch();
    const handleDelete = () => {
        dispatch(deleteExpense(item));
        notifyDelete();
    };
    return (
        <div className="card" style={{'borderRight':`6px solid ${item.category.color}`}}>
            <div className="card-image-container">
                <i className={item.category.icon} alt={item.category.title}/>
            </div>
            <div className='card-info'>
                <span className='card-title'><b>{item.title}</b></span>
                <span className='card-time'>{time}</span>
            </div>
            <div className='card-right'>
                <div>
                    <label className='card-amount'><span>$</span>{item.amount}</label>
                </div>
                <div className="delete-icon" onClick={handleDelete}>
                    <i className="fi fi-rr-cross-circle"></i>
                </div>
            </div>
        </div>
    );
};

export default Card;