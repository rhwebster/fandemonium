import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Modal } from '../../context/Modal';
import { addFavoriteTeam } from '../../store/session';
import { getAllTeams } from '../../store/teams';
import SingleTeam from './team';

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

    if (!authenticate) {
        return null;
    }

    // return(
    //     <>
    //         <Modal onClose={() => setShowModal(false)} name='favorite-team'>
    //         <form>
    //             <label>Favorite Team
    //                 {teams && teams.map(team => {
    //                 return (
    //                     <>
    //                         <span className='team-info'>{team.logo} {team.name}</span>
    //                         <option className='favorite-team' type='checkbox' value={team.id}
    //                         onclick={(e) => addFavoriteTeam(e.target.value)}>{team.logo} {team.name}</option>
    //                     </>
    //                 )
    //                 })}
    //             </label>
    //             <button className='confirm-button' type='submit'>Confirm</button>
    //         </form>
    //     </>

    // )

    return (
        <div>
            <button onClick={() => setShowMenu(!showMenu)}>Favorite Team</button>
            {showMenu ? (
                <div className='menu'>
                    {teams && teams.map(team => {
                        return (
                            <button key={team.id} value={team.id} onClick={(e) => console.log(e.target.value)}>{team.name}</button>)
                    })}
                </div>
            ) : (null)
            }
        </div>
    )
}

export default TeamPicker;




