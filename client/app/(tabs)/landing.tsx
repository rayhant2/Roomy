import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Image, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import Button from '@/components/ButtonLanding';

export default function TabTwoScreen() {
  const navigation = useNavigation();

  return (
    <ThemedView style={styles.container}>
      <ThemedView style={styles.body}>
        <ThemedView style={styles.logoContainer}>
          <Image source={require('@/assets/images/logo_official.png')} style={styles.logo} />
        </ThemedView>
        <ThemedText style={[styles.textMain, { textAlign: 'left' }]}>
          It's like tinder, but for finding the perfect roomates
        </ThemedText>

        <Button
          title="Get Started"
          onPress={() => navigation.navigate('login')}
          style={styles.button}
        />

        <Image source={require('@/assets/images/group_pic.png')} style={styles.groupPicture} />
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
    flex: 4,
    justifyContent: 'center',
    padding: 20,
  },
  logoContainer: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    padding: 20,
  },
  logo: {
    width: '40%', // Adjust width to 50% of the container
    height: undefined,
    aspectRatio: 1, // Maintain aspect ratio
    resizeMode: 'contain',
    marginTop: 75,
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
  button: {
    width: '100%', // Adjust width to 100% of the container
    aspectRatio: 320 / 62, // Maintain the aspect ratio of the button image
    resizeMode: 'contain', // Ensure the image scales proportionally
    marginTop: 20,
  },
  groupPicture: {
    width: '80%', // Adjust width to 80% of the container
    height: undefined,
    aspectRatio: 1, // Maintain aspect ratio
    resizeMode: 'contain',
    alignSelf: 'center',
    marginTop: 20,
  },
});