import { StyleSheet, Text, View, Switch, Button} from "react-native";
import React, {useState} from 'react';
import { AntDesign } from '@expo/vector-icons';
import {Link} from 'expo-router'
import ConD from "./Cont";

export default function Page() {
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
                    <Text style={styles.plus}> 추가</Text>
                </AntDesign>
            </View>
            <ConD data={data}></ConD>
        </View>
    );
}
const styles = StyleSheet.create({
    main: {
        marginLeft: 20,
        marginRight: 20,
    },
    plus: {
        fontWeight: 'bold',
        fontSize: 20
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
    },
    delcon: {
        justifyContent: 'center'
    },
    del: {
        color: 'red',
        fontSize: 15
    }
})