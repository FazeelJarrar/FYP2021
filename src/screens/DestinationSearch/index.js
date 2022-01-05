import React, {useState, useEffect} from "react";
//import * as React from "react";
import { GooglePlacesAutocomplete , data} from 'react-native-google-places-autocomplete';
import { View, TextInput, SafeAreaView, initialState} from "react-native";
import styles from "./styles";
import PlaceRow from "./PlaceRow";
import { useNavigation } from "@react-navigation/native";

const DestinationSearch = (props) => {

    const navigation = useNavigation();
    const APIKEY = 'AIzaSyB54M-hN05KxSpvzKqrC5OVrwOkcVyiy1A'
    initialState:null;
    const [originPlace , setOriginPlace] = useState(initialState);
    const [destinationPlace , setDestinationPlace] = useState(initialState);

    const checkNavigation = () => {
        if(originPlace && destinationPlace)
         {
             //console.warn('Redirect to Results')
             navigation.navigate('SearchResults', {
                 originPlace,
                 destinationPlace
             })
         }
    }
     //use Effect function needs reviw
    useEffect( ()=>{
        checkNavigation();         
      }  ,   [originPlace , destinationPlace]  );

    //Home Sweet Home = 24.898465387583755, 67.1040475266982
    const homePlace = {
        description: 'Home Sweet Home',
        geometry: { location: { lat: 24.898465387583755, lng: 67.1040475266982 } },
      };

    //   Kiet City Campus = 24.861765244092673, 67.0732519691704 
      const workPlace = {
        description: 'Work',
        geometry: { location: { lat: 24.861765244092673, lng: 67.1040475266982 } },
      };

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
                        setOriginPlace({ data , details});
                    }}
                    enablePoweredByContainer={false}
                    suppressDefaultStyles
                    currentLocation={true}
                    currentLocationLabel='Current location'
                    styles={{
                        textInput:styles.textInput,

                        container: styles.autoCompleteContainer,
                        listView: styles.listView,
                        separator: styles.separator,
                        
                    }}
                    fetchDetails
                    onFail={error => console.error(error)}
                    query={{
                        key: APIKEY,
                        language: 'en',
                    }}
                    renderRow = {(data:GooglePlaceData) => <PlaceRow data = {data} /> }
                    renderDescription = {(data: DescriptionRow) => data.description || data.vicinity }
                    predefinedPlaces={[homePlace, workPlace]}
                / >

                <GooglePlacesAutocomplete
                    placeholder='Where To'
                    //styles={styles.GooglePlacesAutocomplete1}
                    
                    onPress={( data: GooglePlaceData , details : GooglePlaceDetail | null  = null ) => {
                        setDestinationPlace({ data , details});
                    }}
                    enablePoweredByContainer={false}
                    suppressDefaultStyles
                    styles={{
                        textInput:styles.textInput,
                        container:{
                            ...styles.autoCompleteContainer,
                            top: 55,
                        },
                        separator: styles.separator,
                    }}
                    fetchDetails
                    onFail={error => console.error(error)}
                    query={{
                        key: APIKEY,
                        language: 'en',
                    }}
                    renderRow = {(data:GooglePlaceData) => <PlaceRow data = {data} /> }
                / >

                    
                {/* Circle Near origin Input*/}
                <View style={styles.circle} />

                {/* Line in between the inputs*/}
                <View style={styles.line} />

                {/* square ner the destination input*/}
                <View style={styles.square} /> 

            </View>
        </SafeAreaView>
    );
};

export default DestinationSearch;