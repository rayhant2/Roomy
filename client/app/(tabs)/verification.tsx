import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Image, Platform, View, TextInput, SafeAreaView, Pressable, Text } from 'react-native';
import React, { useRef, useState } from 'react';
import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { useNavigation } from '@react-navigation/native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

import Button from '@/components/ButtonLanding';

const TabFourScreen = () => {
    const [code, setCode] = useState<string[]>(['', '', '', '', '', '']);
    const inputRefs = useRef<(TextInput | null)[]>([]);

    const navigation = useNavigation();

    const handleInputChange = (text: string, index: number) => {
        if (/^\d$/.test(text)) {
            const newCode = [...code];
            newCode[index] = text;
            setCode(newCode);

            if (index < 5 && inputRefs.current[index + 1]) {
                inputRefs.current[index + 1]?.focus();
            }
        }
    };

    const handlePaste = (event: any) => {
        const pastedText = event.nativeEvent.text;
        if (/^\d{6}$/.test(pastedText)) {
            const newCode = pastedText.split('');
            setCode(newCode);
            inputRefs.current[5]?.focus();
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
                        ref={(ref) => inputRefs.current[index] = ref}
                        style={styles.input}
                        value={digit}
                        onChangeText={(text) => handleInputChange(text, index)}
                        keyboardType='numeric'
                        maxLength={1}
                        placeholder='_'
                        placeholderTextColor='black'
                    />
                ))}
            </View>
            <View style={styles.resendContainer}>
                <Text style={styles.resendText}>Didn't get the code?</Text>
                <Pressable>
                    <Text style={styles.resendLink}>Resend</Text>
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
    resendLink: {
        fontWeight: 'bold',
        color: 'black',
        textDecorationLine: 'underline',
        marginLeft: 5,
        fontSize: 18,
        position: 'relative',
        margin: 20,
    },
    buttonStyle: {
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
    button: {
        backgroundColor: '#FFD600', // Yellow color
        padding: 5,
        width: 300,
        height: 60, // Adjust height to match shadowBox height
        borderRadius: 0,
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    buttonText: {
        fontWeight: 'bold',
        fontSize: 16,
    },
});

export default TabFourScreen;