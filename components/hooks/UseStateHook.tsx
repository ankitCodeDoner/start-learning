import React, { useState } from "react";
import { Button, Text, View } from "react-native";

const UseStateHook = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <View>
      <Text>{count}</Text>
      <View style={{ flexDirection: "column", gap: 10 }}>
        <Button title="Increment" onPress={increment} />
        <Button title="Decrement" onPress={decrement} disabled={count === 0} />
      </View>
    </View>
  );
};

export default UseStateHook;
