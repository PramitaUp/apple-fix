import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Index" }} />
      <Stack.Screen name="teleop" options={{ title: "Teleop" }} />
      <Stack.Screen name="auto" options={{ title: "Autonomous" }} />
    </Stack>
  );
}
