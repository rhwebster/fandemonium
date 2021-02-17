import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProfileDetails from './ProfileDetails';
import { getAllTeams } from '../../store/teams';
import Background from '../Splash/splash.jpg'
import { TwitterTimelineEmbed } from 'react-twitter-embed';
import './ProfileView.css';

function ProfileView({ ...props }) {
    const [sideBarOpen, setSideBarOpen] = useState(true);
    const dispatch = useDispatch();
    const slideDirection = sideBarOpen ? 'slideInRight' : 'slideOutRight';
    const user = useSelector(state => state.session.user)
    dispatch(getAllTeams);
    const favTeam = useSelector((state) => {
        if (state.session.user) {
            return state.teams.teams[user.favorite_team - 1]
        }
    })
    console.log('favorite team ~~~~>', favTeam);
    return (
        <>
        {/* <div className='main-body'>
        </div> */}
        <div className='profile-view'>
            <div className='twitter-feed'>
                <TwitterTimelineEmbed
                    sourceType="profile"
                    screenName={favTeam ? favTeam.twitter : "MLB"}
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

