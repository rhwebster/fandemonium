import React, { useEffect, useReducer, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getFavoriteTeam } from '../../store/teams';
import './details.css';

function ProfileDetails({...props}) {
    const dispatch = useDispatch();
    const history = useHistory();

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

    if (!props.visible) return null;

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
                                <div className='separator'>__________</div>
                                <div className='point-count'>{points ? points : 0}</div>
                                <div className='title'>Points</div>
                                <div className='separator'>__________</div>
                            </div>
                            <div className='badges'>
                                <div className='badge-count'>{badgeCount}</div>
                                <div className='title'>Badges</div>
                                <div className='separator'>__________</div>
                            </div>
                            <div className='stadiums'>
                                <div className='visited-count'>{visitedCount}</div>
                                <div className='title'>Stadiums Visited</div>
                                <div className='separator'>__________</div>
                            </div>
                            <div className='photos'>
                                <div className='photo-count'>{photoCount}</div>
                                <div className='title'>Photos</div>
                                <div className='separator'>__________</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='team-box'>
                <div className='team-div>'>
                    <h4>Favorite Team</h4>
                    <button onClick={() => history.push('/favorite-team')}>{props.favTeam ? 'Edit' : 'Select'}</button>
                </div>
                <div className='separator'>__________</div>
            </section>
            { props.favTeam ? (
            <section className='team-box'>
                <div className='team-info'>
                        <div className='team-logo' src={props.favTeam.logo}></div>
                    <div className='team-name'>{props.favTeam.abbr}</div>
                </div>
                <div className='team-stats'>
                    <div className='point-count'> Record: {props.favTeam.wins ? props.favTeam.wins : 0} - {props.favTeam.losses ? props.favTeam.losses : 0}</div>
                    <div className='championships'>Championships: {props.favTeam.championships? props.favTeam.championships : 0}</div>
                        <div className='separator'>__________</div>
                    {/* <span className='game'>Next Game: {team.nextGame}</span> */}
                </div>
            </section>
            ) : (null)}
        </>
    )
};

export default ProfileDetails;