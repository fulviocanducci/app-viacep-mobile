import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function Item({ value, label }) {
  if (!value || value === '') {
    return null;
  }
  return (
    <View style={styles.main}>
      <Text style={styles.label}>{label || 'label'}</Text>
      <Text style={styles.separation}></Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    paddingTop: 10
  },
  label: {
    fontSize: 10,
    fontWeight: 'bold',
    fontStyle: 'italic'
  },
  value: {
    fontSize: 15
  },
  separation: {
    borderColor: '#C3C3C3',
    height: 1,
    borderWidth: 1,
    width: '88%',
    right: 0,
    left: 0,
    marginTop: 1,
    marginBottom: 2
  }
});

export default Item;
