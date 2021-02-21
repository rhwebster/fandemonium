import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTeams, getFavoriteTeam } from '../../store/teams';
import { userStadiums } from '../../store/stadium';
import TopNavBar from '../NavBars/TopNavBar';
import BottomNavBar from '../NavBars/BottomNavBar';
import ProfileView from '../Profile/ProfileView';
import Background from '../Splash/splash.jpg';
import { useHistory } from 'react-router-dom';
import { authenticate } from '../../store/session';
import './index.css';


export default function HomePage() {
    const dispatch = useDispatch();
    const user = useSelector(state => state.session.user);
    const authenticate = useSelector(state => state.session.authenticate);

    useEffect(() => {
        dispatch(getAllTeams());
        if (user) {
            dispatch(getFavoriteTeam(user.id));
            dispatch(userStadiums(user.id));
        }
    }, [user]);

    const favTeam = useSelector(state => state.teams.team);
    const background = { backgroundImage: `url(${favTeam.background})`, backgroundPosition: 'center', backgroundSize: 'cover' }

    const history = useHistory();
    if(!authenticate) history.push('/login');

    return (
        <>
            <div id='home-page-background' style={{ backgroundImage: `url(${Background})` }}>
                <div id='home-container' style={background}>
                    <div id='home-page-banner'>
                        <ProfileView user={user} favTeam={favTeam}/>
                    </div>
                </div>
            </div>
        </>
    )
}