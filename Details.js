import { View, Text, Button } from "react-native";
import React from "react";
import styles from "./styles";

export default function Details({ route, count, dispatch, navigation }) {
  const { content, title, id } = route.params;

  React.useEffect(() => {
    navigation.setOptions({
      title,
      headerRight: () => (
        <Button
          title="Buy"
          onPress={() => dispatch({ type: id })}
          disabled={count[id] === 0}
        />
      ),
    });
  }, [count]);

  return (
    <View style={styles.container}>
      <Text>{content}</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}
