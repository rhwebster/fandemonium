import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Modal } from '../../context/Modal';
import { addFavoriteTeam } from '../../store/teams';
import { getAllTeams } from '../../store/teams';
import SingleTeam from './teampicker.css';

const TeamPicker = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const authenticate = useSelector((state) => state.session.authenticate);

    useEffect(() => {
        dispatch(getAllTeams());
    }, []);

    const teams = useSelector((state) => state.teams.teams)
    const [showMenu, setShowMenu] = useState(true);
    // const [value, setValue] = useState(0);

    const userId = useSelector((state) => {
        if (state.session.user) {
            return state.session.user.id
        }
    });

    const handleSubmit = async (teamId) => {
        await dispatch(addFavoriteTeam({
            id: userId,
            favoriteTeamId: teamId,
        }))
        history.push('/')
    };

    if (!authenticate) {
        return null;
    }

    return (
        <>
            <div id='team-menu'>
                <div id='team-picker'>
                    <div id='menu'>
                        {showMenu ? (
                            <>
                                {teams && teams.map(team => {
                                    return (
                                        <div className='team-id' style={{ backgroundImage: `url(${team.logo})`}}>
                                        <button
                                        key={team.id}
                                        value={team.id}
                                        onClick={(e) => handleSubmit(e.target.value)}>{team.abbr}</button>
                                        </div>

                                    )
                                })}
                            </>
                        ) : (null)
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default TeamPicker;




