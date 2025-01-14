import { Stack } from "expo-router";

export default function ListLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Pokemon List" }} />
      <Stack.Screen name="[id]" options={{ title: "Pokemon Detail View" }} />
    </Stack>
  );
}
