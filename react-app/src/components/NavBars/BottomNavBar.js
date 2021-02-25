import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from 'react-redux';
import './bottomnav.css';
import styled from 'styled-components';

const Nav = styled.nav`
  background-color: black;
  min-height: 50px;
  height: 10vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100vw
`;


export default function BottomNavBar() {
  const authenticate = useSelector((state) => state.session.authenticate);
  const [showModal, setShowModal] = useState(false);

  if (!authenticate) return null;

  return (
    <>
      {authenticate && (
      <Nav>
        <div className='bottom-navbar'>
          <nav className="nav">
            <ul className="nav__list" role="menubar">
              <div className='links'>
                <span className='link-text'>
                  <NavLink exact to='/' style={{ color: 'white' }}>
                    Home
                  </NavLink></span>
              </div>
              <div className='links'>
                <span className='link-text'>
                  <NavLink exact to='/stadiums' style={{ color: 'white' }}>
                    Stadiums
                  </NavLink></span>
              </div>
              <div className='links'>
                <span className='link-text'>
                  <NavLink exact to='/badges' style={{ color: 'white' }}>
                    Badges
                  </NavLink></span>
              </div>
              <div className='links'>
                <span className='link-text'>
                  <NavLink exact to='/photos' style={{ color: 'white' }}>
                    Photos
                  </NavLink></span>
              </div>
            </ul>
          </nav>
        </div>
        </Nav>
        )}
    </>
  );
};

