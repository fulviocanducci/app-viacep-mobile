import React, { useState } from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text
} from 'react-native';

import { getViaCep } from '../services/api';

function Home() {
  const [zip, setZip] = useState('');
  const [icon, setIcon] = useState('search');

  async function loadZip() {
    /*setIcon('autorenew');
    setTimeout(() => {
      setIcon('search');
    }, 3000);*/
    const result = await getViaCep('19200000');
    console.log(result.data);
  }

  return (
    <>
      <View style={styles.searchForm}>
        <TextInput
          maxLength={8}
          keyboardType="numeric"
          placeholder="Buscar CEP"
          placeholderTextColor="#999"
          autoCapitalize="words"
          autoCorrect={false}
          style={styles.textInput}
          value={zip}
          onChangeText={text => setZip(text)}
        />
        <TouchableOpacity style={styles.loadButton} onPress={loadZip}>
          <MaterialIcons name={icon} size={20} color={'#fff'} />
        </TouchableOpacity>
      </View>
      <View style={styles.information}>
        <Text>Oi</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  searchForm: {
    top: 20,
    left: 20,
    right: 20,
    zIndex: 5,
    display: 'flex',
    flexDirection: 'row',
    position: 'absolute',
    flex: 1
  },
  information: {
    position: 'absolute',
    left: 20,
    right: 20,
    top: 80,
    flex: 2
  },
  textInput: {
    flex: 1,
    height: 50,
    backgroundColor: '#fff',
    color: '#333',
    borderRadius: 25,
    paddingHorizontal: 20,
    fontSize: 16,
    width: '99%',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 4,
      height: 4
    },
    elevation: 2
  },
  loadButton: {
    width: 50,
    height: 50,
    backgroundColor: '#357628',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 15
  }
});

export default Home;
