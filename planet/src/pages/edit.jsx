
import React from "react";
import Header from '../components/header';
import { useLeafletContext } from '@react-leaflet/core'
import L from 'leaflet'
import { useEffect } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import '../css/edit.css'
import apiRequest from '../api/map';

const Edit =()=> {
    // const Square = (props) =>{
    //     const context = useLeafletContext()
      
    //     useEffect(() => {
    //       const bounds = L.latLng(props.center).toBounds(props.size)
    //       const square = new L.Rectangle(bounds)
    //       const container = context.layerContainer || context.map
    //       container.addLayer(square)
      
    //       return () => {
    //         container.removeLayer(square)
    //       }
    //     })
      
    //     return null
    //   }

      const center = [-33.872761,151.205338]  //sdyney 
    //   var map = L.map('map').setView([51.505, -0.09], 13);
    //   var marker = L.marker([51.5, -0.09]).addTo(map);
    //   L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    //     attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    //     maxZoom: 18,
    //     id: 'mapbox/streets-v11',
    //     tileSize: 512,
    //     zoomOffset: -1,
    //     accessToken: 'your.mapbox.access.token'
    // }).addTo(map);

    const onSubmit = async (data) => {
        const response= await apiRequest('getLatitudeLongitude', 'GET',['sdyney']);
        if(response.status===200){
            const res = response.json();
            res.then(
                (data)=>{
                    console.log('resData',data)
                }
            );
        }
        else{
            alert('Unmatch username/password')
        }
    };
    return (
        <div id="body">
            <Header />
            <div class="main">
                <div onClick={onSubmit}>test</div>
                <div class="page">
                    <div class="pageLeft">
                        <div class="map">
                            <MapContainer center={center} zoom={13}>
                                <TileLayer
                                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                />
                                {/* <Square center={center} size={1000} /> */}
                            </MapContainer>
                        </div>
                    </div>

                    <div class="pageRight"></div>
                </div>
            </div>
        </div>
    )
};

export default Edit;