import { StyleSheet, Text, View, Switch} from "react-native";
import React, {useState} from 'react';
import { AntDesign } from '@expo/vector-icons';
import {Link} from 'expo-router'

export default function Page() {
    const [isEnabled, setIsEnabled] = useState(false);
    const [isEnabled2, setIsEnabled2] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const toggleSwitch2 = () => setIsEnabled2(previousState => !previousState);

    const [data] = useState ([
        {
            time: '시간 설정',
            day: '요일',
            amount: '양',
        },
        {
            time: '12:00',
            day: '금요일',
            amount: '100g',
        }
    ])

    return (
        <View style={styles.main}>
            <View style={styles.pluscontainer}>
                <AntDesign name="pluscircleo" size={20} color="black">
                    <Link style={styles.plus} href="/timeset"> 추가</Link>
                </AntDesign>
            </View>
            <View style={styles.container}>
                <View>
                    <Link style={styles.time} href="/timeset">{data[0].time}</Link>
                    <Text>{data[0].day} / {data[0].amount}</Text>
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
                    <Link style={styles.time} href="/timeset">{data[1].time}</Link>
                    <Text>{data[1].day} / {data[1].amount}</Text>
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