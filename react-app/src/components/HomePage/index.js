import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTeams } from '../../store/teams';
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
    }, []);
    // const teams = useSelector((state) => state.teams.teams)
    const favTeam = useSelector((state) => {
        if (state.session.user) {
            return state.teams.teams[user.favorite_team - 1]
        }
    })

    const history = useHistory();
    if(!authenticate) history.push('/login');

    return (
        <>
            <div id='home-page-background' style={{ backgroundImage: `url(${Background})` }}>
                <div id='home-container'>
                    <div id='home-page-banner'>
                        <ProfileView user={user} favTeam={favTeam}/>
                    </div>
                </div>
            </div>
        </>
    )
}