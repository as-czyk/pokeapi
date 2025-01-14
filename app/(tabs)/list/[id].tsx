import { Location, Type } from "@/types";
import { useLocalSearchParams } from "expo-router";
import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

const TypeTag = ({ type }: { type: Type }) => (
  <View
    style={[styles.typeTag, { backgroundColor: getTypeColor(type.type.name) }]}
  >
    <Text style={styles.typeText}>{type.type.name}</Text>
  </View>
);

const PokemonDetailsView = () => {
  const { id } = useLocalSearchParams();
  const pokemon = JSON.parse(id as unknown as string);

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: pokemon.imageUrl }} style={styles.image} />
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{pokemon.name}</Text>
        <View style={styles.typesContainer}>
          {pokemon.types.map((type: Type) => (
            <TypeTag key={type.slot} type={type} />
          ))}
        </View>
        <Text style={styles.info}>Height: {pokemon.height / 10} m</Text>
        <Text style={styles.info}>Weight: {pokemon.weight / 10} kg</Text>
        <ScrollView horizontal>
          {pokemon.locations.map((item: Location) => {
            return (
              <View key={item.url} style={styles.locationContainer}>
                <Text>{item.name}</Text>
              </View>
            );
          })}
        </ScrollView>
      </View>
    </ScrollView>
  );
};

const getTypeColor = (type: string) => {
  const colors: { [key: string]: string } = {
    normal: "#A8A878",
    fire: "#F08030",
    water: "#6890F0",
    electric: "#F8D030",
    grass: "#78C850",
    ice: "#98D8D8",
    fighting: "#C03028",
    poison: "#A040A0",
    ground: "#E0C068",
    flying: "#A890F0",
    psychic: "#F85888",
    bug: "#A8B820",
    rock: "#B8A038",
    ghost: "#705898",
    dragon: "#7038F8",
    dark: "#705848",
    steel: "#B8B8D0",
    fairy: "#EE99AC",
  };
  return colors[type] || "#888888";
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  image: {
    width: "100%",
    height: 300,
    resizeMode: "contain",
  },
  infoContainer: {
    padding: 20,
  },
  name: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 10,
    textTransform: "capitalize",
  },
  typesContainer: {
    flexDirection: "row",
    marginBottom: 10,
  },
  typeTag: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
    marginRight: 5,
  },
  typeText: {
    color: "white",
    fontWeight: "bold",
  },
  info: {
    fontSize: 16,
    marginBottom: 5,
  },
  cryButton: {
    backgroundColor: "#3498db",
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    alignItems: "center",
  },
  cryButtonText: {
    color: "white",
    fontWeight: "bold",
  },
  locationContainer: {
    backgroundColor: "#3498db",
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    alignItems: "center",
    marginRight: 10,
    height: 100,
    width: 100,
  },
});

export default PokemonDetailsView;
