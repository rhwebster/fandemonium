import React, { useEffect, useReducer, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTeams, getTeam } from '../../store/teams';

function ProfileDetails({ visible }) {
    const user = useSelector(state => state.session.user);
    const dispatch = useDispatch();

    useEffect(() => {
        if (user) {
            dispatch(getAllTeams());
        }
    }, []);

    const points = useSelector((state) => {
        if (state.session.user) {
            return(state.session.user.points)
        }
    });

    const badgeCount = useSelector((state) => {
        if (state.badges.earned) {
            return state.badges.earned.length
        }
    });

    const visitedCount = useSelector((state) => {
        if (state.stadiums.visited) {
            return state.stadiums.visited.length
        }
    });

    const photoCount = useSelector((state) => {
        if (state.photos.photos) {
            return state.photos.photos.length
        }
    });

    const teamId = useSelector((state) => {
        if (state.session.user) {
            return state.session.user.favorite_team_id
        }
    });

    const team = useEffect(() => {
        if (user) {
            console.log(teamId);
            dispatch(getTeam(teamId));
            console.log('hit it here!')
            console.log('team~~~>', team);
        }
    }, []);

    if (!visible) return null;

    return (
        <>
            <section className="profile-box">
                <div className='profile-main'>
                    <div className='content'>
                        <div className='profile-info'>
                            <div className='profpic'></div>
                            <div className='user-info'></div>
                        </div>
                        <div className='stats'>
                            <div className='points'>
                                <div className='point-count'>{points ? points : 0}</div>
                                <div className='title'>Points</div>
                            </div>
                            <div className='badges'>
                                <div className='badge-count'>{badgeCount}</div>
                                <div className='title'>Badges</div>
                            </div>
                            <div className='stadiums'>
                                <div className='visited-count'>{visitedCount}</div>
                                <div className='title'>Stadiums Visited</div>
                            </div>
                            <div className='photos'>
                                <div className='photo-count'>{photoCount}</div>
                                <div className='title'>Photos</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            { team ? (
            <section className='team-box'>
                <div className='team-info'>
                    <div className='team-logo'>{team.logo}</div>
                    <div className='team-name'>{team.abbr}</div>
                </div>
                <div className='team-stats'>
                    <div className='point-count'> Record: {team.wins ? team.wins : 0} - {team.losses ? team.losses : 0}</div>
                    <div className='championships'>Championships: {team.championships? team.championships : 0}</div>
                    {/* <span className='game'>Next Game: {team.nextGame}</span> */}
                </div>
            </section>
            ) : (null)}
        </>
    )
};

export default ProfileDetails;