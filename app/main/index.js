import { StyleSheet, Text, View } from "react-native";
import { AntDesign } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons';
import {Link} from 'expo-router'

export default function Page() {
    return (
        <View style={styles.main}>
            <View style={styles.linkbox}>
                <View style={styles.link}>
                    <AntDesign name="setting" size={24} color="black">
                        <Link style={styles.font} href="/find">  자동급식기찾기</Link>
                    </AntDesign>
                </View>
                <View style={styles.link}>
                    <MaterialCommunityIcons name="cctv" size={24} color="black">
                        <Link style={styles.font} href="/cctv">  CCTV</Link>
                    </MaterialCommunityIcons>
                </View>
                <View style={styles.link}>
                    <MaterialIcons name="pets" size={24} color="black">
                        <Link style={styles.font} href="/pet">  PET 설정</Link>
                    </MaterialIcons>
                </View>
                <View style={styles.link}>
                    <MaterialCommunityIcons name="food-drumstick" size={24} color="black">
                        <Link style={styles.font} href="/food">  배식설정</Link>
                    </MaterialCommunityIcons>
                </View>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    main:{
        flex: 1
    },
    linkbox: {
        flex: 1,
        height: 800,
        flexDirection:'column',
        justifyContent:"space-between"
    }, 
    link: {
        flex: 1,
        paddingLeft: 15,
    }, 
    font: {
        fontWeight: 'bold',
        fontSize: 20
    }
})