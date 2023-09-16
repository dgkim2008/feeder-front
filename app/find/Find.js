import { StyleSheet, Text, View } from "react-native";
import {Link} from 'expo-router'

const FindD = ({devices}) => {
    return (
        <View style={styles.submain2}>
            {devices.map((devices, i) => (
                <View key={i} style={styles.feederbox}>
                    <Link style={styles.feedername} href="/main">{devices.text}</Link>
                    <Text>급식기ID: {devices.id}</Text>
                </View>
            ))}
        </View>
    )

}
const styles = StyleSheet.create({
    submain2: {
        height:150,
        flexDirection:'column',
        justifyContent:"space-between"
    },
    feederbox: {
        borderWidth: 1.5,
        borderRadius: 7,
        borderColor: 'black',
        width: 300,
        height: 70,
        display: 'flex',
        justifyContent: 'center',
        paddingLeft: 5,
        margin: 15,
    }, 
    feedername:{
        fontWeight: '400',
        fontSize: 16,
    }
})

export default FindD;