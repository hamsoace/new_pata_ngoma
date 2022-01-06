import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom:45,
        backgroundColor: '#131313',
        flexDirection: 'row',
        width: '100%',
        borderWidth: 3,
        borderColor: 'black',
        alignItems: 'center',
    },
    image: {
        width: 70,
        height: 70,
        marginRight: 5,
    },
    rightContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    nameContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: 100,
        justifyContent: 'space-around',
    },
    title: {
        color: 'white',
        fontSize: 15,
        fontWeight: 'bold',
        margin: 10,
    },
    artist: {
        color: 'lightgray',
        fontSize: 15,
    }
})

export default styles;