import React, { useState } from 'react';
import { StyleSheet, Image, View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import RNPickerSelect from 'react-native-picker-select';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import Button from '@/components/ButtonSubmit';
import NumberSquare from '@/components/AccountStep';

export default function AccountStep3() {
  const navigation = useNavigation();
  const [institution, setInstitution] = useState('');
  const [academicTerm, setAcademicTerm] = useState('');

  const institutions = [
    { label: 'University of Toronto', value: 'University of Toronto' },
    { label: 'University of Waterloo', value: 'University of Waterloo' },
    { label: 'McMaster University', value: 'McMaster University' },
    { label: 'Western University', value: 'Western University' },
    { label: 'Queen\'s University', value: 'Queen\'s University' },
    // Add more institutions as needed
  ];

  const academicTerms = [
    { label: 'Year 1', value: 'Year 1' },
    { label: 'Year 2', value: 'Year 2' },
    { label: 'Year 3', value: 'Year 3' },
    { label: 'Year 4', value: 'Year 4' },
  ];

  return (
    <ThemedView style={styles.container}>
      <ThemedView style={styles.body}>
        <View style={styles.logoStepNumber}>
          <Image source={require('@/assets/images/logo_official.png')} style={styles.logo} />
          <NumberSquare number={3} width={125} height={125} style={{}} />
        </View>
        <ThemedText style={[styles.textMain, { textAlign: 'left' }]}>
          Where do you study?
        </ThemedText>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Institution</Text>
          <RNPickerSelect
            onValueChange={(value) => setInstitution(value)}
            items={institutions}
            style={pickerSelectStyles}
            placeholder={{ label: 'Select your institution', value: '' }}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Academic Term</Text>
          <RNPickerSelect
            onValueChange={(value) => setAcademicTerm(value)}
            items={academicTerms}
            style={pickerSelectStyles}
            placeholder={{ label: 'Select your academic term', value: '' }}
          />
        </View>
        <Button
          title="Submit"
          onPress={() => navigation.navigate('step4')}
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

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    height: 60,
    borderColor: '#ccc',
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 5,
    width: '86%',
  },
  inputAndroid: {
    height: 60,
    borderColor: '#ccc',
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 5,
    width: '86%',
  },
});