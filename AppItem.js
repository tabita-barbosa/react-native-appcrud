import React from 'react';
import { View, Text, TouchableOpacity} from 'react-native';
import {styles} from './styles';

export default function AppItem(props) {
    return(
      <View style={styles.containerItem}>
        <Text style={styles.textItem}>{props.item}</Text>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.deleteButton}>
            <Text style={styles.buttonText}>X</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.editButton}>
            <Text style={styles.buttonText}>Editar</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
}