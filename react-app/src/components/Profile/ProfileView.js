import React, { useState } from 'react';
import ProfileDetails from './ProfileDetails';
import './ProfileView.css';

function ProfileView() {
    const [sideBarOpen, setSideBarOpen] = useState(true);
    const slideDirection = sideBarOpen ? 'slideInRight' : 'slideOutRight';

    return (
        <div className='profile-view'>
            <div className='profile-side-panel'>
                <div className='profile-side-panel-toggle-wrapper'>
                    <h2>Profile</h2>
                    <div className='profile-side-panel-toggle'
                         onClick={() => setSideBarOpen(!sideBarOpen)}>
                         {sideBarOpen ? '>' : '<'}
                    </div>
                </div>
            </div>
            <ProfileDetails visible={sideBarOpen} />
        </div>
    )
};

export default ProfileView;