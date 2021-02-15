import React, { useState } from 'react';
import ProfileDetails from './ProfileDetails';
import Background from '../Splash/splash.jpg'
import './ProfileView.css';

function ProfileView({ ...props }) {
    const [sideBarOpen, setSideBarOpen] = useState(true);
    const slideDirection = sideBarOpen ? 'slideInRight' : 'slideOutRight';

    return (
        <div className='profile-view'>
            <div className='profile-side-panel'>
                <div className='profile-side-panel-toggle-wrapper'>
                    <div className='profile-side-panel-toggle'
                        onClick={() => setSideBarOpen(!sideBarOpen)}>
                        <h2>{sideBarOpen ? 'Close>' : '<Profile'}</h2>
                    </div>
                </div>
                <ProfileDetails visible={sideBarOpen} />
            </div>
        </div>
    )
};

export default ProfileView;

