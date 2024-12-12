import {
  StyleSheet,
  View,
  Text,
  Image,
  Button,
  ScrollView,
} from "react-native";

export default function ChallengeTwoScreen() {
  const pokemon = [
    { id: 1, name: "Pikachu", type: "Electric" },
    { id: 2, name: "Charizard", type: "Fire" },
    { id: 3, name: "Bulbasaur", type: "Grass" },
  ];

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: "https://randomuser.me/api/portraits/men/37.jpg" }}
        style={styles.profilePic}
      />
      <Text style={styles.name}>John Doe</Text>
      <Text style={styles.description}>
        Loves to code in React Native and explore new technologies.
      </Text>
      <Button title="Edit Profile" onPress={() => alert("Profile Editing")} />

      <View style={styles.statsContainer}>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>150</Text>
          <Text style={styles.statLabel}>Posts</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>2800</Text>
          <Text style={styles.statLabel}>Followers</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>300</Text>
          <Text style={styles.statLabel}>Following</Text>
        </View>
      </View>

      <Text style={styles.sectionHeader}>Favorite Pokemon:</Text>
      {pokemon.map((book) => (
        <View key={book.id} style={styles.bookItem}>
          <Text style={styles.bookTitle}>{book.name}</Text>
          <Text style={styles.bookAuthor}>{book.type}</Text>
        </View>
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
  profilePic: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 20,
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
  statItem: {
    flex: 1,
    alignItems: "center",
  },
  statNumber: {
    fontSize: 18,
    fontWeight: "bold",
  },
  statLabel: {
    fontSize: 14,
    color: "#888",
  },
  sectionHeader: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 30,
    marginBottom: 10,
  },
  bookItem: {
    backgroundColor: "#f0f0f0",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  bookTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  bookAuthor: {
    fontSize: 14,
    color: "#666",
  },
});
