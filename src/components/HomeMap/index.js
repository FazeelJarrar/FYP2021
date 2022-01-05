import React from "react";
import { View, Text, Image, FlatList } from "react-native";
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';

import cars from '../../assets/data/cars'

const HomeMap = (props) => {

    const getImage = (type) => {
        if(type === 'UberX'){
            return require('../../assets/images/top-UberX.png')
        }
        if(type === 'Comfort'){
            return require('../../assets/images/top-Comfort.png')
        }
        return require('../../assets/images/top-UberXL.png')

    }


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

            {cars.map( (  car:{}  ) => (

                <Marker
                key={car.id}
                coordinate={{ latitude : car.latitude , longitude : car.longitude }}

                >
                <Image
                    style={{
                        width: 70, 
                        height: 70, 
                        resizeMode: 'contain',
                        transform: [{
                            rotate: `${car.heading}deg`
                        }]
                    }}
                    source={getImage(car.type)}>
                </Image>    
                {/* image={{uri: '../'}} */}

                </ Marker>

            ))}


           </ MapView>

        </View>
    );
};

export default HomeMap;