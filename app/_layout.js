import { Link, Slot, usePathname } from "expo-router";
import { View, StyleSheet, Text} from "react-native";
import { AntDesign } from '@expo/vector-icons';

export default function Layout() {
    const path = usePathname();
    return <View style={styles.container}>
        <View style={styles.back}>
        { 
            (path !== '/' && path !== '/main') && 
            <AntDesign name="arrowright" size={16} color="black">
                <Link href={"/main"} style={styles.backtext}>BACK</Link>
            </AntDesign>
        }
        {/*
            (path !== '/') &&
            <View style={styles.titlebox}>
                <View style={styles.border}>
                    <Text style={styles.title}>멍냥 먹창고</Text>
                </View>
            </View>
            */
        }
        </View>
        <Slot />
    </View>
}

const styles = StyleSheet.create({
    container:{
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
        paddingRight:30
    },
    title: {
        fontWeight: 'bold',
        fontSize: 40,
        color: 'black'
        
    },
    titlebox: {
        width: 215,
        display: 'flex',
        alignItems: 'center',
    },
    border: {
        borderBottomWidth: 7,
    }
})