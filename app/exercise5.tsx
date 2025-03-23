import React, { useState } from "react";
import { 
  View, 
  Text, 
  TextInput, 
  Button, 
  StyleSheet, 
  TouchableOpacity, 
  Image 
} from "react-native";
import * as ImagePicker from "expo-image-picker";

export default function exercise5() {
  const [image, setImage] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Register</Text>
        <Text style={styles.description}>Create your account</Text>

        {/* Image Picker */}
        <TouchableOpacity onPress={pickImage} style={styles.imagePicker}>
          {image ? (
            <Image source={{ uri: image }} style={styles.image} />
          ) : (
            <Text>Select Image</Text>
          )}
        </TouchableOpacity>

        {/* Text Inputs */}
        <TextInput 
          style={styles.input} 
          placeholder="Name" 
          value={name} 
          onChangeText={setName} 
        />
        <TextInput 
          style={styles.input} 
          placeholder="Email" 
          keyboardType="email-address" 
          value={email} 
          onChangeText={setEmail} 
        />
        <TextInput 
          style={styles.input} 
          placeholder="Password" 
          secureTextEntry 
          value={password} 
          onChangeText={setPassword} 
        />

        {/* Register Button */}
        <Button title="Register" color="pink" onPress={() => alert("Registered!")} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "pink",
    padding: 20,
  },
  card: {
    padding: 60,
    backgroundColor: "#ffffff",
    borderRadius: 10,
    elevation: 8,
    width: "85%",
    maxWidth: 400,
    minWidth: 300,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
    marginBottom: 15,
    color: "#333",
    textAlign: "center",
  },
  description: {
    fontSize: 16,
    marginBottom: 25,
    color: "#555",
    textAlign: "center",
  },
  imagePicker: {
    width: 100,
    height: 100,
    backgroundColor: "#ddd",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginBottom: 20,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  input: {
    height: 45,
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 18,
    paddingLeft: 15,
    fontSize: 16,
    color: "#333",
    width: "100%",
  },
});

