import React, { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const colors = [
  { name: "red", color: "#FF0000" },
  { name: "green", color: "#00FF00" },
  { name: "blue", color: "#0000FF" },
  { name: "yellow", color: "#FFFF00" },
  { name: "purple", color: "#800080" },
  { name: "orange", color: "#FFA500" },
  { name: "pink", color: "#FFC0CB" },
  { name: "brown", color: "#964B00" },
  { name: "gray", color: "#808080" },
  { name: "black", color: "#000000" },
  { name: "white", color: "#FFFFFF" },
];

const UseStateHook = () => {
  const [count, setCount] = useState(0);

  //   const [color, setColor] = useState("red");

  //   For count update
  const increment = () => {
    if (count < colors.length - 1) {
      setCount(count + 1);
    } else {
      setCount(0);
    }
  };

  const decrement = () => {
    setCount(count - 1);
  };

  //  For color update

  const updateColor = () => {
    if (count < colors.length - 1) {
      setCount(count + 1);
    } else {
      setCount(0);
    }
  };

  return (
    <View>
      <View style={[styles.box, { backgroundColor: colors[count].color }]} />
      <Text>
        {count}======
        {colors[count]?.name}
      </Text>
      <View style={{ flexDirection: "column", gap: 10 }}>
        <Button title="Increment" onPress={increment} />
        <Button title="Decrement" onPress={decrement} disabled={count === 0} />
        <Button title="Update Color" onPress={updateColor} />
      </View>
    </View>
  );
};

export default UseStateHook;
const styles = StyleSheet.create({
  box: {
    width: 100,
    height: 100,
    backgroundColor: "#fff",
    elevation: 2,
    borderRadius: 10,
    marginLeft: 20,
  },
});
