import { View, Text, Button } from "react-native";
import React from "react";
import styles from "./styles";

const Settings = ({ navigation }) => {
  React.useEffect(() => {
    return () => {
      navigation.setOptions({ title: "Settings" });
    };
  }, []);

  return (
    <View style={styles.container}>
      <Text>Settings Screen</Text>
      <Button title="Home" onPress={() => navigation.navigate("Home")} />
    </View>
  );
};

export default Settings;
