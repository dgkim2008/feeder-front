import { Link, Slot, usePathname } from "expo-router";
import { View, StyleSheet, Text} from "react-native";
import { AntDesign } from '@expo/vector-icons';

export default function Layout() {
    const path = usePathname();
    return <View style={styles.container}>
        <View style={styles.back}>
        { 
            (path !== '/' && path !== '/main' && path !== '/timeset') && 
            <AntDesign name="arrowright" size={16} color="black">
                <Link href={"/main"} style={styles.backtext}>BACK</Link>
            </AntDesign>
        }
        
        </View>
        {
            (path !== '/') &&
            <View style={styles.titlebox}>
                <View style={styles.border}>
                    <Text style={styles.title}>멍냥 먹창고</Text>
                </View>
            </View>
        }
        <Slot />
    </View>
}

const styles = StyleSheet.create({
    container:{
        marginTop: 5,
        marginRight: 7,
        flex:1
    },
    backtext: {
        fontWeight: 'bold',
        fontSize: 16,   
        
    },
    back: {
        flexDirection: "row-reverse",
        height:80,
        alignItems:'center',
        paddingTop: 20
    },
    title: {
        fontWeight: 'bold',
        fontSize: 40,
        color: 'black'
        
    },
    titlebox: {
        width: 215,
        height: 150,
        alignItems: 'center',
    },
    border: {
        borderBottomWidth: 7,
    }
})