import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from 'react-redux';
import './bottomnav.css';
import styled from 'styled-components';
import { AiOutlineGithub, AiOutlineLinkedin } from 'react-icons/ai';

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
      <Nav>
        <div className='bottom-navbar'>
          <nav className="nav">
            <ul className="nav__list" role="menubar">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/rhwebster"
                >
                  <AiOutlineGithub className="github-button" style={{ color: 'white' }} />
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.linkedin.com/in/ryan-webster-a784509b/"
                >
                  <AiOutlineLinkedin className="linkedin-button" style={{ color: 'white' }} />
                </a>
            </ul>
          </nav>
        </div>
      </Nav>
    </>
  );
};

