import { View, StyleSheet, Text } from "react-native";

interface StatsItemProps {
  statNumber: number;
  statLabel: string;
}

export const StatsItem = (props: StatsItemProps) => {
  return (
    <View style={styles.statItem}>
      <Text style={styles.statNumber}>{props.statNumber}</Text>
      <Text style={styles.statLabel}>{props.statLabel}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
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
});
