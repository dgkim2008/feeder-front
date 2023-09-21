import { StyleSheet, Text, View } from "react-native";
import {Link} from 'expo-router'

const Con = ({data, onRemove}) => {
    return (
        <View>
            {data.map((data, i) => (
                <View key={i} style={styles.container}>
                    <View>
                        <Link style={styles.time} href="/timeset">{data.time}</Link>
                        <Text>{data.day} / {data.amount}</Text>
                    </View>
                    <View style={styles.delcon}>
                        <Text style={styles.del}>삭제</Text>
                    </View>
                </View>
            ))}
        </View>
    )

};

const styles = StyleSheet.create({
    container: {
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 15,
        marginBottom: 15
    }, 
    time: {
        fontSize: 16
    },
    delcon: {
        justifyContent: 'center'
    },
    del: {
        color: 'red',
        fontSize: 15
    }
});

export default Con