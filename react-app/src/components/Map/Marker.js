import React, { useState } from 'react';
import styled from 'styled-components';
import { useLayer, Arrow } from 'react-laag';
import { useDispatch, useSelector } from 'react-redux';
import { checkinStadium } from '../../store/stadium';

const StyledMarker = styled.div`
    background-color: #0d1bba;
    color: black;
    width: 6px;
    height: 6px;
    border-radius: 100%;
    cursor: pointer;
`;

const InfoBox = styled.div`
    padding: 1em;
    border-radius: 20px;
    box-shadow: 1px 1px 10px 1px rgba(0, 0, 0, 0.2);
    border: #0d1bba;
    border-style: solid;
    background-color: rgb(208, 208, 208);
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const stadiumImage = styled.div`
    display: flex;
    justify-content: center;
`

export default function Marker({ name, city, img, id }) {
    const dispatch = useDispatch();
    const [isOpen, setOpen] = useState(false);
    const { triggerProps, layerProps, arrowProps, renderLayer } = useLayer({
        isOpen,
        triggerOffset: 10,
        auto: true,
        overflowContainer: false,
        onOutsideClick: () => setOpen(false),
        // container: 'infoboxlayer',
    });

    const userId = useSelector((state) => {
        if (state.session.user) {
            return state.session.user.id
        }
    });

    const checkIn = (stadiumId) => {
        dispatch(checkinStadium({
            id: userId,
            stadium: stadiumId,
        }))
    };

    const handleMouseLeave = (e) => {
        setTimeout(() => {
            setOpen(false)
        }, 1500)
    }
    return (
        <>
            <StyledMarker
                {...triggerProps}
                onMouseOver={() => setOpen(true)}
                onMouseLeave={handleMouseLeave}
                onMouseDown={() => setOpen(false)}
            />
            {isOpen &&
                renderLayer(
                    <InfoBox {...layerProps}>
                        <img src={img}></img>
                        <div>{name}</div>
                        <div>{city}</div>
                        <button value={id} onClick={(e) => checkIn(e.target.value)}
                        >Check In!</button>
                    </InfoBox>
                )}
        </>
    );
}