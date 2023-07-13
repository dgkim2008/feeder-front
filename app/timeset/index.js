import { StyleSheet, Text, View, Switch,TextInput } from "react-native";
import React, {useState} from 'react';
import {Link} from 'expo-router'

export default function Page() {
    const [day, setday] = useState({
        mon:false,
        tue:false,
        wed:false,
        thu:false,
        fir:false,
        sat:false,
        sun:false,
    });
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    

    return (
        <View style={styles.main}>
            <View style={styles.week1}>
                <View style={styles.circle}>
                    <Text style={styles.font}>월</Text>
                </View>
                <View style={styles.circle}>
                    <Text style={styles.font}>화</Text>
                </View>
                <View style={styles.circle}>
                    <Text style={styles.font}>수</Text>
                </View>
                <View style={styles.circle}>
                    <Text style={styles.font}>목</Text>
                </View>
            </View>
            <View style={styles.week2}>
                <View style={styles.circle}>
                    <Text style={styles.font}>금</Text>
                </View>
                <View style={styles.circle}>
                    <Text style={styles.font}>토</Text>
                </View>
                <View style={styles.circle}>
                    <Text style={styles.font}>일</Text>
                </View>
                <View style={styles.circle}>
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
                <View style={styles.set}>
                    <Text style={styles.font}>시간 설정: </Text> 
                </View>
                <View style={styles.set}>
                    <Text style={styles.font}>추천하는 양: </Text>
                </View>
                <View style={styles.set}>
                    <Text style={styles.font}>설정한 배식양: </Text>
                </View>
            </View> 
        </View>
    );
}
const styles = StyleSheet.create({
    main: {
        marginLeft: 20,
        marginRight: 20,
        display: 'flex'
    },
    week1: {
        justifyContent: 'space-around',
        flexDirection: 'row',
    },
    week2: {
        justifyContent: 'space-around',
        flexDirection: 'row'
    },
    circle: {
        width: 50,
        height: 50,
        backgroundColor: 'white',
        justifyContent: 'center',
        textAlign: 'center'
    },
    container: {
        marginTop: 70,
        marginLeft: 10,
        height: 300,
        flexDirection: 'column',
        justifyContent: 'space-around'
    }, 
    font: {
        fontSize: 16
    }
})