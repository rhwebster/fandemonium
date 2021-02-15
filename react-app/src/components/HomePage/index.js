import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import TopNavBar from '../NavBars/TopNavBar';
import BottomNavBar from '../NavBars/BottomNavBar';
import ProfileView from '../Profile/ProfileView';
import Background from '../Splash/splash.jpg';
import { useHistory } from 'react-router-dom';
import { getAllTeams, getTeam } from '../../store/teams';
import { authenticate } from '../../store/session';


export default function HomePage() {
    const dispatch = useDispatch();
    const history = useHistory();
    const user = useSelector(state => state.session.user);
    const teamId = useSelector((state) => {
        if (state.session.user) {
            return state.session.user.favorite_team_id
        }
    });
    const teams = useEffect(() => {
        dispatch(getAllTeams());
    }, []);

    const team = useEffect(() => {
        if (user) {
            console.log(teamId);
            dispatch(getTeam(teamId));
            console.log('hit it here!')
            console.log('team~~~>', team);
        }
    }, []);

    const authenticate = useSelector(state => state.session.authenticate);

    if(!authenticate) history.push('/login');

    if (!team) {
    return (
        <>
            <div id='background-image' style={{ backgroundImage: `url(${Background})` }}>
                <div id='container'>
                    <div id='banner'>
                        <ProfileView />
                    </div>
                </div>
            </div>
        </>
    )
    }

    return (
        <>
            <div id='background-image' style={{ backgroundImage: `url(${team.backgroundImage})` }}>
                <TopNavBar />
                <ProfileView />
                <BottomNavBar />
            </div>
        </>
    )
}