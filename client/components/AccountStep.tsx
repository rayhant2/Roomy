import React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';

const NumberSquare = ({ number, width, height, style }) => {
  return (
    <View style={[styles.container, { width: width, height: height }, style]}>
      <Image
        source={require('@/assets/images/square-template.png')} // Replace with actual image path
        style={{ width: '100%', height: '100%' }}
      />
      <View style={styles.numberContainer}>
        <Text style={styles.number}>{number}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFD600',
    borderWidth: 0,
    borderColor: 'black',
  },
  numberContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  number: {
    fontSize: 48,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default NumberSquare;