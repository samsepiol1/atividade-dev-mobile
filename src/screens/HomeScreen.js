import React, { useState } from 'react';
import { View, Text, Button, StyleSheet} from 'react-native';

const HomeScreen = () => {
  const [randomNumbers, setRandomNumbers] = useState([]);

  // Solução de Fisher-Yates para repetição de números aleatórios
  const generateRandomNumbers = () => {
    const numbers = Array.from({ length: 60 }, (_, index) => index + 1); // Cria um array com os números de 1 a 60
    for (let i = numbers.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1)); // Seleciona um índice aleatório entre 0 e i
      [numbers[i], numbers[j]] = [numbers[j], numbers[i]]; // Troca os elementos nas posições i e j
    }
    const selectedNumbers = numbers.slice(0, 1); // Seleciona o primeiro número embaralhado
    // É possível ajustar a quantidade de números que é apresentado nada tela mudando o segundo parametro do slice

    setRandomNumbers(selectedNumbers);
  };

  return (
    <View style={styles.container}>
      
      <Button title="Gerar Números Aleatórios" onPress={generateRandomNumbers} />
      <View style={styles.numbersContainer}>
        {randomNumbers.map((number, index) => (
          <View key={index} style={styles.numberBall}>
            <Text style={styles.numberText}>{number}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  numbersContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  numberBall: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'blue', // Mudança da cor para azul
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
  },
  numberText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
});

export default HomeScreen;