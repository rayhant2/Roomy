import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Image, Platform, View, TextInput, SafeAreaView, Pressable, Text } from 'react-native';
import React, { useState, useRef } from 'react';
import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useNavigation } from '@react-navigation/native';

import Button from '@/components/ButtonLanding';

const TabFourScreen = () => {
    const [code, setCode] = useState(['', '', '', '', '', '']);
    const navigation = useNavigation();
    const inputRefs = useRef<TextInput[]>([]);

    const handleChange = (text: string, index: number) => {
        if (/^\d$/.test(text) || text === '') {
            const newCode = [...code];
            newCode[index] = text;
            setCode(newCode);

            if (text !== '' && index < code.length - 1) {
                inputRefs.current[index + 1].focus();
            } else if (text === '' && index > 0) {
                inputRefs.current[index - 1].focus();
            }
        }
    };

    const handleKeyPress = (e: any, index: number) => {
        if (e.nativeEvent.key === 'Backspace' && code[index] === '' && index > 0) {
            inputRefs.current[index - 1].focus();
        }
    };

    return (
        <View style={styles.container}>
            <Image source={require('@/assets/images/logo_official.png')} style={styles.logo} />
            <View style={styles.titleContainer}>
                <ThemedText type='title' style={styles.verifyTitle}>Verification</ThemedText>
                <ThemedText type='title' style={styles.verifyTitle}>Email Sent</ThemedText>
            </View>
            <ThemedText type='default' style={styles.instructionText}>
                Make sure you check your inbox for the verification email and enter the 6 digit code below:
            </ThemedText>
            <View style={styles.inputContainer}>
                {code.map((digit, index) => (
                    <TextInput
                        key={index}
                        ref={(el) => (inputRefs.current[index] = el!)}
                        style={styles.input}
                        onChangeText={(text) => handleChange(text, index)}
                        onKeyPress={(e) => handleKeyPress(e, index)}
                        value={digit}
                        placeholder='_'
                        keyboardType='numeric'
                        maxLength={1}
                        placeholderTextColor='black'
                    />
                ))}
            </View>
            <View style={styles.resendContainer}>
                <Text style={styles.resendText}>Didn't get the code?</Text>
                <Pressable>
                    <Text style={styles.resendButton}>Resend</Text>
                </Pressable>
            </View>
            <Button
                title="Get Started"
                onPress={() => navigation.navigate('mainpage')}
                style={styles.button}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: '100%',
        padding: 40,
        marginTop: 20,
        backgroundColor: 'white',
    },
    logo: {
        alignSelf: 'center',
        height: 100,
        width: 100,
        margin: 12,
    },
    titleContainer: {
        marginVertical: 10,
    },
    verifyTitle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: 5,
        height: 50,
        width: 300,
        bottom: -10,
        fontSize: 38,
        fontWeight: 'bold',
    },
    instructionText: {
        textAlign: 'center',
        margin: 10,
        fontWeight: 'condensedBold',
    },
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20,
    },
    input: {
        height: 50,
        width: 40,
        marginHorizontal: 7,
        marginVertical: 6,
        borderWidth: 1,
        padding: 10,
        borderColor: 'black',
        color: 'black',
        textAlign: 'center',
    },
    resendContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6,
        marginTop: 10,
        justifyContent: 'center',
    },
    resendText: {
        fontSize: 18,
    },
    resendButton: {
        fontWeight: 'bold',
        color: 'black',
        textDecorationLine: 'underline',
        marginLeft: 5,
        fontSize: 18,
        position: 'relative',
        margin: 20,
    },
    button: {
        backgroundColor: "#FFD600",
        color: 'white',
        height: 50,
        marginHorizontal: 14,
        marginVertical: 30,
        borderWidth: 3,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
    },
    buttonText: {
        fontWeight: 'bold',
        fontSize: 16,
    },
});

export default TabFourScreen;