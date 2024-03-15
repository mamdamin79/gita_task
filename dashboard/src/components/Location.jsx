import React, { useContext, useState } from 'react'
import { MapContainer, Marker, Popup, TileLayer, useMap, useMapEvents } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import 'leaflet/dist/leaflet.js'
import { UserContext } from '../context/UserContext';
import  axios from 'axios';


function LocationMarker({data,user}) {
    const {users,setUsers} = useContext(UserContext)
    const [position, setPosition] = useState(data)
    useMapEvents({
        click: async(e) => {
            setPosition([e.latlng.lat, e.latlng.lng]);
            const res = await axios.put(`https://gita-task.liara.run/users/${user.id}`,{
                    ...user,location:[e.latlng.lat, e.latlng.lng]
                })
                setUsers([...users.filter(item=>item.id !== user.id),res.data])
        },
      });
    
  
    return (
        <Marker  position={position}>
            <Popup>Marker Location</Popup>
        </Marker>
    )
  }

const Location = ({data,user}) => {
    if (!data) {
        return <h1>اطلاعات این کاربر موجود نمیباشد</h1>
    }
  return (
    <MapContainer className='w-full h-56 relative' center={data} zoom={13} scrollWheelZoom={false} >
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <LocationMarker data={data} user={user}/>
  </MapContainer>
  )
}

export default Location