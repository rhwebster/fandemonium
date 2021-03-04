import React, { useState } from 'react';
import LogoutButton from '../auth/LogoutButton';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import LoginFormModal from '../auth/LoginFormModal';
import SignUpFormModal from '../auth/SignUpFormModal';
import DemoButtonModal from '../auth/DemoButtonModal';
import ProtectedRoute from '../auth/ProtectedRoute';
import styled from 'styled-components';
// { setAuthenticated }

const Nav = styled.nav`
  background-color: black;
  min-height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  height: 10vh;
  width: 100vw;
`;


const TopNavBar = () => {
  const authenticate = useSelector((state) => state.session.authenticate);
  const [showModal, setShowModal] = useState(false);
  
  return (
    <>
    <Nav>
      <div className='navlink'>
        <NavLink exact to='/' style={{ color: 'white' }}>
            <h2>Fandemonium</h2>
        </NavLink>
      </div>
        <div className='links'>
          <span className='link-text'>
            {authenticate && (
              <NavLink exact to='/stadiums' style={{ color: 'white' }}>
                Stadiums
              </NavLink>
            )}</span>
        </div>
        <div className='links'>
          <span className='link-text'>
            {!authenticate && (
              <SignUpFormModal />)}</span>
        </div>
        <div className='links'>
          <span className='link-text'>
            {authenticate && (
              <NavLink exact to='/badges' style={{ color: 'white' }}>
                Badges
              </NavLink>
            )}</span>
        </div>
        <div className='links'>
          <span className='link-text'>
            {!authenticate && (
              <LoginFormModal />)}</span>
        </div>
        <div className='links'>
          <span className='link-text'>
            {authenticate && (
              <NavLink exact to='/photos' style={{ color: 'white' }}>
                Photos
              </NavLink>
            )}</span>
        </div>
        <div className='links'>
          <span className='link-text'>
            {!authenticate && (
              <DemoButtonModal />
            )}</span>
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