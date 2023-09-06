import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import AppItem from './AppItem';
import {styles} from './styles';



export default function AppList() {

  const [items, setItems] = useState([     
    {id: 1, quantidade: 5, descricao: "arroz" },     
    {id: 2, quantidade: 1, descricao: "feijão" },     
    {id: 3, quantidade: 0.5, descricao: "lentilha" },     
    {id: 4, quantidade: 1, descricao: "massa" },     
    {id: 5, quantidade: 1, descricao: "katchup" },     
    {id: 6, quantidade: 1, descricao: "queijo-ralado" } 
  ]);

  return(
    <View style={styles.containerList}>
      <StatusBar style="light" />
      <Text style={styles.titleList}>Lista de Compras</Text>
      <ScrollView
        style={styles.scrollContainer}
        contentContainerStyle={styles.itemsContainer}
      >
      {items.map(item => {
        return<AppItem key={item.id} id={item.id} item={item.quantidade + ' de ' + item.descricao} ></AppItem>
      })}
      </ScrollView>
    </View>
  )
}