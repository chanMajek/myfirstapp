// screens/ProfileScreen.tsx
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { Button, ImageBackground, Text, TextInput, View, StyleSheet } from 'react-native';
import { RootStackParamList } from '..';

type Props = NativeStackScreenProps<RootStackParamList, 'Profile'>;

export default function ProfileScreen({ navigation }: Props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  return (
    <ImageBackground
      source={require('../../assets/images/bk.jpg')} // Adjust the path to your image
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <Text style={styles.title}>Update Profile</Text>
        <Text style={styles.label}>Name:</Text>
        <TextInput
          value={name}
          onChangeText={setName}
          placeholder="Enter your name"
          style={styles.input}
          placeholderTextColor="#ccc"
        />
        <Text style={styles.label}>Email:</Text>
        <TextInput
          value={email}
          onChangeText={setEmail}
          placeholder="Enter your email"
          keyboardType="email-address"
          style={styles.input}
          placeholderTextColor="#ccc"
        />
        <Button title="Save" onPress={() => alert(`Saved: ${name}, ${email}`)} />
        <View style={{ marginTop: 20 }}>
          <Button
            title="Go to Fetch Data"
            onPress={() => navigation.navigate('FetchData')}
          />
        </View>
      </View>
    </ImageBackground>
  );
}



const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
  },
  container: {
    padding: 20,
    backgroundColor: 'rgba(0,0,0,0.5)', // Optional: add a semi-transparent overlay for readability
    marginHorizontal: 20,
    borderRadius: 10,
  },
  title: {
    fontSize: 20,
    marginBottom: 10,
    color: '#fff',
    fontWeight: 'bold',
  },
  label: {
    color: '#fff',
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#fff',
    padding: 8,
    marginBottom: 15,
    color: '#fff',
    borderRadius: 5,
  },
});