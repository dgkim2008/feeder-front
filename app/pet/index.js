import { StyleSheet, Text, View, Button ,TextInput, ScrollView} from "react-native";     
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'                               
import React, {useState} from 'react';

export default function Page() {
    const [info, setInfo] = useState({
        type:"cat",
        name:"",
        date:"",
        gen:"M",
        weight:"",
        neutered:true,
        feed:"",
        obesity:-1,
    });
    const ACTIVE = "red";
    const DEACTIVE = "blue";
    return (
        <KeyboardAwareScrollView>
            <View style={styles.main}>
                <View style={styles.button}>
                    <View style={styles.center}>
                        <Text>반려동물:</Text>
                    </View>
                    <Button title="고양이" onPress={() => setInfo({...info, type:"cat"})} color={info.type === "cat" ? ACTIVE : DEACTIVE}></Button>
                    <Button title="강아지" onPress={() => setInfo({...info, type:"dog"})} color={info.type === "dog" ? ACTIVE : DEACTIVE}></Button>
                </View>
                <View style={styles.button}>
                    <TextInput style={styles.input} onChangeText={name => setInfo({...info, name})} placeholder="반려동물의 이름을 입력해주세요" placeholderTextColor="black"></TextInput>
                </View>
                <View style={styles.button}>
                    <TextInput style={styles.input} onChangeText={date => setInfo({...info, date})} placeholder="생년월일 ex) 2023-01-01" placeholderTextColor="black"></TextInput>
                </View>
                <View style={styles.button}>
                    <View style={styles.center}>
                            <Text>성별:</Text>
                    </View>
                    <Button title="남아" onPress={() => setInfo({...info, gen:"M"})} color={info.gen === 'M' ? ACTIVE : DEACTIVE}></Button>                
                    <Button title="여아" onPress={() => setInfo({...info, gen:"F"})} color={info.gen === 'F' ? ACTIVE : DEACTIVE}></Button>
                    </View>
                <View style={styles.box}>
                    <TextInput style={styles.input} onChangeText={weight => setInfo({...info, weight})} placeholder="몸무게 ex) 2.3 (kg단위)" placeholderTextColor="black"></TextInput>
                </View>
                <View style={styles.button}>                   
                    <View style={styles.center}>
                            <Text>중성화:</Text>
                    </View>
                    <Button title="했어요" onPress={() => setInfo({...info, neutered:true})} color={info.neutered === true ? ACTIVE : DEACTIVE}></Button>
                    <Button title="안했어요" onPress={() => setInfo({...info, neutered:false})} color={info.neutered === false ? ACTIVE : DEACTIVE}></Button>
                </View>
                <View style={styles.button}>
                    <TextInput style={styles.input} onChangeText={feed => setInfo({...info, feed})} placeholder="사료 KG당 칼로리 ex) 110 (kcal단위)" placeholderTextColor="black"></TextInput>
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
    }
})
