import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Modal } from '../../context/Modal';
import { addFavoriteTeam } from '../../store/session';
import { getAllTeams } from '../../store/teams';
import SingleTeam from './teampicker.css';

const TeamPicker = () => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.session.user);
    const teams = useSelector((state) => state.teams.teams)
    const [errors, setErrors] = useState([])
    const [showMenu, setShowMenu] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const authenticate = useSelector((state) => state.session.authenticate);
    useEffect(() => {
        dispatch(getAllTeams());
    }, []);

    // const handleSubmit = (e) => {
    //     // e.preventDefault();
    //     setShowMenu(false);
    //     dispatch(addFavoriteTeam({
    //         id: user.id,
    //         favoriteTeam: e.target.value,
    //     }))
    // }

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
                                            <button key={team.id} value={team.id}>{team.name}</button>
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




