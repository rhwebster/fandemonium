import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Map from '../Map/Map';
import VisitedMap from '../Map/VisitedMap';
import { getStadiums, userStadiums } from '../../store/stadium';
import { newBadge } from '../../store/badges';
import Background from '../Splash/splash.jpg';
import Stadium from './Stadium';
import Unvisited from './Unvisited';
import './stadiums.css';

export default function Stadiums({...props}) {
    const dispatch = useDispatch();
    const user = useSelector(state => state.session.user);
    const authenticate = useSelector(state => state.session.authenticate);
    const userId = useSelector((state) => {
        if (state.session.user) {
            return state.session.user.id
        }
    });

    useEffect(() => {
        if (userId){
            dispatch(getStadiums());
            dispatch(userStadiums(userId));
        }
    }, [userId]);

    const stadiums = useSelector(state => state.stadiums.stadiums);
    const visited = useSelector(state => state.stadiums.visited);
    const unseen = stadiums.filter(function(stadiumEl) {
        return visited.filter(function(visitedEl) {
            return visitedEl.id === stadiumEl.id;
        }).length === 0
    });

    const badgeId = () => {
        let countA = 0;
        let countN = 0;
        let count1 = 0;
        let count2 = 0;
        let count3 = 0;
        let count4 = 0;
        let count5 = 0;
        let count6 = 0;
        let badgeId = null;
        if (visited.length === 30) {
            if (visited.every(stadium => stadium.div_id)) {
                return 15;
            }
        }
        if (visited.length >= 15) {
            for (let i = 0; i < visited.length; i++) {
                if (visited[i].div_id === 1 ||
                    visited[i].div_id === 5 ||
                    visited[i].div_id === 6) {
                        countA ++
                    } else {
                        countN ++
                    }
            }
            if (countA === 15 || countN === 15) {
                return 14
            }
        } 
        if (visited.length >= 5) {
            for (let i = 0; i < visited.length; i++) {
                if (visited[i].div_id === 1) count1++
                if (visited[i].div_id === 2) count2++
                if (visited[i].div_id === 3) count3++
                if (visited[i].div_id === 4) count4++
                if (visited[i].div_id === 5) count5++
                if (visited[i].div_id === 6) count6++
                }
            if (count1 === 5 || count2 === 5 ||
                count3 === 5 || count4 === 5 || 
                count5 === 5 || count6 === 5) {
                    return 13
                }
        }
        if (visited.length >= 5) {
            console.log('visited 5')
            return 8
        }
        if (visited.length >= 1) {
            console.log('visited 1')
            return 4
        }
        else {
            return 0
        }
    }

    const checkForNewBadge = () => {
        if (user) {
            if (badgeId() > 0) {
                dispatch(newBadge({
                    id: user.id,
                    badgeId: badgeId(),
                }))
            }
        }
    };

    checkForNewBadge();

    const [showAll, setShowAll] = useState(true)

    return (
        <div id='stadium-page-background' style={{ backgroundImage: `url(${Background})` }}>
            <div id='stadium-page-body' >
                <div className='header'>
                    <h2>Check Into A Ballpark</h2>
                </div>
                <div id='map-and-button'>
                    <div id='stadium-page-map'>
                        {showAll ? (<Map />) : (<VisitedMap visited={visited} unseen={unseen} />)}
                        <div className='button>'>
                            <button onClick={() => setShowAll(!showAll)}>{showAll ? 'Show Visited Stadiums' : 'Show All Stadiums'}</button>
                        </div>
                    </div>
                </div>
                <div className='stadium-list'>
                    <div className='stadium-icons'>
                        {visited && visited.map(stadium => {
                            return (
                                <Stadium image={stadium.image} />
                            )
                        })}
                        {unseen && unseen.map(stadium => {
                            return (
                                <Unvisited image={stadium.image} />
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}