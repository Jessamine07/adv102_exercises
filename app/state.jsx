import { useState } from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";

export default function State() {
  const [count, setCount] = useState(0);

  function handleButtonPress() {
    setCount((c) => c + 1);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.counterText}>{count}</Text>

      <TouchableOpacity style={styles.button} onPress={handleButtonPress}>
        <Text style={styles.buttonText}>Click Me</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: "center",
  },
  counterText: {
    fontSize: 100,
    fontWeight: "600",
  },
  button: {
    backgroundColor: "pink",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: "center",
    width: 200,
    marginTop: 20,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});
