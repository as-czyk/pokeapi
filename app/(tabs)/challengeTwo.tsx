import { FavPokemon } from "@/components/FavPokemon";
import { ProfilePicture } from "@/components/ProfilePicture";
import { StatsItem } from "@/components/StatsItem";
import { StyleSheet, Text, View } from "react-native";

export default function ChallengeTwoScreen() {
  const pokemon = [
    { id: 1, name: "Pikachu", type: "Electric" },
    { id: 2, name: "Charizard", type: "Fire" },
    { id: 3, name: "Bulbasaur", type: "Grass" },
  ];

  return (
    <View style={styles.container}>
      <ProfilePicture
        profilPicUrl="https://randomuser.me/api/portraits/men/37.jpg"
        name="John Doe"
      />
      <Text style={styles.description}>
        Loves to code in React Native and explore new technologies.
      </Text>

      <View style={styles.statsContainer}>
        <StatsItem statNumber={150} statLabel={"Posts"} />
        <StatsItem statNumber={3000} statLabel="Followers" />
        <StatsItem statNumber={300} statLabel="Followed" />
      </View>

      <Text style={styles.sectionHeader}>Favorite Pokemon:</Text>
      {pokemon.map((pokemon) => (
        <FavPokemon key={pokemon.id} name={pokemon.name} type={pokemon.type} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 20,
  },
  description: {
    textAlign: "center",
    marginTop: 10,
    marginBottom: 20,
  },
  statsContainer: {
    flexDirection: "row",
    marginTop: 20,
  },
  sectionHeader: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 30,
    marginBottom: 10,
  },
});
