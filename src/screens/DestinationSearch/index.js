import React, {useState} from "react";
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { View, TextInput, SafeAreaView } from "react-native";
import styles from "./styles";


const DestinationSearch = (props) => {
    const [fromText, setFromText] = useState({ initialState: ''});
    const [destinationText, setDestinationText] = useState({ initialState: ''});

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <TextInput
                    value={fromText}
                    onChangeText={setFromText}
                    style={styles.textInput}
                    placeholder="From" />
                <TextInput
                    value={destinationText}
                    onChangeText={setDestinationText}
                    style={styles.textInput}
                    placeholder="Where To?" />

                <GooglePlacesAutocomplete
                    placeholder='Search'
                    //styles={styles.GooglePlacesAutocomplete1}
                    onPress={(data: GooglePlaceData , details : GooglePlaceDetail | null = null) => {
                        // 'details' is provided when fetchDetails = true
                        console.log(data, details);
                    }}
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