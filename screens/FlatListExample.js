import React from "react";
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { useState } from "react";

const LIST_DATA = [
  {
    id: 1,
    title: "Item 1",
  },
  {
    id: 2,
    title: "Item 2",
  },
  {
    id: 3,
    title: "Item 3",
  },
  {
    id: 4,
    title: "Item 4",
  },
  {
    id: 5,
    title: "Item 5",
  },
];

export const FlatListExample = () => {
  const [popState, setPopState] = useState({
    id: null,
    shown: false,
  });

  const togglePop = (id, status) => {
    console.log(id, status);
    setPopState({
      id: id,
      shown: status,
    });
  };

  const PopUp = () => {
    return (
      <View style={styles.popup}>
        <Text style={styles.popupItem}>Edit</Text>
        <Text style={styles.popupItem}>Delete</Text>
      </View>
    );
  };

  const ListItem = (props) => {
    const { item } = props.item;
    return (
      <View>
        <View style={[styles.listItemWrap]}>
          <Text style={styles.listItemTitle}>{item.title}</Text>
          <TouchableOpacity onPress={() => togglePop(item.id, !popState.shown)}>
            <Feather name="more-vertical" size={16} />
          </TouchableOpacity>
        {popState.shown && popState.id == item.id && <PopUp />}
        </View>
      </View>
    );
  };

  return (
    <View style={{ }}>
      <TouchableWithoutFeedback
      style={{ borderWidth: 1, }}
      onPress={() => togglePop(null, false)}
    >
      <View style={styles.container}>
        <FlatList
          data={LIST_DATA}
          renderItem={(item) => {
            let zIndex = {
              zIndex: LIST_DATA.length - item.id
            }
            return (
              <View>
                <ListItem item={item} />
              </View>
            );
          }}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={{ paddingHorizontal: 30 }}
        />
      </View>
    </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 80,
  },
  listItemWrap: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    paddingVertical: 15,
    paddingHorizontal: 10,
    backgroundColor: "white",
    marginBottom: 30,
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5, // for the list
  },
  popup: {
    backgroundColor: "white",
    padding: 15,
    elevation: 7,
    position: "absolute",
    right: 0,
    bottom: -60,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
  },
  popupItem: {
    fontSize: 13,
    color: "#00000060",
    marginBottom: 5
  },
  listItemTitle: {
    fontWeight: "500",
    fontSize: 16
  }
});
