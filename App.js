import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React,{useState} from 'react';

export default function App() {
  const [nome,setNome] = useState('Tomate');
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>{ nome}</Text>
      <StatusBar style="auto" />
      <Button title ='trocar sessão'  />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2BDC5B',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo:{
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },
  paragrafo:{
    fontSize: 12,
    color: '#fff'
  }
});
