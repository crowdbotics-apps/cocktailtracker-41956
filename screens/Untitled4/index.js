import React from "react";
import { View, StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled4 = () => {
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#f0f0f1',
      padding: 10,
      position: 'relative',
      flex: 1
    }}><View style={styles.NSKlvcya}></View><View style={styles.GRWNVXJg}></View></ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  NSKlvcya: {
    height: 129,
    width: 0,
    backgroundColor: "#E4E4E4",
    borderRadius: 0,
    color: "#777777"
  },
  GRWNVXJg: {
    height: 136,
    width: 10,
    backgroundColor: "#E4E4E4",
    borderRadius: 0,
    color: "#777777"
  }
});
export default Untitled4;