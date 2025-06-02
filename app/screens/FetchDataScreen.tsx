import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import {
  ActivityIndicator,
  Button,
  View,
  ImageBackground,
  StyleSheet,
} from 'react-native';
import { RootStackParamList } from '..';

type Props = NativeStackScreenProps<RootStackParamList, 'FetchData'>;

export default function FetchDataScreen({ navigation }: Props) {
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  async function fetchUsers() {
    setLoading(true);
    try {
      const response = await fetch('https://fake-json-api.mock.beeceptor.com/users');
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      alert('Failed to fetch users');
    } finally {
      setLoading(false);
    }
  }

  return (
    <ImageBackground
      source={require('../../assets/images/bk.jpg')} // adjust path as needed
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <Button title="Fetch Users" onPress={fetchUsers} />
        {loading && <ActivityIndicator size="large" color="#0000ff" style={{ margin: 20 }} />}
        {users.length > 0 && (
          <Button
            title="Go to Data List"
            onPress={() => navigation.navigate('DataList', { users })}
          />
        )}
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    
  },
});
