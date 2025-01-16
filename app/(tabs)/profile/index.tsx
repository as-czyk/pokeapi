import { CloudApi } from "@/cloud/CloudApi";
import { useUserStore } from "@/stores";
import { useRouter } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

export default function ProfilePage() {
  const router = useRouter();
  const { email } = useUserStore((state) => state);
  const handleLogout = async () => {
    try {
      await CloudApi.logout();
      router.push("/");
    } catch (e) {
      console.log("Logout failed:", e);
    }
  };

  return (
    <View>
      <Text>Currently logged In: {email}</Text>
      <TouchableOpacity
        className="bg-green-500 rounded-full py-3 items-center"
        onPress={handleLogout}
      >
        <Text className="text-white font-bold text-lg">Logout</Text>
      </TouchableOpacity>
    </View>
  );
}
