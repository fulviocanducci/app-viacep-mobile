import React, { useState } from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ProgressBarAndroid
} from 'react-native';

import { getViaCep } from '../services/api';
import Item from '../components/Item';

function Home() {
  const [zip, setZip] = useState('');
  const [icon, setIcon] = useState('search');
  const [zipcode, setZipCode] = useState(null);
  const [animating, setAnimating] = useState(false);
  async function loadZip() {
    setAnimating(true);
    setZipCode(null);
    setIcon('autorenew');
    const result = await getViaCep(zip);
    setZipCode(result.data);
    setIcon('search');
    setAnimating(false);
  }

  return (
    <View style={styles.container}>
      <View style={styles.search}>
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
      <View style={styles.items}>
        <Item value={zipcode === null ? '' : zipcode.cep} label="Cep" />
        <Item
          value={zipcode === null ? '' : zipcode.logradouro}
          label="Endereço"
        />
        <Item
          value={zipcode === null ? '' : zipcode.complemento}
          label="Complemento"
        />
        <Item value={zipcode === null ? '' : zipcode.bairro} label="Bairro" />
        <Item
          value={zipcode === null ? '' : zipcode.localidade}
          label="Cidade"
        />
        <Item value={zipcode === null ? '' : zipcode.uf} label="UF" />
        <Item value={zipcode === null ? '' : zipcode.unidade} label="Unidade" />
        <Item value={zipcode === null ? '' : zipcode.ibge} label="Ibge" />
        <Item value={zipcode === null ? '' : zipcode.gia} label="Gia" />
      </View>
      <View style={{ alignItems: 'center' }}>
        <ProgressBarAndroid animating={animating} />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  items: {
    marginTop: 80,
    left: 20,
    right: 20,
    zIndex: 5
  },
  container: {
    flex: 1
  },
  search: {
    top: 20,
    left: 20,
    right: 20,
    zIndex: 5,
    display: 'flex',
    flexDirection: 'row',
    position: 'absolute'
  },
  information: {
    top: 100,
    left: 20,
    right: 20,
    zIndex: 5,
    display: 'flex',
    flexDirection: 'row',
    position: 'absolute',
    flex: 1
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
