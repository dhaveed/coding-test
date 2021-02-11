import { Feather, FontAwesome } from "@expo/vector-icons";
import React from "react";
import { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const Checkbox = () => {
  const [checkStatus, setCheckStatus] = useState(false);

  const toggleCheckbox = () => {
    setCheckStatus(!checkStatus);
    console.log(!checkStatus);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => toggleCheckbox()}
        style={{ flexDirection: "row" }}
        activeOpacity={0.6}
      >
        <View style={{ flexDirection: "row", alignItems: "center"}}>
          <FontAwesome name={checkStatus ? "dot-circle-o" : "circle-o"} size={20} />
          <Text style={{ marginLeft: 10 }}>Checkbox is {checkStatus ? "checked" : "unchecked"}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Checkbox;
