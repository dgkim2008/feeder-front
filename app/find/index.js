import { StyleSheet, Text, View } from "react-native";
import { AntDesign } from '@expo/vector-icons'; 
import React, {useState} from 'react';
import FindD from "./Find";

export default function Page() {
    let bluetooth = true;

    const [devices] = useState ([
        {
            id: 1,
            text: "멍냥 급식기"
        },
        {
            id: 2,
            text: "cctv"
        },
        {
            id: 3,
            text: '안녕'
        }
    ])
    

    return (
        <View style={styles.main}>
            <View style={styles.submain1}>
                <View style={styles.bluetoothbox}>
                    <Text style={styles.bluetooth}>{bluetooth===false? '블루투스를 연결해주세요': '블루투스가 연결되었습니다'}</Text>
                </View>
                <View style={styles.choicebox}>
                    <Text style={styles.choice}>{bluetooth===false? '': '자동급식기를 선택해주세요'}</Text>
                </View> 
            </View>
            <FindD devices={devices}></FindD>
        </View>
    );
}
const styles = StyleSheet.create({
    submain1:{
        height:200,
        flexDirection:'column',
        justifyContent:"space-between"
    },
    bluetooth: {
        color: 'red',
        fontWeight: 'bold',
        fontSize: 20,
    },
    choice: {
        fontWeight: 'bold',
        color: 'black',
        fontSize: 20,
    },
    bluetoothbox: {
        paddingLeft: 15
    }, 
    choicebox: {
        paddingLeft: 15
    }
})