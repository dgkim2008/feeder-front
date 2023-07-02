import { StyleSheet, Text, View, Button ,TextInput} from "react-native";
import {Link} from 'expo-router'

export default function Page() {
    return (
        <View style={styles.main}>
            <View style={styles.button}>
                <View style={styles.center}>
                    <Text>반려동물:</Text>
                </View>
                <Button title="고양이" style={styles.buttoncolor}></Button>
                <Button title="강아지"></Button>
            </View>
            <View style={styles.box}>
                <TextInput style={styles.input}></TextInput>
            </View>
            <View style={styles.box}>
                
            </View>
            <View style={styles.box}>
                
            </View>
            <View style={styles.box}>
            
            </View>
            <View style={styles.box}>
                
            </View>
            <View style={styles.box}>
                
            </View>
            <View style={styles.box}>
            
            </View>
            <View style={styles.boxlast}>
                
            </View>
        </View>
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
        borderBottomWidth: 1,
    },
    center: {
        display:'flex',
        justifyContent: 'center',
        textAlign: 'center'
    },
    box: {
        height: 50,
        display:'flex',
        justifyContent: 'center',
        textAlign: 'center',
        width: 300,
        borderBottomWidth: 1,
        paddingBottom: 15,
        flex: 1
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
    input: {
        placeholder: '반려동물의 이름을 입력해주세요'
    }
})