import { StyleSheet, Text, View, Button ,TextInput} from "react-native";                                    

export default function Page() {
    return (
        <View style={styles.main}>
            <View style={styles.button}>
                <View style={styles.center}>
                    <Text>반려동물:</Text>
                </View>
                <Button title="고양이" onPress={() => console.log(this)}></Button>
                <Button title="강아지"></Button>
            </View>
            <View style={styles.box}>
                <TextInput style={styles.input} placeholder="반려동물의 이름을 입력해주세요" placeholderTextColor="black"></TextInput>
            </View>
            <View style={styles.box}>
                <TextInput style={styles.input} placeholder="생년월일 ex) 2023-01-01" placeholderTextColor="black"></TextInput>
            </View>
            <View style={styles.button}>
                <View style={styles.center}>
                        <Text>성별:</Text>
                </View>
                <Button title="남"></Button>                
                <Button title="여"></Button>
                </View>
            <View style={styles.box}>
                <TextInput style={styles.input} placeholder="몸무게 ex) 2.3kg" placeholderTextColor="black"></TextInput>
            </View>
            <View style={styles.button}>
                <View style={styles.center}>
                        <Text>중성화:</Text>
                </View>
                <Button title="했어요" color= 'red'></Button>
                <Button title="안했어요"></Button>
            </View>
            <View style={styles.box}>
                <TextInput style={styles.input} placeholder="사료 KG당 칼로리 ex) 110kcal" placeholderTextColor="black"></TextInput>
            </View>
            <View style={styles.button}>
                <View style={styles.center}>
                        <Text>비만여부:</Text>
                </View>
                <Button title="O"></Button>
                <Button title="X"></Button>
            </View>
            <View style={styles.button}>
                <View style={styles.center}>
                        <Text>저체중여부:</Text>
                </View>
                <Button title="O"></Button>
                <Button title="X"></Button>
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
        //borderBottomWidth: 1,
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
        //borderBottomWidth: 1,
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
    select: {
        color: 'red',
        fontWeight: 'bold'
    }
})
