import { StyleSheet, Text, View } from "react-native";
import { Link } from 'expo-router'
//import { initDatabaseConfig, queryDB } from "../lib/db";
//import { useEffect } from "react";
export default function Page() {  
  return (
    <View style={{
      flex: 1,
    }}>
      <View style={styles.container}>
        <Text style={styles.title}>멍냥</Text>
        <Link style={styles.title} href="/find">먹창고</Link>
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
    marginBottom: 100
  },
  title: {
    fontWeight: '700',
    fontSize: 55,
    color: 'black'
  }
});
