import React from "react";
import { View, Text, Image } from "react-native";
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';



const RouteMap = (props) => {

    const GOOGLE_MAPS_APIKEY = 'AIzaSyB54M-hN05KxSpvzKqrC5OVrwOkcVyiy1A';

    const origin = {
        latitude: 24.898430029589317,
        longitude: 67.10424388961724,
    };

    const destination = {
        latitude: 24.79449346049067,
        longitude: 67.13589626732343,
    };
    

    return (
        
        <View >

            <MapView
                style={{height:'100%', width:'100%'}}
                provider={PROVIDER_GOOGLE}
                showsUserLocation={true}
                initialRegion={{
                latitude: 24.898429421362682,
                longitude: 67.10424053685463,
                latitudeDelta: 0.0222,
                longitudeDelta: 0.0121,
                }}>

                <MapViewDirections
                    origin={origin}
                    destination={destination}
                    apikey={GOOGLE_MAPS_APIKEY}
                    strokeWidth={5}
                    strokeColor="green"

                />

                <Marker
                    coordinate={origin}
                    title={'Origin'}
                />
                <Marker
                    coordinate={destination}
                    title={'Destination'}
                />



           </ MapView>

        </View>
    );
};

export default RouteMap;