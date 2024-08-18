import React, { useState } from 'react';
import { StyleSheet, Image, View, Text, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import Button from '@/components/ButtonSubmit';
import NumberSquare from '@/components/AccountStep';

export default function AccountStep2() {
  const navigation = useNavigation();
  const [occupation, setOccupation] = useState('');
  const [annualSalary, setAnnualSalary] = useState('');
  const [hoursPerWeek, setHoursPerWeek] = useState('');

  return (
    <ThemedView style={styles.container}>
      <ThemedView style={styles.body}>
        <View style={styles.logoStepNumber}>
          <Image source={require('@/assets/images/logo_official.png')} style={styles.logo} />
          <NumberSquare number={2} width={125} height={125} style={{}} />
        </View>
        <ThemedText style={[styles.textMain, { textAlign: 'left' }]}>
          Ready to talk about work?
        </ThemedText>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Occupation</Text>
          <TextInput
            style={styles.input}
            placeholder="Ex) Software Engineer"
            value={occupation}
            onChangeText={setOccupation}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Annual Salary</Text>
          <TextInput
            style={styles.input}
            placeholder="Ex) 250,000 CAD"
            value={annualSalary}
            onChangeText={setAnnualSalary}
            keyboardType="numeric"
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}># of hours worked per week</Text>
          <TextInput
            style={styles.input}
            placeholder="Ex) 40"
            value={hoursPerWeek}
            onChangeText={setHoursPerWeek}
            keyboardType="numeric"
          />
        </View>
        <Button
          title="Submit"
          onPress={() => navigation.navigate('step3')}
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
  inputContainer: {
    position: 'relative',
    marginBottom: 20,
    paddingTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    position: 'absolute',
    top: 0,
    left: 10,
    backgroundColor: '#fff',
    paddingHorizontal: 5,
    fontSize: 14,
    color: '#000',
  },
  input: {
    height: 60,
    borderColor: '#ccc',
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 5,
    width: '86%',
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