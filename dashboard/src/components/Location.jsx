import React, { useContext, useState } from 'react'
import { MapContainer, Marker, Popup, TileLayer, useMapEvents } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import 'leaflet/dist/leaflet.js'
import { UserContext } from '../context/UserContext';


function LocationMarker({data,user}) {
    const {users,setUsers} = useContext(UserContext)
    const [position, setPosition] = useState(data)
    useMapEvents({
        click: (e) => {
            setPosition([e.latlng.lat, e.latlng.lng]);
            setUsers([...users.filter(item=>item.id !== user.id),{...user,location:position}])
        },
      });
    
  
    return (
        <Marker  position={position}>
            <Popup>Marker Location</Popup>
        </Marker>
    )
  }

const Location = ({data,user}) => {
  return (
    <MapContainer className='w-full h-56 relative' center={data ? data : [35.699947, 51.335981]} zoom={13} scrollWheelZoom={false} >
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <LocationMarker data={data ? data : [35.699947, 51.335981]} user={user}/>
  </MapContainer>
  )
}

export default Location