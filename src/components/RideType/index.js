import React from "react";
import { View, Text, Pressable } from "react-native";
import styles from "./styles";
import RideTypeRow from "../../components/RideTypeRow";
import typesData from "../../assets/data/types"
import types from "../../assets/data/types";

const RideType = (props) => {

    const confirm = () =>{
        console.warn( 'Confirmed' )
    }
    return (
        <View>
            {typesData.map((type:{ }) => (
                <RideTypeRow  type={type} key={type.id} />
            ))}
            
            <Pressable onPress={confirm} style={{
                backgroundColor: 'black',
                padding: 10,
                margin: 10,
                alignItems: 'center',
            }}>
                <Text style={{color:'white', fontSize:18, fontWeight:'bold'}}>
                    Confirm Request
                </Text>
            </Pressable>

        </View>
    );
};

export default RideType;