
import React from 'react';
import Modal from 'react-modal';
import { Link } from 'react-router-dom';
import './success-modal.css';
const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: '#71ccca',
        borderRadius:'12px',
    },
};
Modal.setAppElement('#root');
// eslint-disable-next-line react/prop-types
const SuccessModal = ({ modalOpen,setModalOpen}) => {
    console.log(setModalOpen,modalOpen);
    return (
        <Modal isOpen={modalOpen} style={customStyles}> 
            <div className="modal-inner">
                <label>Expense Added Successfully.</label>
                <img src={require('../../assets/download.png')} />
                <Link to="/">
                    <div>
                        <span>Home <i className="fi fi-rr-home"></i></span>
                    </div>
                </Link>
            </div>
        </Modal>
    );
};

export default SuccessModal;