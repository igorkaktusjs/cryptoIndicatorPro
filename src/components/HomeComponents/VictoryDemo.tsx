import { View, Text, StyleSheet } from "react-native";
import { Pie, PolarChart } from "victory-native";

export function MyChart() {
  const data = DATA();
  const totalValue = data.reduce((sum, point) => sum + point.value, 0);
  const bitcoinData = data.find(point => point.label === "Bitcoin"); // For centering only Bitcoin

  return (
    <View style={{ height: 170 }}>
      <PolarChart data={data} labelKey={"label"} valueKey={"value"} colorKey={"color"}>
        <Pie.Chart
          style={{
            data: {
              // No fill color, just borders
              fill: "transparent", // Make the center transparent
              strokeWidth: 20, // Add a thick border around each section
              stroke: (datum) => datum.color, // Set the stroke (border) color from the data
            },
          }}
        />
      </PolarChart>

      {/* Centered Bitcoin Data */}
      <View style={styles.centerTextContainer}>
        {bitcoinData && (
          <>
            <Text style={styles.coinName}>{bitcoinData.label}</Text>
            <Text style={styles.coinPercentage}>
              {((bitcoinData.value / totalValue) * 100).toFixed(2)}%
            </Text>
          </>
        )}
      </View>
    </View>
  );
}

// Helper functions for demo purposes:
function randomNumber() {
  return Math.floor(Math.random() * 26) + 125; // Random values to simulate dominance
}

function generateRandomColor(): string {
  const randomColor = Math.floor(Math.random() * 0xffffff);
  return `#${randomColor.toString(16).padStart(6, "0")}`;
}

// Demo data representing Bitcoin, Ethereum, and others' dominance
const DATA = (numberPoints: number = 3): { value: number; color: string; label: string }[] => [
  { value: 60, color: "#f2a900", label: "Bitcoin" }, // Bitcoin
  { value: 15, color: "#3c3c3d", label: "Ethereum" }, // Ethereum
  { value: 25, color: "#28a745", label: "Others" }, // Others
];

const styles = StyleSheet.create({
  centerTextContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: [{ translateX: -80 }, { translateY: -80 }],
    justifyContent: "center",
    alignItems: "center",
    width: 160,
    height: 160,
  },
  coinName: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#fff",
    textAlign: "center",
  },
  coinPercentage: {
    fontSize: 14,
    color: "#fff",
    textAlign: "center",
  },
});
