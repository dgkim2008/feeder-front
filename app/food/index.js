import { StyleSheet, Text, View, Switch} from "react-native";
import React, {useState} from 'react';
import { AntDesign } from '@expo/vector-icons';
import {Link} from 'expo-router'

export default function Page() {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    return (
        <View style={styles.main}>
            <View>
                <AntDesign name="pluscircleo" size={20} color="black">
                    <Link style={styles.plus} href="/timeset"> 추가</Link>
                </AntDesign>
            </View>
            <View>
                <View>
                    <View>
                        <Text>시간 설정</Text>
                        <Text>요일/양</Text>
                    </View>
                    <Switch
                    trackColor={{false: '#767577', true: '#81c147'}}
                    thumbColor={'white'}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                    ></Switch>
                </View>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    main: {
        marginLeft: 20,
    },
    plus: {
        fontWeight: 'bold'
    }
})