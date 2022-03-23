import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { searchExpense } from '../../redux/actions/expenses';
import { useDispatch } from 'react-redux';
import './topfold.css';
import { ReactComponent as Search } from './search.svg';


const TopFold = () => {
    const dispatch = useDispatch();
    const [query,setQuery] = useState('');
     
    const handleQuery = (e) => {
        console.log(e.target.value);
        dispatch(searchExpense(e.target.value));
        setQuery(e.target.value);
    };

    if (window.location.pathname == '/') {
        return (
            <div className="topfold">
                <div className="home-topfold">
                    <div className="searchbar">
                        <Search className="searchIcon"/>
                        <input placeholder="search for expenses"
                            value={query}
                            onChange={(e)=> handleQuery(e)}
                        />
                    </div>
                    <Link to="/add-expense">
                        <div className="add-button">
                            <i className="fi fi-rr-add"></i>
                            <label>Add</label>
                        </div>
                    </Link>
                </div>
            </div>
        );
    }
    else {
        return (
            <div className="add-topfold">
                <Link to="/">
                    <div className="add-topfold-button">
                        <i className="fi fi-rr-angle-left"></i>
                        <label>Back</label>
                    </div>
                </Link>
                <Link to="/">
                    <div className="add-topfold-button">
                        <i className="fi fi-rr-cross-circle"></i>
                        <label>Cancel</label>
                    </div>
                </Link>
            </div>
        );
    }
    
};

export default TopFold;
