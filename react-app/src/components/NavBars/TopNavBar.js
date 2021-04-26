import React, { useState } from 'react';
import LogoutButton from '../auth/LogoutButton';
import { useSelector } from 'react-redux';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import LoginFormModal from '../auth/LoginFormModal';
import SignUpFormModal from '../auth/SignUpFormModal';
import DemoButtonModal from '../auth/DemoButtonModal';
import ProtectedRoute from '../auth/ProtectedRoute';
import styled from 'styled-components';
import './topnav.css'

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

  return (
    <>
    <Nav>
      <div className='navlink'>
        <ProtectedRoute>
          <NavLink exact to='/' style={{ color: 'white' }}>
              <h2>Fandemonium</h2>
          </NavLink>
        </ProtectedRoute>
      </div>
        <div className='nav-buttons'>
          {authenticate && (
          <NavLink exact to='/stadiums' style={{ textDecoration: "none", color: "white" }}>
            Stadiums
          </NavLink>)}
        </div>
        <div className='links'>
          <span className='link-text'>
            {!authenticate && (
              <SignUpFormModal />)}</span>
        </div>
        <div className='nav-buttons'>
          {authenticate && (
          <NavLink exact to='/badges' style={{ textDecoration: "none", color: "white" }}>
            Badges
          </NavLink>)}
        </div>
        <div className='links'>
          <span className='link-text'>
            {!authenticate && (
              <LoginFormModal />)}</span>
        </div>
        <div className='nav-buttons'>
          {authenticate && (
          <NavLink exact to='/photos' style={{ textDecoration: "none", color: "white" }}>
            Photos
          </NavLink>)}
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