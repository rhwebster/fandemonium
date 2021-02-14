import { React, useReducer, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

export default function ProfileDetails({visible}) {

    const points = useSelector(state => state.session.user.points)
    const badgeCount = useSelector((state) => {
        if (state.badges.earned) {
            return state.badges.earned.length
        }
    });
    const visitedCount = useSelector((state) => {
        if (state.stadiums.visited) {
            return state.stadiums.visited.length
        }
    })
    const photoCount = useSelector((state) => {
        if (state.photos.photos) {
            return state.photos.photos.length
        }
    })
    const team = useSelector((state) => state.session.user.favTeam)

    if (!visible) return null;

    return (
        <>
            <div className='side-panel'>
                <section className="profile-box">
                    <div className='profile-main'>
                        <div className='content'>
                            <div className='profile-info'>
                                <div className='profpic'></div>
                                <div className='user-info'></div>
                            </div>
                            <div className='stats'>
                                <div className='points'>
                                    <span className='point-count'>{points}</span>
                                    <span className='title'>Points</span>
                                </div>
                                <div className='badges'>
                                    <span className='badge-count'>{badgeCount}</span>
                                    <span className='title'>Badges</span>
                                </div>
                                <div className='stadiums'>
                                    <span className='visited-count'>{visitedCount}</span>
                                    <span className='title'>Stadiums Visited</span>
                                </div>
                                <div className='photos'>
                                    <span className='photo-count'>{photoCount}</span>
                                    <span className='title'>Photos</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='team-box'>
                    <div className='team-info'>
                        <span className='team-logo'>{team.logo}</span>
                        <span className='team-name'>{team.name}</span>
                    </div>
                    <div className='team-stats'>
                        <span className='point-count'> Record: {team.wins} - {team.losses}</span>
                        <span className='championships'>Championships: {team.championships}</span>
                        <span className='game'>Next Game: {team.nextGame}</span>
                    </div>
                </section>
            </div>
        </>
    )
}