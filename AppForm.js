import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import {styles} from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function AppForm({navigation}) {
  const [descricao, setDescricao] = useState('');
  const [quantidade, setQuantidade] = useState(''); 

  function handleDescriptionChange(descricao){ setDescricao(descricao); }
  function handleQuantityChange(quantidade){ setQuantidade(quantidade); } 
  async function handleButtonPress(){   
    // console.log({id: new Date().getTime(), descricao, quantidade});   
    const listItem = {id: new Date().getTime(), descricao, quantidade: parseInt(quantidade)};
    let savedItems = [];
    const response = await AsyncStorage.getItem('items');

    if(response)savedItems = JSON.parse(response);
    savedItems.push(listItem);
    await AsyncStorage.setItem('items', JSON.stringify(savedItems));
    navigation.navigate("AppList");
  }

  return(
    <View style={styles.container}>
      <Text style={styles.title}Item para comprar></Text>
      <View style={styles.inputContainer}>
        <TextInput 
        style={styles.input}
        onChangeText={handleDescriptionChange}
        placeholder='o que esta faltando em casa'
        clearButtonMode='always'/>
        <TextInput 
        style={styles.input}
        onChangeText={handleQuantityChange}
        placeholder='digite a quantidade'
        keyboardType={'numeric'}
        clearButtonMode='always'/>
        <TouchableOpacity style={styles.button} onPress={handleButtonPress}>
          <Text styles={styles.buttonText}>Salvar</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="light" />
    </View>
  )
}