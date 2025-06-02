// screens/DataListScreen.tsx
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import {
  FlatList,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { RootStackParamList } from '..';

type Props = NativeStackScreenProps<RootStackParamList, 'DataList'>;

export default function DataListScreen({ route }: Props) {
  const { users } = route.params;

  return (
    <ImageBackground
      source={require('../../assets/images/bk.jpg')} // Update path if needed
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <FlatList
          data={users}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Text style={styles.company}>{item.company?.name}</Text>
              <Text>{item.email}</Text>
            </View>
          )}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    padding: 10,
    
  },
  item: {
    marginBottom: 15,
    padding: 15,
    backgroundColor: '#f2f2f2',
    borderRadius: 8,
  },
  company: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 4,
  },
});
