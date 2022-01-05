import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    container: {
        padding: 10,
        //backgroundColor: '#eee',
        //color: 'black',
        height: '100%',
    },

    textInput: {
        //backgroundColor: '#eee',
        marginVertical: 5,
        padding: 10,
        //flexDirection: 'row',
        //justifyContent: 'space-between',
        //alignItems: 'center',
        color: 'black',
        marginLeft: 15 ,

    },

    autoCompleteContainer:{
        position: 'absolute',
        top: 0,
        left: 10,
        right: 10
    },

    separator: {
        backgroundColor: '#efefef',
        height: 1,
    },

    listView: {
        position: 'absolute',
        top: 110
    },

    row: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
    },

    iconContainer: {
        backgroundColor: '#a2a2a2',
        padding: 5,
        borderRadius: 50,
        marginRight: 15,

    },
    locationTextg: {

    },
    circle:{
        width: 8,
        height: 8,
        backgroundColor: 'black',
        position: 'absolute',
        top: 25,
        left: 15,
        borderRadius: 5
    },
    line: {
        width: 1,
        height: 43.5,
        backgroundColor: '#c4c4c4',
        position: 'absolute',
        top: 36.5,
        left: 17.8,
    },
    square: {
        width: 7,
        height: 7,
        backgroundColor: 'black',
        position: 'absolute',
        top: 82.8,
        left: 15,
    }

});

export default styles;