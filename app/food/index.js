import { StyleSheet, Text, View, Switch} from "react-native";
import { AntDesign } from '@expo/vector-icons';
import {Link} from 'expo-router'

export default function Page() {
    return (
        <View style={styles.main}>
            <View>
                <AntDesign name="pluscircleo" size={20} color="black">
                    <Text style={styles.plus}> 추가</Text>
                </AntDesign>
            </View>
            <View>
                <View>
                    <Text>시간 설정</Text>
                    <Text>요일/양</Text>
                    <Switch></Switch>
                </View>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    main: {
        marginLeft: 20,
    },
    plus: {
        fontWeight: 'bold'
    }
})