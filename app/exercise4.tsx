import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function exercise4() {
  
  return (
    <View style={{ padding: 20 }}>
      <Link href={"/state" as const}>
        <Text style={{ color: '#C71585', textDecorationLine: 'underline'}}>useState</Text>
      </Link>
      <Link href={"/effect" as const}>
        <Text style={{ color: '#C71585', textDecorationLine: 'underline'}}>useEffect</Text>
      </Link>
    </View>
  );
}

