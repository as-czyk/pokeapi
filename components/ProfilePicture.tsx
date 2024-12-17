import { Text, Image, StyleSheet } from "react-native";

interface ProfilePictureInterface {
  profilPicUrl: string;
  name: string;
}

export const ProfilePicture = (props: ProfilePictureInterface) => {
  const { profilPicUrl, name } = props;
  return (
    <>
      <Image source={{ uri: profilPicUrl }} style={styles.profilePic} />
      <Text style={styles.name}>{name}</Text>
    </>
  );
};

const styles = StyleSheet.create({
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
});
