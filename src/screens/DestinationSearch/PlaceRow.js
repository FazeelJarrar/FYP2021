import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./styles";
import Entypo from "react-native-vector-icons/Entypo";


const PlaceRow = ( {data} ) => {

    console.log(data)
    
    return (
        
        <View style ={styles.row} >
            <View style={styles.iconContainer}>
                {data.description === 'Home Sweet Home'
                ? <Entypo name='home' size={20} color={'lightgreen'} /> 
                //  data.description === 'Work'
                // ? <Entypo name='breifcase' size={20} color={'lightgreen'} /> 
                : <Entypo name='location-pin' size={20} color={'white'} />
            }
                
            </View>

            <Text style={styles.locationText} > {data.description || data.vicinity} </Text>

        </View>
    );
};

export default PlaceRow;