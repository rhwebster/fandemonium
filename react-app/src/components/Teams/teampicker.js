import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Modal } from '../../context/Modal';
import { getAllTeams } from '../../store/teams';
import SingleTeam from './team';

const TeamPicker = () => {
    const dispatch = useDispatch();
    const [showModal, setShowModal] = useState(false);

    const teams = useSelector((state) => state.teams.teams)
    useEffect(() => {
        dispatch(getAllTeams());
    }, []);
    const authenticate = useSelector((state) => state.session.authenticate);
   

    if (!authenticate) {
        return null;
    }

    return(
        <>
            <Modal onClose={() => setShowModal(false)} name='favorite-team'>
            <form>
                <label>Favorite Team
                    {teams && teams.map(team => {
                    return (
                        <option>{team.logo} {team.name}</option>
                    )
                    })}
                </label>
            </form>
            </Modal>
        </>

    )
}

export default TeamPicker;