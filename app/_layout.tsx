import { Stack } from 'expo-router';
const StackLayout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="/splash" options={{ title: '' }} />
      <Stack.Screen name="/login" options={{ title: '' }} />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
};

export default StackLayout;
