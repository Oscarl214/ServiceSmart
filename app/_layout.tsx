import { Stack } from 'expo-router';
import { ApplicationProvider, Layout, Text } from '@ui-kitten/components';
import * as eva from '@eva-design/eva' 
import { default as theme } from './custom-theme.json';
const StackLayout = () => {
  return (
    <ApplicationProvider {...eva} theme={{ ...eva.dark, ...theme }}>

    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="splash" options={{ title: '' }} />
      <Stack.Screen name="login" options={{ title: '' }} />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
    </ApplicationProvider>
  );
};

export default StackLayout;
