import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Modal } from '../../context/Modal';
import { getAllTeams } from '../../store/teams';
import SingleTeam from './team';

const TeamPicker = () => {
    const dispatch = useDispatch();

    const teams = useSelector((state) => state.teams.teams)
    useEffect(() => {
        dispatch(getAllTeams());
    }, []);
    console.log('teams ~~~~>', teams)
    const authenticate = useSelector((state) => state.session.authenticate);
   

    if (!authenticate) {
        return null;
    }

    return(
        <>
            <span>Favorite Team</span>
            <div id='teams-list'>
                {teams && teams.map(team => {
                    return (
                        <>
                            <SingleTeam logo={team.logo} name={team.name}/>
                        </>
                    )
                })}
            </div>
        </>

    )
}

export default TeamPicker;