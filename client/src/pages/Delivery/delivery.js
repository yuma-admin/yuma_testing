import React, { useEffect, useState} from 'react';
import DeliverySearch from "./Search/deliverySearch";
import DeliveryMap from "./Map/deliverymap";
import deliveryjson from './Map/deliveryjson';
// import { Container, Row, Col} from 'react-bootstrap';
import DeliveryCarousel from './DeliveryCarousel/deliveryCarousel';
import './delivery.css';

function Delivery() {

    // Id state 
    const [id, setId] = useState({
        id:""
    })   
    // Store distance state
    const [storeDistance,setStoreDistance] = useState({
        stores: [],
        zoom:null,
        center:null
    })

    const [mapParams,setMapParams] = useState({
        zoom:'5',
        center:{lat: 39.8283, lng: -98.5795}
    })

    // This triggers whenever the id or storeDistance state changes
    // This will then update the map zoom and centering 
    useEffect(() => {
        if(id.id){
            const filteredStores = storeJson.filter(store => store.id === id.id)
            setMapParams({...mapParams,zoom:'14',center:{lat:filteredStores[0].lat,lng:filteredStores[0].lng}})
        }
        if(!id.id && !storeDistance.zoom){
            setMapParams({...mapParams,zoom:'5',center:{lat: 39.8283, lng: -98.5795}})
        }
        if(storeDistance.zoom && storeDistance.center && !id.id){
            setMapParams({...mapParams,zoom:storeDistance.zoom, center: storeDistance.center})
        }
        
    },[id, storeDistance] )

    return (
        <div className='container-fluid'>
            <div className='deliveryHeader'>
                        <h1>
                        FOR 30% OFF YOUR FIRST DELIVERY ORDER NOW!
                        </h1>
                    </div>

                <div xs={{span:12,order:1}} sm={{span:12,order:1}} lg={{span:8,order:2}} className='deliveryInfo'>
                    <div className='deliveryFloat'>
                        <h2 className='floatHeader'>
                            DELIVERY
                        </h2>
                        <h3 className='floatSub'>
                            8am - 9pm
                        </h3>
                        <ol className='floatList'>
                            <li>Create an account</li>
                            <li>Verify your I.D.</li>
                            <li>Placee your order</li>
                            <li>Pay with cash only</li>
                            <li>Enjoy!</li>
                        </ol>
                        <DeliverySearch callBack = {setStoreDistance}></DeliverySearch>
                    </div>
                    <div className='stickyMap desktopMap'> 
                            <DeliveryMap center={mapParams.center} zoom={mapParams.zoom} windowSize={'calc(100vh  - 70px - 55px)'}></DeliveryMap> 
                        </div>
                         <div className='stickyMap mobileMap'> 
                            <DeliveryMap center={mapParams.center} zoom={mapParams.zoom -2} windowSize={'70vh'}></DeliveryMap> 
                        </div>
                </div>
                {/* <div xs={{span:12,order:1}} sm={{span:12,order:1}} lg={{span:8,order:2}} className='mapCol'>
                        <div className='mobileSearch'>
                            <DeliverySearch callBack = {setStoreDistance}></DeliverySearch>
                        </div>
                        <div className='stickyMap desktopMap'> 
                            <DeliveryMap center={mapParams.center} zoom={mapParams.zoom} windowSize={'calc(100vh  - 70px - 55px)'}></DeliveryMap> 
                        </div>
                         <div className='stickyMap mobileMap'> 
                            <DeliveryMap center={mapParams.center} zoom={mapParams.zoom -2} windowSize={'70vh'}></DeliveryMap> 
                        </div>
                    </div> */}
            <DeliveryCarousel />
        </div>
    )
}

export default Delivery