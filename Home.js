import { View, Text, Button } from "react-native";
import React from "react";
import styles from "./styles";

export default function Home({ count, navigation }) {
  // const [stock, setStock] = React.useState({
  //   first: 1,
  //   second: 0,
  //   third: 200,
  // });

  // const updateStock = (id) => {
  //   setStock({ ...stock, [id]: stock[id] === 0 ? 0 : stock[id] - 1 });
  // };
  React.useEffect(() => {
    return () => {
      navigation.setOptions({ title: "Home" });
    };
  }, []);

  return (
    <View style={styles.container}>
      {/* <Text>Home Content</Text> */}
      <Button
        style={styles.button}
        title={`First Item (${count.first})`}
        onPress={() =>
          navigation.navigate("Details", {
            id: "first",
            title: "First Item",
            content: "First Item Content",
          })
        }
      />
      <Button
        title={`Second Item (${count.second})`}
        onPress={() =>
          navigation.navigate("Details", {
            id: "second",
            title: "Second Item",
            content: "Second Item Content",
          })
        }
      />
      <Button
        title={`Third Item (${count.third})`}
        onPress={() =>
          navigation.navigate("Details", {
            id: "third",
            title: "Third Item",
            content: "Third Item Content",
          })
        }
      />
    </View>
  );
}
