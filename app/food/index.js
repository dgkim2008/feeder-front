import { StyleSheet, Text, View, Switch, Button} from "react-native";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'  
import React, {useState} from 'react';
import { AntDesign } from '@expo/vector-icons';
import {Link} from 'expo-router'
import ConD from "./Cont";
import { initDatabaseConfig, queryDB } from "autofeeder-front/lib/db.js"; 
import { useEffect } from "react";


export default function Page() {
    const DBInstance = initDatabaseConfig();
    const [loading, setLoading] = useState(false);
    const initFun = async () => {
        let timeset_data = await queryDB(`select * from timeset`, DBInstance);
        let num = timeset_data.rows['_array'].length;
        let arr = []
        const tempData = []
        for(let i = 0; i < num; i++) {
            arr = timeset_data.rows['_array']
            tempData.push({id: arr[i].timesetId, time: arr[i].time, min: arr[i].minute, amount: arr[i].food})
        }
        setData(tempData);
        setLoading(true)
    };
    useEffect(() => {
        initFun();
    }, [])
    const [data, setData] = useState([])

    const [del, setDel] = useState(null);

    useEffect(() => {
        if(!del || !loading)return
        const delSomething = async () => {
            setLoading(false);
            await queryDB(`delete from timeset where timesetId = ${del.id}`, DBInstance)
            setDel(null);
            await initFun();
        }
        delSomething()
    }, [del])
    return (
        <KeyboardAwareScrollView>
            <View style={styles.main}>
                <View style={styles.pluscontainer}>
                    <AntDesign name="pluscircleo" size={20} color="black">
                        <Link style={styles.plus} href="/timeset"> 추가</Link>
                    </AntDesign>
                </View>
                <ConD data={data} onRemove={(data) => setDel(data)}></ConD>
            </View>
        </KeyboardAwareScrollView>
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