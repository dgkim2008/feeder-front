import { StyleSheet, Text, View } from "react-native";
import { AntDesign } from '@expo/vector-icons'; 
import {Link} from 'expo-router'

export default function Page() {
    return (
        <View style={styles.main}>
            <View style={styles.submain1}>
                <View style={styles.titlebox}>
                    <View style={styles.border}>
                        <Text style={styles.title}>멍냥 먹창고</Text>
                    </View>
                </View>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    submain1:{
        height:300,
        flexDirection:'column',
        justifyContent:"space-between"
    },
    backtext: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    back: {
        display: "flex",
        flexDirection: "row-reverse",
        padding: 30
    },

    title: {
        fontWeight: 'bold',
        fontSize: 40,
        color: 'black'
        
    },
    titlebox: {
        width: 215,
        display: 'flex',
        alignItems: 'center',
    },
    border: {
        borderBottomWidth: 7,
    },
})