import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Image, Platform, View, TextInput, SafeAreaView, Button, Pressable, Text, ImageBackground, Dimensions } from 'react-native';
import React, { useRef, useState } from 'react';
import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

const TabFourScreen = () => {
    const [pass, onChangePass] = React.useState('');
    const user = 'Tahseen';
    const windowHeight = Dimensions.get('window').height;

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
            <ThemedText type='title' style={styles.welcome}>Welcome back, {user}</ThemedText>
        </View>

        <View style={{
            borderBottomColor: 'black',
            borderTopWidth: 1,
            borderBottomWidth: 1,
            marginVertical: 15,
            height: '55%',
            justifyContent: 'center',
            alignContent: 'center',
        }}>

            <View style={{alignItems: 'center'}}>
                <ImageBackground 
                    source={require('@/assets/images/greyborder.png')} 
                    style={{
                        marginVertical: 10,
                        height: 110,
                        width: 203,
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: 15,
                    }}>

                    <Text>All done for now! Check back regularly for new potential roommates!</Text>

                </ImageBackground>

            </View>


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
});


export default TabFourScreen;