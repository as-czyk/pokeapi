import { CloudApi } from "@/cloud/CloudApi";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";

export default function PokemonLoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const handleLogin = async () => {
    try {
      const response = await CloudApi.login(email, password);

      if (response.user) {
        const entries = await CloudApi.getPokeDexEntries(response.user.uid);
        console.log(entries);
        router.push("/list");
      }
    } catch (e) {
      console.log("Login failed:", e);
    }
  };

  return (
    <View className="flex-1 bg-yellow-100 p-6 justify-center">
      <View className="items-center mb-8">
        <Image
          source={{
            uri: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
          }}
          className="w-40 h-40"
        />
        <Text className="text-3xl font-bold text-blue-600 mt-4">
          Pokémon Login
        </Text>
      </View>

      <View className="bg-white rounded-2xl p-6 shadow-md">
        <TextInput
          className="bg-red-100 rounded-full px-4 py-2 mb-4 text-gray-800"
          placeholder="Email"
          placeholderTextColor="#9CA3AF"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TextInput
          className="bg-blue-100 rounded-full px-4 py-2 mb-6 text-gray-800"
          placeholder="Password"
          placeholderTextColor="#9CA3AF"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <TouchableOpacity
          className="bg-green-500 rounded-full py-3 items-center"
          onPress={handleLogin}
        >
          <Text className="text-white font-bold text-lg">Login</Text>
        </TouchableOpacity>
      </View>

      <Text className="text-center mt-6 text-gray-600">
        Gotta catch 'em all!
      </Text>
    </View>
  );
}
