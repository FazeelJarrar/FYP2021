import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    container: {
        padding: 10,
        backgroundColor: '#7b7b7b',
        //color: 'black',
        height: '100%',
    },
    textInput: {
        backgroundColor: '#eee',
        marginVertical: 5,
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        color: 'black',

    },
    textInput2: {
        backgroundColor: 'red',
        marginVertical: 5,
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        color: 'black',
        height: 'auto'

    }
});

export default styles;