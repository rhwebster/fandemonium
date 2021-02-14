import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getBadges, userBadges } from '../../store/badges';

export default function Badges({ ...props }) {
    const dispatch = useDispatch();
    const badges = useSelector(state => state.badges.badges)
    const earned = useSelector(state => state.badges.earned);
    useEffect(() => {
        dispatch(getBadges());
        dispatch(userBadges());
    }, []);

    return (
        <>
            <div className='badge-list'>
                {badges && badges.map(badge => {
                    return (
                        <>
                            <div className='badge-image'>{badge.image}</div>
                            <div className='badge-name'>{badge.name}</div>
                        </>
                    )
                })}
            </div>
        </>
    )
}