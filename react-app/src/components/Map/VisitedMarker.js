import React, { useState } from 'react';
import styled from 'styled-components';
import { useLayer } from 'react-laag';
import { useDispatch, useSelector } from 'react-redux';
import { checkinStadium } from '../../store/stadium';

const StyledVisitedMarker = styled.div`
    background-color: green;
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
    border: green;
    border-style: solid;
    background-color: rgb(208, 208, 208);
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
    width: 200px;;
    height: 200px;
}
`;

const stadiumImage = styled.div`
    display: flex;
    justify-content: center;
`

export default function VisitedMarker({ name, city, img, id }) {
    const dispatch = useDispatch();
    const [isOpen, setOpen] = useState(false);
    const { triggerProps, layerProps, renderLayer } = useLayer({
        isOpen,
        triggerOffset: 10,
        auto: true,
        overflowContainer: false,
        onOutsideClick: () => setOpen(false),
    });

    const userId = useSelector((state) => {
        if (state.session.user) {
            return state.session.user.id
        }
    });

    const checkIn = (stadiumId) => {
        dispatch(checkinStadium({
            id: userId,
            stadiumId: stadiumId,
        }))
    };

    const handleMouseLeave = (e) => {
        setTimeout(() => {
            setOpen(false)
        }, 1500)
    }
    return (
        <>
            <StyledVisitedMarker
                {...triggerProps}
                onMouseOver={() => setOpen(true)}
                onMouseLeave={handleMouseLeave}
                onMouseDown={() => setOpen(false)}
            />
            {isOpen &&
                renderLayer(
                    <InfoBox {...layerProps}>
                        <img style={{ backgroundImage: `url(${img})`, backgroundPosition: 'center', backgroundSize: 'cover' }}></img>
                        <div>{name}</div>
                        <div>{city}</div>
                        <div>✅</div>
                    </InfoBox>
                )}
        </>
    );
}