import React, { useState } from 'react';
import {
  View,
  TextInput,
  Text,
  StyleSheet,
} from 'react-native';
import { useTheme, Layout, Button } from '@ui-kitten/components';
import { LinearGradient } from 'expo-linear-gradient';

const login = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  
  const handleSubmit = () => {
    setName('');
    setEmail('');
  };

  const theme = useTheme();

  return (
    <LinearGradient colors={['black', 'white']} style={styles.background}>
      <Layout style={styles.container}>
        <View style={[styles.form, { backgroundColor: theme['color-basic-100'] }]}>
          <Text style={styles.heading}>Login</Text>
          <TextInput
            style={styles.input}
            placeholder="Name"
            onChangeText={(text) => setName(text)}
            value={name}
          />
          <TextInput
            style={[
              styles.input,
              { borderColor: theme['color-primary-800'] },
            ]}
            placeholder="Email"
            onChangeText={(text) => setEmail(text)}
            value={email}
            keyboardType="email-address"
          />
          <Button onPress={handleSubmit}>Log in</Button>
        </View>
      </Layout>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  container: {
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center', 
  },
  heading: {
    fontFamily: 'sans',
    fontSize: 20,
    fontWeight: 'semibold',
    color: 'black',
    marginBottom: 10,
  },
  form: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 300, 
    height: 300, 
    padding: 20,
    borderRadius: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    marginBottom: 10,
    width: '100%', 
    borderRadius: 4,
  },
});

export default login;
