import {SafeAreaView,FlatList, StyleSheet,Image, Text, View,Button } from 'react-native';
import React,{useState,useEffect} from 'react';
import styled from 'styled-components/native';
import ListItem from './components/ListItem';
import { SAMPLE_DATA } from './assets/data/sampleData';
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleWrapper}>
        <Text style={styles.text}> Markets</Text>
      </View>
      <View style={styles.divider}>

      </View>
      <ListItem />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00008B',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    color: 'white',
    fontSize: '22px'
  },
  divider:{
    height: StyleSheet.hairlineWidth,
    backgroundColor: "#fff",
    marginHorizontal: 16,
    marginTop: 16,
  }
});