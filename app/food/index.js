import { StyleSheet, Text, View, Switch, Button} from "react-native";
import React, {useState} from 'react';
import { AntDesign } from '@expo/vector-icons';
import {Link} from 'expo-router'
import ConD from "./Cont";
import { initDatabaseConfig, queryDB } from "autofeeder-front/lib/db.js"; 
import { useEffect } from "react";


export default function Page() {
    const DBInstance = initDatabaseConfig();
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        const initFun = async () => {
            let timeset_data = await queryDB(`select * from timeset`, DBInstance);
            //let num = timeset_data.rows['_array'][data.id].timesetId
            let num = 0
            /*while(true) {
                if(timeset_data.rows['_array'][num].timesetId !== 'undefined') {
                    console.log(num)
                    num = num + 1;
                } else {
                    console.log('while문이 종료')
                    break;
                }
            }
            */

            setLoading(true)
        };
        initFun();
    }, [])
    const [data] = useState ([
        {   
            id: 0,
            time: "d",
            day: "d",
            amount: "d",
        },
        /*{   
            id: 2,
            time: '12:00',
            day: '금요일',
            amount: '100g',
        }, 
        {
            id: 3,
            time: '11:00',
            day: '목',
            amount: '100g'
        }
        */
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