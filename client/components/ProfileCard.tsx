import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { ThemedText } from './ThemedText';

const ProfileCard = () => {
    const university = 'University of Toronto';
    const firstName = "Tahseen";
    const pronouns = 'He/Him';
    const age = 18;
    const room = 'Single-gender';
    const faith = 'Christianity';

    const overlayImages = {
        'McMaster University': require('@/assets/images/maskMAC.png'),
        'Queens University': require('@/assets/images/maskQU.png'),
        'Toronto Metropolitan University': require('@/assets/images/maskTMU.png'),
        'University of Ottawa': require('@/assets/images/maskUO.png'),
        'University of Toronto': require('@/assets/images/maskUOFT.png'),
        'University of Waterloo': require('@/assets/images/maskUW.png'),
        'Western University': require('@/assets/images/maskUWO.png'),
        'Wilfrid Laurier University': require('@/assets/images/maskWLU.png'),
    };

    return (
        <View style={styles.container}>
            <Image 
                source={require('@/assets/images/profileDefaultSquare.png')} 
                style={styles.image}
            />
            <View style={styles.fillSpace} />
            <Image 
                source={overlayImages[university]} 
                style={[styles.image, styles.overlayImage]}
            />

            <View style={styles.textContainer}>
                <View style={styles.row}>
                    <ThemedText type='title' style={styles.text}>{firstName}</ThemedText>
                    <Text style={styles.text}>{age}</Text>
                    <Text style={styles.text}>{pronouns}</Text>
                </View>

                <Text style={styles.text}>{university}</Text>
                <Text style={styles.text}>Room Type: {room}</Text>
                <Text style={styles.text}>Faith: {faith}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: 300,
        height: 400, // Ensuring this matches the height of the overlay image
        margin: 20,
        alignItems: 'center',
        position: 'relative', // Allows overlaying of the images
    },
    image: {
        width: 300,
        height: 300, // Keeps the profile image size consistent
        position: 'absolute',
        top: 30, // Lower the profile image by adjusting this value
    },
    fillSpace: {
        width: 300,
        height: 50, // Adjust the height to maintain the layout
        backgroundColor: 'transparent', // Keeps it invisible
    },
    overlayImage: {
        position: 'absolute', // Positions the overlay image on top of the first
        top: 50,               // Aligns the overlay image with the profile image
        left: 0,
        height: 420,          // Ensures this matches the total height of the container
    },
    textContainer: {
        position: 'absolute',
        top: 350,  // Adjust this value to lower the text container
        left: 20,
        right: 0,
        gap: 2
    },
    row: {
        flexDirection: 'row',
        gap: 2,
        alignItems: 'center',
        marginBottom: 8,
    },
    text: {
        color: 'white',
        textAlign: 'left',
        marginLeft: 10,
    },
});


export default ProfileCard;
