import React, {useState, useEffect} from "react";
//import * as React from "react";
//import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { View, TextInput, SafeAreaView, Dimensions,  } from "react-native";
import styles from "./styles";
import HomeMap from '../../components/HomeMap';
import RouteMap from '../../components/RouteMap';
import RideType from "../../components/RideType";
import RideTypeRow from "../../components/RideTypeRow";

import { useRoute } from "@react-navigation/native";

const SearchResults = (props) => {

    const route = useRoute();
    //console.log(route.params);

    return (
        <SafeAreaView>
            <View style={{display: 'flex', justifyContent: "space-between"}}>
                
                <View style={{height:Dimensions.get('window').height - 400}}>
                    <RouteMap />
                </View>

                <View style={{height: 400}}>
                    <RideType />
                </View>

               {/*  <TextInput
                    value={fromText}
                    onChangeText={setFromText}
                    style={styles.textInput}
                    placeholder="From" />
                <TextInput
                    value={destinationText}
                    onChangeText={setDestinationText}
                    style={styles.textInput}
                    placeholder="Where To?" /> */}
                 
                 

                {/* Bottom Comp*/}

            </View>
        </SafeAreaView>
    );
};

export default SearchResults;