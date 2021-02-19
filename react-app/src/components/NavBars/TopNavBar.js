import React, { useState } from 'react';
import LogoutButton from '../auth/LogoutButton';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import LoginFormModal from '../auth/LoginFormModal';
import SignUpFormModal from '../auth/SignUpFormModal';
import ProtectedRoute from '../auth/ProtectedRoute';
import styled from 'styled-components';
// { setAuthenticated }

const Nav = styled.nav`
  background-color: black;
  min-height: 50px;
  height: 10vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100vw
`;

const Link = styled.link`
  color: white;
`;





const TopNavBar = () => {
  const authenticate = useSelector((state) => state.session.authenticate);
  const [showModal, setShowModal] = useState(false);
  
  return (
    <>
    <Nav>
      <div className='navlink'>
        <NavLink exact to='/' activeStyle={{ color: 'white' }}>
          Fandemonium
        </NavLink>
      </div>
        <div className='links'>
          <span className='link-text'>
            {!authenticate && (
              <SignUpFormModal />)}</span>
        </div>
        <div className='links'>
          <span className='link-text'>
            {!authenticate && (
              <LoginFormModal />)}</span>
        </div>
        <div className='links'>
          <span className='link-text'>
            {authenticate && (
              <LogoutButton />)}</span>
        </div>
    </Nav>
    </>
  );
}

export default TopNavBar;