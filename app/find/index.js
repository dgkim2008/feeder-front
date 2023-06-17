import { StyleSheet, Text, View } from "react-native";
import { AntDesign } from '@expo/vector-icons'; 

export default function Page() {
    let bluetooth = false;

    return (
        <View>
            <View>
                <AntDesign name="arrowright" size={16} color="black">
                    <Text>BACK</Text>
                </AntDesign>
            </View>

            <View>
                <Text>먹냥 먹창고</Text>
            </View>
            <View>
                <Text>{bluetooth===false? '블루투스를 연결해주세요': '블루투스가 연결되었습니다'}</Text>
            </View>
            
        </View>
    );
}
const styles = StyleSheet.create({

})