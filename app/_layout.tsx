import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Main" }} />
      <Stack.Screen name="teleop" options={{ title: "Teleop" }} />
      <Stack.Screen name="auto" options={{ title: "Autonomous" }} />
      <Stack.Screen name="summary" options={{ title: "Summary" }} />
    </Stack>
  );
}
