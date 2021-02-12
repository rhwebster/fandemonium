import React, { userState, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { GoogleMap, withScriptjs, withGoogleMap, InfoWindow, Marker } from 'react-google-maps';

// const InitMap = ({}) => {
//     const dispatch = useDispatch();
//     const stadiums = useSelector((state) => state.stadiums)
//     console.log('stadiums ~~~~>', stadiums)
// }
// const WrappedMap = withScriptjs(withGoogleMap(StadiumMap));

// export default function Map = ({}) => {
//     return (
//         <div>
//             <WrappedMap id='map' googleMapURL=
//         </div>
//     )
//     const mapCenter = useState({ lat: 36.6848545, lon: -96.743244})
//     return (
//         <>
//             <GoogleMap zoom={5} center={mapCenter}></GoogleMap>
//         </>
//     )
// };

const MapComponent = withScriptjs(withGoogleMap((props) =>
    <GoogleMap
        defaultZoom={4}
        defaultCenter={{ lat: 36.6848545, lng: -96.743244 }}
    >
        {props.isMarkerShown && <Marker position={{ lat: 40.829643, lng: -73.926175 }} />}
    </GoogleMap>
))

export default MapComponent;