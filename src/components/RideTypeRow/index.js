import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./styles";
import Ionicons from "react-native-vector-icons/Ionicons"

const RideTypeRow = (props) => {
    return (
        <View style={styles.container}>

            <Image styles={styles.image} source={require('../../assets/images/UberX.jpeg')} />
            <View styles={styles.middleContainer}>
                <Text style={styles.typeTitle}>
                    UberX
                    <Ionicons name={'person'} size={12} />3
                </Text>
                <Text style={styles.time}>
                    8:30 PM Drop Off
                </Text>
                
            </View>
            
            <View styles={styles.rightContainer}>
                <Ionicons name={'pricetag'} size={12} color={'#42d742'} />
                <Text style={styles.price}>
                    est. Rs.227
                </Text>

            </View>


        </View>
    );
};

export default RideTypeRow;