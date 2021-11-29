import React, {useState, useEffect} from "react";
//import * as React from "react";
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { View, TextInput, SafeAreaView } from "react-native";
import styles from "./styles";


const DestinationSearch = (props) => {
    const [originPlace , setOriginPlace] = useState({initialState: null});
    const [destinationPlace , setDestinationPlace] = useState({initialState: null});

    
    useEffect( ()=>{
         if(originPlace && destinationPlace){
             console.warn({data: 'Redirect to Results'})
         }
    },  [originPlace , destinationPlace]);

    return (
        <SafeAreaView>
            <View style={styles.container}>
                
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

               <GooglePlacesAutocomplete
                    placeholder='Where From'
                    //styles={styles.GooglePlacesAutocomplete1}
                    
                    onPress={(data: GooglePlaceData , details : GooglePlaceDetail | null = null) => {
                        setOriginPlace({value: data , details});
                    }}
                    styles={{
                        textInput:styles.textInput
                    }}
                    fetchDetails
                    onFail={error => console.error(error)}
                    query={{
                        key: 'AIzaSyCnsKYVwHPUnwQHYthPjB55TYKsu_4YeP8',
                        language: 'en',
                    }}
                / >

                <GooglePlacesAutocomplete
                    placeholder='Where To'
                    //styles={styles.GooglePlacesAutocomplete1}
                    
                    onPress={( data: GooglePlaceData , details : GooglePlaceDetail | null  = null ) => {
                        setDestinationPlace({value: data , details});
                    }}
                    styles={{
                        textInput:styles.textInput
                    }}
                    fetchDetails
                    onFail={error => console.error(error)}
                    query={{
                        key: 'AIzaSyCnsKYVwHPUnwQHYthPjB55TYKsu_4YeP8',
                        language: 'en',
                    }}
                / >

                    
                {/* Covid Message*/}

                {/* Bottom Comp*/}

            </View>
        </SafeAreaView>
    );
};

export default DestinationSearch;