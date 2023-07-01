import { Link, Slot, usePathname } from "expo-router";
import { View, StyleSheet } from "react-native";
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
})