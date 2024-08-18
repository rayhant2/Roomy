import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Image, Platform, View, TextInput, SafeAreaView, Button, Pressable, Text, ImageBackground, Dimensions } from 'react-native';
import React, { useRef, useState } from 'react';
import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

const PrivacyAccountScreen = () => {
    const [pass, onChangePass] = React.useState('');
    const firstName = 'Tahseen';
    const lastName = 'Rayhan';
    const birthday = '01/01/2001';
    const email = 'seen.rayhan@gmail.com';


    return (
        <View style={{
        height: '100%',
        padding: 40,
        marginTop: 20,
        backgroundColor: 'white'
    }}>
        <SafeAreaView style={{flexDirection: 'row', gap:120, alignItems: 'center', justifyContent: 'center',}}>

            <Image source={require('@/assets/images/logo_official.png')} style={{
                    height: 75,
                    width: 75,
                    marginVertical: 10 
                }}/>
            <SafeAreaView style={{flexDirection:'row', gap:20, alignContent:'center', justifyContent: 'center'}}>
                <Pressable>
                    <Ionicons name='search-outline' style={{fontSize: 45}}/>
                </Pressable>
                <Pressable>
                    <Ionicons name='mail-outline' style={{fontSize: 45}}/>
                </Pressable>
            </SafeAreaView>


        </SafeAreaView>

        <View style={{marginVertical: 10}}>
            <ThemedText type='title' style={styles.welcome}>Privacy & Account</ThemedText>
        </View>


        <View style={{rowGap: 35, margin: 10, justifyContent: 'space-evenly'}}>

            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={styles.textformat}>First Name:</Text>
                <Text style={styles.textformat}>{firstName}</Text>            
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={styles.textformat}>Last Name:</Text>
                <Text style={styles.textformat}>{lastName}</Text>            
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={styles.textformat}>Birthday:</Text>
                <Text style={styles.textformat}>{birthday}</Text>            
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={styles.textformat}>Email:</Text>
                <Text style={styles.textformat}>{email}</Text>            
            </View>
        </View>

        <View style={styles.line} />

        <View style={{flexDirection: 'row', gap: 8, alignItems: 'center', margin: 10}}>
            <ThemedText type='defaultSemiBold' style={{fontSize: 14}}>Something look wrong?</ThemedText>
            <ThemedText type='link' style={{fontWeight: 'bold', color: '#ccb800', fontSize: 14}}>Contact us</ThemedText>
        </View>


        <View style={styles.container}>

            <Image source={require('@/assets/images/menubar.png')} 
                style={styles.bottomImage}/>

        </View>

    </View>


    );
};


const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  welcome: {
    flexDirection: 'row',
    height: 50,
    width: 300,
    fontSize: 25,
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
    textAlign: 'center'
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
  container: {
        flex: 1,
        justifyContent: 'flex-start', // Ensures content starts from the top
        alignItems: 'center'
    },
    bottomImage: {
        position: 'absolute',
        bottom: 0,
        width: Dimensions.get('screen').width,
        height: 30,
    },
    textformat: {
        fontWeight: 'medium',
        fontSize: 17
    },
    line: {
        borderBottomColor: 'black',
        borderBottomWidth: 2,
        marginTop: 30
    }
});


export default PrivacyAccountScreen;