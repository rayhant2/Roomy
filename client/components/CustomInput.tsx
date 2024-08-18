import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Text } from 'react-native';

const CustomInput = ({ value, onChangeText }) => {
  const [month, setMonth] = useState('');
  const [day, setDay] = useState('');
  const [year, setYear] = useState('');
  const [focused, setFocused] = useState(false);

  const handleChange = (text, type) => {
    const cleaned = text.replace(/[^0-9]/g, '');

    if (type === 'month') {
      if (cleaned.length === 1 && parseInt(cleaned) > 1) {
        setMonth(`0${cleaned}`);
        this.dayInput.focus();
      } else if (cleaned.length === 2) {
        setMonth(cleaned);
        this.dayInput.focus();
      } else {
        setMonth(cleaned);
      }
    } else if (type === 'day') {
      if (cleaned.length === 1 && parseInt(cleaned) > 3) {
        setDay(`0${cleaned}`);
        this.yearInput.focus();
      } else if (cleaned.length === 2) {
        setDay(cleaned);
        this.yearInput.focus();
      } else {
        setDay(cleaned);
      }
    } else if (type === 'year') {
      setYear(cleaned.slice(0, 4));
    }

    onChangeText(`${month}/${day}/${year}`);
  };

  const handleFocus = () => {
    setFocused(true);
  };

  const handleBlur = () => {
    setFocused(false);
  };

  return (
    <View style={styles.inputContainer}>
      <View style={styles.inputWrapper}>
        <TextInput
          style={[styles.input, focused ? styles.focusedInput : styles.placeholderInput]}
          placeholder="MM"
          value={month}
          onChangeText={(text) => handleChange(text, 'month')}
          onFocus={handleFocus}
          onBlur={handleBlur}
          keyboardType="numeric"
          maxLength={2}
          ref={(input) => { this.monthInput = input; }}
        />
        <Text style={styles.separator}>/</Text>
        <TextInput
          style={[styles.input, focused ? styles.focusedInput : styles.placeholderInput]}
          placeholder="DD"
          value={day}
          onChangeText={(text) => handleChange(text, 'day')}
          onFocus={handleFocus}
          onBlur={handleBlur}
          keyboardType="numeric"
          maxLength={2}
          ref={(input) => { this.dayInput = input; }}
        />
        <Text style={styles.separator}>/</Text>
        <TextInput
          style={[styles.input, focused ? styles.focusedInput : styles.placeholderInput]}
          placeholder="YYYY"
          value={year}
          onChangeText={(text) => handleChange(text, 'year')}
          onFocus={handleFocus}
          onBlur={handleBlur}
          keyboardType="numeric"
          maxLength={4}
          ref={(input) => { this.yearInput = input; }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    marginVertical: 10,
    alignItems: 'center',
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    width: '86%',
    height: 70,
  },
  input: {
    flex: 1,
    textAlign: 'center',
    height: '100%',
  },
  separator: {
    fontSize: 18,
    color: '#aaa',
    marginHorizontal: 5,
  },
  placeholderInput: {
    color: '#aaa',
  },
  focusedInput: {
    color: '#000',
  },
});

export default CustomInput;