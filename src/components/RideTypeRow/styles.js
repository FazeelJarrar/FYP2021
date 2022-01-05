import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    container: {    
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
    },
    images: {
        height:80,
        width:80,
        resizeMode: 'contain',

    },
    middleContainer: {
        flex:1,
        marginHorizontal: 10,

    },
    typeTitle: {
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 5

    },
    time: {
        color: '#5d5d5d'

    },
    rightContainer: {
        width: 10,
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    price: {
        fontWeight: 'bold',
        fontSize: 18,
        marginLeft: 5,
    }
});

export default styles;