import { StyleSheet, Text, View, Button ,TextInput, ScrollView} from "react-native";     
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'                               
import React, {useState} from 'react';
import { initDatabaseConfig, queryDB } from "autofeeder-front/lib/db.js"; 
import { useEffect } from "react";
export default function Page() {
    const DBInstance = initDatabaseConfig();
    const [info, setInfo] = useState({
        type:"cat",
        name:"",
        date:"",
        gen:"M",
        weight:"",
        neutered:0,
        feed:"",
        obesity:-1,
    });
    const [loading, setLoading] = useState(false);
    const ACTIVE = "red";
    const DEACTIVE = "blue";
    let check
    
    useEffect(() => {
        const initFun = async () => {
            await queryDB(`create table if not exists petas
            (
            petasId INTEGER PRIMARY KEY AUTOINCREMENT,
            species TEXT,
            name TEXT,
            birth TEXT,
            gender TEXT, 
            weight TEXT, 
            neutered INTEGER, 
            calorie TEXT, 
            weightchoice INTEGER
            )`, DBInstance);
            let pet_data = await queryDB(`select * from petas`, DBInstance);
            
            //console.log(pet_data.rows['_array'][0])
            if(pet_data.rows['_array'][0] == undefined) {
                check = false
            } else {
                check = true
                info.type = pet_data.rows['_array'][0].species;
                info.name = pet_data.rows['_array'][0].name;
                info.date = pet_data.rows['_array'][0].birth;
                info.gen = pet_data.rows['_array'][0].gender; // M과 F
                info.weight = `${pet_data.rows['_array'][0].weight}`;
                info.neutered = pet_data.rows['_array'][0].neutered;
                info.feed = `${pet_data.rows['_array'][0].calorie}`;
                info.obesity = pet_data.rows['_array'][0].weightchoice;
            }
            
            setLoading(true)
        };
        initFun();
    }, [])
    return (
        <KeyboardAwareScrollView>
            <View style={styles.main}>
                <View style={styles.save}> 
                    <Button title="값 저장하기" onPress={() => {
                        if(check === false) {
                            queryDB(`insert into petas(species,name,birth,gender,weight,neutered,calorie,weightchoice) 
                            values('${info.type}','${info.name}','${info.date}','${info.gen}','${info.weight}','${info.neutered}','${info.feed}','${info.obesity}')`, DBInstance);
                            queryDB("select * from petas", DBInstance).then(v => console.log(v.rows));
                        } else {
                            queryDB(`update petas set species = '${info.type}', name = '${info.name}', birth = '${info.date}',
                            gender = '${info.gen}', weight = '${info.weight}', neutered = '${info.neutered}', calorie = '${info.feed}', weightchoice = '${info.obesity}'
                            where petasId = 1`, DBInstance);
                            queryDB("select * from petas", DBInstance).then(v => console.log(v.rows));
                        }
                    }}></Button>
                </View>
                <View style={styles.button}>
                    <View style={styles.center}>
                        <Text>반려동물:</Text>
                    </View>
                    <Button title="고양이" onPress={() => setInfo({...info, type:"cat"})} color={info.type === "cat" ? ACTIVE : DEACTIVE}></Button>
                    <Button title="강아지" onPress={() => setInfo({...info, type:"dog"})} color={info.type === "dog" ? ACTIVE : DEACTIVE}></Button>
                </View>
                <View style={styles.button}>
                    <TextInput style={styles.input} onChangeText={name => setInfo({...info, name})} placeholder={info.name === '' ? "반려동물의 이름을 입력해주세요" : info.name} placeholderTextColor="black"></TextInput>
                </View>
                <View style={styles.button}>
                    <TextInput style={styles.input} onChangeText={date => setInfo({...info, date})} placeholder={info.date === '' ? "생년월일 ex) 2023-01-01" : info.date} placeholderTextColor="black"></TextInput>
                </View>
                <View style={styles.button}>
                    <View style={styles.center}>
                            <Text>성별:</Text>
                    </View>
                    <Button title="남아" onPress={() => setInfo({...info, gen:"M"})} color={info.gen === 'M' ? ACTIVE : DEACTIVE}></Button>                
                    <Button title="여아" onPress={() => setInfo({...info, gen:"F"})} color={info.gen === 'F' ? ACTIVE : DEACTIVE}></Button>
                    </View>
                <View style={styles.box}>
                    <TextInput style={styles.input} onChangeText={weight => setInfo({...info, weight})} placeholder={info.weight === '' ? "몸무게 ex) 2.3 (kg단위)" : info.weight} placeholderTextColor="black"></TextInput>
                </View>
                <View style={styles.button}>                   
                    <View style={styles.center}>
                            <Text>중성화:</Text>
                    </View>
                    <Button title="했어요" onPress={() => setInfo({...info, neutered:0})} color={info.neutered === 0 ? ACTIVE : DEACTIVE}></Button>
                    <Button title="안했어요" onPress={() => setInfo({...info, neutered:1})} color={info.neutered === 1 ? ACTIVE : DEACTIVE}></Button>
                </View>
                <View style={styles.button}>
                    <TextInput style={styles.input} onChangeText={feed => setInfo({...info, feed})} placeholder={info.feed === '' ? "사료 KG당 칼로리 ex) 110 (kcal단위)" : info.feed} placeholderTextColor="black"></TextInput>
                </View>
                <View style={styles.button}>
                    <View style={styles.center}>
                            <Text style={styles.text}>체중 선택</Text>
                    </View>
                    <Button title="비만" onPress={() => setInfo({...info, obesity:-1})} color={info.obesity === -1 ? ACTIVE : DEACTIVE}></Button>
                    <Button title="보통" onPress={() => setInfo({...info, obesity:0})} color={info.obesity === 0 ? ACTIVE : DEACTIVE}></Button>
                    <Button title="저체중" onPress={() => setInfo({...info, obesity:1})} color={info.obesity === 1 ? ACTIVE : DEACTIVE}></Button>
                </View>
            </View>
        </KeyboardAwareScrollView>
    );
}
const styles = StyleSheet.create({
    main: {
        flex: 1,
        marginLeft: 40,
        marginBottom: 50
    },
    button: {
        width: 300, 
        flexDirection: 'row',
        justifyContent: 'space-between',
        textAlign: 'center',
        paddingBottom: 15,
        paddingTop: 15,
        height: 70
    },
    center: {
        display:'flex',
        justifyContent: 'center',
        textAlign: 'center'
    },
    boxlast: {
        height: 50,
        display:'flex',
        justifyContent: 'center',
        textAlign: 'center',
        width: 300,
        paddingBottom: 15,
        flex: 1
    }, 
    select: {
        color: 'red',
        fontWeight: 'bold'
    },
    input: {
        width: 300
    }, 
    save: {
        flex: 1,
        marginRight: 30,
    }
})
