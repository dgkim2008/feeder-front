import { StyleSheet, Text, View } from "react-native";
import { AntDesign } from '@expo/vector-icons'; 
import {Link} from 'expo-router'

export default function Page() {
    let bluetooth = true;

    /*const [devices] = useState ([
        {
            id: 1,
            text: "멍냥 급식기"
        },
        {
            id: 2,
            text: "멍냥급식기"
        }
    ])
    */

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
            <View style={styles.submain2}>
                <View style={styles.feederbox}>
                    <Link style={styles.feedername} href="/main">멍냥 급식기</Link>
                    <Text>급식기번호: 123</Text>
                </View>
                <View style={styles.feederbox}>
                    <Link style={styles.feedername} href="/main">멍냥 급식기</Link>
                    <Text>급식기번호: 123</Text>
                </View>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    submain1:{
        height:200,
        flexDirection:'column',
        justifyContent:"space-between"
    },
    submain2: {
        height:150,
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
    },
    feederbox: {
        borderWidth: 1.5,
        borderRadius: 7,
        borderColor: 'black',
        width: 300,
        height: 70,
        display: 'flex',
        justifyContent: 'center',
        paddingLeft: 5,
        margin: 15,
    }, 
    feedername:{
        fontWeight: '400',
        fontSize: 16,
    }

})