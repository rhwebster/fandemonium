import React from 'react';
import locationIcon from '@iconify/icons-mdi/map-marker';
import { Icon } from '@iconify/react';
import './map.css';

const { GOOGLE_MAP_API_KEY } = process.env;

const LocationPin = () => (
    <div className="pin">
        <Icon icon={locationIcon} className="pin-icon" />
    </div>
);

export default LocationPin;