import { SafeAreaView, View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import moment from "moment";
import * as WebBrowser from 'expo-web-browser';
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
const Article = (props) => {

  const goToSource = () =>{
    WebBrowser.openBrowserAsync(props.url)
  }
  return (
    <Pressable style={style.container} onPress={goToSource}>
      {/* Image Compnent */}
      <Image
        source={{
          uri: props.urlToImage
        }}
        style={style.Image}
      />

      <View style={{padding:10}} />
      {/* title of image */}
      <Text style={style.title}>{props.title}</Text>

      {/* Detail of news */}
      <Text style={style.detail} numberOfLines={2}>
        {props.content}
      </Text>

      <View style={style.tags}>
        {/* We can use nested Text tag in RN for different styling */}
        <Text style={style.heading}>
          By:<Text style={style.value}>{props.author}</Text>
        </Text>
        <Text style={style.date}>
          <Text style={style.value}>{moment(props.publishedAt).format("MMM Do YY")}</Text>
        </Text>
      </View>

      {/*     source */}
      <View style={{ marginTop: 10 }}>
        <Text>
          source: <Text style={style.source}>{props.sourceName}</Text>
        </Text>
      </View>
      <View style={{marginTop: 12 }}/>
    </Pressable>
  );
};

export default Article;

const style = StyleSheet.create({
  container: {
    marginTop:35,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 15,
    elevation: 8,
    // backgroundColor: "grey"
    // alignSelf: "center",
  },
  Image: {
    height: 200,
    width: "100%",
    borderTopLeftRadius: 35,
    borderTopRightRadius:35,
  },
  detail: {
    fontSize: 18,
    fontWeight: "600",
    marginTop: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    marginTop: 10,
  },
  tags: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  heading: {},
  value: {
    fontWeight: "bold",
    fontSize: 15,
  },
  date: {
    fontWeight: "bold",
    color: "#e63946",
    fontSize: 15,
  },
  source: {
    color: "#e63946",
    fontWeight: "bold",
    fontSize: 18,
  },
});
