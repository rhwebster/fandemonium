import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Modal } from '../../context/Modal';
import { addFavoriteTeam, setUser } from '../../store/session';
import { getAllTeams } from '../../store/teams';
import SingleTeam from './teampicker.css';

const TeamPicker = () => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.session.user);
    const authenticate = useSelector((state) => state.session.authenticate);

    useEffect(() => {
        if (user) {
            dispatch(getAllTeams());
        }
    }, []);

    const teams = useSelector((state) => state.teams.teams)
    const [showMenu, setShowMenu] = useState(false);
    const [value, setValue] = useState(0);

    const userId = useSelector((state) => {
        if (state.session.user) {
            return state.session.user.id
        }
    });

    const handleSelect = (teamId) => {
        console.log('team id ~~~~~~>', teamId)
        dispatch(addFavoriteTeam({
            id: userId,
            favoriteTeam: teamId,
        }))
    };

    if (!authenticate) {
        return null;
    }

    return (
        <>
            {/* <form onSubmit={handleSubmit}> */}
                <div id='team-menu'>
                    <div id='team-picker'>
                        <button onClick={() => setShowMenu(!showMenu)}>Favorite Team</button>
                        <div id='menu'>
                            {showMenu ? (
                                <>
                                    {teams && teams.map(team => {
                                        return (
                                            <button
                                            key={team.id}
                                            value={team.id}
                                            onClick={(e) => handleSelect(e.target.value)}>{team.name}</button>
                                        )
                                    })}
                                    <button type='submit'>Confirm</button>
                                </>
                            ) : (null)
                            }
                        </div>
                    </div>
                </div>
            {/* </form> */}
        </>
    )
}

export default TeamPicker;




