import { StyleSheet, Text, View, Switch,TextInput, Button } from "react-native";
import React, {useState} from 'react';
import {Link} from 'expo-router'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view' 
import { initDatabaseConfig, queryDB } from "autofeeder-front/lib/db.js"; 
import { useEffect } from "react";

export default function Page() {
    const [loading, setLoading] = useState(false);
    const DBInstance = initDatabaseConfig();
        useEffect(() => {
            const initFun = async () => {
                await queryDB(`create table if not exists timeset
                (
                timesetId INTEGER PRIMARY KEY AUTOINCREMENT,
                food INTEGER,
                repeat TEXT,
                time INTEGER,
                minute INTEGER,
                recommend INTEGER,
                mon TEXT,
                tue TEXT,
                wed TEXT, 
                thu TEXT,
                fri TEXT,
                sat TEXT,
                sun TEXT
                )`, DBInstance);
                setLoading(true)
                const pet_data =  await queryDB(`select * from petas`, DBInstance)
                //console.log(pet_data.rows['_array'][0].birth) //아래 database 접근 방법
                const pet_species = pet_data.rows['_array'][0].species;
                const pet_birth = pet_data.rows['_array'][0].birth;
                const pet_weight = pet_data.rows['_array'][0].weight;
                const pet_calorie = pet_data.rows['_array'][0].calorie; //음식 칼로리
                //const pet_neutered = pet_data.rows['_array'][0].neutered; //중성화 여부 0은 함, 1은 안함
                const pet_weightchoice = pet_data.rows['_array'][0].weightchoice; // 비만 여부 -1 비만, 0 정상, 1은 저체중
                //dfdfdlkfjdlk

                const pet_birth_year = `${pet_birth}`.slice(0,4)
                const pet_birth_month = `${pet_birth}`.slice(5,7)
                const pet_birth_date = `${pet_birth}`.slice(8,10)
                    
                if(pet_species === 'dog') {
                    RER =    pet_weight * 30 + 70
                    if(year === pet_birth_year && month - pet_birth_month < 4) {
                        constant = 3;
                    } else {
                        if(pet_weightchoice === -1) {
                            constant = 1;
                        } else {
                            constant = 2;
                        }
                    }
                }
                if(pet_species === 'cat') {
                    RER = pet_weight * 30 + 70
                    if(year === pet_birth_year && month - pet_birth_month < 4) {
                        constant = 3;
                    } else if(year === pet_birth_year && month - pet_birth_month >= 4 && month - pet_birth_month <= 6) {
                        constant = 2.5
                    } else if(year === pet_birth_year && month - pet_birth_month >= 7 && month - pet_birth_month <= 12) {
                        constant = 2
                    }
                    else {
                        if(pet_weightchoice === -1) {
                            constant = 0.8;
                        } else {
                            constant = 1.4;
                        }
                    }
                }
                
                DER = RER * constant
                SUG = Math.ceil(DER / pet_calorie * 1000) // 추천하는 배식량
                console.log(`추천 칼로리 양: ${DER}  추천하는 양: ${SUG}`)
                day.sug = SUG;
            }
            initFun();
        }, [])

    //const date_time = `${new Date()}` //2023-09-12T14:12:51.397Z
    const today = new Date()
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    //const date = today.getDate(); 

    let RER = 0;
    let constant = 0;
    let DER = 0;
    let SUG = 0;
    //(`${year}년${month}월${date}일`)


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
        food:0, 
        sug: 150
    });
    const [isEnabled, setIsEnabled] = useState(false); 
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    console.log('bluetooth')

    return (
        <KeyboardAwareScrollView style={styles.main}>
            <View>
                <Link style={styles.save} href='/food' onPress={() => {
                    queryDB(`insert into timeset(food, repeat, time, minute, recommend, mon, tue, wed, thu, fri, sat, sun) 
                    values('${day.food}', '${isEnabled}', '${day.time}', '${day.minute}', '${day.sug}', '${day.mon}', '${day.tue}' , '${day.wed}' , '${day.thu}'
                    , '${day.fri}' , '${day.sat}', '${day.sun}')`, DBInstance);
                    queryDB("select * from timeset", DBInstance).then(v => console.log(v.rows));
                }}>값 저장하기</Link>
            </View>
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
                    <Text style={styles.font}>추천하는 양:  {day.sug}g</Text>
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
    }, 
    save: {
        textAlign: 'center',
        fontSize: 20,
        color: 'red'
    }
})