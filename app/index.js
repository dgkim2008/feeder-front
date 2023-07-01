import { StyleSheet, Text, View } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router'

export default function Page() {
  return (
    <View style={{
      flex: 1,
      flexDirection: 'column',
    }}>
      <View style={styles.container}>
        <Text style={styles.title}>멍냥</Text>
        <Text style={styles.title}>먹창고</Text>
      </View>
      <View style={styles.container}>
        <View style={styles.titlecontainer}>
          <AntDesign name="plus" size={30} color="black">
            <Link style={styles.find} href="/find">자동급식기찾기</Link>
          </AntDesign>
        </View>
      </View>
      <View style={styles.container}>
        <Ionicons name="home" size={100} color="black" />
      </View>

    </View>
  );
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    padding: 24,
    backgroundColor: "white",
  },
  title: {
    fontWeight: '700',
    fontSize: 55,
    color: 'black'
  },
  titlecontainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    backgroundColor: "white",
    width: 260,
    height: 150,
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 20,
    padding: 0,

  },
  find: {
    fontWeight: '700',
    fontSize: 25,
    paddingBottom: 100,
    paddingTop: 100
  },
});
