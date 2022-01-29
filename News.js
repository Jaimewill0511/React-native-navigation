import { View, Text, Button } from "react-native";
import React from "react";
import styles from "./styles";

export default function News({ navigation, route }) {
  React.useEffect(() => {
    return () => {
      navigation.setOptions({ title: "News" });
    };
  }, []);

  return (
    <View style={styles.container}>
      <Text>News Content</Text>
    </View>
  );
}
