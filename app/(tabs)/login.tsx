import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const login = () => {
  return (
    <View style={styles.container}>
      <Text>Login Page</Text>
      {/* Add your login form here */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});

export default login;
