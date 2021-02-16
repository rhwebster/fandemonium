import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getBadges, userBadges } from '../../store/badges';
import { setUser } from '../../store/session';
import './index.css';

export default function Badges({ ...props }) {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.session.user);
    const badges = useSelector(state => state.badges.badges);
    const earned = useSelector(state => state.badges.earned);
    useEffect(() => {
        dispatch(setUser());
        dispatch(getBadges());
        dispatch(userBadges());
    }, []);

   const unearned = badges.filter(badge => (badge.id !==
    (earned.forEach(badge => badge.id))))

    const [showAll, setShowAll] = useState(true);

    return (
        <>
            <div className='button>'>
                <button onClick={() => setShowAll(!showAll)}>{showAll ? 'Show Earned Badges' : 'Show All Badges'}</button>
            </div>
            {showAll ? (
            <div className='badge-list'>
                {badges && badges.map(badge => {
                    return (
                        <>
                            <img src={badge.image}></img>
                            <div className='badge-name'>{badge.name}</div>
                        </>
                    )
                })}
            </div>
            ) : (
                    <div className='badge-list'>
                        {earned && earned.map(badge => {
                            return (
                                <>
                                    <div className='badge-image'>{badge.image}</div>
                                    <div className='badge-name'>{badge.name}</div>
                                </>
                            )
                        })}
                    </div>
            )}
        </>
    )
}