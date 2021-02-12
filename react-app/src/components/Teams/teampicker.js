import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Modal } from '../../context/Modal';
import { getAllTeams } from '../../store/teams';

const TeamPicker = () => {
    const dispatch = useDispatch();

    const teams = useSelector((state) => state.teams.teams)
    const authenticate = useSelector((state) => state.session.authenticate);
    const [showModal, setShowModal] = useState(true);

    if (!authenticate) {
        return null;
    }

    return(
        <>
            
            <span>Favorite Team</span>
            <div id='teams-list'>
                {showModal && (
                    <Modal onClose={() => setShowModal(false)}>
                        {teams && teams.map(team => {
                            return (
                                <SingleTeam logo={team.logo} name={team.name} id={team.id} />
                            )
                        })}
                    </Modal>
                )}

            </div>
        </>

    )
}

export default TeamPicker;