import { View, TextInput, StyleSheet, Text } from "react-native";
import React from "react";

const SearchBar = (props) => {
  return (
    <View style={style.container}>
      <TextInput
        placeholder='Search'
        style={style.input}
        value={props.searchtext}
        onChangeText={(text) =>props.setSearchtext(text)
        
        }
        onSubmitEditing={props.onSubmit}
      />
   
    </View>
  );
};

export default SearchBar;

const style = StyleSheet.create({
  container: {
    margin: 10,
  },
  input: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 10,
    color: "#000",
    borderWidth: 1,
  },
});
