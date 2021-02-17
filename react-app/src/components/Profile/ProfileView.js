import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import ProfileDetails from './ProfileDetails';
import Background from '../Splash/splash.jpg'
import { TwitterTimelineEmbed } from 'react-twitter-embed';
import './ProfileView.css';

function ProfileView({ ...props }) {
    const [sideBarOpen, setSideBarOpen] = useState(true);
    const slideDirection = sideBarOpen ? 'slideInRight' : 'slideOutRight';
    const user = useSelector(state => state.session.user)
    const favTeam = useSelector((state) => {
        if (state.session.user) {
            return state.teams.teams[user.favorite_team - 1]
        }
    })

    return (
        <>
        {/* <div className='main-body'>
        </div> */}
        <div className='profile-view'>
            <div className='twitter-feed'>
                <TwitterTimelineEmbed
                    sourceType="profile"
                    screenName="MLB"
                    theme="dark"
                    options={{ height: 400 }}
                    transparent
                    
                />
            </div>
            <div className='profile-side-panel'>
                <div className='profile-side-panel-toggle-wrapper'>
                    <div className='profile-side-panel-toggle'
                    onClick={() => setSideBarOpen(!sideBarOpen)}>
                        <h2>{sideBarOpen ? 'Close>' : '<Profile'}</h2>
                    </div>
                </div>
                <ProfileDetails visible={sideBarOpen} favTeam={favTeam} user={user}/>
            </div>
        </div>
        </>
    )
};

export default ProfileView;

