import { PokeApi } from "@/server/PokeApi";
import { PokemonType } from "@/types";
import { useEffect, useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { router } from "expo-router";
import { BlurView } from "expo-blur";

interface PokemonCardProps {
  name: string;
}

export const PokemonCard = (props: PokemonCardProps) => {
  const [pokemon, setPokemon] = useState<PokemonType | null>(null);
  const isBlurred = true;

  const { name } = props;

  useEffect(() => {
    const get = async () => {
      const response = (await PokeApi.getSinglePokemon(
        name
      )) as unknown as PokemonType;
      setPokemon(response);
    };

    get();
  }, []);

  if (!pokemon) return null;

  return (
    <TouchableOpacity
      onPress={() =>
        router.push({
          pathname: "/list/[id]",
          params: {
            id: JSON.stringify(pokemon),
          },
        })
      }
    >
      <View style={styles.pokemonCard}>
        <Image source={{ uri: pokemon.imageUrl }} style={styles.image} />
        <Text style={styles.name}>{pokemon.name}</Text>
        <Text style={styles.details}>Height: {pokemon.height / 10} m</Text>
        <Text style={styles.details}>Weight: {pokemon.weight / 10} kg</Text>
        {isBlurred && <BlurView intensity={20} style={styles.blurOverlay} />}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  pokemonCard: {
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
    backgroundColor: "#f0f0f0",
    borderRadius: 8,
    elevation: 3,
    padding: 10,
  },

  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  details: {
    fontSize: 16,
    color: "#666",
  },
  blurOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1,
  },
});
