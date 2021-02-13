import React, { useState } from "react";
import { Modal } from '../../context/Modal';
import SignUpForm from './SignUpForm';
import { NavLink } from 'react-router-dom';
import { useSelector } from "react-redux";
// import './FormModal.css';

const SignUpFormModal = () => {
  const authenticate = useSelector((state) => state.session.authenticate);
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button id='signUpButton' onClick={() => {
        setShowModal(true)}}>SignUp</button>
       {showModal && (
        <Modal onClose={() => setShowModal(false)} name='signUp'>
          <SignUpForm />
        </Modal>
        )}
     
    </>
  );
};

export default SignUpFormModal;
