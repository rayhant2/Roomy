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
    const age = 2024 - 2006;
    const pronouns = 'He/Him';
    const city = 'Waterloo,ON';
    const wantRoommate = true;
    const occupation = 'Student';
    const institution = 'WLU';
    const preferences = 'Single-gender, 1st year';



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

        <View style={{marginTop: 10}}>
            <ThemedText type='title' style={styles.welcome}>Roommate Profile</ThemedText>
            <ThemedText type='link' style={{color: '#ccb800'}}>Edit Profile</ThemedText>
        </View>

        <SafeAreaView style={{alignItems: 'center'}}>
            
            <Image source={require('@/assets/images/profileDefault.png')} style={{
                height: 170,
                width: 170,
                alignSelf: 'center'
            }}/>
        
            <View style={{flexDirection: 'row', alignItems: 'center', gap: 10, justifyContent: 'center'}}>
                <ThemedText type='title'>{firstName}</ThemedText>
                <ThemedText type='defaultSemiBold' style={{fontSize: 24}}>{age}</ThemedText>
            </View>
            
            <View style={{flexDirection: 'row', alignItems: 'center', gap: 5, justifyContent: 'center', margin: 4}}>
                <Text>{pronouns}</Text>
                <Ionicons name='ellipse' style={{fontSize: 8, marginHorizontal: 4}}/>
                <Text>{city}</Text>
            </View>
        
        </SafeAreaView>


        <View style={{rowGap: 25, margin: 15, marginTop: 35, justifyContent: 'space-evenly'}}>

            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={styles.textformat}>Status:</Text>
                <Text style={styles.textformat}>{wantRoommate ? 'Looking for roommate' : 'Not interested'}</Text>            
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={styles.textformat}>Occupation:</Text>
                <Text style={styles.textformat}>{occupation}</Text>            
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={styles.textformat}>Institution:</Text>
                <Text style={styles.textformat}>{institution}</Text>            
            </View>
        </View>

        <View style={{justifyContent: 'space-between', marginTop: 20, marginHorizontal: 15}}>
            <Text style={styles.textformat}>Roommate Preferences:</Text>
            <Text style={styles.preferences}>{preferences}</Text>            
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
    height: 30,
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
    },
    preferences: {
        fontWeight: 'medium',
        fontSize: 17,
        marginTop: 12,
        fontStyle: 'italic'
    }
});


export default PrivacyAccountScreen;