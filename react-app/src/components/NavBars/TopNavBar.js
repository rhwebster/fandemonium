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
  padding: 0 20px;
  min-height: 9vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Menu = styled.ul`
  list-style: none;
  display: flex;

  li:nth-child(2) {
    margin: 0px 20px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const TopNavBar = () => {
  const authenticate = useSelector((state) => state.session.authenticate);
  const [showModal, setShowModal] = useState(false);
  
  return (
    <>
    <Nav>
      <NavLink exact to='/'>
        Fandemonium
      </NavLink>
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