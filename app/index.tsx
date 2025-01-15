import React from "react";

import { FontAwesome5 } from "@expo/vector-icons";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { useRouter } from "expo-router";
import "../global.css";

export default function App() {
  const router = useRouter();
  return (
    <View className="flex-1 bg-yellow-400 bg">
      <View className="flex-1 items-center justify-center">
        <Image
          source={{
            uri: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
          }}
          className="w-40 h-40 mb-6"
        />
        <Text className="text-4xl font-bold text-blue-600 mb-2">Pokédex</Text>
        <Text className="text-lg text-blue-800 mb-8">Gotta catch 'em all!</Text>

        <View>
          <TouchableOpacity
            onPress={() => router.push("/login")}
            className="bg-red-500 py-3 px-8 rounded-full mb-4 flex-row items-center"
          >
            <FontAwesome5 name="sign-in-alt" size={20} color="white" />
            <Text className="text-white text-lg font-semibold ml-2">Login</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => router.push("/register")}
            className="bg-green-500 py-3 px-8 rounded-full mb-4 flex-row items-center"
          >
            <FontAwesome5 name="user-plus" size={20} color="white" />
            <Text className="text-white text-lg font-semibold ml-2">
              Register
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => router.push("/list")}
            className="bg-blue-500 py-3 px-8 rounded-full flex-row items-center"
          >
            <FontAwesome5 name="play" size={20} color="white" />
            <Text className="text-white text-lg font-semibold ml-2">
              Get Going!
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
