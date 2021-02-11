import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import { Feather } from "@expo/vector-icons";

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

  const PopUp = ({ style }) => {
    return (
      <View style={[styles.popup, { ...style }]}>
        <Text style={styles.popupItem}>Edit</Text>
        <Text style={styles.popupItem}>Delete</Text>
      </View>
    );
  };

  const ListItem = (props) => {
    const { item } = props.item;
    const [click, setClick] = useState(false);

    return (
      <View style={styles.listItemWrap}>
        <Text style={styles.listItemTitle}>{item.title}</Text>
        <TouchableOpacity onPress={() => togglePop(item.id, !click)}>
          <Feather name="more-vertical" size={16} />
        </TouchableOpacity>
      </View>
    );
  };

  const renderListItem = (item) => {
    return (
      <View>
        <ListItem item={item} />
        {popState.shown && popState.id == item.item.id && (
          <PopUp />
        )}
      </View>
    );
  };

  const listKeyExtractor = (item) => item.id.toString(); 

  return (
    <View style={{ height: "100%" }}>
      <TouchableWithoutFeedback onPress={() => togglePop(null, false)}>
        <View style={styles.container}>
          <FlatList
            data={LIST_DATA}
            CellRendererComponent={renderListItem}
            keyExtractor={listKeyExtractor}
            // contentContainerStyle={{ paddingHorizontal: 30, flex: 1, }}
            style={{
              // flexDirection: "column-reverse",
              paddingHorizontal: 30,
              flex: 1,
            }}
            // inverted
          />
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 80,
    flex: 1,
  },
  listItemWrap: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    paddingVertical: 20,
    paddingHorizontal: 15,
    backgroundColor: "white",
    marginBottom: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  popup: {
    backgroundColor: "white",
    paddingVertical: 10,
    paddingHorizontal: 15,
    elevation: 70,
    position: "absolute",
    right: 10,
    bottom: -30,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
  },
  popupItem: {
    fontSize: 14,
    color: "#00000060",
    marginVertical: 5,
  },
  listItemTitle: {
    fontWeight: "500",
    fontSize: 16,
  },
});
