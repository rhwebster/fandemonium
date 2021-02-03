import { React, useState } from 'react';

function ProfileView({ profile }) {
    const [componentOpen, setComponentOpen] = useState(true);

    return (
        <>
            <div className="profile-panel">
                <div className="profile-panel-toggle-wrapper">
                    <div className="profile-panel-toggle"
                        onClick={() => setComponentOpen(!componentOpen)}>
                        {componentOpen ? '^' : 'Profile'}
                    </div>
                </div>
                <ProfileInfo visible={componentOpen} />
            </div>
        </>
    )

}