import { StyleSheet, Text, View, Switch,TextInput, Button } from "react-native";
import React, {useState} from 'react';
//import {Link} from 'expo-router'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view' 
import { initDatabaseConfig, queryDB } from "autofeeder-front/lib/db.js"; 
import { useEffect } from "react";

export default function Page() {
    const DBInstance = initDatabaseConfig();
    useEffect(() => {
    queryDB(`create table if not exists timeset
        (
        food INTEGER PRIMARY KEY,
        repeat TEXT,
        time INTEGER,
        minute INTEGER,
        recommend INTEGER
        )`, DBInstance)
        queryDB(`insert into timeset values('100', '반복', '8', '30', '100')`, DBInstance);
        queryDB("select * from timeset", DBInstance).then(v => console.log(v.rows));
    }, []);

    const [day, setday] = useState({
        mon:false,
        tue:false,
        wed:false,
        thu:false,
        fri:false,
        sat:false,
        sun:false,
        time:0,
        minute:0,
        food:0
    });
    const [isEnabled, setIsEnabled] = useState(false); 
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const sug = 150;

    return (
        <KeyboardAwareScrollView style={styles.main}>
            <View style={styles.week1}>
                <View style={day.mon ? styles.circleclick : styles.circle}> 
                    <Button title="월" style={styles.font} color='black' onPress={() => setday({...day, mon:!day.mon})}></Button>
                </View>
                <View style={day.tue ? styles.circleclick : styles.circle}>
                    <Button title="화" style={styles.font} color='black' onPress={() => setday({...day, tue:!day.tue})}></Button>
                </View>
                <View style={day.wed ? styles.circleclick : styles.circle}>
                    <Button title="수" style={styles.font} color='black' onPress={() => setday({...day, wed:!day.wed})}></Button>
                </View>
                <View style={day.thu ? styles.circleclick : styles.circle}>
                    <Button title="목" style={styles.font} color='black' onPress={() => setday({...day, thu:!day.thu})}></Button>
                </View>
            </View>
            <View style={styles.week2}>
                <View style={day.fri ? styles.circleclick : styles.circle}>
                    <Button title="금" style={styles.font} color='black' onPress={() => setday({...day, fri:!day.fri})}></Button>
                </View>
                <View style={day.sat ? styles.circleclick : styles.circle}>
                    <Button title="토" style={styles.font} color='black' onPress={() => setday({...day, sat:!day.sat})}></Button>
                </View>
                <View style={day.sun ? styles.circleclick : styles.circle}>
                    <Button title="일" style={styles.font} color='black' onPress={() => setday({...day, sun:!day.sun})}></Button>
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
                <View>
                    <View style={styles.set}>
                        <Text style={styles.font}>시간 설정: </Text><TextInput style={styles.input} onChangeText={time => setday({...day, time})}></TextInput>
                        <Text> 시  </Text><TextInput style={styles.input} onChangeText={minute => setday({...day, minute})}></TextInput><Text> 분</Text>    
                    </View>
                    <Text>ex&#41; 오후 1시 11분에 경우 13시 11분</Text>
                </View>
                <View style={styles.set}>
                    <Text style={styles.font}>추천하는 양:  {sug}g</Text>
                </View>
                <View>
                    <View style={styles.set}>
                        <Text style={styles.font}>설정한 양: </Text><TextInput style={styles.input} onChangeText={food => setday({...day, food})}></TextInput><Text> g</Text>
                    </View>
                    <Text>ex&#41; g단위로 적어주세요(숫자만 입력!)</Text>
                </View>
            </View> 
        </KeyboardAwareScrollView>
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
        textAlign: 'center',
        marginTop: 5,
        marginBottom: 5,
    },
    container: {
        marginTop: 70,
        marginLeft: 10,
        height: 300,
        flexDirection: 'column',
        justifyContent: 'space-around'
    }, 
    font: {
        fontSize: 16,
    }, 
    input: {
        width: 50,
        borderWidth: 1,
        borderRadius: 5,
        justifyContent: 'center',
        textAlign: 'center'
    },    
    circleclick: {
        width: 50,
        height: 50,
        backgroundColor: 'white',
        justifyContent: 'center',
        textAlign: 'center',
        marginTop: 5,
        marginBottom: 5,
        borderWidth: 1,
        borderRadius: 100
    },
    con: {
        width: 300,
        fontSize: 16
    },
    set: {
        display: 'flex',
        flexDirection: 'row',
        marginBottom: 5
    }
})