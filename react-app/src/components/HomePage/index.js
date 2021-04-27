import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTeams, getFavoriteTeam } from '../../store/teams';
import { userStadiums } from '../../store/stadium';
import { userBadges } from '../../store/badges';
import ProfileView from '../Profile/ProfileView';
import Background from '../Splash/splash.jpg';
import { Redirect, useHistory } from 'react-router-dom';
import { getPhotos } from '../../store/photos';
import './index.css';


export default function HomePage() {
    const dispatch = useDispatch();
    const user = useSelector(state => state.session.user);
    const userId = useSelector((state) => {
        if (state.session.user) {
            return state.session.user.id
        };
    });

    const authenticate = useSelector(state => state.session.authenticate);
    authenticate ? console.log('authenticated') : console.log('didnt work')

    useEffect(() => {
        dispatch(getAllTeams());
        if (user) {
            dispatch(getFavoriteTeam(userId));
            dispatch(userStadiums(userId));
            dispatch(getPhotos(userId));
            dispatch(userBadges(userId));
        }
    }, [dispatch, user]);

    const favTeam = useSelector(state => state.teams.team);
    const background = { backgroundImage: `url(${favTeam.background})`, backgroundPosition: 'center', backgroundSize: 'cover' }


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