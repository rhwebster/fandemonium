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
  
    useEffect(() => {
        dispatch(getAllTeams());
        // dispatch(getTeam(user.favorite_team))
    }, []);

    // const favTeam = useSelector((state) => {
    //     if (state.teams.teams) {
    //         return state.teams.teams[user.favorite_team - 1]
    //     }
    // })

    const authenticate = useSelector(state => state.session.authenticate);

    if(!authenticate) history.push('/login');

    // if (!favTeam) {
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
    // }
    // style = {{ backgroundImage: `url(${favTeam.backgroundImage})` }}
    return (
        <>
            <div id='background-image'>
                <TopNavBar />
                <ProfileView />
                <BottomNavBar />
            </div>
        </>
    )
}