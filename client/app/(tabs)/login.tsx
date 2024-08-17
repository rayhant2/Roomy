import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Image, Platform, View, TextInput, SafeAreaView, Pressable, Text, ScrollView } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

import ButtonSignup from '@/components/ButtonSignup';

const TabThreeScreen = () => {
    const [name, onChangeName] = React.useState('');
    const [email, onChangeEmail] = React.useState('');
    const [pass, onChangePass] = React.useState('');
    const [confPass, onChangeConfPass] = React.useState('');

    const navigation = useNavigation();

    return (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
            <View style={styles.container}>
                <Image source={require('@/assets/images/logo_official.png')} style={styles.logo} />

                <ThemedView style={styles.loginTitle}>
                    <ThemedText type="title">Sign Up</ThemedText>
                </ThemedView>

                <SafeAreaView style={styles.safeArea}>
                    <View style={styles.inputWrapper}>
                        <TextInput
                            style={styles.input}
                            onChangeText={onChangeName}
                            value={name}
                            placeholder='First Name'
                            keyboardType='default'
                            placeholderTextColor='white'
                        />

                        <TextInput
                            style={styles.input}
                            onChangeText={onChangeEmail}
                            value={email}
                            placeholder='Email'
                            keyboardType='email-address'
                            placeholderTextColor='white'
                        />

                        <TextInput
                            style={styles.input}
                            onChangeText={onChangePass}
                            value={pass}
                            placeholder='Password'
                            keyboardType='visible-password'
                            placeholderTextColor='white'
                        />

                        <TextInput
                            style={styles.input}
                            onChangeText={onChangeConfPass}
                            value={confPass}
                            placeholder='Confirm Password'
                            keyboardType='visible-password'
                            placeholderTextColor='white'
                        />

                        <ButtonSignup
                            title="Get Started"
                            onPress={() => navigation.navigate('verification')}
                            style={styles.button}
                        />
                    </View>
                </SafeAreaView>

                <View style={styles.loginPrompt}>
                    <Text>Already have an account?</Text>
                    <Pressable>
                        <Text style={styles.loginLink}>Login</Text>
                    </Pressable>
                </View>

                <View style={styles.orContainer}>
                    <View style={styles.line} />
                    <Text style={styles.orText}>OR</Text>
                    <View style={styles.line} />
                </View>

                <Pressable style={styles.googleButton}>
                    <Image source={require('@/assets/images/yellow_google.png')} style={styles.googleIcon} />
                    <Text style={styles.googleButtonText}>Continue with Google</Text>
                </Pressable>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    scrollContainer: {
        flexGrow: 1,
    },
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
    loginTitle: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
        height: 50,
        bottom: -10,
    },
    safeArea: {
        backgroundColor: 'black',
        justifyContent: 'center',
        alignContent: 'center',
        marginTop: 30,
        marginBottom: 10,
        paddingBottom: 10,
    },
    inputWrapper: {
        marginVertical: 8,
    },
    input: {
        height: 50,
        marginHorizontal: 14,
        marginVertical: 6,
        borderWidth: 1,
        padding: 10,
        borderColor: 'white',
        color: 'white',
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
    loginPrompt: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    loginLink: {
        fontWeight: 'bold',
        color: '#FFD600',
        textDecorationLine: 'underline',
        marginLeft: 5,
    },
    orContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: 5,
    },
    line: {
        borderBottomColor: 'black',
        borderBottomWidth: 2,
        flex: 1,
    },
    orText: {
        marginHorizontal: 10,
        fontWeight: 'bold',
        fontSize: 20,
    },
    googleButton: {
        backgroundColor: 'black',
        height: 60,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 12,
    },
    googleIcon: {
        height: 35,
        width: 35,
        margin: 2,
        marginHorizontal: 10,
    },
    googleButtonText: {
        color: 'white',
        fontWeight: 'bold',
    },
});

export default TabThreeScreen;