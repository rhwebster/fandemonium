import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Background from '../Splash/splash.jpg';
import { userBadges } from '../../store/badges';
import { setUser } from '../../store/session';
import './index.css';

export default function Badges({ ...props }) {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.session.user);
    useEffect(() => {
        if (user) {
            dispatch(userBadges(user.id));
        }
    }, [user]);

    const earned = useSelector(state => state.badges.earned);

    return (
        <>
            <div className='badge-div' style={{ backgroundImage: `url(${Background})` }}>
                <div className='badge-list'>
                    {earned && earned.map(badge => {
                        return (
                            <>
                                <div className='badge'>
                                    <img src={badge.image}></img>
                                    {/* <div className='badge-name'>{badge.name}</div> */}
                                </div>
                            </>
                        )
                    })}
                </div>
            </div>
        </>
    )
}