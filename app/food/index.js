import { StyleSheet, Text, View, Switch} from "react-native";
import React, {useState} from 'react';
import { AntDesign } from '@expo/vector-icons';
import {Link} from 'expo-router'

export default function Page() {
    const [isEnabled, setIsEnabled] = useState(false);
    const [isEnabled2, setIsEnabled2] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const toggleSwitch2 = () => setIsEnabled2(previousState => !previousState);

    return (
        <View style={styles.main}>
            <View style={styles.pluscontainer}>
                <AntDesign name="pluscircleo" size={20} color="black">
                    <Link style={styles.plus} href="/timeset"> 추가</Link>
                </AntDesign>
            </View>
            <View style={styles.container}>
                <View>
                    <Text style={styles.time}>시간 설정</Text>
                    <Text>요일/양</Text>
                </View>
                <View>
                    <Switch
                    trackColor={{false: '#767577', true: '#81c147'}}
                    thumbColor={'white'}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                    />
                </View>
            </View>
            <View style={styles.container}>
                <View>
                    <Text style={styles.time}>12: 00</Text>
                    <Text>금요일/ 100g</Text>
                </View>
                <View>
                    <Switch
                    trackColor={{false: '#767577', true: '#81c147'}}
                    thumbColor={'white'}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch2}
                    value={isEnabled2}
                    />
                </View>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    main: {
        marginLeft: 20,
        marginRight: 20,
    },
    plus: {
        fontWeight: 'bold'
    },
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
    pluscontainer: {
        marginBottom: 15
    }

})