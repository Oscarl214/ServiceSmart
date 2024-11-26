import React, { useState } from 'react';
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle,
  TextInputProps,
  Button,
} from 'react-native';

import { useTheme,Layout } from '@ui-kitten/components';
const login = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    setName('');
    setEmail('');
  };

  const theme=useTheme()


  return (
    <Layout style={{ flex: 1, backgroundColor: theme['color-basic-800'] }}>

      <View style={styles.form}>
        <Text style={styles.heading}>
          Login
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Name"
          onChangeText={(text) => setName(text)}
          value={name}
        />
        <TextInput
          style={[styles.input,
            {
              borderColor: theme['color-primary-800'], 
            },]}
          placeholder="Email"
          onChangeText={(text) => setEmail(text)}
          value={email}
          keyboardType="email-address"
        />
        <Button title="Submit" onPress={handleSubmit} />
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  heading: {
   display: 'flex',
   justifyContent: 'center',
   color: 'white',
   marginBottom: 4
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  form: {
    flex: 1,
    backgroundColor: 'primary-color-100',
    justifyContent: 'center',
    height: 'auto',
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: 'color-primary-800',
    padding: 10,
    marginBottom: 10,
  },
});

export default login;
