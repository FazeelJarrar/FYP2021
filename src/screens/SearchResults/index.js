import React, {useState, useEffect} from "react";
//import * as React from "react";
//import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { View, TextInput, SafeAreaView } from "react-native";
import styles from "./styles";
import HomeMap from '../../components/HomeMap';
import RideType from "../../components/RideType";
import RideTypeRow from "../../components/RideTypeRow";


const SearchResults = (props) => {

    return (
        <SafeAreaView>
            <View>
                <HomeMap />
                
                <RideTypeRow />
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