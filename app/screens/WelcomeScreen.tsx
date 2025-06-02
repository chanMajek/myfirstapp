import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import {
  Button,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { RootStackParamList } from '..';

type Props = NativeStackScreenProps<RootStackParamList, 'Welcome'>;

export default function WelcomeScreen(props: Props) {
  const { navigation } = props;

  return (
    <ImageBackground
      source={require('../../assets/images/background.jpg')} // Replace with your background imageassets\images\adaptive-icon.png
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <Image
          source={require('../../assets/images/mee.jpg')} // Replace with your personal image
          style={styles.profileImage}
        />
        <Text style={styles.title}>Welcome to My App</Text>
        <Button
          title="Go to Profile"
          onPress={() => navigation.navigate('Profile')}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.4)', 
    padding: 20,
    borderRadius: 16,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
    borderWidth: 2,
    borderColor: '#fff',
  },
  title: {
    fontSize: 24,
    color: '#fff',
    marginBottom: 20,
    fontWeight: 'bold',
  },
});
