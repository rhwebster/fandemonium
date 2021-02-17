import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import TopNavBar from '../NavBars/TopNavBar';
import BottomNavBar from '../NavBars/BottomNavBar';
import ProfileView from '../Profile/ProfileView';
import Background from '../Splash/splash.jpg';
import { useHistory } from 'react-router-dom';
import { authenticate } from '../../store/session';
import './index.css';


export default function HomePage() {
    const authenticate = useSelector(state => state.session.authenticate);
    const history = useHistory();
    if(!authenticate) history.push('/login');

    return (
        <>
            <div id='background-image' style={{ backgroundImage: `url(${Background})` }}>
                <div id='container'>
                    <div id='banner'>
                        <TopNavBar />
                        <ProfileView/>
                        <BottomNavBar />
                    </div>
                </div>
            </div>
        </>
    )
}