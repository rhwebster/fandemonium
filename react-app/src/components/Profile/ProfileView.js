import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProfileDetails from './ProfileDetails';
import { getAllTeams, getFavoriteTeam } from '../../store/teams';
import { Modal } from '../../context/Modal';
import { TwitterTimelineEmbed } from 'react-twitter-embed';
import './ProfileView.css';
import TeamPicker from '../Teams/teampicker';

function ProfileView({ user, favTeam }) {

    const [sideBarOpen, setSideBarOpen] = useState(true);
    console.log('twitter', favTeam.twitter);
    return (
        <>
        <div className='profile-view'>
            <div className='twitter-feed'>
                <TwitterTimelineEmbed
                    key={`${favTeam.twitter}`}
                    sourceType="profile"
                    screenName={favTeam.twitter || "MLB"}
                    theme="dark"
                    options={{ height: 400 }}
                    transparent
                />
            </div>
            <div className='profile-side-panel'>
                <div className='profile-side-panel-toggle-wrapper'>
                    <div className='profile-side-panel-toggle'
                    onClick={() => setSideBarOpen(!sideBarOpen)}>
                        <h5>{sideBarOpen ? 'Close >' : '< Profile'}</h5>
                    </div>
                </div>
                <ProfileDetails visible={sideBarOpen} user={user} favTeam={favTeam}/>
            </div>
        </div>
        </>
    )
};

export default ProfileView;

