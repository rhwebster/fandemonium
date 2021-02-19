import React, { useEffect, useReducer, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Modal } from '../../context/Modal';
import TeamPicker from '../Teams/teampicker';
import { getFavoriteTeam } from '../../store/teams';
import './details.css';
import { userBadges } from '../../store/badges';
import { userStadiums } from '../../store/stadium';
import { getPhotos } from '../../store/photos';

function ProfileDetails({visible, user, favTeam}) {
    const dispatch = useDispatch();
    const [showModal, setShowModal] = useState();
    const history = useHistory();

    // const profileData = async () => {
    //     await dispatch(userBadges(user.id));
    //     await dispatch(userStadiums(user.id));
    //     await dispatch(getPhotos(user.id));
    // }
    // profileData();

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
                                <div className='separator'>_______________</div>
                                <div className='value'>{points ? points : 0}</div>
                                <div className='title'>Points</div>
                                <div className='separator'>_______________</div>
                            </div>
                            <div className='badges'>
                                <div className='value'>{badgeCount}</div>
                                <div className='title'>Badges</div>
                                <div className='separator'>_______________</div>
                            </div>
                            <div className='stadiums'>
                                <div className='value'>{visitedCount}</div>
                                <div className='title'>Stadiums Visited</div>
                                <div className='separator'>_______________</div>
                            </div>
                            <div className='photos'>
                                <div className='value'>{photoCount}</div>
                                <div className='title'>Photos</div>
                                <div className='separator'>_______________</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='team-box'>
                <div className='team-div>'>
                    <h4>Favorite Team</h4>
                    <button onClick={() => history.push('/favorite-team')}>{favTeam ? 'Edit' : 'Select'}</button>
                </div>
                <div className='separator'>_______________</div>
            </section> {favTeam ? (
            <section className='team-box'>
                <div className='team-info'>
                        <div className='team-logo' src={favTeam.logo}></div>
                        <div className='team-name'><p>{favTeam.abbr}</p></div>
                </div>
                <div className='team-stats'>
                        <div className='point-count'><p>Record: {favTeam.wins ? favTeam.wins : 0} - {favTeam.losses ? favTeam.losses : 0}</p></div>
                        <div className='championships'><p>Championships: {favTeam.championships ? favTeam.championships : 0}</p></div>
                        <div className='separator'>_______________</div>
                    {/* <span className='game'>Next Game: {team.nextGame}</span> */}
                </div>
            </section>
            ) : (null)}
        </>
    )
};

export default ProfileDetails;