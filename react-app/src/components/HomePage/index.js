import React from 'react';
import { useSelector } from 'react-redux'
import TopNavBar from '../NavBars/TopNavBar';
import BottomNavBar from '../NavBars/BottomNavBar';
import ProfileView from '../Profile/ProfileView';


export default function HomePage() {
    const user = useSelector(state => state.session.user);
    const favTeam = useSelector(state => state.session.user.favTeam);

    return (
        <>
            <div id='background-image' style={{ backgroundImage: `url(${favTeam.backgroundImage})`}}>
                <TopNavBar />
                <ProfileView />
                <BottomNavBar />
            </div>
        </>
    )
}