import React from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';

const RandomNumberGenerator = ({ onPress }) => {
  return (
    <View style={styles.container}>
      <Button title="Gerar Número Aleatório" onPress={onPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
});

export default RandomNumberGenerator;