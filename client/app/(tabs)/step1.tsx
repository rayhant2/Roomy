import React, { useState } from 'react';
import { StyleSheet, Image, View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import Button from '@/components/ButtonSubmit';
import NumberSquare from '@/components/AccountStep';
import CustomInput from '@/components/CustomInput'; // Import the new CustomInput component

export default function AccountStep1() {
  const navigation = useNavigation();
  const [birthday, setBirthday] = useState('');

  return (
    <ThemedView style={styles.container}>
      <ThemedView style={styles.body}>
        <View style={styles.logoStepNumber}>
          <Image source={require('@/assets/images/logo_official.png')} style={styles.logo} />
          <NumberSquare number={1} width={125} height={125} style={{}} />
        </View>
        <ThemedText style={[styles.textMain, { textAlign: 'left' }]}>
          What's your birthday?
        </ThemedText>
        <CustomInput
          placeholder="Enter your birthday"
          value={birthday}
          onChangeText={setBirthday}
        />
        <Button
          title="Submit"
          onPress={() => navigation.navigate('step2')}
          style={styles.button}
        />
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    position: 'relative',
  },
  body: {
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  logoStepNumber: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
    padding: 15,
  },
  logo: {
    width: 125,
    height: 125,
    resizeMode: 'contain',
  },
  accsetup: {
    width: 125,
    height: 125,
    resizeMode: 'contain',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
    marginTop: 10,
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  textMain: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    padding: 20,
    fontSize: 36,
    lineHeight: 48,
    fontWeight: '800',
  },
  button: {
    // Add any specific styles for the button here if needed
  },
  groupPicture: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginTop: 20,
  },
});